interface Props {
  eyebrow?: string
  titulo: React.ReactNode
  texto?: React.ReactNode
  className?: string
}

/** Encabezado estándar de sección (eyebrow + título + bajada). */
export default function SectionHeading({ eyebrow, titulo, texto, className = '' }: Props) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-3 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
        {titulo}
      </h2>
      {texto && <p className="mx-auto mt-4 max-w-xl text-pretty text-slate-400">{texto}</p>}
    </div>
  )
}
