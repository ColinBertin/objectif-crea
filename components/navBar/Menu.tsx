import clsx from "clsx";
import Link from "next/link";

type menuProps = {
  menuState: boolean;
  handleNavbar?: () => void;
};

export default function Menu({ menuState, handleNavbar }: menuProps) {
  return (
    <ul
      className={clsx(
        menuState ? "flex flex-col justify-center -mt-20 mb-20" : "hidden",
        "h-screen w-1/2 md:w-auto md:h-auto md:flex"
      )}
    >
      <li className="pb-6 md:pb-0 md:py-0 text-xl text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
        <Link href={"/"} onClick={handleNavbar}>
          Top
        </Link>
      </li>
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
  );
}
