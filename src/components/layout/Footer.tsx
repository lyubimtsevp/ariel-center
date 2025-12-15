'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Heart, ExternalLink, Shield, FileText, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import siteData from '@/data/site.json';

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
};

// Иконки соцсетей
const SocialIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'vk':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M15.684 0H8.316C1.592 0 0 1.63 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.63 22.408 0 15.684 0zm3.692 17.514c-.066.136-.264.266-.528.266a.666.666 0 0 1-.362-.124c-2.314-1.632-3.158-1.748-3.694-1.748-.686 0-.84.218-.84.664v1.392c0 .324-.1.492-.852.492-4.144 0-6.954-2.824-9.378-7.986-.062-.132 0-.276.246-.276h2.246c.27 0 .422.128.536.438 1.356 3.652 3.064 4.38 3.554 4.38.2 0 .31-.086.31-.476V11.21c-.04-.848-.482-1.002-.958-1.076-.198-.032-.126-.356.126-.492.356-.188.948-.27 1.614-.27.618 0 .824.13.924.51.054.21.08.82.08 1.48v2.174c0 .316.14.428.396.428.246 0 .668-.13 1.696-1.844.22-.366.382-.646.496-.838.096-.168.272-.27.49-.27h2.25c.316 0 .462.162.382.434-.396 1.354-2.184 3.53-2.33 3.738-.288.396-.34.562 0 .976 1.054 1.282 2.372 2.14 2.56 2.334.204.216.27.414.154.678z"/>
        </svg>
      );
    case 'telegram':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      );
    case 'whatsapp':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      );
    case 'ok':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M14.505 17.44a11.599 11.599 0 003.6-1.49 1.816 1.816 0 00-1.835-3.134 7.969 7.969 0 01-8.54 0 1.816 1.816 0 10-1.836 3.135 11.6 11.6 0 003.601 1.49l-3.365 3.365a1.816 1.816 0 002.568 2.568L12 20.072l3.302 3.301a1.816 1.816 0 002.568-2.568l-3.365-3.365zM12 12.014a5.98 5.98 0 005.973-5.973A5.98 5.98 0 0012 .068a5.98 5.98 0 00-5.973 5.973A5.98 5.98 0 0012 12.014zm0-8.312a2.34 2.34 0 012.338 2.34A2.34 2.34 0 0112 8.378a2.34 2.34 0 01-2.338-2.338A2.34 2.34 0 0112 3.702z"/>
        </svg>
      );
    case 'youtube':
      return (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    default:
      return <ExternalLink className="w-5 h-5" />;
  }
};

export function Footer() {
  const primaryPhone = siteData.phones[0];
  const secondaryPhones = siteData.phones.slice(1);
  const primaryAddress = siteData.addresses[0];
  const otherAddresses = siteData.addresses.slice(1);

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
                <div className="font-bold text-xl text-white group-hover:text-[#4A90A4] transition-colors">{siteData.name}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide font-medium">{siteData.tagline}</div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              {siteData.description}
            </p>

            <div className="space-y-5">
              <div className="flex flex-col gap-2">
                {primaryPhone && (
                  <a href={`tel:${primaryPhone.number.replace(/\D/g, '')}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition group">
                    <div className="w-8 h-8 rounded-full bg-[#4A90A4]/10 flex items-center justify-center group-hover:bg-[#4A90A4] transition-colors">
                      <Phone className="w-4 h-4 text-[#4A90A4] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="font-medium group-hover:text-[#4A90A4] transition-colors">{primaryPhone.number}</div>
                      <div className="text-xs text-gray-500">{primaryPhone.label}</div>
                    </div>
                  </a>
                )}
                {secondaryPhones.map((phone, index) => (
                  <a key={index} href={`tel:${phone.number.replace(/\D/g, '')}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition group pl-11">
                    <div className="font-medium group-hover:text-[#4A90A4] transition-colors">{phone.number}</div>
                  </a>
                ))}
              </div>

              <a href={`mailto:${siteData.email}`} className="flex items-center gap-3 text-gray-300 hover:text-white transition group">
                <div className="w-8 h-8 rounded-full bg-[#4A90A4]/10 flex items-center justify-center group-hover:bg-[#4A90A4] transition-colors">
                  <Mail className="w-4 h-4 text-[#4A90A4] group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium group-hover:text-[#4A90A4] transition-colors">{siteData.email}</span>
              </a>

              <div className="flex items-start gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-[#4A90A4]/10 flex items-center justify-center mt-1 shrink-0">
                  <MapPin className="w-4 h-4 text-[#4A90A4]" />
                </div>
                <div className="text-sm">
                  {primaryAddress && (
                    <>
                      <span className="block text-white font-medium mb-1">{primaryAddress.city}</span>
                      <span className="block text-gray-400">{primaryAddress.street}</span>
                    </>
                  )}
                  {otherAddresses.map((addr, index) => (
                    <span key={index} className="block text-gray-400">{addr.label}: {addr.street}</span>
                  ))}
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

            {siteData.socials.length > 0 && (
              <>
                <h3 className="text-lg font-bold text-white mb-4 font-heading">Мы в соцсетях</h3>
                <div className="flex gap-3">
                  {siteData.socials.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#0077FF] hover:text-white transition-all"
                      title={social.name}
                    >
                      <SocialIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} {siteData.copyright}
              </p>
              <div className="mt-2 text-xs text-gray-600 flex flex-col md:flex-row gap-2 md:gap-4">
                 <span>Лицензия мед.: {siteData.licenses.medical}</span>
                 <span className="hidden md:inline text-gray-700">|</span>
                 <span>Лицензия обр.: {siteData.licenses.education}</span>
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
