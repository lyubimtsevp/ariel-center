'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Clock, MapPin, Eye, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import siteData from '@/data/site.json';

// Подменю "Об учреждении"
const aboutSubmenu = [
  { name: 'О центре', href: '/about' },
  { name: 'Новости', href: '/news' },
  { name: 'Наука', href: '/science' },
  { name: 'Медиа', href: '/media' },
  { name: 'Фотогалерея', href: '/gallery' },
  { name: 'Логистика и проживание', href: '/logistics' },
  { name: 'Работа в «Ариель»', href: '/jobs' },
];

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'Об учреждении', href: '/about', hasSubmenu: true },
  { name: 'Услуги', href: '/services' },
  { name: 'Руководство', href: '/management' },
  { name: 'Специалисты', href: '/specialists' },
  { name: 'Цены', href: '/prices' },
  { name: 'Образование', href: '/education' },
  { name: 'Документы', href: '/documents' },
  { name: 'Реквизиты', href: '/requisites' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Контакты', href: '/contacts' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  const primaryPhone = siteData.phones[0];
  const primaryCity = siteData.addresses[0]?.city?.replace('г. ', '') || 'Новосибирск';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрытие подменю при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-white py-2 hidden lg:block">
        <div className="container mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            {primaryPhone && (
              <a href={`tel:${primaryPhone.number.replace(/\D/g, '')}`} className="flex items-center gap-2 hover:opacity-80 transition">
                <Phone className="w-4 h-4" />
                {primaryPhone.number}
              </a>
            )}
            <a href={`mailto:${siteData.email}`} className="flex items-center gap-2 hover:opacity-80 transition">
              <Mail className="w-4 h-4" />
              {siteData.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {siteData.workHours}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {primaryCity}
            </span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 border-b border-gray-100'
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm border border-gray-100 group-hover:shadow-md transition-all">
                <Image
                  src="/images/ui/logo.jpg"
                  alt="Ариель Лого"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors">{siteData.name}</div>
                <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">{siteData.tagline}</div>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navigation.map((item) => (
                item.hasSubmenu ? (
                  <div key={item.name} ref={aboutRef} className="relative">
                    <button
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                      className="flex items-center gap-1 px-3 py-2 text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-gray-50 text-sm"
                    >
                      {item.name}
                      <ChevronDown className={cn("w-4 h-4 transition-transform", isAboutOpen && "rotate-180")} />
                    </button>

                    <AnimatePresence>
                      {isAboutOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50"
                        >
                          {aboutSubmenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => setIsAboutOpen(false)}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-gray-50 text-sm"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Accessibility Button */}
              <button
                className="p-2 rounded-lg hover:bg-gray-50 transition group hidden md:block"
                title="Версия для слабовидящих"
                onClick={() => { document.body.classList.toggle('accessibility-mode'); }}
              >
                <Eye className="w-6 h-6 text-gray-500 group-hover:text-primary" />
              </button>

              {primaryPhone && (
                <Button
                  variant="primary"
                  size="sm"
                  className="hidden sm:flex"
                  onClick={() => window.location.href = `tel:${primaryPhone.number.replace(/\D/g, '')}`}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Записаться
                </Button>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg hover:bg-gray-50 transition text-foreground"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white border-b border-gray-200 fixed top-[72px] left-0 right-0 z-40 overflow-hidden shadow-lg max-h-[calc(100vh-72px)] overflow-y-auto"
          >
            <nav className="container mx-auto px-6 py-4">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  item.hasSubmenu ? (
                    <div key={item.name}>
                      <button
                        onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                        className="w-full flex items-center justify-between px-4 py-3 text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-gray-50"
                      >
                        {item.name}
                        <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileAboutOpen && "rotate-180")} />
                      </button>

                      <AnimatePresence>
                        {isMobileAboutOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            {aboutSubmenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileAboutOpen(false);
                                }}
                                className="block px-4 py-2.5 text-sm text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-50"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 text-foreground hover:text-primary font-medium transition-colors rounded-lg hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
              {primaryPhone && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => window.location.href = `tel:${primaryPhone.number.replace(/\D/g, '')}`}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Записаться на приём
                  </Button>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
