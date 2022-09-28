import "styles/globals.css"
import type { AppProps } from "next/app"
import { appWithTranslation } from "next-i18next"
import { Web3Provider } from "components/providers"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3Provider>
      <Component {...pageProps} />
    </Web3Provider>
  )
}

export default appWithTranslation(MyApp)
