import SectionHeading from './SectionHeading'
import { proceso } from '../../content/flotas'

export default function Proceso() {
  return (
    <section id="proceso" className="section">
      <div className="container-app">
        <SectionHeading
          eyebrow="Cómo armamos tu solución"
          titulo={
            <>
              No empezamos instalando.
              <br className="hidden sm:block" /> Empezamos entendiendo tu operación.
            </>
          }
        />

        <ol className="mx-auto mt-12 max-w-3xl space-y-3">
          {proceso.map((paso) => {
            const Icon = paso.icon
            return (
              <li key={paso.n} className="surface flex items-start gap-4 p-5 sm:gap-5 sm:p-6">
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 ring-1 ring-inset ring-white/10">
                  <Icon className="h-6 w-6 text-brand-300" />
                  <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-signal-500 text-[11px] font-extrabold text-ink-950">
                    {paso.n}
                  </span>
                </span>
                <div className="pt-0.5">
                  <h3 className="text-base font-bold text-white">{paso.titulo}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{paso.texto}</p>
                </div>
              </li>
            )
          })}
        </ol>

        <p className="mx-auto mt-10 max-w-2xl text-balance text-center text-lg font-medium text-slate-300">
          La diferencia no está solo en instalar GPS. Está en configurar un sistema que tu empresa
          realmente pueda usar.
        </p>
      </div>
    </section>
  )
}
