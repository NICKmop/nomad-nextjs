import { Metadata } from "next"
import Navigation from "../components/navigation/navigation"

// () -> 그룹 지정
// metadata 명칭 고정
export const metadata:Metadata = {
  title: {
    template: "%s | Next Movies",
    default : "Next Movies"
  },
  description: 'so simple project'
}

// check URL -> rendering page check
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
