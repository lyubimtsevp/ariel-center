"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, GraduationCap } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

interface Specialist {
  id: string;
  name: string;
  position: string;
  image?: string;
  education?: string[];
  bio?: string;
  roles?: string[];
}

interface SpecialistModalProps {
  specialist: Specialist;
  isOpen: boolean;
  onClose: () => void;
}

function cleanBio(text: string, name: string): string {
  if (!text) return "";
  let cleaned = text
    .replace(/&nbsp;/g, " ")
    .replace(/\u00A0/g, " ")
    .trim();

  // Remove name from start if present
  if (cleaned.toLowerCase().startsWith(name.toLowerCase())) {
    cleaned = cleaned.substring(name.length).trim();
  }

  // Remove any remaining leading symbols
  cleaned = cleaned.replace(/^[^a-zA-Zа-яА-Я0-9]+/, "");
  
  return cleaned;
}

export function SpecialistModal({ specialist, isOpen, onClose }: SpecialistModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const cleanedBio = specialist.bio ? cleanBio(specialist.bio, specialist.name) : "";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] pointer-events-auto relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-colors backdrop-blur-sm shadow-sm"
              >
                <X className="w-6 h-6 text-gray-800" />
              </button>

              {/* Image Side - Updated for full visibility */}
              <div className="w-full md:w-1/2 relative h-[400px] md:h-auto md:min-h-[600px] bg-gray-50 flex-shrink-0 border-r border-gray-100">
                {specialist.image ? (
                  <Image
                    src={specialist.image}
                    alt={specialist.name}
                    fill
                    className="object-contain p-4" 
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300">
                    <span className="text-8xl">👤</span>
                  </div>
                )}
              </div>

              {/* Content Side */}
              <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar bg-white">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-heading leading-tight">
                    {specialist.name}
                  </h2>
                  <p className="text-lg md:text-xl text-primary font-medium leading-relaxed">
                    {specialist.position}
                  </p>
                </div>

                {specialist.roles && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {specialist.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-primary/5 text-primary text-sm font-bold uppercase tracking-wider rounded-lg border border-primary/10"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                )}

                <div className="prose prose-gray max-w-none text-gray-600">
                  {cleanedBio ? (
                    <div className="whitespace-pre-wrap leading-relaxed text-base md:text-lg">
                      {cleanedBio}
                    </div>
                  ) : (
                    specialist.education && (
                      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-3 text-gray-900 font-bold text-sm uppercase tracking-wide mb-6">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                             <GraduationCap className="w-5 h-5" />
                          </div>
                          Образование
                        </div>
                        <ul className="space-y-4">
                          {specialist.education.map((edu, idx) => (
                            <li key={idx} className="flex gap-4 text-base leading-relaxed text-gray-700">
                              <span className="block w-2 h-2 rounded-full bg-primary/60 mt-2.5 flex-shrink-0" />
                              <span>{edu}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
