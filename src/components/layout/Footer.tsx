'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Heart, ExternalLink, Shield, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navigation = {
  services: [
    { name: 'Диагностика', href: '/services?category=medical' },
    { name: 'Интенсив', href: '/services?category=medical' },
    { name: 'Педагогические услуги', href: '/services?category=education' },
    { name: 'Невролог', href: '/services?category=medical' },
    { name: 'Все услуги', href: '/services' },
  ],
  company: [
    { name: 'О центре', href: '/about' },
    { name: 'Специалисты', href: '/specialists' },
    { name: 'Цены', href: '/prices' },
    { name: 'Документы', href: '/documents' },
    { name: 'Контакты', href: '/contacts' },
  ],
  social: [
    { name: 'ВКонтакте', href: 'https://vk.com/childpsychiatry', icon: 'vk' },
    { name: 'Одноклассники', href: 'https://ok.ru/autism54', icon: 'ok' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white border-t border-gray-800">
      {/* Main footer */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white border border-white/10">
                 <Image
                   src="/images/ui/logo.jpg"
                   alt="Ариель Лого"
                   fill
                   className="object-cover"
                 />
              </div>
              <div>
                <div className="font-bold text-xl text-white group-hover:text-[#4A90A4] transition-colors">Центр «Ариель»</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">Коррекция речи и поведения</div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Одна из крупнейших негосударственных реабилитационных организаций в РФ. 
              Мы помогаем детям с РАС и ЗПРР обрести полноценную жизнь, используя принципы доказательной медицины.
            </p>

            <div className="space-y-5">
              <div className="flex flex-col gap-2">
                 <a href="tel:+73833195955" className="flex items-center gap-3 text-gray-300 hover:text-white transition group">
                    <div className="w-8 h-8 rounded-full bg-[#4A90A4]/10 flex items-center justify-center group-hover:bg-[#4A90A4] transition-colors">
                      <Phone className="w-4 h-4 text-[#4A90A4] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-[#4A90A4] transition-colors">+7 (383) 319-59-55</div>
                      <div className="text-xs text-gray-500">Основной</div>
                    </div>
                 </a>
                 <a href="tel:+73832551255" className="flex items-center gap-3 text-gray-300 hover:text-white transition group pl-11">
                    <div className="font-medium group-hover:text-[#4A90A4] transition-colors">+7 (383) 255-12-55</div>
                 </a>
              </div>

              <a href="mailto:829892@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition group">
                <div className="w-8 h-8 rounded-full bg-[#4A90A4]/10 flex items-center justify-center group-hover:bg-[#4A90A4] transition-colors">
                  <Mail className="w-4 h-4 text-[#4A90A4] group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium group-hover:text-[#4A90A4] transition-colors">829892@gmail.com</span>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-[#4A90A4]/10 flex items-center justify-center mt-1 shrink-0">
                  <MapPin className="w-4 h-4 text-[#4A90A4]" />
                </div>
                <div className="text-sm">
                  <span className="block text-white font-medium mb-1">г. Новосибирск</span>
                  <span className="block text-gray-400">ул. Первомайская 144/2</span>
                  <span className="block text-gray-400">Филиал: пр. Карла Маркса 24а</span>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 font-heading">Услуги</h3>
            <ul className="space-y-4">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#4A90A4] transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 font-heading">О центре</h3>
            <ul className="space-y-4">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-[#4A90A4] transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Booking Button */}
            <div className="mt-8 pt-6 border-t border-gray-700">
               <Link href="/booking/confirm">
                <Button variant="outline" className="w-full border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs h-auto py-3 whitespace-normal flex items-center justify-center gap-2 group">
                   <CheckCircle className="w-4 h-4 shrink-0 text-green-400 group-hover:text-green-300" />
                   <span>Подтвердить бронирование</span>
                </Button>
              </Link>
              <p className="text-[10px] text-gray-500 mt-2 text-center leading-tight">
                Отправка чека об оплате и данных
              </p>
            </div>
          </div>

          {/* Social & Documents */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-6 font-heading">Документы</h3>
            <ul className="space-y-4 mb-8">
               <li>
                  <Link href="/documents" className="text-gray-400 hover:text-[#4A90A4] transition-colors text-sm flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Лицензии
                  </Link>
               </li>
               <li>
                  <Link href="/documents" className="text-gray-400 hover:text-[#4A90A4] transition-colors text-sm flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Политика конфиденциальности
                  </Link>
               </li>
               <li>
                  <Link href="/documents" className="text-gray-400 hover:text-[#4A90A4] transition-colors text-sm flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Договор оферты
                  </Link>
               </li>
            </ul>

            <h3 className="text-lg font-bold text-white mb-4 font-heading">Мы в соцсетях</h3>
            <div className="flex gap-3">
               {/* VK Icon */}
               <a href="https://vk.com/childpsychiatry" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#0077FF] hover:text-white transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M15.684 0H8.316C1.592 0 0 1.63 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.63 22.408 0 15.684 0zm3.692 17.514c-.066.136-.264.266-.528.266a.666.666 0 0 1-.362-.124c-2.314-1.632-3.158-1.748-3.694-1.748-.686 0-.84.218-.84.664v1.392c0 .324-.1.492-.852.492-4.144 0-6.954-2.824-9.378-7.986-.062-.132 0-.276.246-.276h2.246c.27 0 .422.128.536.438 1.356 3.652 3.064 4.38 3.554 4.38.2 0 .31-.086.31-.476V11.21c-.04-.848-.482-1.002-.958-1.076-.198-.032-.126-.356.126-.492.356-.188.948-.27 1.614-.27.618 0 .824.13.924.51.054.21.08.82.08 1.48v2.174c0 .316.14.428.396.428.246 0 .668-.13 1.696-1.844.22-.366.382-.646.496-.838.096-.168.272-.27.49-.27h2.25c.316 0 .462.162.382.434-.396 1.354-2.184 3.53-2.33 3.738-.288.396-.34.562 0 .976 1.054 1.282 2.372 2.14 2.56 2.334.204.216.27.414.154.678z"/></svg>
               </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} ООО «Центр раннего развития детей, коррекции речи и поведения «Ариель».
              </p>
              <div className="mt-2 text-xs text-gray-600 flex flex-col md:flex-row gap-2 md:gap-4">
                 <span>Лицензия мед.: №Л041-01125-54/00351482</span>
                 <span className="hidden md:inline text-gray-700">|</span>
                 <span>Лицензия обр.: №Л035-01199-54/00395628</span>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-2">
               {/* Full Version Link for Mobile */}
               <div className="md:hidden">
                  <a href="?full_version=true" className="text-xs text-gray-600 underline hover:text-gray-400">
                    Полная версия сайта
                  </a>
               </div>
               
               <p className="text-sm text-gray-600 flex items-center gap-1">
                 Сделано с <Heart className="w-3 h-3 text-red-500 fill-red-500" />
               </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}