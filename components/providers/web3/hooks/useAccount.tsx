import { useEffect, useState } from "react"
import Web3 from "web3"

export const handler = (web3?: Web3) => () => {
  const [account, setAccount] = useState<string | null>(null)

  useEffect(() => {
    const getAccount = async () => {
      if (!web3) return

      const accounts = await web3.eth.getAccounts()
      setAccount(accounts[0])
    }
    getAccount()
  }, [])

  return { account }
}
