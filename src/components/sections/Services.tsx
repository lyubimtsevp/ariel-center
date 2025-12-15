"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight, Brain, Stethoscope, Activity, Users, Palette, Music, Home, Coffee, Scissors, GraduationCap, BookOpen, HeartPulse, Microscope } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import servicesData from "@/data/services.json";
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

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<"medical" | "education">("medical");

  const services = servicesData.directions.map(service => ({
    ...service,
    ...(serviceConfig[service.id] || { icon: Brain, color: "gray" }),
    // @ts-ignore
    image: service.image || null,
    // @ts-ignore
    category: service.category || "other"
  }));

  const displayedServices = services.filter(s => s.category === activeCategory).slice(0, 4);

  return (
    <section className="section-padding bg-white py-16">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-gray-900">Наши направления</h2>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveCategory("medical")}
              className={cn(
                "px-6 py-2 rounded-full text-lg font-medium transition-all duration-300",
                activeCategory === "medical"
                  ? "bg-[#4A90A4] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              Медицина
            </button>
            <button
              onClick={() => setActiveCategory("education")}
              className={cn(
                "px-6 py-2 rounded-full text-lg font-medium transition-all duration-300",
                activeCategory === "education"
                  ? "bg-[#F5A962] text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              Педагогика
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedServices.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <Link href={`/services?category=${activeCategory}`} className="block h-full group">
                <Card padding="none" className="h-full border-none shadow-md hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden rounded-2xl flex flex-col group-hover:-translate-y-2">
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: `${service.color}15` }}>
                        <service.icon className="w-16 h-16 opacity-60 transition-transform duration-500 group-hover:scale-110" style={{ color: service.color }} />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-1">{service.name}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-semibold text-sm mt-auto group/link">
                      Подробнее <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <Link href={`/services?category=${activeCategory}`}>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-gray-300 hover:border-primary hover:text-primary">
              Посмотреть все услуги ({activeCategory === "medical" ? "Медицина" : "Педагогика"})
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export { Services };