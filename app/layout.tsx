import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alejandro Juárez Hernández — Full Stack Developer',
  description: 'Full Stack Developer & Database Engineer. Backend, frontend y bases de datos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}