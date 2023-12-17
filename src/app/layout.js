import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'
import Header from '@/components/Header'

export const metadata = {
  title: '👨‍💻Portfolio Castro Jonathan',
  description: 'Portfolio Castro Jonathan',}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='min-w-min min-h-min'>
        {/* <Header/> */}
        <Navbar/>
        {children}
        <Footer/>    
      </body>
    </html>
  )
}
