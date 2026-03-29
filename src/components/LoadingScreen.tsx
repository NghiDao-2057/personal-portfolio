"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] bg-[#030712] flex items-center justify-center"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-2xl md:text-4xl font-extrabold gradient-text mb-4 px-4"
            >
              Đào Nguyễn Uyển Nghi
            </motion.h1>

            {/* Animated bar */}
            <div className="w-48 h-0.5 bg-white/10 rounded-full mx-auto overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: 1, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
