import { Check, Globe2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { plataformas } from '../../content/flotas'

export default function Plataformas() {
  return (
    <section id="plataformas" className="section">
      <div className="container-app">
        <SectionHeading
          eyebrow="Plataformas"
          titulo="Plataformas según el nivel de control que necesitás"
          texto="Dos caminos, según tu operación: una solución simple para el control diario y una plataforma premium para telemetría avanzada."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {plataformas.map((p) => (
            <div
              key={p.nombre}
              className={`surface relative flex flex-col p-7 ${
                p.destacada ? 'border-brand-400/40 shadow-glow' : ''
              }`}
            >
              {p.destacada && (
                <span className="absolute right-5 top-5 rounded-full bg-brand-500/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-300">
                  Avanzada
                </span>
              )}

              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {p.nivel}
              </span>

              {/* Logo de la plataforma sobre un chip claro para máxima legibilidad */}
              <div className="mt-3 inline-flex h-12 items-center self-start rounded-lg bg-white px-3 py-2">
                <img src={p.logo} alt={p.nombre} className="h-full w-auto" />
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-400">{p.resumen}</p>

              <ul className="mt-5 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <Check
                      className={`h-4 w-4 shrink-0 ${
                        p.destacada ? 'text-brand-300' : 'text-signal-400'
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-white/10 pt-4 text-sm italic leading-relaxed text-slate-400">
                {p.texto}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-2xl border border-brand-400/20 bg-brand-500/[0.06] px-6 py-5 text-center">
          <Globe2 className="hidden h-7 w-7 shrink-0 text-brand-300 sm:block" />
          <p className="text-balance text-base font-semibold text-white sm:text-lg">
            Plataformas con trayectoria internacional, años de desarrollo y reconocimiento global.
          </p>
        </div>
      </div>
    </section>
  )
}
