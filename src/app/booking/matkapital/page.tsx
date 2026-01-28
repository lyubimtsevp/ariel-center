'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { CustomScrollbar } from '@/components/CustomScrollbar';
import { CheckCircle, AlertCircle, FileText, Shield, Calendar, User, Phone, Mail, ArrowLeft, Send, CreditCard, MapPin, Baby, PhoneCall, Upload } from 'lucide-react';
import offerData from '@/data/offer-matkapital.json';

const ADMIN_PHONE = '+7 (383) 255-12-55';

// Компонент для поля даты с placeholder
function DateInput({ value, onChange, placeholder, required, className }: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <input
        type="date"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent ${className || ''}`}
      />
      {!value && !isFocused && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none select-none">
          {placeholder}
        </span>
      )}
    </div>
  );
}

type Step = 'offer' | 'call' | 'payment' | 'form';

export default function BookingMatkapitalPage() {
  const [step, setStep] = useState<Step>('offer');
  const [agreePersonalData, setAgreePersonalData] = useState(false);
  const [agreeOffer, setAgreeOffer] = useState(false);
  const [agreePayment, setAgreePayment] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [paymentFile, setPaymentFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    // Данные ребёнка
    childName: '',
    childBirthDate: '',
    birthCertSeries: '',
    birthCertNumber: '',
    birthCertDate: '',
    // Данные сопровождающего (владельца маткапитала)
    parentName: '',
    passportSeries: '',
    passportNumber: '',
    passportIssuedBy: '',
    passportIssuedDate: '',
    // Адреса
    registrationAddress: '',
    postalAddress: '',
    // Контакты
    phone: '',
    email: '',
    region: '',
    // Маткапитал
    matkapitalSeries: '',
    matkapitalNumber: '',
    matkapitalDate: '',
    // Интенсив
    agreedDates: '',
    isFirstVisit: null as boolean | null,
    hadDiagnostics: null as boolean | null,
    comment: ''
  });

  const canProceed = agreePersonalData && agreeOffer;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPaymentFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canProceed) return;

    setIsSubmitting(true);
    setError('');

    try {
      // Отправляем в API
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'matkapital',
          data: formData,
          paymentFileName: paymentFile?.name
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

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
              Мы получили вашу заявку на интенсив с оплатой материнским капиталом. Наш специалист свяжется с вами для уточнения деталей и оформления документов.
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
          <div className="bg-gradient-to-r from-[#F5A962] to-[#e8994f] rounded-2xl p-6 md:p-8 text-white mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Baby className="w-8 h-8" />
              <h1 className="text-2xl md:text-3xl font-bold">Запись с оплатой маткапиталом</h1>
            </div>
            <p className="text-white/90">
              Для записи с использованием средств материнского капитала необходимо заполнить расширенную форму с документами.
            </p>
          </div>
        </FadeIn>

        {/* Шаги */}
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            <div className={`flex items-center gap-2 px-3 py-2 rounded-full whitespace-nowrap ${step === 'offer' ? 'bg-[#F5A962] text-white' : 'bg-gray-200 text-gray-600'}`}>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">1</span>
              <span className="hidden sm:inline text-sm">Договор оферты</span>
            </div>
            <div className="h-px w-4 flex-1 bg-gray-300"></div>
            <div className={`flex items-center gap-2 px-3 py-2 rounded-full whitespace-nowrap ${step === 'call' ? 'bg-[#F5A962] text-white' : 'bg-gray-200 text-gray-600'}`}>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">2</span>
              <span className="hidden sm:inline text-sm">Согласование дат</span>
            </div>
            <div className="h-px w-4 flex-1 bg-gray-300"></div>
            <div className={`flex items-center gap-2 px-3 py-2 rounded-full whitespace-nowrap ${step === 'payment' ? 'bg-[#F5A962] text-white' : 'bg-gray-200 text-gray-600'}`}>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">3</span>
              <span className="hidden sm:inline text-sm">Оплата брони</span>
            </div>
            <div className="h-px w-4 flex-1 bg-gray-300"></div>
            <div className={`flex items-center gap-2 px-3 py-2 rounded-full whitespace-nowrap ${step === 'form' ? 'bg-[#F5A962] text-white' : 'bg-gray-200 text-gray-600'}`}>
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">4</span>
              <span className="hidden sm:inline text-sm">Заполнение формы</span>
            </div>
          </div>
        </FadeIn>

        {step === 'offer' && (
          <FadeIn delay={0.3}>
            {/* Договор оферты */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#F5A962]" />
                  <div>
                    <h2 className="font-bold text-gray-800">{offerData.title}</h2>
                    <p className="text-sm text-gray-500">{offerData.subtitle}</p>
                  </div>
                </div>
              </div>
              <CustomScrollbar
                maxHeight="400px"
                thumbColor="#F5A962"
                trackColor="#e5e7eb"
                className="p-6 prose prose-sm max-w-none cursor-default"
              >
                <div dangerouslySetInnerHTML={{ __html: offerData.content }} />
              </CustomScrollbar>
            </div>

            {/* Галочки согласия */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={agreePersonalData}
                  onChange={(e) => setAgreePersonalData(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-[#F5A962] rounded border-gray-300 focus:ring-[#F5A962]"
                />
                <div>
                  <span className="text-gray-800 group-hover:text-[#F5A962] transition">
                    Я даю согласие на обработку персональных данных
                  </span>
                  <Link href="/documents" className="block text-sm text-[#F5A962] hover:underline mt-1">
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
                  className="w-5 h-5 mt-0.5 text-[#F5A962] rounded border-gray-300 focus:ring-[#F5A962]"
                />
                <div>
                  <span className="text-gray-800 group-hover:text-[#F5A962] transition">
                    Я ознакомился и согласен с договором публичной оферты
                  </span>
                </div>
              </label>

              <button
                onClick={() => canProceed && setStep('call')}
                disabled={!canProceed}
                className={`w-full py-3 px-6 rounded-xl font-medium transition ${canProceed
                  ? 'bg-[#F5A962] text-white hover:bg-[#e8994f]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
              >
                Продолжить
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

        {step === 'call' && (
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center">
              <div className="w-20 h-20 bg-[#F5A962]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PhoneCall className="w-10 h-10 text-[#F5A962]" />
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">Согласование дат интенсива</h2>

              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Для того, чтобы продолжить бронирование, вам необходимо согласовать даты интенсива с администратором. Пожалуйста, позвоните по указанному ниже телефону.
              </p>

              <a
                href={`tel:+${ADMIN_PHONE.replace(/\D/g, '')}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-xl font-bold rounded-xl transition mb-6"
              >
                <Phone className="w-6 h-6" />
                {ADMIN_PHONE}
              </a>

              <p className="text-sm text-gray-500 mb-6">
                После звонка нажмите кнопку ниже, чтобы продолжить
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setStep('offer')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
                >
                  Назад
                </button>
                <button
                  onClick={() => setStep('payment')}
                  className="px-8 py-3 bg-[#F5A962] text-white rounded-xl hover:bg-[#e8994f] transition font-medium"
                >
                  Я позвонил — продолжить
                </button>
              </div>
            </div>
          </FadeIn>
        )}

        {step === 'payment' && (
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-10 h-10 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Оплата услуги бронирования</h2>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <p className="text-amber-800">
                  Пожалуйста, оплатите услугу бронирования по этому QR-коду в размере <strong>10 000 рублей</strong>. Согласно договору публичной оферты. Данная услуга бронирования не подлежит возврату в случае отмены или неприезда на интенсив по любой причине, кроме инициативы исполнителя.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>В назначении платежа укажите:</strong><br />
                  «Услуга бронирования программы "интенсив" (ФИО ребенка, дата интенсива)»
                </p>
              </div>

              {/* Галочка */}
              <label className="flex items-start gap-3 cursor-pointer group mb-6 p-4 bg-gray-50 rounded-xl">
                <input
                  type="checkbox"
                  checked={agreePayment}
                  onChange={(e) => setAgreePayment(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-[#F5A962] rounded border-gray-300 focus:ring-[#F5A962]"
                />
                <span className="text-gray-800 group-hover:text-[#F5A962] transition font-medium">
                  Я прочитал и понял условия оплаты брони
                </span>
              </label>

              {/* QR-код появляется после галочки */}
              {agreePayment && (
                <FadeIn>
                  <div className="text-center mb-6">
                    <p className="text-gray-600 mb-4">Отсканируйте QR-код для оплаты:</p>
                    <div className="inline-block p-4 bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
                      <Image
                        src="/images/qr-payment.png"
                        alt="QR-код для оплаты"
                        width={250}
                        height={250}
                        className="mx-auto"
                      />
                    </div>
                  </div>

                  {/* Загрузка платёжки */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Upload className="w-4 h-4 inline mr-1" />
                      Прикрепить платёжный документ об оплате услуги бронирования *
                    </label>
                    <div
                      onClick={() => document.getElementById('payment-file-mk')?.click()}
                      className="flex items-center justify-center gap-2 w-full px-4 py-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#F5A962] hover:bg-gray-50 transition select-none"
                    >
                      <input
                        type="file"
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        className="sr-only"
                        id="payment-file-mk"
                      />
                      <Upload className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-600">
                        {paymentFile ? paymentFile.name : 'Выберите файл (изображение или PDF)'}
                      </span>
                    </div>
                    {paymentFile && (
                      <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        Файл выбран: {paymentFile.name}
                      </p>
                    )}
                  </div>
                </FadeIn>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setStep('call')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
                >
                  Назад
                </button>
                <button
                  onClick={() => agreePayment && paymentFile && setStep('form')}
                  disabled={!agreePayment || !paymentFile}
                  className={`px-8 py-3 rounded-xl transition font-medium ${agreePayment && paymentFile
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                >
                  Я оплатил — продолжить
                </button>
              </div>
              {agreePayment && !paymentFile && (
                <p className="text-sm text-amber-600 text-center mt-4 flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Необходимо прикрепить платёжный документ
                </p>
              )}
            </div>
          </FadeIn>
        )}

        {step === 'form' && (
          <FadeIn delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Данные ребёнка */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Baby className="w-6 h-6 text-[#F5A962]" />
                  Данные ребёнка
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">ФИО ребёнка *</label>
                    <input
                      type="text"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                      placeholder="Иванов Иван Иванович"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Дата рождения *</label>
                    <DateInput
                      value={formData.childBirthDate}
                      onChange={(v) => setFormData({ ...formData, childBirthDate: v })}
                      placeholder="Дата рождения"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Свидетельство о рождении *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input
                        type="text"
                        required
                        value={formData.birthCertSeries}
                        onChange={(e) => setFormData({ ...formData, birthCertSeries: e.target.value })}
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                        placeholder="Серия"
                      />
                      <input
                        type="text"
                        required
                        value={formData.birthCertNumber}
                        onChange={(e) => setFormData({ ...formData, birthCertNumber: e.target.value })}
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                        placeholder="Номер"
                      />
                      <DateInput
                        value={formData.birthCertDate}
                        onChange={(v) => setFormData({ ...formData, birthCertDate: v })}
                        placeholder="Дата выдачи"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Данные владельца маткапитала */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-[#F5A962]" />
                  Данные владельца сертификата маткапитала
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">ФИО (на кого оформлен маткапитал) *</label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                      placeholder="Иванова Мария Петровна"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Паспортные данные *</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <input
                        type="text"
                        required
                        value={formData.passportSeries}
                        onChange={(e) => setFormData({ ...formData, passportSeries: e.target.value })}
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                        placeholder="Серия"
                      />
                      <input
                        type="text"
                        required
                        value={formData.passportNumber}
                        onChange={(e) => setFormData({ ...formData, passportNumber: e.target.value })}
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                        placeholder="Номер"
                      />
                      <input
                        type="text"
                        required
                        value={formData.passportIssuedBy}
                        onChange={(e) => setFormData({ ...formData, passportIssuedBy: e.target.value })}
                        className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                        placeholder="Кем выдан"
                      />
                    </div>
                    <div className="mt-3">
                      <DateInput
                        value={formData.passportIssuedDate}
                        onChange={(v) => setFormData({ ...formData, passportIssuedDate: v })}
                        placeholder="Дата выдачи паспорта"
                        required
                        className="w-full md:w-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Адреса */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[#F5A962]" />
                  Адреса
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Адрес прописки *</label>
                    <input
                      type="text"
                      required
                      value={formData.registrationAddress}
                      onChange={(e) => setFormData({ ...formData, registrationAddress: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                      placeholder="630000, г. Новосибирск, ул. Примерная, д. 1, кв. 1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Почтовый адрес (для отправки документов) *</label>
                    <input
                      type="text"
                      required
                      value={formData.postalAddress}
                      onChange={(e) => setFormData({ ...formData, postalAddress: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                      placeholder="630000, г. Новосибирск, ул. Примерная, д. 1, кв. 1"
                    />
                  </div>
                </div>
              </div>

              {/* Контакты */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-[#F5A962]" />
                  Контактные данные
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                      placeholder="example@mail.ru"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Откуда вы (регион, город) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                      placeholder="Например: Москва, Московская область"
                    />
                  </div>
                </div>
              </div>

              {/* Данные маткапитала */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-[#F5A962]" />
                  Данные сертификата материнского капитала
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Серия *</label>
                    <input
                      type="text"
                      required
                      value={formData.matkapitalSeries}
                      onChange={(e) => setFormData({ ...formData, matkapitalSeries: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                      placeholder="МК-..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Номер *</label>
                    <input
                      type="text"
                      required
                      value={formData.matkapitalNumber}
                      onChange={(e) => setFormData({ ...formData, matkapitalNumber: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                      placeholder="1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Дата оформления *</label>
                    <DateInput
                      value={formData.matkapitalDate}
                      onChange={(v) => setFormData({ ...formData, matkapitalDate: v })}
                      placeholder="Дата оформления"
                      required
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  Серию и номер можно посмотреть на Госуслугах
                </p>
              </div>

              {/* Интенсив */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-[#F5A962]" />
                  Информация об интенсиве
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Согласованные даты интенсива *</label>
                    <input
                      type="text"
                      required
                      value={formData.agreedDates}
                      onChange={(e) => setFormData({ ...formData, agreedDates: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent"
                      placeholder="Даты, согласованные с администратором"
                    />
                  </div>

                  {/* Вопросы да/нет */}
                  <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-3">Приезжаете ли вы к нам на интенсив впервые? *</p>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isFirstVisit"
                            checked={formData.isFirstVisit === true}
                            onChange={() => setFormData({ ...formData, isFirstVisit: true })}
                            className="w-4 h-4 text-[#F5A962]"
                            required
                          />
                          <span className="text-gray-700">Да</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="isFirstVisit"
                            checked={formData.isFirstVisit === false}
                            onChange={() => setFormData({ ...formData, isFirstVisit: false })}
                            className="w-4 h-4 text-[#F5A962]"
                          />
                          <span className="text-gray-700">Нет</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-3">Были ли вы у нас на диагностике? *</p>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="hadDiagnostics"
                            checked={formData.hadDiagnostics === true}
                            onChange={() => setFormData({ ...formData, hadDiagnostics: true })}
                            className="w-4 h-4 text-[#F5A962]"
                            required
                          />
                          <span className="text-gray-700">Да</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="hadDiagnostics"
                            checked={formData.hadDiagnostics === false}
                            onChange={() => setFormData({ ...formData, hadDiagnostics: false })}
                            className="w-4 h-4 text-[#F5A962]"
                          />
                          <span className="text-gray-700">Нет</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Комментарий / дополнительная информация</label>
                    <textarea
                      rows={3}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F5A962] focus:border-transparent resize-none"
                      placeholder="Диагноз, особенности, пожелания..."
                    />
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {error}
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => setStep('payment')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition"
                >
                  Назад
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#F5A962] text-white rounded-xl hover:bg-[#e8994f] transition disabled:opacity-50"
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
