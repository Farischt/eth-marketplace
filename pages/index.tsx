import type { NextPage } from "next"

import { Layout, Breadcrumbs, Hero } from "components/common"
import { EthRates, WalletBar } from "components/web3"
import { OrderCard } from "components/order"
import { CourseList } from "components/course"

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden bg-white">
        <div className="relative mx-auto max-w-7xl px-4">
          {/*------ NAVBAR STARTS ------*/}
          {/*------ NAVBAR ENDS ------*/}
          <div className="fit">
            <Hero />
            <Breadcrumbs />
            <EthRates />
            <WalletBar />
            <OrderCard />
            <CourseList />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
