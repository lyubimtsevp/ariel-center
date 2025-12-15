import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import { Building2, CreditCard, MapPin, Phone, Mail, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Реквизиты | Ариель",
  description: "Реквизиты ООО Центр раннего развития детей, коррекции речи и поведения Ариель.",
};

export default function RequisitesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-gray-900">Реквизиты</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Полные реквизиты организации
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Наименование */}
          <FadeIn>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Наименование организации</h2>
              </div>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-500 mb-1">Полное наименование</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    Общество с ограниченной ответственностью «Центр раннего развития детей, коррекции речи и поведения «Ариель»
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">Сокращённое наименование</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    ООО «Центр раннего развития детей, коррекции речи и поведения «Ариель»
                  </dd>
                </div>
              </dl>
            </div>
          </FadeIn>

          {/* Юридическая информация */}
          <FadeIn delay={0.1}>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Юридическая информация</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <dt className="text-sm text-gray-500 mb-1">ОГРН</dt>
                  <dd className="text-lg font-mono font-medium text-gray-900">1175476017331</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">ИНН</dt>
                  <dd className="text-lg font-mono font-medium text-gray-900">5404052959</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">КПП</dt>
                  <dd className="text-lg font-mono font-medium text-gray-900">547301001</dd>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Банковские реквизиты */}
          <FadeIn delay={0.2}>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 rounded-xl">
                  <CreditCard className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Банковские реквизиты</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-gray-500 mb-1">Расчётный счёт</dt>
                  <dd className="text-lg font-mono font-medium text-gray-900">40702810844050023807</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">Корреспондентский счёт</dt>
                  <dd className="text-lg font-mono font-medium text-gray-900">30101810500000000641</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">БИК</dt>
                  <dd className="text-lg font-mono font-medium text-gray-900">045004641</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">Банк</dt>
                  <dd className="text-lg font-medium text-gray-900">Сибирский Банк ПАО Сбербанк</dd>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Адреса */}
          <FadeIn delay={0.3}>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Адреса</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-gray-500 mb-1">Юридический адрес</dt>
                  <dd className="text-lg font-medium text-gray-900">630037, г. Новосибирск, ул. Первомайская, 144/2</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">Почтовый адрес</dt>
                  <dd className="text-lg font-medium text-gray-900">630037, г. Новосибирск, ул. Первомайская, 144/2</dd>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Контакты и руководитель */}
          <FadeIn delay={0.4}>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Контакты и руководство</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-gray-500 mb-1">Руководитель</dt>
                  <dd className="text-lg font-medium text-gray-900">Мельцер Юлия Альбертовна</dd>
                  <dd className="text-sm text-gray-500">Директор, действует на основании Устава</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">Телефон</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    <a href="tel:+79139010780" className="text-primary hover:underline">+7 (913) 901-07-80</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">Email</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    <a href="mailto:829892@gmail.com" className="text-primary hover:underline">829892@gmail.com</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">Сайт</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    <a href="https://autism54.ru" className="text-primary hover:underline">autism54.ru</a>
                  </dd>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
