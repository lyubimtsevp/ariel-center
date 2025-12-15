'use client';

import { motion } from 'framer-motion';
import { Phone, Info, CreditCard, Receipt } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import pricesData from '@/data/prices.json';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

export default function PricesPage() {
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
            Цены на услуги
          </h1>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">
              <Receipt className="w-4 h-4" />
              Возможен налоговый вычет
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
              <CreditCard className="w-4 h-4" />
              Оплата материнским капиталом
            </div>
          </div>
        </motion.div>

        {/* Programs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
            Программы
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pricesData.programs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-2 hover:border-[var(--primary)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-[var(--text-secondary)] mb-4">
                        {item.description}
                      </p>
                    )}
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-[var(--primary)]">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                    {item.futurePrice && (
                      <div className="text-sm text-[var(--text-muted)] mb-4">
                        {item.futurePrice.map((fp, i) => (
                          <div key={i}>С {fp.date}: {formatPrice(fp.price)}</div>
                        ))}
                      </div>
                    )}
                    {item.name.toLowerCase().includes('интенсив') ? (
                      <Link href="/booking/intensive">
                        <Button variant="primary" className="w-full">
                          Записаться на интенсив
                        </Button>
                      </Link>
                    ) : (
                      <Link href="/contacts">
                        <Button variant="primary" className="w-full">
                          Записаться
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Main services */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
            Основные услуги
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-[var(--border)]">
                {pricesData.mainServices.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className="flex items-center justify-between p-4 hover:bg-[var(--surface-hover)] transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-[var(--foreground)]">
                        {item.name}
                      </div>
                      {item.code && (
                        <div className="text-xs text-[var(--text-muted)]">
                          {item.code}
                        </div>
                      )}
                      {item.note && (
                        <div className="text-xs text-[var(--text-secondary)] flex items-center gap-1 mt-1">
                          <Info className="w-3 h-3" />
                          {item.note}
                        </div>
                      )}
                    </div>
                    <span className="font-bold text-[var(--primary)]">
                      {formatPrice(item.price)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Neurology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
            Неврология и диагностика
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-[var(--border)]">
                {pricesData.neurology.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 hover:bg-[var(--surface-hover)] transition-colors"
                  >
                    <div>
                      <div className="font-medium text-[var(--foreground)]">
                        {item.name}
                      </div>
                      {item.code && (
                        <div className="text-xs text-[var(--text-muted)]">{item.code}</div>
                      )}
                    </div>
                    <span className="font-bold text-[var(--primary)]">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Psychology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
            Психологическое консультирование
          </h2>
          <Card>
            <CardContent className="p-0">
              <div className="divide-y divide-[var(--border)]">
                {pricesData.psychology.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 hover:bg-[var(--surface-hover)] transition-colors"
                  >
                    <div>
                      <div className="font-medium text-[var(--foreground)]">
                        {item.name}
                      </div>
                      {item.code && (
                        <div className="text-xs text-[var(--text-muted)]">{item.code}</div>
                      )}
                    </div>
                    <span className="font-bold text-[var(--primary)]">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Booking info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--secondary)]/10 rounded-2xl p-6 border-2 border-[var(--secondary)]/20"
        >
          <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
            Услуга бронирования
          </h3>
          <p className="text-[var(--text-secondary)] mb-4">
            {pricesData.bookingFee.description}. Стоимость: <strong>{formatPrice(pricesData.bookingFee.amount)}</strong>
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            {pricesData.bookingFee.note}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <p className="text-[var(--text-secondary)] mb-4">
            Запись на консультацию
          </p>
          <Button
            variant="primary"
            size="lg"
            leftIcon={<Phone className="w-5 h-5" />}
            onClick={() => window.location.href = 'tel:+73833195955'}
          >
            +7 (383) 319-59-55
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
