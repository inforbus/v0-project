import type { Metadata } from 'next'
import { OnlineServiceWidget } from '@/components/online-service-widget'

import './globals.css'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'YouSheBiaoTiHei';
            src: url('https://cdn.jsdelivr.net/npm/@zf-web-font/youshebiaotihei@0.2.0/YouSheBiaoTiHei-Regular.woff2') format('woff2'),
                 url('https://cdn.jsdelivr.net/npm/@zf-web-font/youshebiaotihei@0.2.0/YouSheBiaoTiHei-Regular.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Alibaba PuHuiTi Regular';
            src: url('https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlibabaPuHuiTi-3/AlibabaPuHuiTi-3-55-Regular/AlibabaPuHuiTi-3-55-Regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Alibaba PuHuiTi Bold';
            src: url('https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlibabaPuHuiTi-3/AlibabaPuHuiTi-3-85-Bold/AlibabaPuHuiTi-3-85-Bold.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `}} />
      </head>
      <body className="font-sans antialiased">
        {children}
        <OnlineServiceWidget />
      </body>
    </html>
  )
}
