'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import faqData from '@/data/faq.json';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayedFaq = faqData.faq.slice(0, 6);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="inline-block text-primary font-semibold mb-4">
              Частые вопросы
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ответы на ваши вопросы
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Мы собрали ответы на самые частые вопросы от родителей. 
              Если вы не нашли ответ — свяжитесь с нами!
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    Остались вопросы?
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Позвоните нам или напишите — мы с радостью поможем!
                  </p>
                  <a 
                    href="tel:+73833195955" 
                    className="text-primary font-semibold hover:underline"
                  >
                    +7 (383) 319-59-55
                  </a>
                </div>
              </div>
            </div>

            <Button variant="outline" rightIcon={<ArrowRight className="w-5 h-5" />}>
              <Link href="/faq">Все вопросы и ответы</Link>
            </Button>
          </motion.div>

          {/* Right side - FAQ list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {displayedFaq.map((item, index) => (
              <div
                key={index}
                className={cn(
                  'rounded-2xl border-2 transition-all duration-200',
                  openIndex === index
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 bg-white hover:border-primary/50'
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-start justify-between gap-4"
                >
                  <span className="font-semibold text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 flex-shrink-0 text-primary transition-transform duration-200',
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
                      <div className="px-6 pb-5 text-gray-600">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
