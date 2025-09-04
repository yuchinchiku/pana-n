'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '@/styles/pages/top/hero.scss';

const loadingText = [
  "琉球の想いと癒しをあなたへ。",
  "心のひだに触れ、魂をほぐす",
  "元祖琉球マッサージ、パナ・ン。"
];

export default function LoadingOverlay() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showCircle, setShowCircle] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isSP = window.innerWidth <= 768;

    const textTimer = setTimeout(() => setShowCircle(true), 1000); // 文字が先に出るように短め
    const endTimer = setTimeout(
      () => setLoading(false),
      isSP ? 3000 : 4500 // SPは少し長めに
    );
    return () => {
      clearTimeout(textTimer);
      clearTimeout(endTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[1000] bg-black flex items-center justify-center"
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          {/* 文字は常に表示 */}
          <div className="u-hero-lead u-hero-lead-loading absolute z-20 shippori text-xl text-white lg:text-4xl">
            {loadingText.map((line, i) => (
              <motion.div
                key={i}
                className={`block mb-2 ${
                  i === 1 ? "pl-6 lg:pl-16" : i === 2 ? "pl-12 lg:pl-32" : ""
                }`}
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.08, delayChildren: i * 0.5 }
                  }
                }}
              >
                {line.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
                      visible: { opacity: 1, filter: "blur(0px)", y: 0 }
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            ))}
          </div>

          {/* 光の円は文字の下に置く */}
          {showCircle && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-10"
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 40, opacity: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              <motion.div
                className="w-56 h-56 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)"
                }}
                animate={{
                  scale: [1, 1.05, 0.98, 1],
                  opacity: [1, 0.9, 1, 0.95]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
