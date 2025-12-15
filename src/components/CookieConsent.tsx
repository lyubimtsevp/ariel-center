'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже согласие
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Показываем баннер через небольшую задержку
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 md:p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  Этот сайт использует cookies для улучшения работы. Продолжая использовать сайт, вы соглашаетесь с нашей политикой обработки данных.
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handleAccept}
                  className="px-6 py-2.5 bg-[#4A90A4] text-white rounded-lg hover:bg-[#3b7d8f] transition font-medium text-sm"
                >
                  Принять
                </button>
                <button
                  onClick={handleAccept}
                  className="p-2 text-gray-400 hover:text-gray-600 transition"
                  aria-label="Закрыть"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
