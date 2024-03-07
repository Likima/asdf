"use client";

import React, { useState } from "react";
import { games } from "./fltk_games";
import RenderCategories from "./RenderCategories.client";

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
    <div className="flex flex-row items-center gap-x-4 ">
      <img src={image} width={size} height={size} alt={text} />
      <a href={url} className="whitespace-nowrap">
        {text}: {handle}
      </a>
    </div>
  );
}

function subtitle(text: string) {
  return (
    <p className="m-10 text-3xl text-slate-800 dark:text-slate-400">{text}</p>
  );
}

function Subtitle({tooltip:hello}: { tooltip: React.ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div >
      <div className={`fixed top-0 left-0 ${show ? "block" : "hidden"}`}>{hello}</div>
      <button
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        Hello
      </button>
    </div>
  );
}

function DisplayForm() {
  return (
    <div className="w-full max-w-xs">
      <form className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md">
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border border-red-500 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="******************"
          />
          <p className="text-xs italic text-red-500">
            Please choose a password.
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-xs text-gray-500">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  );
}

function Form({
  name,
  description,
  image,
  size = 40,
  url,
}: {
  name: string;
  description: string;
  image: string;
  size?: number;
  url: string;
}) {}

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-blue-500 font-sans">
      <div className="mb-10 grid justify-items-center bg-sky-800 p-10 font-bold shadow-xl">
        <h1 className="mb-5 text-3xl">Brandon Tang</h1>
        <div className="grid grid-cols-3 items-center gap-6 text-xs sm:flex sm:flex-wrap">
          {renderIcons()}
        </div>
      </div>
      <div>{subtitle("About")}</div>
      <Subtitle tooltip={<div>Hover!</div>} />;
      <div className="container mx-auto">
        <p className="mx-5 max-w-full text-blue-200">
          Hi! My name is Brandon, I live in Vancouver, British Columbia, and I
          am a first-year student at Simon Fraser University majoring in
          computing science. I have been coding for four years and have
          experience with Python, C/C++, JavaScript/Typescript, HTML/CSS, and
          frameworks such as Angular. I am currently learning Next.js and
          assembly language. I love working on projects related to game theory
          and implementing algorithms to optimize the skill of bots. I am
          excited to take on new opportunities and continue to learn and grow as
          a software engineer.
        </p>
      </div>
      <div>{subtitle("Projects")}</div>
      <div className="mx-10 flex flex-row">
        <RenderCategories />
      </div>
      <div>{subtitle("Hobbies")}</div>
      <div className="container mx-auto">
        <p className="mx-5 max-w-full text-blue-200">
          In my spare time I like to play music. I have been playing the cello,
          piano, and guitar for many years now. I love playing a game called
          GeoGuessr among many other strategy games.
        </p>
      </div>
    </div>
  );
}
