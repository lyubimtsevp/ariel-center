'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { CheckCircle, AlertCircle, FileText, Shield, Calendar, User, Phone, Mail, ArrowLeft, Send } from 'lucide-react';
import offerData from '@/data/offer-intensive.json';

export default function BookingIntensivePage() {
  const [step, setStep] = useState<'offer' | 'form'>('offer');
  const [agreePersonalData, setAgreePersonalData] = useState(false);
  const [agreeOffer, setAgreeOffer] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    childName: '',
    childBirthDate: '',
    parentName: '',
    phone: '',
    email: '',
    desiredDates: '',
    comment: ''
  });

  const canProceed = agreePersonalData && agreeOffer;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceed) return;

    setIsSubmitting(true);
    setError('');

    try {
      // Здесь будет отправка на сервер/email
      // Пока имитируем успешную отправку
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
    } catch (err) {
      setError('Ошибка отправки. Попробуйте позже или позвоните нам.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center p-4">
        <FadeIn>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Заявка отправлена!</h1>
            <p className="text-gray-600 mb-6">
              Мы получили вашу заявку на интенсив. Наш специалист свяжется с вами в ближайшее время для подтверждения бронирования.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A90A4] text-white rounded-lg hover:bg-[#3b7d8f] transition"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться на главную
            </Link>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6 transition">
            <ArrowLeft className="w-4 h-4" />
            Вернуться на главную
          </Link>
        </FadeIn>

        {/* Заголовок */}
        <FadeIn delay={0.1}>
          <div className="bg-gradient-to-r from-[#4A90A4] to-[#3b7d8f] rounded-2xl p-6 md:p-8 text-white mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-bold">Запись на интенсив</h1>
            </div>
            <p className="text-white/90">
              Для записи на программу интенсивной реабилитации, пожалуйста, ознакомьтесь с договором публичной оферты и заполните форму.
            </p>
          </div>
        </FadeIn>

        {/* Шаги */}
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-4 mb-8">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${step === 'offer' ? 'bg-[#4A90A4] text-white' : 'bg-gray-200 text-gray-600'}`}>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">1</span>
              <span className="hidden sm:inline">Договор оферты</span>
            </div>
            <div className="h-px flex-1 bg-gray-300"></div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${step === 'form' ? 'bg-[#4A90A4] text-white' : 'bg-gray-200 text-gray-600'}`}>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">2</span>
              <span className="hidden sm:inline">Заполнение формы</span>
            </div>
          </div>
        </FadeIn>

        {step === 'offer' && (
          <FadeIn delay={0.3}>
            {/* Договор оферты */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#4A90A4]" />
                  <div>
                    <h2 className="font-bold text-gray-800">{offerData.title}</h2>
                    <p className="text-sm text-gray-500">{offerData.subtitle}</p>
                  </div>
                </div>
              </div>
              <div
                className="p-6 prose prose-sm max-w-none max-h-[400px] overflow-y-auto"
                dangerouslySetInnerHTML={{ __html: offerData.content }}
              />
            </div>

            {/* Галочки согласия */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreePersonalData}
                  onChange={(e) => setAgreePersonalData(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-[#4A90A4] rounded border-gray-300 focus:ring-[#4A90A4]"
                />
                <div>
                  <span className="text-gray-800 group-hover:text-[#4A90A4] transition">
                    Я даю согласие на обработку персональных данных
                  </span>
                  <Link href="/documents" className="block text-sm text-[#4A90A4] hover:underline mt-1">
                    <Shield className="w-4 h-4 inline mr-1" />
                    Политика обработки персональных данных
                  </Link>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreeOffer}
                  onChange={(e) => setAgreeOffer(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-[#4A90A4] rounded border-gray-300 focus:ring-[#4A90A4]"
                />
                <div>
                  <span className="text-gray-800 group-hover:text-[#4A90A4] transition">
                    Я ознакомился и согласен с договором публичной оферты
                  </span>
                </div>
              </label>

              <button
                onClick={() => canProceed && setStep('form')}
                disabled={!canProceed}
                className={`w-full py-3 px-6 rounded-xl font-medium transition ${
                  canProceed
                    ? 'bg-[#4A90A4] text-white hover:bg-[#3b7d8f]'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Продолжить к заполнению формы
              </button>

              {!canProceed && (
                <p className="text-sm text-amber-600 text-center flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Необходимо отметить оба пункта
                </p>
              )}
            </div>
          </FadeIn>
        )}

        {step === 'form' && (
          <FadeIn delay={0.3}>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <User className="w-6 h-6 text-[#4A90A4]" />
                Данные для записи
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ФИО ребёнка *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.childName}
                    onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4A90A4] focus:border-transparent"
                    placeholder="Иванов Иван Иванович"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Дата рождения ребёнка *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.childBirthDate}
                    onChange={(e) => setFormData({ ...formData, childBirthDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4A90A4] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ФИО родителя/представителя *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4A90A4] focus:border-transparent"
                    placeholder="Иванова Мария Петровна"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4A90A4] focus:border-transparent"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4A90A4] focus:border-transparent"
                    placeholder="example@mail.ru"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Желаемые даты интенсива
                  </label>
                  <input
                    type="text"
                    value={formData.desiredDates}
                    onChange={(e) => setFormData({ ...formData, desiredDates: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4A90A4] focus:border-transparent"
                    placeholder="Например: июнь 2025, любые даты"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Комментарий / дополнительная информация
                  </label>
                  <textarea
                    rows={3}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#4A90A4] focus:border-transparent resize-none"
                    placeholder="Диагноз, особенности, пожелания..."
                  />
                </div>
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {error}
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setStep('offer')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
                >
                  Назад
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#4A90A4] text-white rounded-xl hover:bg-[#3b7d8f] transition disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Отправить заявку
                    </>
                  )}
                </button>
              </div>
            </form>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
