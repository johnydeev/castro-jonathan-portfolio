import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'


export const metadata = {
  title: '👨‍💻Portfolio Castro Jonathan',
  description: 'Portfolio Castro Jonathan',}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='mx-auto min-h-min'>
        <Navbar/>
        {children}
        <Footer/>    
      </body>
    </html>
  )
}
