import specialistsData from "@/data/specialists.json";
import { SpecialistCard } from "@/components/ui/SpecialistCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Специалисты | Ариель",
  description: "Специалисты центра коррекции речи и поведения Ариель.",
};

const managementIds = ["meltser-yulia", "polovnikov-evgeniy", "gritsan-elena", "stav-ariel"];

export default function SpecialistsPage() {
  const specialists = specialistsData.specialists.filter(
    (s) => !managementIds.includes(s.id)
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">Специалисты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Врачи и специалисты высшей категории, постоянно повышающие свою квалификацию
            для оказания лучшей помощи вашим детям.
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((specialist, index) => (
            <FadeIn key={specialist.id} delay={index * 0.05}>
              {/* @ts-ignore */}
              <SpecialistCard specialist={specialist} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
