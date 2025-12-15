import { FadeIn } from '@/components/ui/FadeIn';
import { Briefcase, MapPin, Clock, GraduationCap, Heart, Users, Phone, Mail, ExternalLink, Star } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Работа в «Ариель» | Вакансии',
  description: 'Вакансии в Центре коррекции речи и поведения «Ариель». Присоединяйтесь к нашей команде!',
};

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Работа в «Ариель»</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Медико-педагогический Центр коррекции речи и поведения «Ариель» в Новосибирске является одним из крупнейших учреждений, занимающихся эффективной реабилитацией детей с РАС, УО и прочими ментальными патологиями. 
            </p>
          </div>
        </FadeIn>

        {/* О центре */}
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">О нашем центре</h2>
            <p className="text-gray-600 mb-4">
              Центр придерживается принципов доказательной медицины и педагогики и использует в своем арсенале исключительно доказанные, проверенные и рекомендуемые мировым сообществом врачей и педагогов методики.
            </p>
            <p className="text-gray-600">
              Сотрудники требуются как в головной офис на Первомайской, так и в подразделение на Карла Маркса.
            </p>
          </div>
        </FadeIn>

        {/* Вакансия */}
        <FadeIn delay={0.2}>
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-[#4A90A4] to-[#3b7d8f] p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-8 h-8" />
                <h2 className="text-2xl font-bold">Педагог-психолог</h2>
              </div>
              <p className="text-white/80">Требуются специалисты для работы с детьми</p>
            </div>

            <div className="p-6 md:p-8">
              {/* Место работы */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#4A90A4]" />
                  Место работы
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A90A4] font-bold">1)</span>
                    головной офис — ул. Первомайская 144/2
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4A90A4] font-bold">2)</span>
                    подразделение — Проспект К. Маркса 24а (1 минута ходьбы от метро Студенческая)
                  </li>
                </ul>
              </div>

              {/* Обязанности */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#4A90A4]" />
                  Обязанности
                </h3>
                <p className="text-gray-600">
                  Индивидуальная работа с детьми с ОВЗ (главным образом ЗПРР и РАС) по методике прикладного анализа поведения (АВА-терапия). 
                  <span className="text-[#4A90A4] font-medium"> Производим обучение за счёт работодателя.</span>
                </p>
              </div>

              {/* Требования */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#4A90A4]" />
                  Требования
                </h3>
                <p className="text-gray-600">
                  Среднее или высшее образование в области педагогики / психологии / логопедии
                </p>
              </div>

              {/* Условия */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-[#4A90A4]" />
                  Условия
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    Полный рабочий день с 9:00 до 17:00
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-green-500">✓</span>
                    Обучение за счёт работодателя
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-green-500">✓</span>
                    Официальное трудоустройство
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-green-500">✓</span>
                    Оплачиваемый отпуск
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-green-500">✓</span>
                    Дружный коллектив
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-green-500">✓</span>
                    Корпоративный ДМС (при выслуге)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-4 h-4 text-green-500">✓</span>
                    Карьерный и профессиональный рост
                  </li>
                </ul>
              </div>

              {/* Зарплата */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <p className="text-green-800 font-medium">
                  💰 Заработная плата: <strong>30 000 — 70 000 рублей и выше</strong>
                </p>
                <p className="text-green-700 text-sm mt-1">
                  Зависит от образования и опыта работы
                </p>
              </div>

              {/* Кнопки */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+73833195955"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-[#4A90A4] text-white rounded-xl hover:bg-[#3b7d8f] transition font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Позвонить
                </a>
                <a
                  href="mailto:829892@gmail.com?subject=Отклик на вакансию педагог-психолог"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-[#4A90A4] text-[#4A90A4] rounded-xl hover:bg-[#4A90A4]/5 transition font-medium"
                >
                  <Mail className="w-5 h-5" />
                  Написать
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Отзывы 2GIS */}
        <FadeIn delay={0.3}>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              <span className="text-2xl font-bold text-gray-800">4.9</span>
              <span className="text-gray-500">на 2ГИС</span>
            </div>
            <p className="text-gray-600 mb-4">Посмотрите отзывы о нас от сотрудников и клиентов</p>
            <a
              href="https://2gis.ru/novosibirsk/firm/70000001026831317"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#4A90A4] hover:underline font-medium"
            >
              Открыть в 2ГИС
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        {/* Назад */}
        <FadeIn delay={0.4}>
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#4A90A4] transition-colors"
            >
              ← Вернуться на главную
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
