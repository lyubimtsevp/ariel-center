import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import { FileText, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Образование | Ариель",
  description: "Образовательные программы центра Ариель.",
};

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-gray-900">Образование</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Информация об образовательных программах ЦКРиП «Ариель».
            </p>
          </FadeIn>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Реализуемые программы */}
        <section className="mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 font-heading text-gray-900 border-b border-gray-200 pb-4">
              Реализуемые программы
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">АВА-терапия</h3>
                <p className="text-gray-600 text-sm">Прикладной анализ поведения — научно обоснованный метод коррекции поведения у детей с РАС.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Коррекция речи</h3>
                <p className="text-gray-600 text-sm">Комплексные программы по развитию речи и коммуникативных навыков.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">АРТ-терапия</h3>
                <p className="text-gray-600 text-sm">Творческие методы развития эмоционального интеллекта и самовыражения.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Адаптивная физкультура (АФК)</h3>
                <p className="text-gray-600 text-sm">Программы по развитию моторики и физической активности.</p>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Учебные планы */}
        <section className="mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 font-heading text-gray-900 border-b border-gray-200 pb-4">
              Учебные планы
            </h2>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="font-medium text-gray-900">Учебный план на 2024-2025 учебный год</span>
                  </div>
                  <a href="/docs/study-plan.html" target="_blank" className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark">
                    <Download className="w-4 h-4" /> Скачать
                  </a>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="font-medium text-gray-900">Календарный учебный график</span>
                  </div>
                  <a href="/docs/calendar.html" target="_blank" className="flex items-center gap-2 text-sm text-primary hover:text-primary-dark">
                    <Download className="w-4 h-4" /> Скачать
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Образовательная лицензия */}
        <section className="mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 font-heading text-gray-900 border-b border-gray-200 pb-4">
              Образовательная лицензия
            </h2>
            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Лицензия на образовательную деятельность</h3>
              <p className="text-gray-600 mb-4">Министерство Образования Новосибирской Области</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="text-gray-500">Номер:</span> <strong>Л035-01199-54/00395628</strong></div>
                <div><span className="text-gray-500">Дата:</span> <strong>06.06.2022</strong></div>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  );
}
