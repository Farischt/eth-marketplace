const OrderCard: React.FC = () => {
  return (
    <div className="mb-3 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Next JS & Typescript with Shopify Integration - Full Guide
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">0.0065 ETH</p>
      </div>

      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Order ID</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              0x9a4e56614591da8c1ad30fe04ac672111a7f20faa92f7c484568b0213bfbf405
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Proof</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              0x95f147a2c0ced33a2d49b7ce780bc2a9cf404593c64658b336ab2eb7d9136d90
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:px-6">
            <div className="mb-3 rounded-xl bg-green-100">
              <div className="mx-auto max-w-7xl py-3 px-3 sm:px-3 lg:px-3">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex w-0 flex-1 items-center">
                    <p className="ml-3 truncate font-medium text-green-900">
                      <span className="hidden md:inline">Purchased!</span>
                    </p>
                  </div>
                  <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <button
                      type="button"
                      className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                    >
                      <span className="sr-only">Dismiss</span>
                      <svg
                        className="h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow-md">
                <a
                  href="#"
                  className="md:text-md flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-black hover:bg-gray-100 md:py-4 md:px-10"
                >
                  Watch the course
                </a>
              </div>
            </div>
            <div className="mt-2">
              <div className="relative mt-1 w-72 rounded-md">
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block rounded-md border-gray-300 p-4 pl-7 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="x@y.com"
                />
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <label htmlFor="currency" className="sr-only">
                    Currency
                  </label>
                  <div className="flex lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-sm text-white hover:bg-indigo-700 md:py-4 md:px-10"
                      >
                        Search
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative inline-block w-full text-gray-700">
              <select
                className="focus:shadow-outline h-10 w-72 appearance-none rounded-lg border pl-3 pr-6 text-base placeholder-gray-600"
                placeholder="Regular input"
              >
                <option>A regular sized select input</option>
                <option>Another option</option>
                <option>And one more</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default OrderCard
