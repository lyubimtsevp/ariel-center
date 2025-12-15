'use client';

import { motion } from 'framer-motion';
import { Phone, Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-[#2D6A7C]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4A90A4] to-[#2D6A7C]" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Запись на консультацию
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Наши специалисты помогут определить программу реабилитации и ответят на все вопросы.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Телефон</div>
                  <a href="tel:+73833195955" className="font-semibold hover:underline">
                    +7 (383) 319-59-55
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Режим работы</div>
                  <div className="font-semibold">Пн-Пт: 9:00-17:00</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Адрес</div>
                  <div className="font-semibold">ул. Первомайская 144/2</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-white/70">Запись</div>
                  <div className="font-semibold">Заблаговременно</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<Phone className="w-5 h-5" />}
                onClick={() => window.location.href = 'tel:+73833195955'}
              >
                Позвонить сейчас
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 hover:border-white"
                onClick={() => window.location.href = 'https://t.me/ariel_center'}
              >
                Написать в Telegram
              </Button>
            </div>
          </motion.div>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Оставить заявку
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ваше имя *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-gray-900 bg-white"
                  placeholder="Как к вам обращаться?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-gray-900 bg-white"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Что вас интересует?
                </label>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition text-gray-900 bg-white">
                  <option value="">Выберите услугу</option>
                  <option value="diagnostic">Диагностика</option>
                  <option value="intensive">Интенсив</option>
                  <option value="consultation">Консультация</option>
                  <option value="other">Другое</option>
                </select>
              </div>
              <Button variant="primary" size="lg" className="w-full">
                Отправить заявку
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="/documents/privacy" className="text-primary hover:underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
