type Props = {
  keyPoints: string[]
}

const CourseKeyPoints: React.FC<Props> = ({ keyPoints }) => {
  return (
    <section>
      <div className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10">
            <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {keyPoints.map((k, i) => {
                return (
                  <div key={i} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        Keypoint {i + 1}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{k}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CourseKeyPoints
