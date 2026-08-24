'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MoonStar,
  Phone,
  SunMedium,
  TimerReset,
  UserRound,
  MessageCircle ,
  Loader2,
} from 'lucide-react'

const durations = [
  { id: '2h', label: '2 Heures', tag: 'Standard', value: 2 },
  { id: '4h', label: '4 Heures', tag: 'Populaire', value: 4 },
  { id: '8h', label: 'Journée', tag: '8 Heures +', value: 8 },
]

interface ReservationData {
  selectedDate: Date | null
  selectedDuration: string | null
  selectedTime: string | null
  fullName: string
  phone: string
  musicians: string
}

const WHATSAPP_NUMBER = "22960488512";  
 
function StaffLines({ className = "" }) {
  return (
    <div className={`flex flex-col gap-[5px] ${className}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} style={{ height: 1, background: LINE }} />
      ))}
    </div>
  );
}

const ReservationPage = () => {
   const [date, setDate] = useState<Date | null>(null)
  const [selectedDuration, setSelectedDuration] = useState<string>('2h')
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    musicians: '3-4',
  })
  const BLUE = '#185FA5'
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState<'whatsapp'| null>(null)
 
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }
 
  const handleMusiciansChange = (value: string) => {
    setFormData((prev) => ({ ...prev, musicians: value }))
  }
 
  const buildMessage = () => {
    const durationLabel = durations.find((d) => d.id === selectedDuration)?.label ?? selectedDuration
    return [
      'Nouvelle demande de réservation — Salle de répétition ISAUCHRIST',
      '',
      `Nom / Groupe : ${formData.fullName}`,
      `Téléphone : ${formData.phone}`,
      `Date souhaitée : ${date ? date.toLocaleDateString('fr-FR') : '—'}`,
      `Créneau : ${durationLabel ?? '—'}`,
      `Nombre de musiciens : ${formData.musicians}`,
    ].join('\n')
  }
   
  const validate = () => {
    if (!date || !formData.fullName || !formData.phone) {
      setError('Merci de remplir la date, le créneau, votre nom et votre téléphone.')
      return false
    }
    setError(null)
    return true
  }
  
  const sendViaWhatsApp = () => {
    if (!validate()) return
    const text = encodeURIComponent(buildMessage())
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
    setSent('whatsapp')
    setFormData({
    fullName: '',
    phone: '',
    musicians: '3-4',
  })
  }
 
  return (
    <main className="flex-grow pb-32 md:pb-16 flex flex-col items-center w-full text-white">
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
            Réserver votre salle de répétition
          </h2>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Calendar Card */}
            <div className="bg-[#121922] border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)] relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#d4af37]/10 rounded-full blur-[70px]" />

              <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2 text-white relative z-10 mb-6">
                <CalendarDays className="h-5 w-5 text-[#d4af37]" />
                Date de session
              </h3>

              <div className="flex justify-center relative z-10">
                <Calendar
                  mode="single"
                  selected={date || undefined}
                  onSelect={(newDate) => setDate(newDate || null)}
                  disabled={(date) => {
                    const today = new Date()
                    today.setHours(0, 0, 0, 0)
                    return date < today
                  }}
                  className="rounded-lg border border-white/10 bg-[#0d1318] p-3"
                />
              </div>

              {date && (
                <div className="mt-4 p-3 bg-[#d4af37]/10 border border-[#d4af37]/20 rounded-lg text-center text-sm text-white relative z-10">
                  Date sélectionnée : <span className="font-semibold">{date.toLocaleDateString('fr-FR')}</span>
                </div>
              )}
            </div>

            {/* Duration Selection */}
            <div className="bg-[#121922] border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
              <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2 text-white mb-6">
                <TimerReset className="h-5 w-5 text-[#d4af37]" />
                Durée de la session
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {durations.map((duration) => (
                  <button
                    key={duration.id}
                    onClick={() => setSelectedDuration(duration.id)}
                    className={[
                      'py-4 px-2 rounded-xl border transition-all flex flex-col items-center justify-center gap-1',
                      selectedDuration === duration.id
                        ? 'bg-[#d4af37] text-[#10151a] shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-[1.02]'
                        : 'border-white/10 bg-transparent text-white hover:border-[#d4af37]/70 hover:bg-white/5',
                    ].join(' ')}
                  >
                    <span className="font-semibold text-lg">{duration.label}</span>
                    <span
                      className={
                        selectedDuration === duration.id ? 'text-[#10151a]/80' : 'text-zinc-400'
                      }
                    >
                      {duration.tag}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
    
            {/* Booking Form */}
            <div className="bg-[#0d131b] border border-[#d4af37]/20 rounded-2xl p-6 md:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-60" />

              <h3 className="text-xl md:text-2xl font-semibold flex items-center gap-2 text-white mb-6">
                <UserRound className="h-5 w-5 text-[#d4af37]" />
                Vos informations
              </h3>

             {error && (
                  <div className="p-3 mb-3 rounded-lg text-sm" style={{ background: '#FDECEC', color: '#B3261E' }}>
                    {error}
                  </div>
                )}
 
                {sent && (
                  <div className="p-3 mb-3 rounded-lg text-sm" style={{ background: '#E9F6EC', color: '#1E7A34' }}>
                    {sent === 'whatsapp'
                      ? 'Demande préparée sur WhatsApp — envoyez le message pour la transmettre.'
                      : "Votre client email s'est ouvert — envoyez le message pour la transmettre."}
                  </div>
                )}

                <div className="space-y-2 mb-2">
                  <Label htmlFor="fullName" className="text-zinc-300 text-xs uppercase tracking-[0.2em]">
                    Nom complet
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Artiste ou Groupe"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    required
                    className="bg-[#101923] border border-white/10 text-white placeholder:text-zinc-500 focus-visible:ring-[#d4af37]/60 h-12 rounded-lg"
                  />
                </div>

                <div className="space-y-2 mb-2">
                  <Label htmlFor="phone" className="text-zinc-300 text-xs uppercase tracking-[0.2em]">
                    Téléphone
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+229 01 97 00 00 00"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="bg-[#101923] border border-white/10 text-white placeholder:text-zinc-500 pl-10 focus-visible:ring-[#d4af37]/60 h-12 rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2 mb-2">
                  <Label htmlFor="musicians" className="text-zinc-300 text-xs uppercase tracking-[0.2em]">
                    Nombre de musiciens
                  </Label>
                  <Select value={formData.musicians} onValueChange={handleMusiciansChange}>
                    <SelectTrigger className="w-full bg-[#101923] border border-white/10 text-white h-12 rounded-lg focus:ring-[#d4af37]/60">
                      <SelectValue placeholder="Choisir" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#101923] text-white border-white/10">
                      <SelectItem value="1">1 (Solo)</SelectItem>
                      <SelectItem value="2">2 (Duo)</SelectItem>
                      <SelectItem value="3-4">3 - 4</SelectItem>
                      <SelectItem value="5+">5 et plus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-4 space-y-3">
                  <Button
                    type="button"
                    onClick={sendViaWhatsApp}
                    className="w-full h-14 rounded-full text-base font-semibold"
                    style={{ background: BLUE, color: '#fff' }}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Envoyer par WhatsApp
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  {/* <Button
                    type="submit"
                    disabled={loading || !date || !selectedTime}
                    className="w-full h-14 rounded-full bg-[#d4af37] text-[#10151a] hover:bg-[#e0bf53] disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-lg font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Confirmer la réservation
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button> */}

                  <p className="text-center text-xs md:text-sm text-zinc-400">
                    Un acompte pourra être demandé pour valider la session.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ReservationPage