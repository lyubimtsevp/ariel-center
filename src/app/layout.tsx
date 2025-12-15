import type { Metadata } from 'next';
import { Manrope, Montserrat } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Chatbot } from '@/components/Chatbot';
import SmoothScroll from '@/components/ui/SmoothScroll';

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Центр «Ариель» — Коррекция речи и поведения | Новосибирск',
    template: '%s | Центр «Ариель»',
  },
  description:
    'Центр коррекции речи и поведения «Ариель» — одна из крупнейших негосударственных реабилитационных организаций в РФ. Помогаем детям с РАС и ЗПРР. АВА-терапия, диагностика, интенсивы.',
  keywords: [
    'аутизм',
    'РАС',
    'ЗПРР',
    'АВА-терапия',
    'коррекция речи',
    'коррекция поведения',
    'детский психиатр',
    'Новосибирск',
    'центр Ариель',
    'реабилитация детей',
  ],
  authors: [{ name: 'ЦКРиП Ариель' }],
  creator: 'ЦКРиП Ариель',
  publisher: 'ООО «Центр раннего развития детей, коррекции речи и поведения «Ариель»',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Центр «Ариель» — Коррекция речи и поведения',
    description:
      'Помогаем детям с РАС и ЗПРР обрести путёвку в жизнь. АВА-терапия, диагностика, интенсивные программы реабилитации.',
    url: 'https://autism54.ru',
    siteName: 'Центр «Ариель»',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    yandex: 'yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-background text-foreground">
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
