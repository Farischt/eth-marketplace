import { ReactNode } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

type Props = {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
