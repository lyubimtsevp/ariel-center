'use client';

import { motion } from 'framer-motion';
import { LazyMap } from '@/components/ui/LazyMap';
import { Phone, Mail, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Textarea } from '@/components/ui/Input';
import contactsData from '@/data/contacts.json';

export default function ContactsPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Контакты
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {/* Addresses */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Адреса
              </h2>
              <div className="space-y-4">
                {contactsData.addresses.map((address, index) => (
                  <Card key={index} hover={false}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold text-foreground">
                            {address.name}
                          </div>
                          <div className="text-gray-600">
                            {address.address}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Phones */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Телефоны
              </h2>
              <div className="space-y-3">
                {contactsData.phones.map((phone, index) => (
                  <a
                    key={index}
                    href={phone.formatted}
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary group-hover:text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">{phone.number}</div>
                      {phone.note && (
                        <div className="text-sm text-gray-500">{phone.note}</div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Email
              </h2>
              <div className="space-y-3">
                {contactsData.emails.map((email, index) => (
                  <a
                    key={index}
                    href={`mailto:${email.email}`}
                    className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <Mail className="w-5 h-5 text-secondary group-hover:text-white" />
                    </div>
                    <span className="font-semibold">{email.email}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Working hours */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Режим работы
              </h2>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-gray-600">
                  <p>{contactsData.workingHours.weekdays}</p>
                  <p>{contactsData.workingHours.sunday}</p>
                  <p>{contactsData.workingHours.saturday}</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Мы в соцсетях
              </h2>
              <div className="flex gap-3">
                {contactsData.socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    title={social.platform}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="sticky top-32">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Напишите нам
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="Как к вам обращаться?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Опишите ваш вопрос или ситуацию..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button variant="primary" size="lg" className="w-full">
                    Отправить сообщение
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с{' '}
                    <a href="/documents/privacy" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Как нас найти
          </h2>
          <div className="h-96 shadow-lg rounded-2xl">
            <LazyMap />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
