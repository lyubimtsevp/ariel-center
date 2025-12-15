"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import servicesData from "@/data/services.json";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Brain, Stethoscope, Activity, Users, Palette, Music, Home, Coffee, Scissors, GraduationCap, BookOpen, HeartPulse, Microscope, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const serviceConfig: Record<string, { icon: any, color: string }> = {
  "intensive": { icon: Brain, color: "#4A90A4" },
  "diagnostic": { icon: Stethoscope, color: "#F5A962" },
  "neurologist": { icon: Activity, color: "#E17055" },
  "art-therapy": { icon: Palette, color: "#E17055" },
  "afk": { icon: Activity, color: "#FDCB6E" },
  "theater": { icon: Music, color: "#A29BFE" },
  "training-apartment": { icon: Home, color: "#74B9FF" },
  "art-cafe": { icon: Coffee, color: "#FD79A8" },
  "beauty-salon": { icon: Scissors, color: "#55EFC4" },
  "education": { icon: GraduationCap, color: "#81ECEC" },
  "family-psychologist": { icon: BookOpen, color: "#DFE6E9" },
  "somatic": { icon: HeartPulse, color: "#FF7675" },
  "adaptive-sport": { icon: Activity, color: "#FDCB6E" },
  "science": { icon: Microscope, color: "#6C5CE7" },
  "online": { icon: Users, color: "#00B894" },
  "vip": { icon: Stethoscope, color: "#FFD700" }
};

function ServicesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    if (initialCategory && (initialCategory === "medical" || initialCategory === "education")) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    { id: "all", label: "Все услуги" },
    { id: "medical", label: "Медицинские услуги" },
    { id: "education", label: "Педагогические услуги" }
  ];

  const allServices = servicesData.directions.map(service => ({
    ...service,
    ...(serviceConfig[service.id] || { icon: Brain, color: "gray" }),
    // @ts-ignore
    image: service.image || null,
    // @ts-ignore
    detailedDescription: service.detailedDescription || null,
    // @ts-ignore
    category: service.category || "other"
  }));

  const filteredServices = allServices.filter(service => {
    if (activeCategory === "all") return true;
    return service.category === activeCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-10">
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-heading">Наши услуги</h1>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
             Мы предлагаем комплексный подход к коррекции речи и поведения.
           </p>
           
           {/* Category Tabs */}
           <div className="flex flex-wrap justify-center gap-4 mb-8">
             {categories.map((cat) => (
               <button
                 key={cat.id}
                 onClick={() => setActiveCategory(cat.id)}
                 className={cn(
                   "px-6 py-2 rounded-full text-lg font-medium transition-all duration-300",
                   activeCategory === cat.id
                     ? "bg-[#4A90A4] text-white shadow-lg scale-105"
                     : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                 )}
               >
                 {cat.label}
               </button>
             ))}
           </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.05}>
              <Card padding="none" className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-none shadow-md rounded-2xl bg-white">
                <div className="relative h-56 w-full bg-gray-100">
                   {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                   ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: `${service.color}15` }}>
                         <service.icon className="w-20 h-20 opacity-60" style={{ color: service.color }} />
                      </div>
                   )}
                   {/* Category Badge */}
                   <div className="absolute top-4 left-4">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm",
                        service.category === "medical" ? "bg-[#4A90A4]" : 
                        service.category === "education" ? "bg-[#F5A962]" : "bg-gray-500"
                      )}>
                        {service.category === "medical" ? "Медицина" : 
                         service.category === "education" ? "Педагогика" : "Другое"}
                      </span>
                   </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold leading-tight">{service.name}</CardTitle>
                  <div className="text-sm text-primary font-semibold">
                    {/* @ts-ignore */}
                    {service.price ? `${service.price} ₽` : ''}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                  
                  {service.detailedDescription && (
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <button 
                        onClick={() => toggleExpand(service.id)}
                        className="flex items-center text-primary font-semibold text-sm hover:text-primary-dark transition-colors focus:outline-none w-full justify-between group"
                      >
                        <span>{expandedId === service.id ? 'Свернуть' : 'Подробнее'}</span>
                        <ChevronDown className={cn("w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5", expandedId === service.id && "rotate-180")} />
                      </button>
                      
                      <AnimatePresence>
                        {expandedId === service.id && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 text-sm text-gray-600 whitespace-pre-wrap leading-relaxed bg-gray-50 p-3 rounded-lg mt-2">
                              {service.detailedDescription}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </CardContent>
              </Card>
            </FadeIn>
          ))
          ) : (
             <div className="col-span-full text-center py-20 text-gray-500">
               В данной категории услуг пока нет.
             </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Загрузка...</div>}>
      <ServicesContent />
    </Suspense>
  );
}