import { useState } from "react";
import Link from 'next/link'
import Image from "next/image";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import Menu from "./Menu";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between px-4 md:px-12 w-full absolute left-0 top-0 py-10 text-white">
      <Link className="m-0 p-0" href={"/"}>
        <Image
          src="/fullLogo.png"
          alt="logo"
          quality={60}
          width={180}
          height={130}
        />
      </Link>
      <div className="flex">
        {menuOpen ? (
          <Menu menuState={menuOpen}/>
        ) : (
          ""
        )}
        <button className="" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <AiOutlineClose className="h-6 w-6 md:h-8 md:w-8" />
          ) : (
            <GiHamburgerMenu className="h-6 w-6 md:h-8 md:w-8" />
          )}
        </button>
      </div>
    </nav>
  );
}
