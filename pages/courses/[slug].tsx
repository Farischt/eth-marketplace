import type { GetStaticPaths, GetStaticProps, NextPage } from "next"
import {
  CourseCurriculum,
  CourseHero,
  CourseKeyPoints,
} from "components/course"
import { Layout, Modal } from "components/common"
import { getAllCourses } from "data/courses/fetcher"
import { CourseBaseData } from "types"

type Props = {
  course: CourseBaseData
}

const CourseSinglePage: NextPage<Props> = ({ course }) => {
  return (
    <Layout>
      <div className="py-4">
        <CourseHero
          title={course.title}
          description={course.description}
          image={course.coverImage}
        />
      </div>
      <CourseKeyPoints keyPoints={course.wsl} />
      <div className="py-8">
        <CourseCurriculum locked />
      </div>
      <Modal />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const { data } = getAllCourses()

  return {
    paths: data.map((c) => ({
      params: {
        slug: c.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { data } = getAllCourses()
  const course = data.filter((c) => c.slug === params?.slug)[0]

  return {
    props: {
      course,
    },
  }
}

export default CourseSinglePage
