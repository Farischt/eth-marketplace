const Breadcrumbs: React.FC = () => {
  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="flex divide-x divide-indigo-400 leading-none text-indigo-600">
        <li className="pr-4">
          <a href="#">Buy</a>
        </li>
        <li className="px-4">
          <a href="#">My Orders</a>
        </li>
        <li className="px-4">
          <a href="#">All Orders</a>
        </li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
