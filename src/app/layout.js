import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'

export const metadata = {
  title: '',
  description: 'Crud no-SQL mongoDB',}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className=''>
        <Navbar/>
        {children}
        <Footer/>      
      </body>
    </html>
  )
}
