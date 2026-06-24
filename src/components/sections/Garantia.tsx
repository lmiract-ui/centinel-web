import { ShieldCheck, Cloud, Zap, type LucideIcon } from 'lucide-react'

interface Item {
  icon: LucideIcon
  titulo: string
  texto: string
}

const items: Item[] = [
  {
    icon: ShieldCheck,
    titulo: '99,5% de estabilidad',
    texto: 'Disponibilidad garantizada del sistema.',
  },
  {
    icon: Cloud,
    titulo: 'Infraestructura Amazon (AWS)',
    texto: 'Alojada en servidores de primer nivel.',
  },
  {
    icon: Zap,
    titulo: 'Rápida y simple',
    texto: 'Seguí y gestioná tu flota sin complicaciones.',
  },
]

/** Banda de confianza: estabilidad e infraestructura de la plataforma. */
export default function Garantia() {
  return (
    <section className="border-y border-white/5 bg-ink-900/50">
      <div className="container-app py-12 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-3">
          {items.map((it) => {
            const Icon = it.icon
            return (
              <div
                key={it.titulo}
                className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 ring-1 ring-inset ring-white/10">
                  <Icon className="h-6 w-6 text-brand-300" />
                </span>
                <div className="mt-3 sm:mt-0">
                  <h3 className="text-lg font-extrabold tracking-tight text-white">{it.titulo}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{it.texto}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
