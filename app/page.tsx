'use client';
import { useState } from 'react';
import Image from "next/image";

import cvIcon from "../public/cv-icon.png";
import cyfLogo from "../public/cyf-logo.jpg";
import uniLogo from "../public/uniLogo.svg";
import bbcLogo from "../public/bbc-logo.jpeg";
import britaLogo from "../public/britaLogo.jpg";
import appleLogo from "../public/appleLogo.png";
import bbc from "../public/bbc.jpg";
import brita from "../public/brita.jpg";
import apple from "../public/apple.jpg";
import cyf from "../public/cyf.jpg";
import uni from "../public/uni.jpg";

export default function Home() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  return (
  <div className="min-h-screen bg-white">
  <nav className="top-0 left-0 w-full mt-4 z-50 p-4 pb-16">
    <ul className="flex justify-center items-center mx-w-7xl gap-8 mr-8 text-sm font-medium">
      <li className="hover:scale-105 active:scale-95" title="Link to Github"><a target="_blank" href="https://github.com/day-lee/"><svg fill="currentColor" viewBox="0 0 496 512" className="w-12 h-12"  xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></li>
      <li className="hover:scale-105 active:scale-95" title="Link to Linkedin"><a target="_blank" href="https://www.linkedin.com/in/dev-dayeonlee/">
      <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="w-12 h-12" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></li>
      <li className="hover:scale-105 active:scale-95" title="Download CV"><a target="_blank" href="https://www.linkedin.com/in/dev-dayeonlee/"><Image src={cvIcon} alt="cv download" width={45} height={45}/></a></li>
    </ul>
  </nav>
  <div className="flex flex-col items-center text-sm gap-4 justify-center max-w-4xl mx-auto p-4 space-y-8">
    <section className="bg-white">
      <h1 className="blur-text w-full text-5xl sm:text-7xl font-extrabold mb-4 flex flex-wrap">
        <span className="sm:mr-4 animate-fade-right animate-delay-100 animate-once">Hi,</span>
        <span className="sm:mr-4 animate-fade-right animate-delay-200 animate-once">I'm</span> 
        <span className="sm:mr-4 animate-fade-right animate-delay-300 animate-once">Dayeon</span> 
        <span className="animate-wiggle-more animate-delay-400 animate-twice">👋</span> 
      </h1>
      <p className="text-2xl text-gray-700">
        <span className="text-cyan-700 font-semibold"> Full-stack Software Engineer </span> 
        <span className="text-black">optimising user experiences and system performance for 10,000+ monthly active users, bringing sales and marketing perspective to technical solutions.</span>
      </p>
    </section>
    <section className="w-full bg-white mb-16">
     <h2 className="text-2xl font-semibold mb-4">About</h2>
    <div className="text-xl"> 
       <span className="text-gray-700">I’m based in London and currently work at </span>
       <span className="text-black font-semibold"> Code Your Future as a Software Engineer. </span> 
       <p className="text-gray-700 block"> This year, <span className="text-cyan-700 font-semibold"> I won a hackathon</span>,
        which made me <span className="text-cyan-700 font-semibold">realise how enjoyable it is to bring ideas to life</span> and <span className="text-cyan-700 font-semibold">to work in a diverse team. </span> </p>
       <span className="text-gray-700 inline-block"> My current tech stack includes </span> 
       <span className="text-black font-semibold"> TypeScript, JavaScript, React, Next.js, Node.js, Jest, PostgreSQL, MongoDB, Tailwind CSS and Supabase. </span>
       <span className="text-gray-700 inline-block">In addition to frontend work, I have experience with </span>
      <span className="text-black font-semibold"> MySQL, AWS, Python, Django, and Docker.</span>
    </div>
    </section>
    <section className="w-full bg-white mb-32">
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mb-16">
        <div className="flex flex-col items-center text-sm text-gray-600 gap-2">
          <img className="w-12 h-12 object-contain" alt="React" loading="lazy" width="48" height="48" src="https://cdn.simpleicons.org/typescript" />
           <p>TypeScript</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <img className="w-12 h-12 object-contain" alt="React" loading="lazy" width="48" height="48" src="https://cdn.simpleicons.org/javascript" />
           <p>JavaScript</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <img className="w-12 h-12 object-contain" alt="React" loading="lazy" width="48" height="48" src="https://cdn.worldvectorlogo.com/logos/react-2.svg" />
           <p>TypeScript</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <img className="w-12 h-12 object-contain" alt="Next.js" loading="lazy" width="48" height="48" src="https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg"></img>
           <p>Next.js</p>
        </div>
        {/* <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Node.js" width={50} height={50} />
           <p>Node.js</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Express.js" width={50} height={50} />
           <p>Express.js</p>
        </div> */}
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <img className="w-12 h-12 object-contain" alt="Next.js" loading="lazy" width="48" height="48" src="https://cdn.simpleicons.org/jest"></img>
           <p>Jest</p>
        </div>
        {/* <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="MySQL" width={50} height={50} />
           <p>MySQL</p>
        </div> */}
        {/* <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <img className="w-12 h-12 object-contain" alt="Tailwind CSS" loading="lazy" width="48" height="48" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" />
           <p>Tailwind CSS</p>
        </div> */}
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <img className="w-12 h-12 object-contain" alt="Node.js" loading="lazy" width="48" height="48" src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg" />
           <p>Node.js</p>
        </div>        
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <img className="w-12 h-12 object-contain" alt="Next.js" loading="lazy" width="48" height="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
           <p>PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <img className="w-12 h-12 object-contain" alt="Supabase" loading="lazy" width="48" height="48" src="https://meta-l.cdn.bubble.io/f1685632623945x484360545462020800/supabase-logo-icon.png" />
           <p>Supabase</p>
        </div>        
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <img className="w-12 h-12 object-contain" alt="Next.js" loading="lazy" width="48" height="48" src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" />
           <p>AWS</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <img className="w-12 h-12 object-contain" alt="Tailwind CSS" loading="lazy" width="48" height="48" src="https://cdn.simpleicons.org/docker" />
           <p>Docker</p>
        </div>
        {/* <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Tailwind CSS" width={50} height={50} />
           <p>Python</p>
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600 gap-4">
          <Image src={fallback} alt="Docker" width={50} height={50} />
           <p>Django</p>
        </div> */}
      </div>
       <p className="text-center text-lg text-black">And More...</p>
    </section>
    <section className="w-full bg-white mb-32">
      <div className="flex flex-col items-center mb-8 gap-4">
        <p className="bg-gray-800 py-1 px-2 h-7 rounded-md text-white">Projects</p>
        <h2 className="text-center text-3xl font-semibold mb-8">
          <p>From Ideas to Reality</p>
          <p className="text-lg">Check out my work</p> </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-lg border border-solid">
            <div className="relative w-full overflow-hidden rounded-t-lg bg-black pb-[56.25%]">
              <iframe className="absolute inset-0 h-full w-full border-0" src="https://www.youtube.com/embed/Gd6XfAiI7pc?loop=1&playlist=Gd6XfAiI7pc&autoplay=1&mute=1&si=tuk_-19Q5iXXK6tF&amp;controls=0&amp;start=228" 
                  title="YouTube solosync video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
              </iframe>
            </div>
          <div className="mx-2 my-4 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Solo Sync - Hackaton Project</h3>
              <p className="mr-4">2025</p>
            </div>
            <div className="font-sans text-[16px] max-w-full h-36">
             <div className="mb-1"> <span className="font-bold"> • 1st place </span> in the topic challenge and <span className="font-bold">3rd</span> overall out of 24 teams at HuddleHive's WIT Hackathon.</div>
             <div className="mb-1"> • Reducing No-shows in the events industry by introducing <span className="font-bold">gamification</span> and <span className="font-bold">accountability buddy chat</span>. </div>
             <div className="mb-1"> • I  developed an <span className="font-bold">MVP  for the ice-breaking chat feature</span> using React.</div>
            </div>
            </div>
          <div className="flex flex-col mx-4">
            <div className="flex flex-wrap gap-2 justify-start mt-4 text-gray-700">
              <span className="inline-flex border border-red-700 py-1 px-2 h-7 rounded-md">Hackathon Winning Project</span>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap h-14">
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">JavaScript</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">React</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Git / Github</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Tailwind CSS</div>
            </div>
          </div>
          <div className="flex gap-4 m-4 justify-center">
            <a target="_blank" href="https://www.hackathonparty.com/hackathons/8/projects/153" className="flex items-center rounded-md bg-white border border-solid px-3 h-8 text-black text-lg hover:"> Details </a>
            <a target="_blank" href="https://github.com/day-lee/hackathonparty-aispire" className="flex items-center rounded-md bg-gray-800 px-3 h-8 text-white text-lg"> Github </a>
          </div>
        </div> 
        <div className="rounded-lg border border-solid">
            <div className="relative w-full overflow-hidden rounded-t-lg bg-black pb-[54.40%]">
              <iframe className="absolute inset-0 h-full w-full border-0" src="https://www.youtube.com/embed/vvic1iLyTqY?loop=1&playlist=vvic1iLyTqY&autoplay=1&mute=1&si=tuk_-19Q5iXXK6tF&amp;controls=0&amp;" 
                  title="YouTube solosync video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
              </iframe>
            </div>
          <div className="mx-2 my-4 p-4 pt-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Code Your Future</h3>
              <p className="mr-4">2025</p>
            </div>
            <div className="font-sans text-[16px] max-w-full h-36">
              <div className="mb-1">• Code Your Future is a UK-based charity that provides free coding education to disadvantaged groups </div>
              <div className="mb-1"> • I contributed to in-person sessions, providing <span className="font-bold">pair programming support</span>, and worked as a software engineer <span className="font-bold">to build and maintain applications and a dashboard website</span> for admin staff.</div>  
            </div>
            </div>
          <div className="flex flex-col mx-4">
            <div className="flex flex-wrap gap-2 justify-start mt-4 text-gray-700">
              <span className="inline-flex border border-red-700 py-1 px-2 h-7 rounded-md">Mentoring</span>
              <span className="inline-flex border border-red-700 py-1 px-2 h-7 rounded-md">Agile Team</span> 
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">JavaScript</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">React</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Jest</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Swagger</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">MongoDB</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Tailwind CSS</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Git / Github</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Postman</div>
            </div>
          </div>
          <div className="flex gap-4 m-4 justify-center">
            <a target="_blank" href="https://codeyourfuture.io/" className="flex items-center rounded-md bg-white border border-solid px-3 h-8 text-black text-lg hover:"> Website </a>
            <a target="_blank" href="https://github.com/orgs/CodeYourFuture/repositories" className="flex items-center rounded-md bg-gray-800 px-3 h-8 text-white text-lg"> Github </a>
          </div>
        </div>         
        <div className="rounded-lg border border-solid">
            <div className="relative w-full overflow-hidden rounded-t-lg bg-black pb-[54.15%]">
              <iframe className="absolute inset-0 rounded-t-md h-full w-full border-0" src="https://www.youtube.com/embed/veqeTyMyCUw?loop=1&playlist=veqeTyMyCUw&autoplay=1&mute=1&si=tuk_-19Q5iXXK6tF&amp;controls=0&amp;" 
                  title="YouTube recipe project video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
              </iframe>
            </div>
          <div className="mx-2 my-4 p-4 pt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Recipe Project</h3>
                <p className="mr-4">2024 - Ongoing</p>
              </div>
              <div className="font-sans text-[16px] max-w-full h-36">
                  <div className="mb-1">
                    • My endless question of the day: "What should I cook today?" led me to create a personal recipe management web application.
                  </div>
                  <div className="mb-1"> 
                    • Built with <span className="font-bold"> Next.js.</span> Implemented form validation with <span className="font-bold">Zod and React Hook Form</span> and <span className="font-bold"> Supabase</span> RPC functions to eliminate client-side SQL queries
                  </div>
                  <div className="mb-1"> 
                  </div>
              </div>
            </div>
          <div className="flex flex-col mx-4">
            <div className="flex flex-wrap gap-2 justify-start mt-4 text-gray-700">
              <span className="inline-flex border border-red-700 py-1 px-2 h-7 rounded-md">Lifelong Side Project</span>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">TypeScript</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">JavaScript</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Jest</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Next.js</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Supabase</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Postgresql</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Tailwind CSS</div>
            </div>
          </div>
          <div className="flex gap-4 m-4 justify-center">
            <a target="_blank" href="https://recipe-project-gamma-weld.vercel.app/" className="flex items-center rounded-md bg-white border border-solid px-3 h-8 text-black text-lg hover:"> Visit </a>
            <a target="_blank" href="https://github.com/day-lee/recipe-project" className="flex items-center rounded-md bg-gray-800 px-3 h-8 text-white text-lg"> Github </a>
          </div>
        </div> 
        <div className="rounded-lg border border-solid">
            <div className="relative w-full overflow-hidden rounded-t-lg bg-black pb-[56.25%]">
              <iframe className="absolute inset-0 h-full w-full border-0" src="https://www.youtube.com/embed/Q4ix9751PTQ?loop=1&playlist=Q4ix9751PTQ&autoplay=1&mute=1&si=tuk_-19Q5iXXK6tF&amp;controls=0&amp;start=128" 
                  title="YouTube kmooc video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen>
              </iframe>
            </div>          
          <div className="mx-2 my-4 p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">K-MOOC</h3>
              <p className="mr-4">2021 - 2023</p>
            </div>
            <div className="font-sans text-[16px] max-w-full h-36">
              <div className="mb-1"> 
                 • K-MOOC is South Korea's national platform for free online courses.
              </div>
              <div className="mb-1"> 
                 • I maintained a website serving over 10,000 monthly average users by ensuring  <span className="font-bold">optimised database performance and system-wide troubleshooting.</span>
              </div>
            </div>
             </div>
          <div className="flex flex-col mx-4">
            <div className="flex flex-wrap gap-2 justify-start mt-4 text-gray-700">
              <span className="inline-flex border border-red-700 py-1 px-2 h-7 rounded-md">Monthly Average User 10,000+ </span>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Python</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Django</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">JavaScript</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">OpenEdx</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">MySql</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">MongoDB</div>
              <div className="flex items-center bg-gray-100 py-1 px-2 h-6 rounded-md text-gray-700">Docker</div>
            </div>
          </div>
          <div className="flex gap-4 m-4 justify-center">
            <div className="flex items-center rounded-md bg-white border border-solid px-3 h-8 text-black text-lg hover:"> Discontinued Service </div>
          </div>
        </div>         
      </div>
    </section>
    <section className="w-full">
      <div className="flex flex-col justify-center items-center mb-8 gap-4">
        <p className="inline-block  bg-gray-800 py-1 px-2 h-7 rounded-md text-white">Experiences</p>
        <h2 className="text-center text-3xl font-semibold mb-8">Connecting The Dots...</h2>
      </div>
      <div className="flex flex-col gap-8 mb-8">
        <div className="border border-black rounded-md p-4"> 
          <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
            <div className='relative flex items-center gap-1 cursor-pointer'   
                  onMouseEnter={() => {setHoveredId("cyf");}} onMouseLeave={() => {setHoveredId(null);}}>
                    <div className='absolute -top-6 -left-6 text-sm text-red-600 border animate-wiggle bg-white animate-infinite px-1 -rotate-10 font-semibold'>Hover over!</div>
            <div className='relative'>
              <div className="rounded-full border-2 h-8 w-8 mr-2 border-amber-400 text-red-700 py-1 px-1 animate-pulse">
                <Image className='rounded-full' src={cyfLogo} alt="Code Your Future Logo" priority={true} width={25} height={25} />
              </div>
            </div>
            <div className={`absolute left-0 top-0 transform -translate-x-2 transition-all duration-300 z-50 rounded-md bg-white h-104 pt-4 px-4 shadow-2xl ${hoveredId === "cyf" ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <Image className='rounded-md' src={cyf} alt="code your future experience" priority={true} width={300} height={300} />
                <div className='text-center mt-4 text-lg font-mono'> <p>CYF Tech Products </p><p>2025 Meet-up </p></div>  
            </div>
            <div className='flex flex-col sm:flex-row font-bold'>
              <p className="text-xl  text-cyan-700"> Code Your Future <span className="text-lg text-gray-600"> - Software Engineer / Programming Teaching Assistant</span></p> 
            </div>
            </div>
            <span className='mt-2 sm:mt-0'> London, UK 2025 </span>
          </div>
            <div className="ml-2 text-[16px]">
              <p>After moving to London, 
                I joined a larger team where I enjoyed <span className="font-bold">building dashboard website, resolving merge conflicts, and having meaningful discussions about web development.</span>
              </p>
            </div>
        </div>
        <div className="border border-black rounded-md p-4"> 
            <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
              <div className='relative flex items-center gap-1 cursor-pointer'
                    onMouseEnter={() => {setHoveredId("uni");}} onMouseLeave={() => {setHoveredId(null);}}>
              <div className='relative'>
                <div className="rounded-full border-2 h-8 w-8 mr-2 border-amber-400 text-red-700 py-1 px-1 animate-pulse">
                  <Image className='rounded-full' src={uniLogo} alt="Korea National Open University Logo" priority={true} width={25} height={25} />
                </div>
              </div>
              <div className={`absolute left-0 top-0 transform -translate-x-2 transition-all duration-300 z-50 rounded-md bg-white h-104 pt-4 px-4 shadow-2xl ${hoveredId === "uni" ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                  <Image className='rounded-md' src={uni} alt="university certificate" priority={true} width={300} height={300} />
                  <div className='text-center mt-4 text-sm font-mono'> <p>Certificate of Academic Scholarship</p><p> from Korea National Open University </p></div>  
              </div>
              <div className='flex flex-col sm:flex-row font-bold'>
                <p className="text-xl text-cyan-700">  Korea National Open University  <span className="text-lg text-gray-600"> - Computer Science Student</span></p> 
              </div>
            </div>
            <span className='mt-2 sm:mt-0'> Seoul, Korea 2022 - 2024 </span>
          </div>
            <div className="ml-2 text-[16px]"><p>I established a <span className="font-bold">solid foundation by studying computer science</span> fundamentals.</p></div>
            <p className='ml-2'>Modules: Data Structures and Algorithms, Computer Architecture and Operating Systems, Database Systems, Computer Security, Computer Networking </p>
        </div>        
        <div className="border border-black rounded-md p-4"> 
          <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
            <div className='relative flex items-center gap-1 cursor-pointer' 
                onMouseEnter={() => {setHoveredId("bbc");}} onMouseLeave={() => {setHoveredId(null);}} >
            <div className='relative'>
              <div className="rounded-full border-2 h-8 w-8 mr-2 border-amber-400 text-red-700 py-1 px-1 animate-pulse">
                <Image className='rounded-full' src={bbcLogo} alt="Bubblecon Logo" priority={true} width={25} height={25} />
              </div>
            </div>
            <div className={`absolute left-0 top-0 transform -translate-x-2 transition-all duration-300 z-50 rounded-md bg-white h-108 pt-4 px-4 shadow-2xl ${hoveredId === "bbc" ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <Image className='rounded-md' src={bbc} alt="bubblecon" priority={true} width={300} height={300} />
                <div className='text-center mt-4 text-lg font-mono'> <p>Working hard :)</p> <p className='text-sm'>@ Bubblecon Seoul office</p> </div>  
            </div>
              <div className='flex flex-col sm:flex-row font-bold'>
                <p className="text-xl  text-cyan-700"> Bubblecon <span className="text-lg text-gray-600"> - Software Engineer</span></p> 
              </div>
            </div>
            <span> Seoul, Korea 2021 - 2024 </span>
          </div>
            <div className="ml-2 text-[16px]">
               <p>As a self-taught developer, I switched my career from digital marketing to software engineering. </p> 
              <p> At Bubblecon, I explored <span className="font-bold">web development topics from frontend to backend engineering</span> through the K-MOOC website. This broad exposure was invaluable in shaping my tech expertise. </p>
            </div>
        </div>
        <div className="border border-black rounded-md p-4"> 
          <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
            <div className='relative flex items-center gap-1 cursor-pointer'  
            onMouseEnter={() => {setHoveredId("brita");}} onMouseLeave={() => {setHoveredId(null);}}>
            <div className='relative'>
              <div className="rounded-full border-2 h-8 w-8 mr-2 border-amber-400 text-red-700 py-1 px-1 animate-pulse">
                <Image className='rounded-full' src={britaLogo} alt="Brita Logo" priority={true} width={25} height={25} />
              </div>
            </div>
            <div className={`absolute left-0 top-0 transform -translate-x-2 transition-all duration-300 z-50 rounded-md bg-white h-108 pt-4 px-4 shadow-2xl ${hoveredId === "brita" ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <Image className='rounded-md' src={brita} alt="brita" priority={true} width={300} height={300} />
                <div className='text-center mt-4 text-lg font-mono'> <p>Brita Korea Annual Conference </p> <p>Sales Day </p> </div>  
            </div>
              <div className='flex flex-col sm:flex-row font-bold'>
                <p className="text-xl  text-cyan-700">   Asiance & Brita Group <span className="text-lg text-gray-600">  - Digital Marketer</span></p> 
              </div>
            </div>
            <span>Seoul, Korea 2019 - 2021</span>
          </div>            
            <div className="ml-2 text-[16px]"> 
            <p>In the world of digital marketing, I discovered the power of Excel functions and pivot tables, which later helped me understand <span className="font-bold">programming functions and databases. </span>
               I started <span className="font-bold">learning Python to automate repetitive data collection tasks using Beautiful Soup and Selenium.</span></p>
            </div>
        </div> 
        <div className="border border-black rounded-md p-4"> 
          <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
            <div className='relative flex items-center gap-1 cursor-pointer' 
              onMouseEnter={() => {setHoveredId("apple");}} onMouseLeave={() => {setHoveredId(null);}}>
            <div className='relative'>
              <div className="rounded-full border-2 h-8 w-8 mr-2 border-amber-400 text-red-700 py-1 px-1 animate-pulse">
                <Image className='rounded-full' src={appleLogo} alt="Apple Logo" priority={true} width={25} height={25} />
              </div>
            </div>
            <div className={`absolute left-0 top-0 transform -translate-x-2 transition-all duration-300 z-50 rounded-md bg-white h-108 pt-4 px-4 shadow-2xl ${hoveredId === "apple" ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <Image className='rounded-md' src={apple} alt="apple" priority={true} width={300} height={300} />
                <div className='text-center mt-4 text-lg font-mono'> <p>A surprise visit by Tim Cook</p><p className='text-sm'> @Apple Store Covent Garden</p> </div> 
            </div>
              <div className='flex flex-col sm:flex-row font-bold'>
                <p className="text-xl  text-cyan-700">   Apple Store London <span className="text-lg text-gray-600"> - Sales Specialist</span></p> 
              </div>
            </div>
            <span>London, UK 2018 </span>
          </div>
            <div className="ml-2 text-[16px]">
             <p>My journey began at the Apple Store in London, where <span className="font-bold">I explained technology using simple language and analogies. </span>
              By simplifying complex ideas for customers, I set the stage for my future in tech.</p>
            </div>
        </div>
      </div>
    </section>
    <section className="w-full">
      <div className="text-4xl sm:text-5xl font-bold text-center mb-16 text-gray-800">Feel free to get in touch! 👍</div>
      <div className="flex justify-center gap-8 m-4">
      <ul className="flex justify-center mx-w-7xl gap-8 mr-8 text-sm font-medium">
        <li className="hover:scale-105 active:scale-95" title="Link to Github"><a target="_blank" href="https://github.com/day-lee/"><svg stroke="currentColor" fill="currentColor" viewBox="0 0 496 512" className="w-14 h-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></li>
        <li className="hover:scale-105 active:scale-95" title="Link to Linkedin"><a target="_blank" href="https://www.linkedin.com/in/dev-dayeonlee/">
        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" className="w-14 h-14" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></li>
        <li className="hover:scale-105 active:scale-95" title="Download CV"><a target="_blank" href="https://www.linkedin.com/in/dev-dayeonlee/"><Image src={cvIcon} alt="cv download" width={50} height={50}/></a></li>
      </ul>
      </div>
    </section>
  </div>
</div>
  );
}
