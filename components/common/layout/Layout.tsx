import { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
