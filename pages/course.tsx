import type { NextPage } from "next"
import {
  CourseCurriculum,
  CourseHero,
  CourseKeyPoints,
} from "components/course"
import { Modal } from "components/common"

const Course: NextPage = () => {
  const lectures = [
    "How to init App",
    "How to get a help",
    "Introduction to Solidity",
    "Programing in C++",
    "How to write For Loops",
    "Safe operator",
  ]

  return (
    <div className="relative mx-auto max-w-7xl px-4">
      {/*------ HERO STARTS ------*/}
      <CourseHero />
      {/*------ HERO ENDS ------*/}

      {/*------ KEYPOINT STARTS ------*/}
      <CourseKeyPoints />
      {/*------ KEYPOINT ENDS ------*/}

      {/*------ LECTURES STARTS ------*/}
      <CourseCurriculum lectures={lectures} />
      {/*------ LECTURES ENDS ------*/}

      {/* MODAL STARTS */}
      <Modal />
      {/* MODAL ENDS */}
    </div>
  )
}

export default Course
