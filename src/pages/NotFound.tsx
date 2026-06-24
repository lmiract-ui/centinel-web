import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { site } from '../config/site'

export default function NotFound() {
  useEffect(() => {
    document.title = `Página no encontrada — ${site.brand}`
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div className="map-grid absolute inset-0 -z-10 opacity-50" />
      <div className="container-app flex min-h-[70vh] flex-col items-center justify-center py-16 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10 ring-1 ring-inset ring-white/10">
          <Compass className="h-8 w-8 text-brand-300" />
        </span>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-brand-300">
          Error 404
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Esta ruta no existe
        </h1>
        <p className="mt-3 max-w-sm text-pretty text-slate-400">
          La página que buscás no está disponible o cambió de lugar.
        </p>
        <Link to="/" className="btn-primary mt-7">
          Ir al inicio
        </Link>
      </div>
    </section>
  )
}
