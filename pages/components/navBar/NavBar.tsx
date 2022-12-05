import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="flex justify-between px-20 py-12 w-full absolute left-0 top-0 py-5">
      <div className='m-0 p-0'>
        <Image
          src="/fullLogo.png"
          alt="logo"
          quality={60}
          width={250}
          height={200}
        />
      </div>
      <ul className="flex my-auto">
        <li className='mr-2'>Home</li>
        <li className='mr-2'>Photo</li>
        <li>Info</li>
      </ul>
    </nav>
  )
}
