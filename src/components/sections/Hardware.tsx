import SectionHeading from './SectionHeading'
import { hardware } from '../../content/flotas'

export default function Hardware() {
  return (
    <section id="hardware" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-ink-900/40" />
      <div className="container-app">
        <SectionHeading
          eyebrow="Hardware serio"
          titulo={
            <>
              El problema no siempre es el GPS.
              <br className="hidden sm:block" /> Muchas veces es el equipo equivocado para tu
              operación.
            </>
          }
          texto="Usamos hardware probado según el tipo de vehículo, consumo eléctrico, cobertura, instalación, nivel de exigencia y datos que necesitás medir. No es lo mismo rastrear una moto, una camioneta urbana, un camión de larga distancia o una unidad con sensores."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hardware.map((h) => {
            const Icon = h.icon
            return (
              <div key={h.titulo} className="surface surface-hover p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-500/10 ring-1 ring-inset ring-white/10">
                  <Icon className="h-6 w-6 text-signal-400" />
                </span>
                <h3 className="mt-4 text-base font-bold text-white">{h.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{h.texto}</p>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-signal-500/20 bg-signal-500/[0.06] px-6 py-5 text-center">
          <p className="text-balance text-lg font-bold text-white">
            Un sistema barato que se cae termina saliendo caro.
          </p>
        </div>
      </div>
    </section>
  )
}
