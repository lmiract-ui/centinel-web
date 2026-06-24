import { waLink } from '../config/site'
import { WhatsAppIcon } from './Icons'

/** Botón flotante de WhatsApp — la acción de conversión real del negocio. */
export default function WhatsAppFloat({ mensaje }: { mensaje?: string }) {
  return (
    <a
      href={waLink(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-live-500 text-ink-950 shadow-glow-live transition hover:bg-live-400 active:scale-95"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <span className="absolute inset-0 animate-ping2 rounded-full bg-live-500/60" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  )
}
