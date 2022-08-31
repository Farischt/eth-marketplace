import type { GetStaticProps, NextPage } from "next"

import type { CourseBaseData } from "types"
import { getAllCourses } from "data/courses/fetcher"
import { Layout, Breadcrumbs, Hero } from "components/common"
import { EthRates, WalletBar } from "components/web3"
import { OrderCard } from "components/order"
import { CourseList } from "components/course"

type Props = {
  courses: CourseBaseData[]
}

const Home: NextPage<Props> = ({ courses }) => {
  return (
    <Layout>
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
