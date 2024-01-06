import './globals.css'
import './stylesheets/mediaQuery.css'
import "remixicon/fonts/remixicon.css"
export const metadata = {
  title: 'My Next App',
  description: 'Generated by Rehaan Ansari',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body >{children}</body>
    </html>
  )
}