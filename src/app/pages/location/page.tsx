'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Music, Zap, CreditCard, Clock } from 'lucide-react'
import Link from 'next/link'

const instruments = [
  {
    id: 1,
    name: 'Neumann U87 Ai',
    category: 'Micros',
    price: 6500,
    description: 'Le standard de l\'industrie pour la captation vocale et instrumentale. Chaleur et précision absolues.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-AzaiNtbC6BVGv_wedMoGBu-ahr7dDNOpbp_nqqQSNGUciztV71xbMXNe3JFkoiUD_T-XAXthkDASct9EQ-b6WZ7ZgqZwymiLM-4_aECQHDEldj58mpmZvDrKGmsk0CMaK8NWGL9O2f0CbWoMWvVifH7-mpdjOYwSch4-iJ0oqgAPQcLehdMv1gZj3ZH_6c-C92r1PDcj9dBHvFuC_uI8hf22RdxXqeJ9lPofQeBGoecrmGnaOd9Y',
    buttonStyle: 'primary',
  },
  {
    id: 2,
    name: 'Fender Strat Pro II',
    category: 'Guitares',
    price: 4500,
    description: 'Polyvalence inégalée avec ses micros V-Mod II. Confort de jeu exceptionnel pour de longues sessions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHbbe-5Q12j_-7bAd0Zh7oKdn8-bFSfV6L1g__o789axm1Vk2DLp_LwYpxWw3GYqd_vhoyOLAnRUBX2y0v9sTI-20WKVk3VCKxu2pDRmYqAo6w8EF0FVGkBI88SJu-7tFLBon6FlJPngyf3hZcJn_htip8tmjz8MNmakLCOIJ9QE899C_Y3XtGkQsGZ-Bl3eRn8C-v-JDa0ScRJY3qxnolbRI2WbF9ngodz91a_hkiAE6cHEWa9DY1',
    buttonStyle: 'outline',
  },
  {
    id: 3,
    name: 'Moog Sub 37',
    category: 'Claviers',
    price: 5500,
    description: 'Synthétiseur analogique paraphonique offrant des basses profondes et des leads tranchants.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChweXS6H7zpyjQC_DVMgr2l7ejQegKZsN9llJShlnB3TWPs2mx8mdMQHrLrAmKG3OPco8RzTARwlHDCpw1f8qY5kNUu0qNtWNT4HuBZSln7w-PfXmGpbASNefhZRePj7g1DxddwM6WBEXXp1dv8KHT9rnsCAT5kGm6h5-bO7Zf5g01Raavm9ar1cpylNQLHW1XQ6FB3G5HMYy-iB7f33UW6sOBHI2-k7sgli4tnnFqtmAAu8ERCjE9',
    buttonStyle: 'outline',
  },
  {
    id: 4,
    name: 'Ludwig Classic Maple',
    category: 'Batteries',
    price: 7500,
    description: 'Batterie acoustique de renommée mondiale. Son chaud et projection naturelle.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChweXS6H7zpyjQC_DVMgr2l7ejQegKZsN9llJShlnB3TWPs2mx8mdMQHrLrAmKG3OPco8RzTARwlHDCpw1f8qY5kNUu0qNtWNT4HuBZSln7w-PfXmGpbASNefhZRePj7g1DxddwM6WBEXXp1dv8KHT9rnsCAT5kGm6h5-bO7Zf5g01Raavm9ar1cpylNQLHW1XQ6FB3G5HMYy-iB7f33UW6sOBHI2-k7sgli4tnnFqtmAAu8ERCjE9',
    buttonStyle: 'outline',
  },
  {
    id: 5,
    name: 'Marshall JCM800',
    category: 'Amplis',
    price: 8500,
    description: 'Ampli de légende pour guitaristes rock. Puissance et saturation historiques.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChweXS6H7zpyjQC_DVMgr2l7ejQegKZsN9llJShlnB3TWPs2mx8mdMQHrLrAmKG3OPco8RzTARwlHDCpw1f8qY5kNUu0qNtWNT4HuBZSln7w-PfXmGpbASNefhZRePj7g1DxddwM6WBEXXp1dv8KHT9rnsCAT5kGm6h5-bO7Zf5g01Raavm9ar1cpylNQLHW1XQ6FB3G5HMYy-iB7f33UW6sOBHI2-k7sgli4tnnFqtmAAu8ERCjE9',
    buttonStyle: 'outline',
  },
]

const categories = ['Tous', 'Guitares', 'Batteries', 'Claviers', 'Micros', 'Amplis']

const LocationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const filteredInstruments =
    selectedCategory === 'Tous' ? instruments : instruments.filter((item) => item.category === selectedCategory)

  return (
    <main className="flex-grow w-full bg-[#fff] text-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 px-4 sm:px-6 md:px-8 text-center">
        <div className="absolute inset-0 top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-[#000]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Catalogue de Location</h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
            Équipez vos sessions avec notre matériel haut de gamme. De la chaleur des lampes aux micros de précision,
            trouvez l'outil parfait pour votre son.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="relative z-10 px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center item-center overflow-x-auto pb-4 gap-3 -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={[
                  'whitespace-nowrap px-6 py-2 rounded-full font-medium transition-all',
                  selectedCategory === category
                    ? 'bg-[#fff] text-[#000] border border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.15)] scale-[1.02]'
                    : 'border border-white/10 text-zinc-300 hover:border-[#d4af37]/50 hover:text-[#d4af37]',
                ].join(' ')}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="relative z-10 px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInstruments.map((item) => (
              <article
                key={item.id}
                className="bg-[#121922] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#d4af37]/30 transition-colors duration-300 flex flex-col shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-64 w-full bg-[#0d1318] overflow-hidden">
                  <img
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    alt={item.name}
                    src={item.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121922] via-[#121922]/20 to-transparent opacity-80" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    <span className="bg-[#fff]/10 text-[#fff] px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-300 mb-6 line-clamp-2 flex-grow">{item.description}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                      <span className="text-xs text-zinc-400 uppercase tracking-wider">Tarif Jour</span>
                      <span className="text-xl font-bold text-[#fff]">{item.price}FCFA</span>
                    </div>
                    <Button
                      className={[
                        'rounded-full font-medium',
                        item.buttonStyle === 'primary'
                          ? 'bg-[#d4af37] text-[#10151a] hover:bg-[#e0bf53] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                          : 'border border-white/10 text-white hover:border-[#d4af37] hover:text-[#d4af37]',
                      ].join(' ')}
                      size="sm"
                    >
                      Louer
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="relative z-10 px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#121922] border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_20px_45px_rgba(0,0,0,0.35)] relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#d4af37]/5 rounded-full blur-[40px] pointer-events-none" />

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3 relative z-10">
              <Music className="h-8 w-8 text-[#d4af37]" />
              Conditions de Location
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <CreditCard className="h-5 w-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Caution & Paiement</h4>
                  <p className="text-sm text-zinc-300">
                    Une empreinte bancaire est requise lors du retrait du matériel. Le montant varie selon la valeur de
                    l'instrument. Le règlement de la location s'effectue à l'avance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Durée & Retours</h4>
                  <p className="text-sm text-zinc-300">
                    Une journée de location correspond à 24 heures à compter du retrait. Tout retard entraînera la
                    facturation d'une journée supplémentaire. Le matériel doit être restitué dans son état initial.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LocationPage
      
    