import SectionHeading from './SectionHeading'
import { vistasCamara } from '../../content/flotas'

export default function Dashcams() {
  return (
    <section id="dashcams" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-ink-900/40" />
      <div className="container-app">
        <SectionHeading
          eyebrow="Dashcams · Videotelemática"
          titulo="Cuando ver la ubicación no alcanza, necesitás ver lo que pasó."
          texto="Integramos dashcams para sumar evidencia visual, control de conducción, eventos de riesgo, seguridad del chofer y respaldo ante incidentes."
        />

        {/* Video real — pieza central */}
        <div className="relative mx-auto mt-12 max-w-4xl">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-500/15 blur-3xl" />
          <div className="surface overflow-hidden p-2 shadow-card">
            <div className="relative overflow-hidden rounded-xl bg-black">
              <video
                className="block w-full"
                src="/dashcam-demo.mp4"
                poster="/dashcam-demo.jpg"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              />
            </div>
          </div>
        </div>

        {/* Las 3 vistas de cámara */}
        <div className="mx-auto mt-14 max-w-5xl">
          <h3 className="text-balance text-center text-2xl font-extrabold tracking-tight text-white">
            Hasta 3 cámaras por vehículo: ruta, habitáculo y exterior/depósito.
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {vistasCamara.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.titulo} className="surface surface-hover flex flex-col p-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 ring-1 ring-inset ring-white/10">
                    <Icon className="h-6 w-6 text-brand-300" />
                  </span>
                  <h4 className="mt-4 text-base font-bold text-white">{v.titulo}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{v.texto}</p>
                </div>
              )
            })}
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-balance text-center text-lg font-medium text-slate-300">
          El mapa te muestra dónde está tu flota.{' '}
          <span className="text-white">La cámara te muestra qué ocurrió.</span>
        </p>
      </div>
    </section>
  )
}
