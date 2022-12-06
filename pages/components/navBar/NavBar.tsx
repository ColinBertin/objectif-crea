import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(true);

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
            <li className="mr-2">Home</li>
            <li className="mr-2">Photo</li>
            <li>Info</li>
          </ul>
        ) : (
          ""
        )}
        <button className="">
          {menuOpen ? <XMarkIcon className="" /> : <Bars3Icon />}
        </button>
      </div>
    </nav>
  );
}
