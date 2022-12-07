import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between my-3 px-16 py-12 w-full absolute left-0 top-0 py-5">
      <div className="m-0 p-0">
        <Image
          src="/fullLogo.png"
          alt="logo"
          quality={60}
          width={250}
          height={200}
        />
      </div>
      <div className="flex">
        {menuOpen ? (
          <ul className="flex my-auto">
            <li className="mr-3">Home</li>
            <li className="mr-3">Photo</li>
            <li className="mr-4">Info</li>
          </ul>
        ) : (
          ""
        )}
        <button className="" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <XMarkIcon className="h-10 w-10" /> : <Bars3Icon className="h-10 w-10 font-black" />}
        </button>
      </div>
    </nav>
  );
}
