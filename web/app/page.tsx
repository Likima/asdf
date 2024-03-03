import React from "react";

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
      <div className={`text-sky-600`} key={index}>
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
  size = 25,
}: {
  text: string;
  image: string;
  size?: number;
  handle: string;
  url: string;
}) {
  return (
    <div className="flex items-center gap-x-4 align-middle">
      <img src={image} width={size} height={size} alt={text} />
      <a href={url} className="whitespace-nowrap">
        {text}: {handle}
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <body className="bg-white font-sans dark:bg-slate-900">
        <div className="mb-10 grid justify-items-center bg-sky-800 p-10 font-bold shadow-lg">
          <h1 className="mb-5 text-3xl">Brandon Tang</h1>
          <div className="grid grid-cols-3 gap-6 justify-items-center text-xs sm:flex sm:flex-wrap sm:justify-center">
            {renderIcons()}
          </div>
        </div>
        <p className="m-10 text-2xl text-slate-900 dark:text-white">Projects</p>
        <div className="flex flex-row ">
          <div className="m-10 grid basis-1/4 justify-items-center bg-slate-900 p-10 dark:bg-slate-700">
            hello
          </div>
          <div className="basis-1/4 bg-slate-900 dark:bg-slate-700">Hello</div>
          <div className="basis-1/2 bg-slate-900 dark:bg-slate-700">Hello</div>
        </div>
      </body>
    </div>
  );
}
