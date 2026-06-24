import SectionHeading from './SectionHeading'
import { soluciones } from '../../content/flotas'

export default function Soluciones() {
  return (
    <section id="soluciones" className="section">
      <div className="container-app">
        <SectionHeading
          eyebrow="Soluciones por rubro"
          titulo={
            <>
              Cada flota tiene un problema distinto.
              <br className="hidden sm:block" /> Por eso no instalamos lo mismo en todos.
            </>
          }
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {soluciones.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.titulo} className="surface surface-hover p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 ring-1 ring-inset ring-white/10">
                  <Icon className="h-6 w-6 text-brand-300" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{s.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.texto}</p>
              </div>
            )
          })}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-balance text-center text-lg font-medium text-slate-300">
          Si tiene motor, se puede controlar. La diferencia está en elegir bien el equipo, la
          plataforma y la configuración.
        </p>
      </div>
    </section>
  )
}
