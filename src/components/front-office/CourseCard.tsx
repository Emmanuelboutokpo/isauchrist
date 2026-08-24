// components/CourseCard.tsx
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Course } from '@/types/course';

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow group h-full">
      <div className="relative h-40 overflow-hidden">
        <Image
          src={course.banner}
          alt={`Bannière ${course.title}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
            {course.category.name}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2 flex-grow">
          {course.description}
        </p>
        
        <Link
          href={`/cours/${course.id}`}
          className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Voir le cours <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}