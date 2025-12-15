import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Об учреждении | Ариель",
  description: "Информация о центре коррекции речи и поведения Ариель.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="relative py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-gray-900">Об учреждении</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Центр коррекции речи и поведения «Ариель»
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <FadeIn>
          <div className="prose prose-lg text-gray-600 max-w-4xl">
            <p className="text-xl leading-relaxed mb-8">
              Центр коррекции речи и поведения «Ариель» основан в 2016 году. С тех пор тысячи ребятишек прошли качественную диагностику, лечение и реабилитацию.
            </p>
            
            <p className="text-xl leading-relaxed mb-8">
              Высочайший уровень профессионализма, принципы доказательной медицины, педагогики, дефектологии и огромная любовь к нашим маленьким пациентам позволяют творить чудеса.
            </p>
            
            <div className="my-10 p-8 bg-[#4A90A4]/5 rounded-2xl border-l-4 border-[#4A90A4]">
              <p className="text-xl font-medium text-[#4A90A4] m-0">
                Комплексный подход доказательной медицины, клинической психологии и АВА-терапии — клинически доказанные эффективные методы реабилитации детей с ЗПРР и РАС.
              </p>
            </div>

            <p className="text-xl leading-relaxed mb-8">
              Мы — одна из крупнейших негосударственных реабилитационных организаций в России, специализирующаяся на помощи детям с расстройствами аутистического спектра и задержками психоречевого развития.
            </p>

            <p className="text-xl leading-relaxed">
              Наша команда состоит из опытных врачей, психологов, логопедов, дефектологов и поведенческих аналитиков, которые работают вместе для достижения лучших результатов.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
