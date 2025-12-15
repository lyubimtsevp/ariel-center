'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';

export default function CartPage() {
    const { items, removeItem, updateQuantity, clearCart, getTotalPrice } = useCartStore();
    const totalPrice = getTotalPrice();

    const handleSubmitOrder = () => {
        const itemsList = items.map(item => `- ${item.name} x${item.quantity} = ${formatPrice(item.price * item.quantity)}`).join('\n');
        const subject = encodeURIComponent('Заявка на услуги - Ариель Центр');
        const body = encodeURIComponent(`Здравствуйте!\n\nХочу оформить заявку на следующие услуги:\n\n${itemsList}\n\nИтого: ${formatPrice(totalPrice)}\n\nПрошу связаться со мной для подтверждения.\n\nС уважением.`);
        window.location.href = `mailto:829892@gmail.com?subject=${subject}&body=${body}`;
    };

    if (items.length === 0) {
        return (
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <ShoppingCart className="w-24 h-24 text-[var(--text-muted)] mx-auto mb-6" />
                        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-4">
                            Корзина пуста
                        </h1>
                        <p className="text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                            Добавьте услуги из нашего каталога, чтобы оформить заявку
                        </p>
                        <Link href="/prices">
                            <Button variant="primary" leftIcon={<ArrowLeft className="w-4 h-4" />}>
                                Перейти к ценам
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between mb-8"
                >
                    <h1 className="text-3xl font-bold text-[var(--foreground)]">
                        Корзина
                    </h1>
                    <Button
                        variant="ghost"
                        className="text-[var(--error)]"
                        onClick={clearCart}
                    >
                        Очистить корзину
                    </Button>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card hover={false}>
                                    <CardContent className="p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-[var(--foreground)]">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm text-[var(--text-secondary)]">
                                                    {formatPrice(item.price)} за единицу
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 rounded-lg bg-[var(--surface-hover)] flex items-center justify-center hover:bg-[var(--border)] transition-colors"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-8 text-center font-semibold">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 rounded-lg bg-[var(--surface-hover)] flex items-center justify-center hover:bg-[var(--border)] transition-colors"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>

                                            <div className="text-right">
                                                <div className="font-bold text-[var(--primary)]">
                                                    {formatPrice(item.price * item.quantity)}
                                                </div>
                                            </div>

                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="p-2 text-[var(--error)] hover:bg-[var(--error)]/10 rounded-lg transition-colors"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Order summary */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="sticky top-32"
                        >
                            <Card hover={false}>
                                <CardContent className="p-6">
                                    <h2 className="text-xl font-bold text-[var(--foreground)] mb-6">
                                        Итого
                                    </h2>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-[var(--text-secondary)]">
                                            <span>Услуги ({items.length})</span>
                                            <span>{formatPrice(totalPrice)}</span>
                                        </div>
                                        <div className="border-t border-[var(--border)] pt-3 flex justify-between">
                                            <span className="font-bold text-[var(--foreground)]">К оплате</span>
                                            <span className="text-xl font-bold text-[var(--primary)]">
                                                {formatPrice(totalPrice)}
                                            </span>
                                        </div>
                                    </div>

                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="w-full mb-4"
                                        leftIcon={<CreditCard className="w-5 h-5" />}
                                        onClick={handleSubmitOrder}
                                    >
                                        Оформить заявку
                                    </Button>

                                    <p className="text-xs text-[var(--text-muted)] text-center">
                                        После оформления заявки с вами свяжется администратор для подтверждения
                                    </p>
                                </CardContent>
                            </Card>

                            <div className="mt-4 p-4 bg-[var(--success)]/10 rounded-xl">
                                <p className="text-sm text-[var(--success)]">
                                    ✓ Возможен налоговый вычет
                                </p>
                                <p className="text-sm text-[var(--success)]">
                                    ✓ Оплата материнским капиталом
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
