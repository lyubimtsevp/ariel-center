'use client';

import { motion } from 'framer-motion';
import { Home, Phone, Clock, CheckCircle, MapPin, Users, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import logisticsData from '@/data/logistics.json';

export default function LogisticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4A90A4] to-[#2D6A7C] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
              <Home className="w-5 h-5" />
              <span className="font-medium">Комфортное проживание</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {logisticsData.title}
            </h1>
            <p className="text-xl text-white/90">
              {logisticsData.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {logisticsData.intro}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {logisticsData.mainText}
            </p>
          </div>
        </motion.div>

        {/* Warning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-amber-600" />
              </div>
              <p className="text-amber-800">
                {logisticsData.warning}
              </p>
            </div>
          </div>
        </motion.div>

        {/* About Department */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-[#4A90A4] to-[#3b7d8f] rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">Отдел логистики</h2>
                <p className="text-white/90 leading-relaxed">
                  {logisticsData.description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Преимущества нашего жилья
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {logisticsData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Как это работает
          </h2>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            
            <div className="space-y-6">
              {logisticsData.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-16 h-16 bg-[#4A90A4] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xl relative z-10">
                    {step.step}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                    <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white text-center">
            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-bold mb-2">Стоимость проживания</h2>
            <p className="text-4xl font-bold mb-2">{logisticsData.priceRange}</p>
            <p className="text-white/80">{logisticsData.priceNote}</p>
          </div>
        </motion.div>

        {/* Importance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <p className="text-lg text-blue-800 font-medium">
              {logisticsData.importance}
            </p>
          </div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <p className="text-xl text-gray-600 italic">
            «{logisticsData.note}»
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Связаться с отделом логистики</h2>
            
            <div className="mb-6">
              <p className="font-semibold text-gray-900">{logisticsData.contact.name}</p>
              <p className="text-gray-600">{logisticsData.contact.position}</p>
            </div>

            <Button
              variant="primary"
              size="lg"
              leftIcon={<Phone className="w-5 h-5" />}
              onClick={() => window.location.href = `tel:${logisticsData.contact.phone.replace(/\D/g, '')}`}
            >
              {logisticsData.contact.phone}
            </Button>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>Отдел логистики на связи 24/7</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
