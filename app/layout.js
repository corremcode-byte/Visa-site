import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import LayoutWrapper from '@/components/LayoutWrapper'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: {
    template: '%s | Zeno Global',
    default: 'Visa Consultants in Delhi │ Zeno Global Private Limited',
  },
  description: 'Trusted visa consultants in Delhi since 2012. 1,00,000+ applications processed. Tourist, Business, Student & more. Call or WhatsApp for expert guidance.',
  keywords: 'visa consultants Delhi, tourist visa Delhi, business visa, student visa, VFS Global partner',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Zeno Global Private Limited',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  )
}
