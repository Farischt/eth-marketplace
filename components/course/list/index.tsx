import Image from "next/image"
import Link from "next/link"

import type { CourseBaseData } from "types"

type Props = {
  courses: CourseBaseData[]
}

const CourseList: React.FC<Props> = ({ courses }) => {
  return (
    <section className="mb-5 grid gap-4 md:grid-cols-1 lg:grid-cols-2">
      {courses.map((course) => (
        <div
          key={course.id}
          className="overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl"
        >
          <div className="flex h-full">
            <div className="flex h-full">
              <Image
                className="object-cover"
                src={course.coverImage}
                layout={"fixed"}
                width={200}
                height={230}
                alt={course.title}
              />
            </div>
            <div className="p-8">
              <div className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
                {course.type}
              </div>
              <Link href="/courses/[slug]" as={`/courses/${course.slug}`}>
                <a className="mt-1 block text-lg font-medium leading-tight text-black hover:underline">
                  {course.title}
                </a>
              </Link>
              <p className="mt-2 text-gray-500">{course.description}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default CourseList
