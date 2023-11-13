import './globals.css'

export const metadata = {
  title: 'CRUD-MONGO',
  description: 'Crud no-SQL con mongoDB',}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className=''>
        {children}
      </body>
    </html>
  )
}
