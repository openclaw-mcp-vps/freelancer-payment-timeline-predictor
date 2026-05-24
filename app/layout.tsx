import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PayPredict — Know When Clients Will Actually Pay',
  description: 'Predict invoice payment dates using client payment pattern analysis. Manage cash flow with confidence as a freelancer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9f684ee6-9a6a-4314-9ad6-1789ce8cce16"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
