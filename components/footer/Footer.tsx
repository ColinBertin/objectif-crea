import Image from "next/image";
import router from "next/router";

export default function Footer() {

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <footer className="bg-gray-800 px-14 py-16">
      <div className="mb-10">
      <a className="m-0 p-0" href={"/"} onClick={handleClick}>
        <Image
          src="/fullLogo.png"
          alt="logo"
          quality={60}
          width={250}
          height={200}
        />
      </a>
      </div>
      <div className="flex justify-between">
        <p>© Copyright 2012 - 2022 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
        <ul className="flex">
          <li className="mr-4">Fa</li>
          <li className="mr-4">Tw</li>
          <li className="mr-4">In</li>
          <li>Yo</li>
        </ul>
      </div>
    </footer>
  );
}
