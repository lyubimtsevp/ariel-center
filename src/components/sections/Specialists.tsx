import { SpecialistCard } from "@/components/ui/SpecialistCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import specialistsData from "@/data/specialists.json";
import Link from "next/link";

const Specialists = () => {
  const featuredSpecialists = specialistsData.specialists.filter(s => s.featured).slice(0, 4);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-gray-900">Наша команда</h2>
          <p className="text-lg text-gray-600">
            Высококвалифицированные врачи и специалисты, которые постоянно совершенствуют свои навыки.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredSpecialists.map((specialist, index) => (
            <FadeIn key={specialist.id} delay={index * 0.1}>
              {/* @ts-ignore */}
              <SpecialistCard specialist={specialist} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-16 text-center">
          <Link href="/specialists">
             <Button size="lg" variant="outline" className="rounded-full px-8 border-gray-300 hover:border-primary hover:text-primary">
                Познакомиться со всеми специалистами
             </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export { Specialists };
