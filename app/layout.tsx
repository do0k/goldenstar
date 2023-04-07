import './globals.css'
import localFont from "next/font/local"
import { Vazirmatn } from "next/font/google"

const font = Vazirmatn({
  subsets: ['latin', 'arabic']
})

const iranFont = localFont({
  src: [
    {
      path: './assets/fonts/iran/woff2/IRAN.woff2',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: './assets/fonts/iran/woff2/IRANBold.woff2',
      weight: 'bold',
      style: 'normal'
    },
    {
      path: './assets/fonts/iran/woff2/IRAN_SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './assets/fonts/iran/woff2/IRANBlack.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
})

const sahelFont = localFont({
  src: [
    {
      path: './assets/fonts/sahel/Sahel.woff',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: './assets/fonts/sahel/Sahel-Bold.woff',
      weight: 'bold',
      style: 'normal'
    },
    {
      path: './assets/fonts/sahel/Sahel-Black.woff',
      weight: '900',
      style: 'normal'
    }
  ]
})

const isans = localFont({
  src: [
    {
      path: './assets/fonts/isans/isans-Regular.ttf',
      weight: 'normal',
      style: 'normal'
    },
    {
      path: './assets/fonts/isans/isans-Bold.ttf',
      weight: 'bold',
      style: 'normal'
    },
    {
      path: './assets/fonts/isans/isans-ExtraBold.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: './assets/fonts/isans/isans-DemiBold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './assets/fonts/isans/isans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './assets/fonts/isans/isans-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './assets/fonts/isans/isans-Thin.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './assets/fonts/isans/isans-UltraLight.ttf',
      weight: '100',
      style: 'normal'
    },
  ]
})

export const metadata = {
  title: 'هتل ستاره طلایی',
  description: 'نرم افزار مدیریت هتل ستاره طلایی کیش',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir='rtl'>
      <body className={isans.className}>{children}</body>
    </html>
  )
}
