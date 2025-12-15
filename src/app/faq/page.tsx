'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, Phone, HelpCircle } from 'lucide-react';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import faqData from '@/data/faq.json';
import { cn } from '@/lib/utils';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaq = faqData.faq.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[var(--foreground)] mb-4">
            Частые вопросы
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            Мы собрали ответы на самые частые вопросы от родителей. 
            Если не нашли ответ — свяжитесь с нами!
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Поиск по вопросам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-[var(--border)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 outline-none transition"
            />
          </div>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaq.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <HelpCircle className="w-16 h-16 text-[var(--text-muted)] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                Ничего не найдено
              </h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Попробуйте изменить поисковый запрос или свяжитесь с нами напрямую
              </p>
              <Button
                variant="primary"
                leftIcon={<Phone className="w-4 h-4" />}
                onClick={() => window.location.href = 'tel:+73833195955'}
              >
                Позвонить
              </Button>
            </motion.div>
          ) : (
            filteredFaq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                className={cn(
                  'rounded-2xl border-2 transition-all duration-200',
                  openIndex === index
                    ? 'border-[var(--primary)] bg-[var(--primary)]/5'
                    : 'border-[var(--border)] bg-white hover:border-[var(--primary)]/50'
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4"
                >
                  <span className="font-semibold text-[var(--foreground)]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 flex-shrink-0 text-[var(--primary)] transition-transform duration-200',
                      openIndex === index && 'rotate-180'
                    )}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-[var(--text-secondary)] whitespace-pre-line">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 bg-[var(--surface-hover)] rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Остались вопросы?
          </h2>
          <p className="text-[var(--text-secondary)] mb-6 max-w-lg mx-auto">
            Мы с радостью ответим на все ваши вопросы по телефону, 
            в WhatsApp или по электронной почте
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              leftIcon={<Phone className="w-4 h-4" />}
              onClick={() => window.location.href = 'tel:+73833195955'}
            >
              +7 (383) 319-59-55
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = 'https://wa.me/79039365955'}
            >
              Написать в WhatsApp
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

