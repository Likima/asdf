import React from "react";
import { games } from "./fltk_games";

const SOCIAL_MEDIA = [
  {
    text: "Instagram",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png",
    handle: "brandon_tang_",
    url: "https://www.instagram.com/brandon_tang_/",
  },
  {
    text: "Discord",
    image:
      "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    handle: "sowinghalo",
    url: "https://discord.com",
  },
  {
    text: "GitHub",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png",
    handle: "Likima",
    url: "https://github.com/Likima",
  },
];

const CATEGORIES = [
  {
    text: "PyFLTK Games"
  },
  {
    text: "Bots"
  },
  {
    text: "Other"
  }
]

function renderIcons() {
  return SOCIAL_MEDIA.map(({ image, text, handle, url }, index) => {
    return (
      <div className={`text-sky-400`} key={index}>
        <Icon image={image} text={text} handle={handle} url={url} />
      </div>
    );
  });
}

function Icon({
  text,
  image,
  handle,
  url,
  size = 30,
}: {
  text: string;
  image: string;
  size?: number;
  handle: string;
  url: string;
}) {
  return (
    <div className="flex gap-x-4">
      <img src={image} width={size} height={size} alt={text}/>
      <a href={url} className="whitespace-nowrap">
        {text}: {handle}
      </a>
    </div>
  );
}

function subtitle(text: string){
  return(<p className="m-10 text-3xl text-slate-800 dark:text-slate-400">{text}</p>)
}

function RenderCategories(){
  return CATEGORIES.map(({text}, index)=>{
    return(<div className="text-center mx-2 grid basis-1/3 justify-items-center bg-slate-900 p-5 dark:bg-slate-700 rounded-lg" key = {index}>
      <h1 className = "font-bold">{text}</h1>
      <button className="bg-sky-400 m-2 px-4 py-2 shadow-xl rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">See More</button>
    </div>)
  })
}

function DisplayForm(){

}

function Form({
  name,
  description,
  image,
  size = 40,
  url
}:{
  name:string,
  description:string
  image:string
  size?:number
  url:string
}){

}

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-blue-500 font-sans">
      <div className="bg-sky-800 mb-10 grid justify-items-center p-10 font-bold shadow-xl">
        <h1 className="mb-5 text-3xl">Brandon Tang</h1>
        <div className="grid grid-cols-3 gap-6 items-center text-xs sm:flex sm:flex-wrap">
          {renderIcons()}
        </div>
      </div>
      <div>{subtitle("About")}</div>
      <div className = "container mx-auto">
        <p className = "mx-5 max-w-full text-blue-200">
          Hi! My name is Brandon, I live in Vancouver, British Columbia, and I am a first-year student at Simon Fraser University majoring in computing science. 
          I have been coding for four years and have experience with Python, C/C++, JavaScript/Typescript, HTML/CSS, and frameworks such as 
          Angular. I am currently learning Next.js and assembly language. I love working on projects related to game theory and implementing algorithms to optimize 
          the skill of bots. I am excited to take on new opportunities and continue to learn and grow as a software engineer.
        </p>
      </div>
      <div>{subtitle("Projects")}</div>
      <div className="flex flex-row mx-10">
        {RenderCategories()}
      </div>
      <div>{subtitle("Hobbies")}</div>
      <div className = "container mx-auto">
        <p className = "mx-5 max-w-full text-blue-200">
          In my spare time I like to play music. I have been playing the cello, piano, and guitar for many
          years now. I love playing a game called GeoGuessr among many other strategy games.
        </p>
      </div>
    </div>
  );
}
