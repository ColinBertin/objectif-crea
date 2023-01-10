import clsx from "clsx";
import Link from "next/link";

type menuProps = {
  menuState: boolean;
}

export default function Menu({menuState}: menuProps) {
  return (
    <ul className={clsx(menuState ? "flex my-auto" : "flex my-auto")}>
      <li className="mr-3">
        <Link href={"/"}>Home</Link>
      </li>
      {/* <li className="mr-3">
        <Link href={"/"}>Photo</Link>
      </li> */}
      <li className="mr-4">
        <Link href={"/"}>Info</Link>
      </li>
    </ul>
  );
}
