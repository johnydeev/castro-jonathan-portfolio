import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'


export const metadata = {
  title: '👨‍💻Portfolio Castro Jonathan',
  description: 'Portfolio Castro Jonathan',}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='min-w-min'>
        <Navbar/>
        {children}
        <Footer/>    
      </body>
    </html>
  )
}
