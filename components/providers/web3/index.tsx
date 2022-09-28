import React from "react"
import Web3 from "web3"
import detectEthereumProvider from "@metamask/detect-provider"
import {
  setupHooks,
  Web3HooksEnum,
  Web3HooksInterface,
} from "./hooks/setupHooks"

type Web3ApiBase = {
  provider?: any
  web3?: Web3
  contract?: any
  isLoading: boolean
}

interface Web3ContextInterface extends Web3ApiBase {
  isWeb3Loaded: boolean
  connect: () => void
  getHooks: () => Web3HooksInterface
}

type ProviderProps = {
  children: React.ReactNode
}

const DEFAULT_WEB3_CONTEXT: Web3ContextInterface = {
  provider: undefined,
  web3: undefined,
  contract: undefined,
  isLoading: false,
  isWeb3Loaded: false,
  connect: () => {
    console.log("No provider")
  },
  getHooks: () => setupHooks(undefined),
}

export const Web3Context =
  React.createContext<Web3ContextInterface>(DEFAULT_WEB3_CONTEXT)

export const useWeb3 = () => {
  return React.useContext(Web3Context)
}

// Method to handle different hooks called in the context.
// To be updated hooks rule error here
export const useHooks = (key: Web3HooksEnum) => {
  const { getHooks } = useWeb3()
  return getHooks()[key]
}

export default function Web3Provider({ children }: ProviderProps) {
  const [web3Api, setWeb3Api] = React.useState<Web3ApiBase>({
    provider: undefined,
    web3: undefined,
    contract: undefined,
    isLoading: false,
  })

  React.useEffect(() => {
    const loadProvider = async () => {
      setWeb3Api((prev) => ({ ...prev, isLoading: true }))
      const provider = await detectEthereumProvider()
      if (provider) {
        //@ts-ignore
        const web3 = new Web3(provider)
        setWeb3Api({
          provider,
          web3,
          contract: undefined,
          isLoading: false,
        })
      } else {
        setWeb3Api((state: Web3ApiBase) => ({
          ...state,
          isLoading: false,
        }))
        console.error("Please, install metamask")
      }
    }
    loadProvider()
  }, [])

  const _web3Api: Web3ContextInterface = React.useMemo(() => {
    const { web3, provider, isLoading } = web3Api

    return {
      ...web3Api,
      isWeb3Loaded: !isLoading && web3 !== undefined,
      // Calling setupHooks a function that returns a map of hooks
      getHooks: () => setupHooks(web3),
      connect: provider
        ? async () => {
            try {
              await provider.request({
                method: "eth_requestAccounts",
              })
            } catch (err) {
              console.error("Cannot connect", err)
            }
          }
        : () => {
            console.warn(
              "Cannot connect to metamask, try to reload your browser please."
            )
            location.reload()
          },
    }
  }, [web3Api])

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  )
}
