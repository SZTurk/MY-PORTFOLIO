import Image from "next/image";
export default function Hero() {
  return (
<div className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      A journey from Educator to Web Developer
        <br className="hidden lg:inline-block" />
        Exploring New Frontiers in IT: Mastering Next.js 14, Tailwind CSS, and Modern Web Development"
      </h1>
      <p className="mb-8 text-lg font-semibold leading-relaxed">
      I am an IT learner focused on mastering Next.js 14 and Tailwind CSS for modern web development. With a background in teaching English, Mathematics, and General Science, I bring strong problem-solving skills and a passion for learning to this exciting new field.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <Image
      src="/can-img.jpg"
      alt="pic"
      width={300}
       height={400}

  />
    </div>
    </div>
  </div>
  )
}