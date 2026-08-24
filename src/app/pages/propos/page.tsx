'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send, Facebook, Instagram, Volume2, ShieldCheck, Users, CalendarCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

// ---- Coordonnées à personnaliser --------------------------------------
const WHATSAPP_NUMBER = '22960488512' // indicatif + numéro, sans + ni espaces
const CONTACT_EMAIL = 'bocononisaac@gmail.com'

type FormData = {
  nom: string
  email: string
  objet: string
  message: string
}

const features = [
  { icon: Volume2, label: 'Sonorisation professionnelle' },
  { icon: ShieldCheck, label: 'Équipement de qualité' },
  { icon: Users, label: 'Service professionnel' },
  { icon: CalendarCheck, label: 'Disponible 7j/7' },
]

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    objet: '',
    message: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState<'whatsapp' | 'email' | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const buildMessage = () => {
    return [
      'Nouveau message — Site ISAUCHRIST',
      '',
      `Nom : ${formData.nom}`,
      `Email : ${formData.email}`,
      `Objet : ${formData.objet || '—'}`,
      '',
      formData.message,
    ].join('\n')
  }

  const validate = () => {
    if (!formData.nom || !formData.email || !formData.message) {
      setError('Merci de renseigner votre nom, votre email et votre message.')
      return false
    }
    setError(null)
    return true
  }

  // Pas de backend / base de données : le message part directement en
  // WhatsApp ou en email, comme pour la réservation de salle.
  const sendViaWhatsApp = () => {
    if (!validate()) return
    const text = encodeURIComponent(buildMessage())
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
    setSent('whatsapp')
  }

  const sendViaEmail = () => {
    if (!validate()) return
    const subject = encodeURIComponent(formData.objet || 'Message depuis le site ISAUCHRIST')
    const body = encodeURIComponent(buildMessage())
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent('email')
  }

  return (
    <main className="flex-grow pb-10 md:pb-24  w-full bg-[#fff] text-black">
      {/* Header Section */}
      <section className="relative w-full min-h-[40vh] flex flex-col items-center justify-center py-16 px-4 sm:px-6 border-b border-white/10 overflow-hidden bg-[#080b10]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZBBhtwPOPNDrHve3ujh7JyS1vg_TnCTbqEoaBtrYTNKqXIVupgmGDCpRDOICo5O_I3VJVbdwP8s8-4Ghgm9psFxV_A9lkDrrXeAq3ODqCjrSO93_Ghzmvp0YS7JRX_axvAIwfjIoY-QAGrElW1IL3NuhLyTVAfHWkOHyqGCYzAEuyelGSAcIGATZS6XICuVxoiPLem1lKYpwt_8mEPBPNuTX30KuIdg-UXKsAySEqqqjQHPMGyp48')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b10] via-[#080b10]/80 to-transparent" />

        <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="font-sans text-3xl md:text-6xl font-semibold tracking-tight text-white">
            Contactez-nous
          </h2>
        </div>
      </section>
      <div className="max-w-6xl flex justify-center items-center mx-auto mt-3 mb-8">
        <div className="text-justifier px-4 sm:px-6 md:px-8 md:text-left">
           <p className="text-md md:text-xl text-black max-w-2xl">
            Prêt à donner vie à vos projets musicaux ? Notre équipe est à votre disposition pour toute demande de
            réservation, location de matériel ou information technique.
          </p>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-6xl px-4 sm:px-6 md:px-8 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Info & Map */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Contact Details Card */}
          <div className="bg-[#121922] border border-white/10 rounded-2xl p-8 group hover:border-[#d4af37]/30 transition-colors duration-300 shadow-[0_20px_45px_rgba(0,0,0,0.35)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10">Coordonnées</h2>

            <div className="space-y-6 relative z-10">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-[#d4af37]/30 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-[#fff]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Téléphone</p>
                  <p className="text-md text-white font-medium">+229 01 60 48 85 12 </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-[#d4af37]/30 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#fff]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-md text-white font-medium break-all">bocononisaac@gmail.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-[#d4af37]/30 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-[#fff]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Salle de répétition</p>
                  <p className="text-md text-white font-medium">Womey Jerusalem</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="bg-[#121922] border border-white/10 rounded-2xl p-8 group hover:border-[#d4af37]/30 transition-colors duration-300 shadow-[0_20px_45px_rgba(0,0,0,0.35)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10">Suivez-nous</h2>
            <div className="space-y-6 relative z-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group/link"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-[#d4af37]/30 flex items-center justify-center group-hover/link:border-[#d4af37] transition-colors">
                  <Facebook className="h-5 w-5 text-[#fff]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Facebook</p>
                  <p className="text-md text-white font-medium">Boconon Isaac</p>
                </div>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group/link"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 border border-[#d4af37]/30 flex items-center justify-center group-hover/link:border-[#d4af37] transition-colors">
                  <Instagram className="h-5 w-5 text-[#fff]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider mb-1">Instagram</p>
                  <p className="text-md text-white font-medium">Isaac Boconon</p>
                </div>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-[#121922] border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
            <iframe
              title="Localisation ISAUCHRIST"
              src="https://www.google.com/maps?q=Womey+Jerusalem&output=embed"
              className="w-full h-56 md:h-64 grayscale-[40%] contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#121922] border border-white/10 rounded-2xl p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 relative z-10">Envoyez-nous un message</h2>

            <div className="flex flex-col gap-5 relative z-10">
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}
              {sent && (
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  {sent === 'whatsapp'
                    ? 'Message préparé sur WhatsApp — envoyez-le pour le transmettre.'
                    : "Votre client email s'est ouvert — envoyez le message pour le transmettre."}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="nom" className="text-zinc-300 text-xs uppercase tracking-[0.2em]">
                    Nom complet
                  </Label>
                  <Input
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    className="bg-[#101923] border border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-[#d4af37]/60 h-12 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-300 text-xs uppercase tracking-[0.2em]">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="vous@email.com"
                    className="bg-[#101923] border border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-[#d4af37]/60 h-12 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="objet" className="text-zinc-300 text-xs uppercase tracking-[0.2em]">
                  Objet
                </Label>
                <Input
                  id="objet"
                  name="objet"
                  value={formData.objet}
                  onChange={handleInputChange}
                  placeholder="Réservation, location d'instrument, information..."
                  className="bg-[#101923] border border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-[#d4af37]/60 h-12 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-300 text-xs uppercase tracking-[0.2em]">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Votre message..."
                  rows={6}
                  className="bg-[#101923] border border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-[#d4af37]/60 rounded-lg resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  onClick={sendViaWhatsApp}
                  className="flex-1 h-14 rounded-full bg-[#d4af37] text-[#10151a] hover:bg-[#e0bf53] text-base font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer par WhatsApp
                </Button>
                <Button
                  type="button"
                  onClick={sendViaEmail}
                  variant="outline"
                  className="flex-1 h-14 rounded-full border-white/20 text-white hover:bg-white/5 text-base font-semibold"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Envoyer par email
                </Button>
              </div>

              <p className="text-center text-xs md:text-sm text-zinc-400">
                Nous vous répondons généralement sous 24h.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* À Propos Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 mt-16">
        <div className="bg-[#121922] border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_20px_45px_rgba(0,0,0,0.35)] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-[70px]" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">À propos d'ISAUCHRIST</h2>
            <p className="text-zinc-300 text-md md:text-lg max-w-3xl leading-relaxed mb-4">
              ISAUCHRIST est né de la passion pour la musique et l'exigence du son bien fait. Fondée par
              Boconon Isaac, l'entreprise met à disposition des musiciens et des groupes une salle de
              répétition équipée et insonorisée, ainsi qu'un large choix d'instruments et de matériel de
              sonorisation en location.
            </p>
            <p className="text-zinc-300 text-md md:text-lg max-w-3xl leading-relaxed mb-10">
              Notre engagement : offrir un espace professionnel, du matériel fiable et un accompagnement
              sérieux, pour que chaque artiste puisse répéter et créer dans les meilleures conditions,
              7 jours sur 7.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((f) => (
                <div
                  key={f.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col items-center text-center gap-3"
                >
                  <f.icon className="h-6 w-6 text-[#d4af37]" />
                  <p className="text-sm text-white font-medium">{f.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ContactPage