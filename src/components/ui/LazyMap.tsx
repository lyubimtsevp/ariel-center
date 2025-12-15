"use client";

import { useState, useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';

export function LazyMap() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Load before it enters viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-gray-100 overflow-hidden rounded-2xl border border-gray-200 min-h-[400px]">
      {isVisible ? (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
            </div>
          )}
          <iframe 
             src="https://yandex.ru/map-widget/v1/?text=%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D0%B8%D0%B1%D0%B8%D1%80%D1%81%D0%BA%2C+%D1%83%D0%BB.+%D0%9F%D0%B5%D1%80%D0%B2%D0%BE%D0%BC%D0%B0%D0%B9%D1%81%D0%BA%D0%B0%D1%8F+144%2F2&z=16"
             width="100%" 
             height="100%" 
             frameBorder="0"
             allowFullScreen={true}
             className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
             onLoad={() => setIsLoading(false)}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-50">
          <span className="text-sm font-medium animate-pulse">Загрузка карты...</span>
        </div>
      )}
    </div>
  );
}

