import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div>

        <header className="text-gray-800 body-font bg-gray-400">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image className="rounded-lg"
      src="/logo1.png"
      alt="logo"
      width={60}
       height={60}

    />
   
      <span className="ml-3 text-xl font-bold">SZ TURK</span>
    </Link>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-white text-lg">Home</Link>
      <Link href="/about"  className="mr-5 hover:text-white text-lg">About</Link>
      <Link href={"#"} className="mr-5 hover:text-white text-lg">Projects</Link>
      <Link href={"/contact"} className="mr-5 hover:text-white text-lg">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">my CV
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  
  </div>
</header>
    </div>
  )
};