export default function Menu() {

  return (

      <div className="flex">

          <ul className="flex h-screen w-screen justify-center">
            <li className="mr-2">Home</li>
            <li className="mr-2">Photo</li>
            <li>Info</li>
          </ul>

        {/* <button className="" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XMarkIcon className="h-10 w-10" /> : <Bars3Icon className="h-10 w-10" />}
        </button> */}
        </div>
  );
}
