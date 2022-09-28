import Link from "next/link"

import { useWeb3 } from "components/providers"
import { useAccount } from "components/web3/hooks/useAccount"

const Navbar: React.FC = () => {
  // const { isWeb3Loaded, connect, isLoading } = useWeb3()
  const { account } = useAccount()
  console.log(account)

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

              {/* {isLoading ? (
                <button
                  onClick={connect}
                  disabled
                  className="bg-indo-600 mr-8 rounded bg-indigo-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Loading...
                </button>
              ) : isWeb3Loaded ? (
                <button
                  onClick={connect}
                  className="bg-indo-600 mr-8 rounded bg-indigo-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Connect
                </button>
              ) : (
                <a
                  href="https://metamask.io/download/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-indo-600 mr-8 rounded bg-indigo-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700"
                >
                  Install Metamask
                </a>
              )} */}
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
