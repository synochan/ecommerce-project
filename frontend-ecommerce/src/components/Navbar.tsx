const Navbar = () => {
  return (
    <nav className = "bg-amber-950 w-screen h-16 justify-center items-center">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-2xl self-center whitespace-nowrap dark:text-white">LOGO</span>
        </a>
        <div className="items-center justify-between md:order-1 hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-row text-amber-50 space-x-4 ">
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
                <li>New & Trending</li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;