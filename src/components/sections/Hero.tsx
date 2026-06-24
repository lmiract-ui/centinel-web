import { ArrowRight, MessageCircle } from 'lucide-react'
import { waLink } from '../../config/site'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="map-grid absolute inset-0 -z-10 opacity-50" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[560px] bg-grid-fade" />

      <div className="container-app pt-12 pb-6 sm:pt-16 lg:pt-20">
        <div className="grid items-start gap-x-12 gap-y-8 lg:grid-cols-2">
          {/* Texto (título + subtítulo) */}
          <div className="order-1 animate-fade-up text-center lg:order-none lg:col-start-1 lg:row-start-1 lg:text-left">
            <span className="pill-live mx-auto lg:mx-0">
              <span className="h-1.5 w-1.5 rounded-full bg-live-400" />
              Soluciones de control vehicular a medida
            </span>

            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Tengas 3 unidades o 300,
              <br />
              <span className="bg-gradient-to-r from-brand-300 to-signal-400 bg-clip-text text-transparent">
                tenés que saber qué pasa con cada una.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-400 lg:mx-0 lg:text-lg">
              Una flota mal controlada pierde plata todos los días, aunque todos los vehículos estén
              andando. Te damos el control para que eso no te pase.
            </p>
          </div>

          {/* Visual (imagen + features) — en mobile va antes de los CTAs */}
          <div className="order-2 animate-fade-up [animation-delay:120ms] lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-brand-500/15 blur-3xl" />
              <picture>
                <source srcSet="/hero-plataforma.webp" type="image/webp" />
                <img
                  src="/hero-plataforma.png"
                  alt="Plataforma Centinel: rastreo en tiempo real, geocercas, videotelemática, gestión de combustible, conducción y reportes"
                  width={1655}
                  height={950}
                  className="w-full rounded-2xl border border-white/10 bg-white shadow-card"
                />
              </picture>
              <p className="mt-4 text-center text-sm text-slate-500">
                Rastreo en tiempo real · Geocercas · Videotelemática · Gestión de combustible ·
                Comportamiento del conductor · Optimización de rutas · Lectura de sensores · Alertas
                · Reportes avanzados.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="order-3 lg:order-none lg:col-start-1 lg:row-start-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#diagnostico" className="btn-signal">
                Solicitar diagnóstico
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <MessageCircle className="h-4 w-4" />
                Hablar con un asesor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
