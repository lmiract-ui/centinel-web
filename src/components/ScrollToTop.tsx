import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Lleva el scroll al tope al cambiar de ruta (comportamiento esperado en SPA). */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
