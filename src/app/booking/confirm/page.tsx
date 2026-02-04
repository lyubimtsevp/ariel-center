"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, AlertCircle, CheckCircle, Camera, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BookingConfirmPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childDob: "",
    dates: "",
    phone: "",
    email: "",
    housing: "no"
  });

  const [childPhoto, setChildPhoto] = useState<File | null>(null);
  const [childPhotoUrl, setChildPhotoUrl] = useState<string>('');
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setChildPhoto(file);
      setUploadingPhoto(true);
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', 'photo');
        const res = await fetch('/api/upload-booking', { method: 'POST', body: formData });
        const data = await res.json();
        if (data.success) {
          setChildPhotoUrl(data.url);
        } else {
          alert('Ошибка загрузки: ' + data.error);
          setChildPhoto(null);
        }
      } catch (err) {
        alert('Ошибка загрузки файла');
        setChildPhoto(null);
      }
      setUploadingPhoto(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!childPhotoUrl) {
      setError('Необходимо прикрепить фото ребёнка');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'intensive',
          data: {
            parentName: formData.parentName,
            childName: formData.childName,
            childBirthDate: formData.childDob,
            agreedDates: formData.dates,
            phone: formData.phone,
            email: formData.email,
            needsHousing: formData.housing === 'yes'
          },
          childPhotoUrl: childPhotoUrl
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
              Мы получили ваше подтверждение бронирования. Наш специалист свяжется с вами в ближайшее время.
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Подтверждение бронирования</h1>
            <p className="text-gray-600">
              Заполните форму и прикрепите фото ребёнка для подтверждения вашей брони.
            </p>
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ФИО Родителя *</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none border-gray-300"
                    value={formData.parentName}
                    onChange={e => setFormData({...formData, parentName: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">ФИО Ребенка *</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none border-gray-300"
                        value={formData.childName}
                        onChange={e => setFormData({...formData, childName: e.target.value})}
                      />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Дата рождения ребенка *</label>
                      <input
                        required
                        type="text"
                        placeholder="ДД.ММ.ГГГГ"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none border-gray-300"
                        value={formData.childDob}
                        onChange={e => setFormData({...formData, childDob: e.target.value})}
                      />
                   </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Согласованные даты интенсива *</label>
                  <input
                    required
                    type="text"
                    placeholder="Например: Июнь 2025"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none border-gray-300"
                    value={formData.dates}
                    onChange={e => setFormData({...formData, dates: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Телефон *</label>
                      <input
                        required
                        type="tel"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none border-gray-300"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                      />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        required
                        type="email"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none border-gray-300"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                   </div>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Нуждаетесь ли вы в жилье? *</label>
                   <div className="flex gap-4">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="housing"
                          value="yes"
                          checked={formData.housing === 'yes'}
                          onChange={e => setFormData({...formData, housing: e.target.value})}
                        />
                        <span>Да</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="housing"
                          value="no"
                          checked={formData.housing === 'no'}
                          onChange={e => setFormData({...formData, housing: e.target.value})}
                        />
                        <span>Нет</span>
                      </label>
                   </div>
                </div>

                {/* Фото ребёнка */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Camera className="w-4 h-4 inline mr-1" />
                    Фотография ребёнка *
                  </label>
                  <div
                    onClick={() => document.getElementById('child-photo-confirm')?.click()}
                    className="flex items-center justify-center gap-2 w-full px-4 py-4 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#4A90A4] hover:bg-gray-50 transition select-none"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="sr-only"
                      id="child-photo-confirm"
                    />
                    {uploadingPhoto ? (
                      <span className="text-gray-500">Загрузка...</span>
                    ) : (
                      <>
                        <Camera className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">
                          {childPhoto ? childPhoto.name : 'Выберите фото ребёнка (JPG, PNG)'}
                        </span>
                      </>
                    )}
                  </div>
                  {childPhotoUrl && (
                    <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      Фото загружено
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Обычная фотография ребёнка для идентификации</p>
                </div>

                {error && (
                  <div className="bg-red-50 p-4 rounded-lg flex items-start gap-3 text-sm text-red-800 border border-red-100">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p>{error}</p>
                  </div>
                )}

                <Button
                  size="lg"
                  className="w-full h-12 text-lg"
                  disabled={isSubmitting || uploadingPhoto}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 w-5 h-5" />
                      Отправить заявку
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
