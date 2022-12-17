import { useState } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <nav className="flex justify-between px-4 md:px-12 w-full absolute left-0 top-0 py-10 text-white">
      <Link className="m-0 p-0" href={"/"} onClick={handleClick}>
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
          <ul className={clsx(menuOpen ? "flex my-auto" : "flex my-auto")}>
            <li className="mr-3">
              <Link href={"/"} onClick={handleClick}>
                Home
              </Link>
            </li>
            <li className="mr-3">
              <Link href={"/"} onClick={handleClick}>
                Photo
              </Link>
            </li>
            <li className="mr-4">
              <Link href={"/"} onClick={handleClick}>
                Info
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}
        <button className="" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <XMarkIcon className="h-8 w-8 md:h-10 md:w-10" />
          ) : (
            <Bars3Icon className="h-8 w-8 md:h-10 md:w-10" />
          )}
        </button>
      </div>
    </nav>
  );
}
