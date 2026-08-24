import Link from 'next/link';
import { Calendar , Speaker, Drum, Users } from 'lucide-react';

export default function CategoriesSection() {
  const categories = [
    {
      id: 1,
      title: "Disponibilité 7J/7",
      description: "La musique n'attend pas. Nous sommes ouverts tous les jours pour accueillir votre créativité.",
      icon: <Calendar className="w-10 h-10 mb-4 text-primary" />,
     },
    {
      id: 2,
      title: "Sonorisation Pro",
      description: "Une acoustique traitée au millimètre et des consoles de mixage de référence pour un rendu parfait.",
      icon: <Speaker className="w-10 h-10 mb-4 text-primary" />,
     },
    {
      id: 3,
      title: "Équipement Haut de Gamme",
      description: "Des micros aux amplis, nous mettons à votre disposition le meilleur matériel de l'industrie.",
      icon: <Drum className="w-10 h-10 mb-4 text-primary" />,
     },
      {
      id: 4,
      title: "Service professionnel",
      description: "Notre équipe est dédiée à vous offrir une expérience fluide et agréable, de la réservation à la session.",
      icon: <Users className="w-10 h-10 mb-4 text-primary" />,
     }

  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-4">
              Chez IsauChrist, nous croyons en la puissance de la musique pour inspirer, connecter et transformer les vies.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {categories.map((category) => (
            <div 
              key={category.id} 
               className="group"
            >
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center border border-gray-200 hover:border-primary">
                {category.icon}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
                 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}