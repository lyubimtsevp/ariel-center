"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SpecialistModal } from "@/components/ui/SpecialistModal";
import { Maximize2 } from "lucide-react";

interface SpecialistCardProps {
  specialist: {
    id: string;
    name: string;
    position: string;
    image?: string;
    education?: string[];
    bio?: string;
    roles?: string[];
  };
}

export function SpecialistCard({ specialist }: SpecialistCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card 
        padding="none"
        className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-white overflow-hidden rounded-2xl group flex flex-col cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative h-80 w-full bg-gray-200 overflow-hidden">
          {specialist.image ? (
            <Image
              src={specialist.image}
              alt={specialist.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
              <span className="text-6xl">👤</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/30 transition-colors">
               <Maximize2 className="w-5 h-5" />
             </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
             <h2 className="text-2xl font-bold mb-1 font-heading">{specialist.name}</h2>
             <p className="text-white/90 text-sm font-medium leading-snug line-clamp-2">{specialist.position}</p>
          </div>
        </div>
        
        <CardContent className="pt-6 flex-grow bg-white relative z-10 flex flex-col">
          {specialist.roles && (
             <div className="mb-4 flex flex-wrap gap-2">
               {specialist.roles.slice(0, 3).map((role, rIdx) => (
                  <span key={rIdx} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {role}
                  </span>
               ))}
               {specialist.roles.length > 3 && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-gray-100 text-gray-500">
                     +{specialist.roles.length - 3}
                  </span>
               )}
             </div>
          )}
          
          <div className="mt-auto">
              <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full justify-between text-gray-500 hover:text-primary p-0 h-auto hover:bg-transparent group/btn"
              >
                  <span className="font-semibold text-sm">
                      Подробнее о специалисте
                  </span>
              </Button>
          </div>
        </CardContent>
      </Card>

      <SpecialistModal 
        specialist={specialist} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
