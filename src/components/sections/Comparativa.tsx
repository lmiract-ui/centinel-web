import { Check, X } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { comparativa } from '../../content/flotas'
import { waLink } from '../../config/site'

export default function Comparativa() {
  return (
    <section id="comparativa" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-ink-900/40" />
      <div className="container-app">
        <SectionHeading
          eyebrow="Comparativa"
          titulo="¿Ya tenés rastreo y aun así renegás?"
          texto="La diferencia entre un sistema que te hace perder tiempo y uno que te da control real."
        />

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-white/10">
          {/* Encabezado */}
          <div className="grid grid-cols-2 border-b border-white/10 bg-ink-800/60">
            <div className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-500 sm:px-6">
              Sistema común
            </div>
            <div className="border-l border-white/10 bg-brand-500/[0.07] px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-brand-300 sm:px-6">
              Centinel Flotas
            </div>
          </div>

          {/* Filas */}
          <div className="divide-y divide-white/5">
            {comparativa.map((fila) => (
              <div key={fila.centinel} className="grid grid-cols-2">
                <div className="flex items-start gap-2 px-4 py-4 sm:px-6">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
                  <span className="text-sm text-slate-500">{fila.comun}</span>
                </div>
                <div className="flex items-start gap-2 border-l border-white/10 bg-brand-500/[0.04] px-4 py-4 sm:px-6">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal-400" />
                  <span className="text-sm font-medium text-slate-200">{fila.centinel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={waLink('Hola, ya tengo un sistema de rastreo y quiero que lo revisen.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-signal"
          >
            Quiero revisar mi sistema actual
          </a>
        </div>
      </div>
    </section>
  )
}
