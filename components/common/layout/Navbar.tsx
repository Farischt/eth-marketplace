const Navbar: React.FC = () => {
  return (
    <section>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <a
                href="#"
                className="mr-8 font-medium text-gray-500 hover:text-gray-900"
              >
                Product
              </a>
              <a
                href="#"
                className="mr-8 font-medium text-gray-500 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#"
                className="mr-8 font-medium text-gray-500 hover:text-gray-900"
              >
                Marketplace
              </a>
            </div>
            <div>
              <a
                href="#"
                className="mr-8 font-medium text-gray-500 hover:text-gray-900"
              >
                Company
              </a>
              <a
                href="#"
                className="mr-8 font-medium text-indigo-600 hover:text-indigo-500"
              >
                Log in
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
