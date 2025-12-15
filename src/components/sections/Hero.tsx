import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { Stethoscope, GraduationCap, Calendar, Baby, FileText, MapPin, Clock, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-[80vh] flex items-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero/hero-71302593.jpg" alt="Центр Ариель" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white py-8 md:py-0">
        <div className="max-w-4xl">
          <FadeIn>
             <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-6 border border-white/20 backdrop-blur-sm">
               Лицензированный медицинский центр
             </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-heading tracking-tight drop-shadow-lg">
              Центр коррекции <br />
              <span className="text-[#76B3C4]">речи и поведения</span> <br />
              «Ариель»
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-gray-100 mb-8 md:mb-10 leading-relaxed max-w-2xl drop-shadow-md hidden md:block">
              Одна из крупнейших негосударственных реабилитационных организаций в РФ. 
              Помогаем детям с РАС и ЗПРР обрести полноценную жизнь с помощью доказательной медицины.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8">
            <Link href="/services?category=medical" className="group">
              <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:scale-[1.02] flex items-center gap-4 cursor-pointer h-full active:scale-95">
                <div className="p-3 bg-[#4A90A4]/20 rounded-xl text-[#76B3C4] shrink-0"><Stethoscope size={32} /></div>
                <div><h3 className="text-xl font-bold text-white mb-1">Медицинские услуги</h3><p className="text-sm text-gray-300">Диагностика, лечение</p></div>
              </div>
            </Link>
            <Link href="/services?category=education" className="group">
               <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:scale-[1.02] flex items-center gap-4 cursor-pointer h-full active:scale-95">
                <div className="p-3 bg-[#F5A962]/20 rounded-xl text-[#F5A962] shrink-0"><GraduationCap size={32} /></div>
                <div><h3 className="text-xl font-bold text-white mb-1">Педагогические услуги</h3><p className="text-sm text-gray-300">Коррекция, обучение</p></div>
              </div>
            </Link>
          </FadeIn>
          
          <FadeIn delay={0.4} className="flex flex-col gap-3 max-w-xl">
             <Link href="/contacts#intensive" className="w-full">
              <Button size="lg" className="w-full justify-start text-lg h-14 px-6 rounded-xl bg-[#4A90A4] hover:bg-[#3b7d8f] text-white shadow-lg border-none active:scale-98 transition-transform">
                <Calendar className="mr-3 h-6 w-6 shrink-0" /><span className="truncate">Записаться на интенсив</span>
              </Button>
            </Link>
            <Link href="/contacts#matkapital" className="w-full">
              <Button variant="outline" size="lg" className="w-full justify-start text-lg h-14 px-6 rounded-xl border-white/30 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm active:scale-98 transition-transform">
                 <Baby className="mr-3 h-6 w-6 shrink-0" /><span className="truncate">Записаться (Маткапитал)</span>
              </Button>
            </Link>
            <Link href="/contacts#diagnostic" className="w-full">
              <Button variant="outline" size="lg" className="w-full justify-start text-lg h-14 px-6 rounded-xl border-white/30 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm active:scale-98 transition-transform">
                <FileText className="mr-3 h-6 w-6 shrink-0" /><span className="truncate">Записаться на диагностику</span>
              </Button>
            </Link>
            <p className="text-xs text-gray-400 mt-2 px-1">
              Нажимая кнопку, вы соглашаетесь с <Link href="/documents" className="text-gray-300 hover:text-white underline decoration-dashed underline-offset-4">условиями оферты</Link>
            </p>
          </FadeIn>
          
          <FadeIn delay={0.5} className="mt-12 hidden md:flex items-center gap-12 text-white/90">
             <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-[#76B3C4] font-heading">8+</span>
                <span className="text-sm font-medium leading-tight">лет успешной<br/>работы</span>
             </div>
             <div className="w-px h-12 bg-white/30"></div>
             <div className="flex items-center gap-3">
                <span className="text-4xl font-bold text-[#76B3C4] font-heading">1000+</span>
                <span className="text-sm font-medium leading-tight">счастливых<br/>семей</span>
             </div>
          </FadeIn>

          {/* Информационный блок */}
          <FadeIn delay={0.6} className="mt-8 hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl">
              <div className="text-sm text-white/80 mb-1">Общество с ограниченной ответственностью «Центр раннего развития детей, коррекции речи и поведения «Ариель»</div>
              <div className="text-xs text-white/60 mb-4">(ООО «Центр раннего развития детей, коррекции речи и поведения «Ариель»)</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#76B3C4] flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">г. Новосибирск,<br/>ул. Первомайская 144/2</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#76B3C4] flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">Пн-Пт: 9:00-17:00<br/>Вс: 10:00-13:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#76B3C4] flex-shrink-0" />
                  <a href="tel:+73833195955" className="text-white hover:text-[#76B3C4] transition-colors font-medium">+7 (383) 319-59-55</a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export { Hero };
