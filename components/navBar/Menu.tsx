import clsx from "clsx";
import Link from "next/link";

type menuProps = {
  menuState: boolean;
}

export default function Menu({menuState}: menuProps) {
  return (
    <ul className={clsx(menuState ? "flex my-auto" : "flex my-auto")}>
      <li className="mr-3">
        <Link href={"/"}>Top</Link>
      </li>
      <li className="mr-4">
        <Link href={"/"}>À propos</Link>
      </li>
      <li className="mr-4">
        <Link href={"/"}>Contacte</Link>
      </li>
    </ul>
  );
}
