import Image from "next/image";

import fallback from "../public/fallback.png";  
import cvIcon from "../public/cv-icon.png";

export default function Home() {
  return (
  <div className="min-h-screen bg-white">
  <nav className="top-0 left-0 w-full mt-4 z-50 p-4 pb-16">
    <ul className="flex justify-center items-center mx-w-7xl gap-8 mr-8 text-sm font-medium">
      <li className="hover:scale-105 active:scale-95" title="Link to Github"><a target="_blank" href="https://github.com/day-lee/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="w-14 h-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></li>
      <li className="hover:scale-105 active:scale-95" title="Link to Linkedin"><a target="_blank" href="https://www.linkedin.com/in/dev-dayeonlee/">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-14 h-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></li>
      <li className="hover:scale-105 active:scale-95" title="Download CV"><a target="_blank" href="https://www.linkedin.com/in/dev-dayeonlee/"><Image src={cvIcon} alt="cv download" width={50} height={50}/></a></li>
    </ul>
  </nav>
  <div className="flex flex-col items-center text-sm gap-4 justify-center max-w-4xl mx-auto p-4 space-y-8">
    <section className="bg-white">
      <h1 className="blur-text w-full text-5xl sm:text-7xl font-extrabold mb-4 flex flex-wrap">
        <span className="mr-4 animate-fade-right animate-delay-100 animate-once">Hi,</span>
        <span className="mr-4 animate-fade-right animate-delay-200 animate-once">I'm</span> 
        <span className="mr-4 animate-fade-right animate-delay-300 animate-once">Dayeon</span> 
        <span className="animate-wiggle-more animate-delay-400 animate-twice">👋</span> 
      </h1>
      <p className="text-2xl text-gray-700">
        <span className="text-blue-800 opacity-100 "> Hero description</span> 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt ut labore et dolore.
        <span className="text-blue-800 opacity-100"> eiusmod tempor </span>ullamco laboris nisi.</p>
    </section>
    <section className="w-full bg-white mb-16">
     <h2 className="text-2xl font-semibold mb-4">About</h2>
     <p className="text-xl">description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
    </section>
    <section className="w-full bg-white mb-16">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-8">
        <div className="flex flex-col items-center text-sm text-gray-600 gap-2">
          <img className="w-12 h-12 object-contain" alt="React" loading="lazy" width="48" height="48" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
           <p>TypeScript</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="JavaScript" width={50} height={50} />
           <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="React" width={50} height={50} />
           <p>React</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Next.js" width={50} height={50} />
           <p>Next.js</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Node.js" width={50} height={50} />
           <p>Node.js</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Express.js" width={50} height={50} />
           <p>Express.js</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Jest" width={50} height={50} />
           <p>Jest</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="MySQL" width={50} height={50} />
           <p>MySQL</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="PostgreSQL" width={50} height={50} />
           <p>PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="MongoDB" width={50} height={50} />
           <p>MongoDB</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Supabase" width={50} height={50} />
           <p>Supabase</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Tailwind CSS" width={50} height={50} />
           <p>Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Docker" width={50} height={50} />
           <p>Docker</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Tailwind CSS" width={50} height={50} />
           <p>Python</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Docker" width={50} height={50} />
           <p>Django</p>
        </div>
      </div>
       <p className="text-center text-lg text-black">And More...</p>
    </section>
    <section className="w-full bg-white mb-16">
      <div className="flex flex-col justify-center items-center mb-8 gap-4">
        <p className="inline-block  bg-gray-800 py-1 px-2 h-7 rounded-md text-white">Projects</p>
        <h2 className="text-center text-3xl font-semibold mb-8">
          <p>From Ideas to Reality</p>
          <p className="text-lg">Check out my work</p> </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-lg border border-solid">
          <Image className="w-full object-cover" src={fallback} alt="project1" width={400} height={200} />
          <div className="mx-2 my-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900">project 1 title</h3>
              <p className="mr-4">2025</p>
            </div>
            <p className="font-sans text-[16px] max-w-full">project1 description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua.
               project1 description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua
               project1 description - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
               ut labore et dolore magna aliqua</p>
            </div>
          <div className="flex gap-2 mx-4 my-8 flex-wrap">
            <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">TypeScript</div>
            <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">JavaScript</div>
            <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Next.js</div>
            <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Supabase</div>
            <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Postgresql</div>
            <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Tailwind CSS</div>
          </div>
          <div className="flex gap-4 m-4 justify-center">
            <a target="_blank" href="example" className="flex items-center rounded-md bg-white border border-solid px-3 h-8 text-black text-lg hover:"> Live website </a>
            <a target="_blank" href="example" className="flex items-center rounded-md bg-gray-800 px-3 h-8 text-white text-lg"> Github </a>
          </div>
        </div> 
        <div className="border-2 border-black">project2</div>
        <div className="border-2 border-black">project3</div>
        <div className="border-2 border-black">project4</div>
      </div>
    </section>
    <section className="w-full">
      <div className="flex flex-col justify-center items-center mb-8 gap-4">
        <p className="inline-block  bg-gray-800 py-1 px-2 h-7 rounded-md text-white">Experiences</p>
        <h2 className="text-center text-3xl font-semibold mb-8">Connecting The Dots...</h2>
      </div>
      <div className="">
        <h3 className="text-xl font-bold text-gray-900">experience</h3>
        <h3 className="text-xl font-bold text-gray-900">experience</h3>
        <h3 className="text-xl font-bold text-gray-900">experience</h3>
        <h3 className="text-xl font-bold text-gray-900">experience</h3>
      </div>
    </section>
    <section className="w-full">
      <div className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-800">Feel free to get in touch! 👍</div>
      <div className="flex justify-center gap-8 m-4">
      <ul className="flex justify-center mx-w-7xl gap-8 mr-8 text-sm font-medium">
        <li className="hover:scale-105 active:scale-95" title="Link to Github"><a target="_blank" href="https://github.com/day-lee/"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" className="w-14 h-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></li>
        <li className="hover:scale-105 active:scale-95" title="Link to Linkedin"><a target="_blank" href="https://www.linkedin.com/in/dev-dayeonlee/">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" className="w-14 h-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></li>
        <li className="hover:scale-105 active:scale-95" title="Download CV"><a target="_blank" href="https://www.linkedin.com/in/dev-dayeonlee/"><Image src={cvIcon} alt="cv download" width={50} height={50}/></a></li>
      </ul>
      </div>
    </section>
  </div>
</div>
  );
}
