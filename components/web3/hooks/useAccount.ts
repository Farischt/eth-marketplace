import { useHooks } from "components/providers/web3"
import { Web3HooksEnum } from "components/providers/web3/hooks/setupHooks"

export const useAccount = () => {
  return useHooks(Web3HooksEnum.useAccount)()
}
