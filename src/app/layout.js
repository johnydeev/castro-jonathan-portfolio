
import './globals.css'
import Footer from '@/components/footer'
import Cv from '@/components/Cv'
import Navbar from '@/components/navbar';


export const metadata = {
  title: '👨‍💻Portfolio Castro Jonathan',
  description: 'Portfolio Castro Jonathan',}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="" suppressHydrationWarning={true}>
        <Navbar/>
        <Cv/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
