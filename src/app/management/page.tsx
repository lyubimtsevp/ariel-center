import { SpecialistCard } from "@/components/ui/SpecialistCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Руководство | Ариель",
  description: "Руководство центра коррекции речи и поведения Ариель.",
};

const management = [
  {
    id: "meltser-yulia",
    name: "Мельцер Юлия Альбертовна",
    position: "Директор ЦКРиП «Ариель»",
    roles: ["Главный поведенческий аналитик (АВА)", "Клинический психолог", "Супервизор"],
    image: "/images/specialists/spec-МЕЛЬЦЕР_ЮЛИЯ_АЛЬБЕРТОВНА-4156.jpg",
  },
  {
    id: "stav-ariel",
    name: "Став Ариель Аркадьевич",
    position: "Главный куратор Центра",
    roles: ["Врач психиатр", "Клинический психолог", "Поведенческий аналитик"],
    image: "/images/specialists/spec-СТАВ_АРИЕЛЬ_АРКАДЬЕВИЧ-3838.jpg",
  },
  {
    id: "gritsan-elena",
    name: "Грицан Елена Дмитриевна",
    position: "Заместитель директора",
    roles: ["Руководитель филиала на Карла Маркса"],
    image: "/images/specialists/spec-ГРИЦАН_ЕЛЕНА_ДМИТРИЕВНА-7206.jpg",
  },
  {
    id: "polovnikov-evgeniy",
    name: "Половников Евгений Владимирович",
    position: "Главный врач (административный) ЦКРиП «Ариель»",
    roles: ["Врач детский нейрохирург", "Кандидат медицинских наук"],
    image: "/images/specialists/spec-ПОЛОВНИКОВ_ЕВГЕНИЙ_ВЛАДИМИРОВИ-4484.jpg",
  },
];

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">Руководство</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Руководство центра коррекции речи и поведения «Ариель»
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {management.map((person, index) => (
            <FadeIn key={person.id} delay={index * 0.1}>
              {/* @ts-ignore */}
              <SpecialistCard specialist={person} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
