"use client";

import "./globals.css";
import Button from '@mui/material/Button';
import Projects from "./Projects.jsx";
import Headings from "./Headings.jsx";
import List from "./List.jsx";
import Skills from "./Skills.jsx";
import {mailLink, cvLink, myPicLink, headerData, navData , hrData, backendApiBaseUrl} from "./tools.js" ;
import { useState, useEffect } from "react";
import Experience from "./Experience.jsx";
import Loader from "./Loader.jsx";


export default function Home(){


let [descriptionData, setDescriptionData] = useState(null);


let [status, setStatus] = useState(0);
let [headerStyle, setHeaderStyle] = useState(headerData[0]);
let [navStyle, setNavStyle] = useState(navData[0]);
let [hrStyle, setHrStyle] = useState(hrData[0]);

const getData = async ()=>{ 
   const unprocessed = await fetch(`${process.env.BACKENDURL}/description`);
   const processed = await unprocessed.json();
   setDescriptionData(processed.body); 
 }

useEffect(()=>{
   getData();
},[]);



function trgrMobNav(){

  if (window.innerWidth >= 790) return;

  if (status === 0) {
    document.body.style.overflow = "hidden";
    setStatus(1);
    setHeaderStyle(headerData[1]);
    setNavStyle(navData[1]);
    setHrStyle(hrData[1]);
  }
  else {
    document.body.style.overflow = "auto";
    setStatus(0);
    setHeaderStyle(headerData[0]);
    setNavStyle(navData[0]);
    setHrStyle(hrData[0]);
  }
}

  return(
    <div className="mainWrapper bg-gradient-to-r from-[#141E30] to-black ">
      
          <header className={headerStyle}>

               <div className="flex justify-around w-full">
                 <h1 className="text-[15px] w-full text-amber-50 font-roboto sm:text-2xl ">Kartikey Singh Gahlot</h1>
                 <div className="block min-[790px]:hidden " onClick={trgrMobNav}>
                      <hr className={hrStyle.one}/>
                      <hr className={hrStyle.two}/>
                      <hr className={hrStyle.three}/>
                 </div>
                </div>

               <nav className="">

                       <ul className={navStyle}>
                            <List   mainLi="Home"  link="#pageOne" linkTarget="" onClk={trgrMobNav}/>
                            <List   mainLi="About" link="#pageTwo" linkTarget="" onClk={trgrMobNav}/>
                            <List   mainLi="Projects" link="#pageThree" linkTarget="" onClk={trgrMobNav}/>
                            <List   mainLi="Contact" link="#pageFour" linkTarget="" onClk={trgrMobNav}/>
                       </ul>

                 </nav>

          </header>

          

          <section className="h-screen flex flex-col justify-evenly gap-10 pages " id="pageOne">

               <div className=" flex flex-col min-[430px]:flex-row  min-[430px]:justify-evenly items-center justify-center box-border min-[430px]:px-10  gap-10">

                 <div className="min-[430px]:h-full h-fit flex flex-col justify-center gap-2 ">
                      <h1 className=" min-[430px]:py-2 py-0 w-full text-amber-50 min-[790px]:text-4xl text-2xl">Hello, Kartikey this side !</h1>
                      <h1 className=" min-[430px]:py-2 py-0 w-fit  text-amber-50 min-[790px]:text-4xl text-2xl overflow-hidden introText inline-block  box-border">I'm a</h1>
                 </div>

                 <div className="relative p-3.5 ">
                      
                      <div className="absolute left-[-5px] top-8  triangleBg bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300  h-full w-full p-3 flex items-center ">
                           <div className=" relative bottom-1 triangleBg bg-black h-full w-full" />
                      </div>

                     <img src={myPicLink} className=" relative z-10 min-[790px]:w-80 w-50 object-cover rounded-full border-[3px] border-black " alt="my Image" />
                 </div>

               </div>
                   
               <div className="w-full flex gap-5 justify-center">
                      <Button href={cvLink}   variant="outlined" size="large" sx={{'color':"white",'textTransform':'none',':hover':{ 'backgroundColor':'blue'}}} >My Resume</Button>
                      <Button href={mailLink} variant="outlined" size="large" sx={{'color':"white",'textTransform':'none',':hover':{ 'backgroundColor':'blue'}}} >Hire Me</Button>
               </div>

              
               <Skills skills={["HTML","CSS","Tailwindcss","JavaScript","React JS","Git-GitHub","MySQL","MongoDB", "Node JS","Express JS","Java","DSA"]} />

          </section>

          <section className="pages grid min-[780px]:grid-cols-[1fr_2fr] min-[780px]:grid-row-auto grid-col-1 grid-row-[1fr_2fr] min-[780px]:gap-0 gap-10 box-border px-5 pt-10 pb-30" id="pageTwo">
               <div className="flex justify-center items-end">
                    <ul className= "flex min-[780px]:flex-col  w-full flex-row  justify-evenly min-[780px]:gap-0 gap-2">
                         <li className="box-border  h-full text-center  sm:text-3xl text-[12px]  px-3 py-2 min-[780px]:border-l-3 min-[780px]:border-b-0 border-b-3 border-l-0 border-amber-50 text-amber-50 w-full">Web Development</li>
                         <li className="text-amber-50 w-fit relative hidden min-[780px]:block -left-0.5">•</li>
                         <li className="box-border h-full text-center  sm:text-3xl text-[12px]  px-3 py-2 min-[780px]:border-l-3 min-[780px]:border-b-0 border-b-3 border-l-0 border-amber-50 text-amber-50 w-full">Web Hosting</li>
                    </ul>
               </div>

                <div className="">
                    <Headings  pageHeading="About me" />
                    <p className="text-amber-50  md:text-[15px] text-[12px] text-justify">
                         Motivated and goal driven B-tech CSE student of JECRC University, Jaipur. I have a strong foundation in programming, DSA and web development along with great problem solving skills. I want to secure a Software Development Engineering role at a organization for which I can work for the betterment of myself as well as the organization.
                   </p>
                </div>
          </section>


          {(descriptionData != null )?

          <section> 
               <Headings pageHeading="Experience" pageHeadingStyle="w-full text-center" /> 
               <Experience data = {descriptionData.experience}/>
          </section>

          :<Loader/>
          }

          {(descriptionData != null)?
            <section className="pages h-fit flex flex-col  items-center justify-between gap-10 pt-10 pb-30 " id="pageThree">
               <Headings pageHeadingStyle="w-full" pageHeading="Projects"/>
               <Projects data = {descriptionData.project} />  
          </section>
         
          :<Loader/>
          }
     


         
          <section className="pages h-fit flex flex-col items-center" id="pageFour">

                      <Headings pageHeadingStyle="w-full" pageHeading="Get In Touch"/>

              
                       <p className="text-amber-50 min-[780px]:text-center text-justify py-10 px-10  md:text-[15px] text-[12px]">
                          If you’re looking for a passionate web developer who loves writing clean code and creating smooth user experiences, feel free to reach out. <br></br>Let's build something amazing together!
                       </p>

                    <footer className="flex flex-col w-full h-fit items-center justify-center  bg-gradient-to-r from-gray-800 to-gray-950 pt-10">
                         <ul className="flex  gap-5 text-amber-50 justify-around items-center box-border">
                            <li className="flex items-center"><img src="/mailIcon.png"      className="m-1 h-5"/>:<a  href="mailto:2002gehlotkartikeysingh@gmail.com"                     target="_blank" className="underline hover:text-blue-400 min-[780px]:text-[15px] text-[10px]  mx-2 my-2 text-center min-[780px]:w-fit w-full">Email</a></li>
                            <li className="flex items-center"><img src="/locationIcon.png"  className="m-1 h-5"/>:<a  href="https://www.linkedin.com/in/kartikey-singh-gahlot-58020124b"  target="_blank" className="underline hover:text-blue-400 min-[780px]:text-[15px] text-[10px]  mx-2 my-2 text-center min-[780px]:w-fit w-full">Linkedin</a></li>
                            <li className="flex items-center"><img src="githubIcon.png"     className="m-1 h-5"/>:<a  href="https://github.com/kartikey-singh-gahlot"                     target="_blank" className="underline hover:text-blue-400 min-[780px]:text-[15px] text-[10px]  mx-2 my-2 text-center min-[780px]:w-fit w-full">GitHub</a></li>       
                        </ul>
                         <h1 className="w-full text-center text-[15px] py-5 text-gray-400">© 2025 Kartz-Portfolio. All rights reserved.</h1>
                    </footer>               
          </section>
    </div>
  )
}
