import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="bg-slate-500 w-full absolute left-0 top-0 py-5">
      <div>
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={100}
        />
      </div>
      <ul className="flex justify-around">
        <li>Home</li>
        <li>Photo</li>
        <li>Info</li>
      </ul>
    </nav>
  )
}
