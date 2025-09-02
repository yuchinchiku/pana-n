'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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

export default function PageTransitionFog() {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 2000); // ページ遷移後もゆったり表示
    return () => {
      setIsAnimating(true);
      clearTimeout(timer);
    };
  }, [pathname]);

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
          transition={{ duration: 1.5, ease: 'easeOut' }} // exitゆったり
          className="fixed inset-0 z-50 pointer-events-none"
        >
          {/* レイヤー1 */}
          <motion.div
            className="absolute inset-0 scale-[2] md:scale-[1.3]"
            style={{
              ...baseStyle,
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
            }}
            initial={{ opacity: 1, x: isMobile ? '-2%' : '-0.5%' }}
            animate={{ opacity: 0.5, x: isMobile ? '2%' : '0.5%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 15, ease: 'easeInOut' }}
          />

          {/* レイヤー2 */}
          <motion.div
            className="absolute inset-0 scale-[2] md:scale-[1.3]"
            style={{
              ...baseStyle,
              filter: 'blur(8px)',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
            }}
            initial={{ opacity: 1, x: isMobile ? '-2%' : '-0.5%' }}
            animate={{ opacity: 0.3, x: isMobile ? '2%' : '0.5%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 17, ease: 'easeInOut' }}
          />

          {/* レイヤー3（揺らめき） */}
          <motion.div
            className="absolute inset-0 scale-[2] md:scale-[1.3]"
            style={{
              ...baseStyle,
              filter: 'blur(14px)',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
            }}
            initial={{ opacity: 0.2, x: '-1%', y: '-0.5%' }}
            animate={{
              opacity: [0.2, 0.5, 0.3],
              x: ['-1%', '1%', '-1%'],
              y: ['-0.5%', '0.5%', '-0.5%'],
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 12,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          />

          {/* SVG粒子ノイズレイヤー */}
          <motion.div
            className="absolute inset-0 w-full h-full pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <filter id="fogParticles" x="0" y="0" width="100%" height="100%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise">
                  <animate
                    attributeName="baseFrequency"
                    dur="25s"
                    values="0.05;0.06;0.05"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G"/>
              </filter>
              <rect width="100%" height="100%" fill="white" filter="url(#fogParticles)" opacity="0.08"/>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
