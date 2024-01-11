import Navbar from '@/components/navbar'
import './globals.css'
import Footer from '@/components/footer'


export const metadata = {
  title: '👨‍💻Portfolio Castro Jonathan',
  description: 'Portfolio Castro Jonathan',}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className='' suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        <Footer/>    
      </body>
    </html>
  )
}
