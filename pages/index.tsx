import type { GetStaticProps, NextPage } from "next"

import { useWeb3 } from "components/providers"
import type { CourseBaseData } from "types"
import { getAllCourses } from "data/courses/fetcher"
import { Layout, Breadcrumbs, Hero } from "components/ui/common"
import { EthRates, WalletBar } from "components/ui/web3"
import { OrderCard } from "components/ui/order"
import { CourseList } from "components/ui/course"

type Props = {
  courses: CourseBaseData[]
}

const Home: NextPage<Props> = ({ courses }) => {
  const { web3, isLoading } = useWeb3()
  return (
    <Layout>
      {isLoading ? (
        <div>Loading...</div>
      ) : web3 ? (
        <div> Metamask </div>
      ) : (
        <div> Please install metamask </div>
      )}
      <Hero />
      <Breadcrumbs />
      <EthRates />
      <WalletBar />
      <OrderCard />
      <CourseList courses={courses} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const { data } = getAllCourses()

  return {
    props: {
      courses: data,
    },
  }
}

export default Home
