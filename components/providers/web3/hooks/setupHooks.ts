import Web3 from "web3"
import { handler as createUseAccount } from "./useAccount"

export interface Web3HooksInterface {
  useAccount: () => { account: string | null }
}

export enum Web3HooksEnum {
  useAccount = "useAccount",
}

const DEFAULT_HOOKS: Web3HooksInterface = {
  useAccount: () => ({ account: null }),
}

export const setupHooks = (web3?: Web3): Web3HooksInterface => {
  if (!web3) return DEFAULT_HOOKS
  return {
    useAccount: createUseAccount(web3),
  }
}
