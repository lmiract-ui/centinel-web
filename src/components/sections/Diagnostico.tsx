import { useState } from 'react'
import { ShieldCheck } from 'lucide-react'
import { waLink } from '../../config/site'
import { WhatsAppIcon } from '../Icons'

interface FormState {
  nombre: string
  empresa: string
  unidades: string
  vehiculos: string
  yaTenes: string
  problema: string
  whatsapp: string
}

const inicial: FormState = {
  nombre: '',
  empresa: '',
  unidades: '',
  vehiculos: '',
  yaTenes: '',
  problema: '',
  whatsapp: '',
}

export default function Diagnostico() {
  const [form, setForm] = useState<FormState>(inicial)

  function update<K extends keyof FormState>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const msg = [
      'Hola, quiero un diagnóstico de mi flota.',
      '',
      `Nombre: ${form.nombre || '-'}`,
      `Empresa: ${form.empresa || '-'}`,
      `Cantidad de unidades: ${form.unidades || '-'}`,
      `Tipo de vehículos: ${form.vehiculos || '-'}`,
      `¿Ya tiene rastreo?: ${form.yaTenes || '-'}`,
      `Problema a resolver: ${form.problema || '-'}`,
      form.whatsapp ? `Mi WhatsApp: ${form.whatsapp}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(waLink(msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="diagnostico" className="section relative overflow-hidden">
      <div className="map-grid absolute inset-0 -z-10 opacity-40" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[420px] bg-grid-fade rotate-180" />

      <div className="container-app">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Solicitar diagnóstico</span>
          <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Contanos cómo es tu flota.
            <br className="hidden sm:block" /> Te decimos qué sistema tiene sentido.
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="surface mx-auto mt-10 max-w-2xl space-y-4 p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nombre" required>
              <input
                type="text"
                required
                value={form.nombre}
                onChange={(e) => update('nombre', e.target.value)}
                className="input"
                placeholder="Tu nombre"
              />
            </Field>
            <Field label="Empresa">
              <input
                type="text"
                value={form.empresa}
                onChange={(e) => update('empresa', e.target.value)}
                className="input"
                placeholder="Nombre de la empresa"
              />
            </Field>
            <Field label="Cantidad de unidades">
              <input
                type="text"
                inputMode="numeric"
                value={form.unidades}
                onChange={(e) => update('unidades', e.target.value)}
                className="input"
                placeholder="Ej: 8"
              />
            </Field>
            <Field label="Tipo de vehículos">
              <input
                type="text"
                value={form.vehiculos}
                onChange={(e) => update('vehiculos', e.target.value)}
                className="input"
                placeholder="Camiones, utilitarios, motos…"
              />
            </Field>
            <Field label="¿Ya tenés rastreo?">
              <select
                value={form.yaTenes}
                onChange={(e) => update('yaTenes', e.target.value)}
                className="input"
              >
                <option value="">Elegí una opción</option>
                <option value="No">No, todavía no</option>
                <option value="Sí, pero quiero mejorarlo">Sí, pero quiero mejorarlo</option>
                <option value="Sí, y funciona bien">Sí, y funciona bien</option>
              </select>
            </Field>
            <Field label="WhatsApp" required>
              <input
                type="tel"
                required
                value={form.whatsapp}
                onChange={(e) => update('whatsapp', e.target.value)}
                className="input"
                placeholder="Ej: 351 555 1234"
              />
            </Field>
          </div>

          <Field label="¿Qué problema querés resolver?">
            <textarea
              rows={3}
              value={form.problema}
              onChange={(e) => update('problema', e.target.value)}
              className="input resize-none"
              placeholder="Contanos qué te pasa hoy con tu flota…"
            />
          </Field>

          <button type="submit" className="btn-signal w-full py-3.5 text-base">
            <WhatsAppIcon className="h-5 w-5" />
            Solicitar diagnóstico de flota
          </button>

          <p className="flex items-center justify-center gap-2 text-center text-sm text-slate-500">
            <ShieldCheck className="h-4 w-4 text-live-400" />
            No vendemos paquetes cerrados. Analizamos tu operación y te recomendamos una solución
            acorde.
          </p>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-300">
        {label}
        {required && <span className="ml-0.5 text-signal-400">*</span>}
      </span>
      {children}
    </label>
  )
}
