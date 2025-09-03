'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type PageTransitionFogProps = {
  setShowHeroText?: (v: boolean) => void;
};

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

export default function PageTransitionFog({ setShowHeroText }: PageTransitionFogProps) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);
  const isMobile = useIsMobile();

  // ===== スクロールロック関数 =====
  const lockScroll = () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overscrollBehavior = 'none';
    document.body.style.overscrollBehavior = 'none';
    window.scrollTo(0, 0);

    // イベントでのスクロールも禁止
    const prevent = (e: Event) => e.preventDefault();
    window.addEventListener('wheel', prevent, { passive: false });
    window.addEventListener('touchmove', prevent, { passive: false });
    return () => {
      window.removeEventListener('wheel', prevent);
      window.removeEventListener('touchmove', prevent);
    };
  };

  const unlockScroll = () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.documentElement.style.overscrollBehavior = '';
    document.body.style.overscrollBehavior = '';
  };

  // ===== ページ遷移アニメーション制御 =====
  useEffect(() => {
  const cleanup = lockScroll(); // ロック開始
  let unlockTimer: NodeJS.Timeout;

  // Fog の表示時間（= アニメーション時間）
  const timer = setTimeout(() => {
    setIsAnimating(false);
    setShowHeroText?.(true);

    // fog の exit アニメーション (1.5s) が終わった後に解除
    unlockTimer = setTimeout(() => {
      unlockScroll();
      cleanup?.();
    }, 1500);
  }, 2000); // fog 表示時間

  return () => {
    clearTimeout(timer);
    clearTimeout(unlockTimer);
    setIsAnimating(true);
    setShowHeroText?.(false);
    unlockScroll();
    cleanup?.();
  };
}, [pathname, setShowHeroText]);


  const baseStyle = {
    backgroundImage: 'url(/images/common/bg-fog-l.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
  };

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="fixed inset-0 z-50 pointer-events-none"
        >
          {/* レイヤー1 */}
          <motion.div
            className="absolute inset-0 scale-[2] md:scale-[1.3]"
            style={{ ...baseStyle, backgroundColor: 'rgba(255,255,255,0.08)' }}
            initial={{ opacity: 1, x: isMobile ? '-5%' : '-1%' }}
            animate={{ opacity: 0.5, x: isMobile ? '5%' : '1%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 12, ease: 'easeInOut' }}
          />
          {/* レイヤー2 */}
          <motion.div
            className="absolute inset-0 scale-[2] md:scale-[1.3]"
            style={{ ...baseStyle, filter: 'blur(8px)', backgroundColor: 'rgba(255,255,255,0.05)' }}
            initial={{ opacity: 1, x: isMobile ? '-5%' : '-1%' }}
            animate={{ opacity: 0.3, x: isMobile ? '5%' : '1%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 15, ease: 'easeInOut' }}
          />
          {/* レイヤー3（揺らめき） */}
          <motion.div
            className="absolute inset-0 scale-[2] md:scale-[1.3]"
            style={{ ...baseStyle, filter: 'blur(14px)', backgroundColor: 'rgba(255,255,255,0.03)' }}
            initial={{ opacity: 0.2, x: '-2%', y: '-1%' }}
            animate={{
              opacity: [0.2, 0.5, 0.3],
              x: ['-2%', '2%', '-2%'],
              y: ['-1%', '1%', '-1%'],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 14,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
