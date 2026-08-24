'use client'
import { ArrowRight, Video, Music, Package, Mic, VideoIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

import FeatureCard from '@/components/front-office/FeatureCard'
import CategoriesSection from '@/components/front-office/CategoriesSection'


const Home = () => {
  return (
    <>
      <section className="h-[80vh] bg-hero max-h-[600px] w-full overflow-hidden">
        {/* Content */}
        <div className="container h-full flex items-center md:justify-center">
          <Card className="bg-background/3 border-0 shadow-lg max-w-2xl">
            <CardContent className="p-8">
              <h1 className="text-2xl md:text-5xl font-bold text-center text-white tracking-tight mb-4">
                La passion de la musique, l'excellence du son chez IsauChrist.
              </h1>

              <div className="text-lg text-white mb-6">
                Une salle de répétition de pointe pour les musiciens exigeants, offrant un espace inspirant pour créer, répéter et
                perfectionner votre art seulement à <p className="text-lg md:text-3xl font-bold">2500 fcfa à l'heure</p>
              </div>

              <div className="flex flex-col justify-center items-center sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/pages/reservation" className="gap-2">
                    RÉSERVER LA SALLE <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button variant="outline" asChild size="lg" className="rounded-full">
                  <Link href="/pages/location" className="gap-2">
                    LOUER UN INSTRUMENT <Music className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-6">
             <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos services et profitez d'une expérience musicale inoubliable.
            </p>
          </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard
              icon={<Mic size={24} />}
              title="Répétition"
              description="Des salles traitées acoustiquement, équipées du backline standard de l'industrie pour sublimer votre son."
            />
            <FeatureCard
              icon={<Package  size={24} />}
              title="Location d'instruments"
              description="Accédez à un catalogue exclusif d'instruments et de matériel audio pour vos sessions d'enregistrement ou concerts."
            />
           
          </div>
        </div>
      </section>
      <CategoriesSection />
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* En-tête */}
          <div className="mb-12">
            <h2 className="text-3xl text-center  font-bold mb-4">Notre Vision</h2>
            <p className="font-body-lg text-lg text-muted-foreground max-w-2xl mx-auto text-justify text-body-lg text-on-surface-variant leading-relaxed">
                    Chez ISAUCHRIST, nous croyons que chaque note mérite d'être sublimée. Notre philosophie repose sur
                    un équilibre parfait entre la passion brute de la musique et l'exigence technique de l'excellence
                    sonore. Nous avons conçu nos espaces comme des sanctuaires créatifs où les artistes peuvent donner
                    vie à leurs inspirations, entourés par des équipements de qualité supérieure et une acoustique
                    minutieusement étudiée. Votre art est précieux, notre mission est de l'amplifier.
                </p>
        
          </div>
           
         </div>
      </section>
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white text-center">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Voulez-vous d'une salle de répétition ?</h2>
        <p className="text-lg md:text-xl mb-6">
          Rejoignez notre communauté de musiciens passionnés et profitez d'une salle de répétition équipée pour donner vie à votre musique.
         </p>
        <Link href="/pages/reservation">
          <Button size="lg" variant="secondary" className="text-primary font-semibold">
            Réserver la salle
          </Button>
        </Link>
      </div>
    </section>
      <section className="bg-white py-8">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Galerie photo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez notre galerie photo et plongez dans l'univers de la musique et de la créativité chez IsauChrist.
             </p>
          </div>
          <section
            className="px-margin-mobile pb-8 md:px-margin-desktop max-w-container-max mx-auto border-t border-white/5">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden bg-surface-variant group">
                    <img alt="Studio d'enregistrement"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZOExMZijvrp5RQCPGWsmL2KTltij4_bGpMW5VfaLmvMILLR5wDFhgzjLVJsJnTItCw1FDAZcyhkidbXTeU0uTxqJWz61gqwFYIDwzwQk1JzvJBdYSrW9fDk-tv7NDtFqIzoSxxiqbaR4HIwTfBbXEah-2eNHbprlADaHvbp4wcBSBxr8l1T2BLXj6a2CsHV7TZ0KUwUONbkWh9RpgWNQhF5-byaYijgCDeOn4Wa8Ge_GGJkGhNkZm" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-surface-variant group">
                    <img alt="Instruments et amplis"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-XOxd0NbHezlqsdtv0pwQpJmu_GApUOlYF0oNdvsApQpYcKKGLP-QWuuWkOOGDEjCtqpiP6RBamBVr5tJf_LPcLxl_FYw-0FOkRrHfB7ViOjPfyAnwH-L24q--YrZfu9f1v196U9CeCXUntBaeMi5cOMOBfzS2NkHNNxwNYOndkg87ilQXTH-My0Q0VWpdC76s77NXNAyT9DmlKAp0AUeOqyoiCcD3k5hPPfYmARbTcYjUZ6yi9Xn" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-surface-variant group">
                    <img alt="Console de mixage"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ9VCoRZDzWu5diWGXLO56swviEYWK3barR7EwkOfdbhS1nLIgdq0_qcJuKHJk6S3NDbG8JmdmfdPuDfP49ovppRreZ1n-UmxlO6z1tCnszl3ssj9x-Bju3ibSOydlncn3-Gq3DNookXghorscowE-Q8ake4HFFd5PvQS__O7mxfsRYa1jz7MUYlNG6JgqEC0rUF6YkqyPDS4R7SeT-O1LhiHKijaoWw9OWq8IzVczFx6zpoca5-z_" />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-surface-variant group">
                    <img alt="Piano à queue"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw4ERF1c4j3Kjo3aY55t0G7IpCU7ZC3Z-13JPqZuSdxn_65eimHhz6G7YTU5rB55LQaHIEMlYsVgNyrFie15f9hti9dIwNrLc3SLK7X2Jbew57BKN58VC8z44xTZOjcIrfk6Kkj4wzAwvwLKyDTs7mxQPi6INPywkobkgUBaOT5orjTVncJDVzZPDw1k9Rf-g4nbx3HeRwaRjNT-Yp6o2KIh1pPkj-VthsAlyJsairi-nmW7_4zhqN" />
                </div>
                <div
                    className="aspect-square rounded-xl overflow-hidden bg-surface-variant group md:col-span-2 md:aspect-[2/1]">
                    <img alt="Salle de répétition"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1OOtLztvHRFewQSq_6lDXvrXehQi9LdWs3qJaxrXkMK4858ZY6-k_U6MF5uzJi0UUbiljIy-TiD8gI_fWYEd9NUtLxsxaLoFnZSLuHh5TFBEVRY02K-pWxgcc3co6wv8yPYO6S-vcWD3k46WEzbLzh9ZLAKXv1vZbduRRG5wrdjAppxslgfgXBJuBv84hImmcn-FEjD38QkfqXzbDTZJLawSqMLilqAyVjUihKVsQ2rRkthAPcrhy" />
                </div>
                <div
                    className="aspect-square rounded-xl overflow-hidden bg-surface-variant group md:col-span-2 md:aspect-[2/1]">
                    <img alt="Microphone de studio"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZT9lS-akkpEX0AvNJ6I49eqH9hr8iCzMENFd8cfkziRhm9-jR2S-HahaPBSerWqY6MXAZoCflw2jVKv3LHpyYRYrwA-nhjRL3aofrYYAFFHR4RlkZOtnZtMm0eD-vW8170Fm2gyuLtHBAB1rGjNvzXle8TqyTTVV4pW202jyPMyXgdvzM4_Sr6PpS-mF8R1WWr-k9QzMvmQtmGPbB_WO6KGtCVWOwjyEPdqO7i0TvJDU2PXsg-MId" />
                </div>
            </div>
        </section>
        </div>
      </section>

    </>

  )
}

export default Home