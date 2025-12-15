import { FadeIn } from '@/components/ui/FadeIn';
import { BookOpen, ExternalLink, Users, Calendar } from 'lucide-react';
import Link from 'next/link';
import scienceData from '@/data/science.json';

export const metadata = {
  title: 'Наука | Центр «Ариель»',
  description: 'Научные публикации и исследования центра «Ариель»',
};

export default function SciencePage() {
  const publishedItems = scienceData.items.filter(item => item.published);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Наука</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Научные публикации, исследования и методические материалы наших специалистов
            </p>
          </div>
        </FadeIn>

        {publishedItems.length === 0 ? (
          <FadeIn delay={0.1}>
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600 mb-2">Публикаций пока нет</h3>
              <p className="text-gray-500">Раздел находится в разработке</p>
            </div>
          </FadeIn>
        ) : (
          <div className="space-y-6">
            {publishedItems.map((item, index) => (
              <FadeIn key={item.id} delay={0.1 * index}>
                <article className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#4A90A4]/10 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-8 h-8 text-[#4A90A4]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold text-gray-800 mb-2">
                        {item.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
                        {item.authors && (
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {item.authors}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.date).toLocaleDateString('ru-RU', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {item.excerpt}
                      </p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[#4A90A4] font-medium hover:underline"
                        >
                          Читать публикацию
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        )}

        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#4A90A4] transition-colors"
            >
              ← Вернуться на главную
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
