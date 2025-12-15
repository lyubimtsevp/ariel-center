"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { FileText, Download, Shield, Scale } from "lucide-react";
import documentsData from "@/data/documents.json";

// Маппинг иконок для групп документов
const iconMap: Record<string, any> = {
  "licenses": Shield,
  "legal": Scale,
  "regulations": FileText
};

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 font-heading">
            Документы и правовая информация
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Официальные документы, лицензии и нормативные акты, регламентирующие деятельность центра «Ариель».
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto space-y-8">
          {documentsData.groups.map((group, groupIndex) => {
            const Icon = iconMap[group.id] || FileText;
            
            return (
              <FadeIn key={group.id} delay={groupIndex * 0.1}>
                <Card>
                  <CardHeader className="border-b border-gray-100 bg-gray-50/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Icon size={24} />
                      </div>
                      <CardTitle className="text-xl text-gray-800">{group.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-gray-100">
                      {group.items.map((doc: any, docIndex: number) => (
                        <div 
                          key={docIndex} 
                          className="p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="mt-1 text-gray-400 group-hover:text-primary transition-colors">
                              <FileText size={20} />
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900 mb-1">
                                {doc.title}
                              </h3>
                              {doc.number && (
                                <p className="text-sm text-gray-500 font-mono">
                                  {doc.number}
                                </p>
                              )}
                            </div>
                          </div>
                          
                          <a 
                            href={doc.file} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors w-full md:w-auto justify-center"
                          >
                            <Download size={16} />
                            Скачать
                          </a>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </div>
  );
}