import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="flex justify-between px-12 w-full absolute left-0 top-0 py-5">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={250}
          height={200}
        />
      </div>
      <ul className="flex">
        <li>Home</li>
        <li>Photo</li>
        <li>Info</li>
      </ul>
    </nav>
  )
}
