import '../styles/globals.css'

export const metadata = {
  title: 'Zodiac Sign Predictor',
  description: 'Discover your zodiac sign based on your birth date',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
