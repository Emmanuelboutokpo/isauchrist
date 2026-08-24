// components/TeacherCarousel.tsx

'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Teacher } from '@/types/teachers';

export default function TeacherCarousel({ teachers }: { teachers: Teacher[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      <div className="flex justify-end items-end mb-4 px-4 md:px-10">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={scrollPrev}>
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="icon" onClick={scrollNext}>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 px-4 md:px-10">
          {teachers.map((teacher) => (
            <Card key={teacher.id} className="min-w-[250px] p-0 sm:min-w-[300px] lg:min-w-[350px] flex-shrink-0">
              <CardContent className="p-0">
                <div className="relative h-40 w-full rounded-t-lg overflow-hidden">
                  <Image
                    src={teacher.photo}
                    alt={`Photo de ${teacher.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                   <h3 className="font-semibold text-lg">{teacher.name}</h3>
                   <p className="text-sm text-muted-foreground">{teacher.email}</p>
                   <p className="text-sm mt-2">{teacher.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
