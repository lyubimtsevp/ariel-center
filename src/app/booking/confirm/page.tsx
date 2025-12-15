"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, AlertCircle } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Подтверждение бронирования: ${formData.childName}`;
    const body = `
Здравствуйте!

Направляю информацию для подтверждения бронирования.

Родитель: ${formData.parentName}
Ребенок: ${formData.childName} (ДР: ${formData.childDob})
Даты интенсива: ${formData.dates}
Телефон: ${formData.phone}
Email: ${formData.email}
Нужно жилье: ${formData.housing === 'yes' ? 'Да' : 'Нет'}

Во вложении прикрепляю чек об оплате брони.
    `;

    const mailtoLink = `mailto:829892@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <FadeIn>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Подтверждение бронирования</h1>
            <p className="text-gray-600">
              Заполните форму ниже, чтобы сформировать письмо с данными для подтверждения вашей брони.
              Не забудьте прикрепить файл с чеком (платёжкой) к письму!
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

                <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 text-sm text-blue-800 border border-blue-100">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold mb-1">Важно!</p>
                    <p>
                      После нажатия кнопки откроется ваш почтовый клиент. 
                      Пожалуйста, <b>прикрепите файл с чеком (платёжкой)</b> к письму перед отправкой!
                    </p>
                  </div>
                </div>

                <Button size="lg" className="w-full h-12 text-lg">
                  <Mail className="mr-2 w-5 h-5" />
                  Сформировать письмо
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}