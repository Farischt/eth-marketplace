const Hero: React.FC = () => {
  return (
    <section className="lg:2/6 my-28 text-left">
      <div className="text-6xl font-semibold leading-none text-gray-900">
        Grow your career as a developer
      </div>
      <div className="text-true-gray-500 mt-6 text-xl font-light antialiased">
        Learn programming and web development the easy way! Get unlimited access
        to all of our courses.
      </div>
      <div className="mt-5 flex sm:mt-8 lg:justify-start">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
