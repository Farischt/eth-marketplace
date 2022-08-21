const EthRates: React.FC = () => {
  return (
    <div className="mb-5 grid grid-cols-4">
      <div className="flex flex-1 items-stretch text-center">
        <div className="rounded-md border p-10 drop-shadow">
          <div>
            <span className="text-2xl font-bold">ETH = 3145.1$</span>
          </div>
          <p className="text-xl text-gray-500">Current eth Price</p>
        </div>
      </div>
      <div className="flex flex-1 items-stretch text-center">
        <div className="rounded-md border p-10 drop-shadow">
          <div>
            <span className="text-2xl font-bold">0.004769 = 15$</span>
          </div>
          <p className="text-xl text-gray-500">Price per course</p>
        </div>
      </div>
    </div>
  )
}

export default EthRates
