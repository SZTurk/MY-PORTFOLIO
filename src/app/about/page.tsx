import Image from "next/image";

export default function About() {
  return (
<div>
<h1 className="text-left font-bold mt-6 mb-0 text-4xl mx-8">About me:</h1>

<div className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      Exploring New Frontiers in IT
        <br className="hidden lg:inline-block" />
        "From Educator to Web Developer"
      </h1>
      <p className="mb-4 leading-relaxed text-lg">
      I am currently an IT learner, focusing on mastering web development technologies like Next.js 14 and Tailwind CSS. With a passion for continuous learning, I am dedicated to building skills in modern web development to create dynamic and responsive applications. Before transitioning into the tech world, I spent several years as a teacher, specializing in English Language, Mathematics, and General Science for senior elementary classes. This background in education has honed my analytical thinking, communication skills, and attention to detail. As a keen learner, I approach challenges with curiosity and a strong desire to grow. My studious nature drives me to consistently seek new knowledge and improve my skillset in this exciting new field.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
      
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="pic1"
        src="/the-light-way.jpg"
        width={300}
       height={400}
      />
    </div>
  </div>
</div>

</div>
  )
}