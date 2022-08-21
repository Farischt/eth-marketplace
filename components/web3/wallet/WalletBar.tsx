const WalletBar: React.FC = () => {
  return (
    <section className="bg-indigo-600 text-white">
      <div className="p-8">
        <h1 className="text-2xl">
          Hello, 0xd9D5cD41Fe921A743F2b5Fe71CC3070F5C176208
        </h1>
        <h2 className="subtitle mb-5 text-xl">
          I hope you are having a great day!
        </h2>
        <div className="flex items-center justify-between">
          <div className="sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-black hover:bg-gray-100 md:py-4 md:px-10 md:text-lg"
              >
                Learn how to purchase
              </a>
            </div>
          </div>
          <div>
            <div>
              <span>Currently on </span>
              <strong className="text-2xl">Ethereum Main Network</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WalletBar
