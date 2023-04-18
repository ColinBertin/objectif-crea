import clsx from "clsx";
import Link from "next/link";
import { handleScroll } from "../../helpers";

type menuProps = {
  menuState: boolean;
  handleNavbar?: () => void;
};

export default function Menu({ menuState, handleNavbar }: menuProps) {
  return (
    <>
      {/* DESKTOP MENU */}
      <ul
        className={clsx(
          "h-screen w-1/2 md:w-auto md:h-auto md:flex hidden md:block"
        )}
      >
        <li className="pb-6 md:pb-0 md:py-0 text-xl text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
          <Link href={"#banner"} onClick={handleScroll}>
            Top
          </Link>
        </li>
        <li className="pb-6 md:pb-0 md:py-0 text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
          <Link href={"/"}>À propos</Link>
        </li>
        <li className="pb-6 md:pb-0 md:py-0 text-xl text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
          <Link href={"/"}>Contact</Link>
        </li>
      </ul>
        {/* MOBILE PHONE MENU */}
        <ul
          className={clsx(
            menuState ? "flex flex-col justify-center -mt-20 mb-20" : "hidden",
            "h-screen w-1/2 md:w-auto md:h-auto md:flex md:hidden"
          )}
        >
          <li className="pb-6 md:pb-0 md:py-0 text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
            <Link href={"/"} onClick={handleNavbar}>
              À propos
            </Link>
          </li>
          <li className="pb-6 md:pb-0 md:py-0 text-xl text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
            <Link href={"/"} onClick={handleNavbar}>
              Contact
            </Link>
          </li>
        </ul>
    </>
  );
}
