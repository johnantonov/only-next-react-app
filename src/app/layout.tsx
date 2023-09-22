import './globals.css'
import { Footer } from './sections/Footer/Footer'
import { Header } from './sections/Header/Header'
import { CartProvider } from './shared/Сart/CartContext'


export const metadata = {
  title: 'HealthShoper',
  description: 'ТОВАРЫ ДЛЯ ЗДОРОВЬЯ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
        <body>
          <CartProvider>
            <Header />
            {children}
            <Footer /> 
          </CartProvider>
        </body>
    </html>
  )
}
