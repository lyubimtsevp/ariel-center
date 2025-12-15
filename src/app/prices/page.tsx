'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Phone, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/cart';
import pricesData from '@/data/prices.json';
import { formatPrice } from '@/lib/utils';

export default function PricesPage() {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (name: string, price: number) => {
    addItem({
      id: name.toLowerCase().replace(/\s+/g, '-'),
      name,
      price,
      type: 'service',
    });
  };

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
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Стоимость наших услуг значительно ниже, чем во многих других центрах. 
            Возможен налоговый вычет и оплата материнским капиталом.
          </p>
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
                    <Button
                      variant="primary"
                      className="w-full"
                      leftIcon={<ShoppingCart className="w-4 h-4" />}
                      onClick={() => handleAddToCart(item.name, item.price)}
                    >
                      Добавить в корзину
                    </Button>
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
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-[var(--primary)]">
                        {formatPrice(item.price)}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleAddToCart(item.name, item.price)}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
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
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-[var(--primary)]">
                        {formatPrice(item.price)}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleAddToCart(item.name, item.price)}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
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
                    <div className="flex items-center gap-4">
                      <span className="font-bold text-[var(--primary)]">
                        {formatPrice(item.price)}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleAddToCart(item.name, item.price)}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
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
            Для записи на приём и уточнения информации звоните
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

