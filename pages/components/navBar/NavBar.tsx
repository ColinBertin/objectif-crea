import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="flex justify-between px-12 w-full absolute left-0 top-0 py-5">
      <div className='m-0 p-0'>
        <Image
          src="/fullLogo.png"
          alt="logo"
          quality={60}
          width={200}
          height={150}
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
