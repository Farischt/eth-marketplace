import Link from "next/link"

const Navbar: React.FC = () => {
  return (
    <section>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/">
                <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/marketplace">
                <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  MarkeptPlace
                </a>
              </Link>
              <Link href="/blog">
                <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Blog
                </a>
              </Link>
            </div>
            <div>
              <Link href="/wishlist">
                <a className="mr-8 font-medium text-gray-500 hover:text-gray-900">
                  Wishlist
                </a>
              </Link>
              <Link href="/login">
                <a className="mr-8 font-medium text-indigo-600 hover:text-indigo-500">
                  Log in
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
