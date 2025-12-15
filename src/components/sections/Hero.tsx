import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { Stethoscope, GraduationCap, Calendar, Baby, FileText, MapPin, Clock, Phone } from "lucide-react";
import heroData from "@/data/hero.json";

const iconMap: Record<string, React.ReactNode> = {
  calendar: <Calendar className="mr-3 h-6 w-6 shrink-0" />,
  baby: <Baby className="mr-3 h-6 w-6 shrink-0" />,
  file: <FileText className="mr-3 h-6 w-6 shrink-0" />,
};

const serviceIconMap: Record<string, React.ReactNode> = {
  medical: <Stethoscope size={32} />,
  education: <GraduationCap size={32} />,
};

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
              {heroData.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8">
            {heroData.serviceCards.map((card, index) => (
              <Link key={index} href={card.href} className="group">
                <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:scale-[1.02] flex items-center gap-4 cursor-pointer h-full active:scale-95">
                  <div className={`p-3 ${card.icon === 'medical' ? 'bg-[#4A90A4]/20 text-[#76B3C4]' : 'bg-[#F5A962]/20 text-[#F5A962]'} rounded-xl shrink-0`}>
                    {serviceIconMap[card.icon] || <Stethoscope size={32} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-300">{card.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </FadeIn>

          <FadeIn delay={0.4} className="flex flex-col gap-3 max-w-xl">
            {heroData.ctaButtons.map((button, index) => (
              <Link key={index} href={button.href} className="w-full">
                <Button
                  size="lg"
                  variant={button.primary ? "default" : "outline"}
                  className={`w-full justify-start text-lg h-14 px-6 rounded-xl active:scale-98 transition-transform ${
                    button.primary
                      ? 'bg-[#4A90A4] hover:bg-[#3b7d8f] text-white shadow-lg border-none'
                      : 'border-white/30 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm'
                  }`}
                >
                  {iconMap[button.icon] || <Calendar className="mr-3 h-6 w-6 shrink-0" />}
                  <span className="truncate">{button.text}</span>
                </Button>
              </Link>
            ))}
            <p className="text-xs text-gray-400 mt-2 px-1">
              Нажимая кнопку, вы соглашаетесь с <Link href="/documents" className="text-gray-300 hover:text-white underline decoration-dashed underline-offset-4">условиями оферты</Link>
            </p>
          </FadeIn>

          {heroData.stats.show && (
            <FadeIn delay={0.5} className="mt-12 hidden md:flex items-center gap-12 text-white/90">
              {heroData.stats.items.map((stat, index) => (
                <>
                  {index > 0 && <div className="w-px h-12 bg-white/30"></div>}
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-[#76B3C4] font-heading">{stat.value}</span>
                    <span className="text-sm font-medium leading-tight" dangerouslySetInnerHTML={{ __html: stat.label.replace(' ', '<br/>') }} />
                  </div>
                </>
              ))}
            </FadeIn>
          )}

          {/* Информационный блок */}
          <FadeIn delay={0.6} className="mt-8 hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 max-w-2xl">
              <div className="text-sm text-white/80 mb-1">{heroData.organization.fullName}</div>
              <div className="text-xs text-white/60 mb-4">({heroData.organization.shortName})</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#76B3C4] flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{heroData.address}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#76B3C4] flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{heroData.workingHours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#76B3C4] flex-shrink-0" />
                  <a href={`tel:${heroData.phone.replace(/\D/g, '')}`} className="text-white hover:text-[#76B3C4] transition-colors font-medium">{heroData.phone}</a>
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
