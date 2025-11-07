import Image from "next/image";

import fallback from "../public/fallback.png";  

/*
css styles, animation 
content
button links


*/

export default function Home() {
  return (
  <div className="min-h-screen bg-gray-700">
  <nav className="top-0 left-0 w-full mt-4 z-50 p-8">
    <ul className="flex justify-center mx-w-7xl gap-8 mr-8 text-sm font-medium">
      <li>Github</li>
      <li>Linkedin</li>
      <li>Download CV</li>
    </ul>
  </nav>
  <div className="flex flex-col items-center justify-center max-w-4xl mx-auto p-4 space-y-8">
    <section className="bg-white">
      <h1 className="blur-text w-full text-5xl sm:text-7xl font-extrabold mb-4 flex flex-wrap">
        <span className="mr-4 animate-fade-right animate-delay-100 animate-once">Hi,</span>
        <span className="mr-4 animate-fade-right animate-delay-200 animate-once">I'm</span> 
        <span className="mr-4 animate-fade-right animate-delay-300 animate-once">Dayeon</span> 
        <span className="animate-wiggle-more animate-delay-400 animate-twice">👋</span> 
      </h1>
      <p className="text-2xl">
        <span className="text-blue-800 opacity-100"> Hero description</span> 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore.
        <span className="text-blue-800 opacity-100"> eiusmod tempor </span>ullamco laboris nisi.</p>
    </section>
    <section className="w-full bg-amber-400">
     <h2 className="text-3xl sm:text-4xl mb-4">about</h2>
     <p className="">description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
    </section>
    <section className="w-full bg-amber-700">
      <h2 className="text-3xl sm:text-4xl mb-4">skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="TypeScript" width={50} height={50} />
           <p>TypeScript</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="JavaScript" width={50} height={50} />
           <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="React" width={50} height={50} />
           <p>React</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="Next.js" width={50} height={50} />
           <p>Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="Node.js" width={50} height={50} />
           <p>Node.js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="Express.js" width={50} height={50} />
           <p>Express.js</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="Jest" width={50} height={50} />
           <p>Jest</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="MySQL" width={50} height={50} />
           <p>MySQL</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="PostgreSQL" width={50} height={50} />
           <p>PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="MongoDB" width={50} height={50} />
           <p>MongoDB</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="Supabase" width={50} height={50} />
           <p>Supabase</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="Tailwind CSS" width={50} height={50} />
           <p>Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="Docker" width={50} height={50} />
           <p>Docker</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="Tailwind CSS" width={50} height={50} />
           <p>Python</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={fallback} alt="Docker" width={50} height={50} />
           <p>Django</p>
        </div>
      </div>
       <p className="text-center">And More...</p>
    </section>
    <section className="w-full bg-amber-900">
      <h2 className="text-3xl sm:text-4xl mb-4">My projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border-2 border-black">
          <Image src={fallback} alt="project1" width={400} height={300} />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">project1 title</h3>
            <p>2025</p>
            <p>project1 description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          <div className="flex gap-2 m-4 flex-wrap">
            <div className="bg-gray-300 px-2 rounded-md text-gray-700">skill1</div>
            <div>skill2</div>
            <div>skill3</div>
            <div>skill4</div>
            <div>skill5</div>
            <div>skill1</div>
            <div>skill2</div>
            <div>skill3</div>
            <div>skill4</div>
            <div>skill5</div>            
          </div>
          <div className="flex gap-4 m-4 justify-center">
            <button className="flex items-center rounded-sm bg-gray-700 p-2 h-8"> Demo </button>
            <button className="flex items-center rounded-sm bg-gray-700 p-2 h-8"> Github </button>
          </div>
        </div> 
        <div className="border-2 border-black">project2</div>
        <div className="border-2 border-black">project3</div>
        <div className="border-2 border-black">project4</div>
      </div>
    </section>
    <section className="w-full bg-blue-200">
      <h2 className="text-3xl sm:text-4xl mb-4">Experiences</h2>
      <div className="">
        <div className="text-xl sm:text-2xl font-bold">experience1</div>
        <div className="text-xl sm:text-2xl font-bold">experience2</div>
        <div className="text-xl sm:text-2xl font-bold">experience3</div>
        <div className="text-xl sm:text-2xl font-bold">experience4</div>
      </div>
    </section>
    <section className="w-full bg-blue-400">
      <h2 className="text-3xl sm:text-4xl mb-4">Get in touch</h2>
      <div className="text-xl sm:text-2xl font-bold text-center">Download my <a href="/path/to/cv" className="text-blue-600 underline">CV</a></div>
      <div className="flex justify-center gap-8 m-4">
        <button className="flex items-center rounded-sm bg-gray-700 p-2 h-8"> Demo </button>
        <button className="flex items-center rounded-sm bg-gray-700 p-2 h-8"> Github </button>
      </div>
    </section>
  </div>
</div>
  );
}
