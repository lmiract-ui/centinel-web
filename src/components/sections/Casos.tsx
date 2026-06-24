import { AlertCircle, Wrench, TrendingUp } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { casos } from '../../content/flotas'

export default function Casos() {
  return (
    <section id="casos" className="section">
      <div className="container-app">
        <SectionHeading
          eyebrow="Casos de uso"
          titulo="Empresas que necesitaban más que un punto en el mapa"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {casos.map((c) => (
            <div key={c.rubro} className="surface flex flex-col p-7">
              <h3 className="text-lg font-bold text-white">{c.rubro}</h3>

              <dl className="mt-5 space-y-4 text-sm">
                <CasoLinea
                  icon={<AlertCircle className="h-4 w-4 text-slate-500" />}
                  label="Problema"
                  valor={c.problema}
                />
                <CasoLinea
                  icon={<Wrench className="h-4 w-4 text-brand-300" />}
                  label="Solución"
                  valor={c.solucion}
                />
                <CasoLinea
                  icon={<TrendingUp className="h-4 w-4 text-signal-400" />}
                  label="Resultado"
                  valor={c.resultado}
                  destacado
                />
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CasoLinea({
  icon,
  label,
  valor,
  destacado,
}: {
  icon: React.ReactNode
  label: string
  valor: string
  destacado?: boolean
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5">{icon}</span>
      <div>
        <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </dt>
        <dd className={destacado ? 'font-semibold text-white' : 'text-slate-300'}>{valor}</dd>
      </div>
    </div>
  )
}
