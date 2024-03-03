const SOCIALS = [
  {
    text: "instagram",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png",
  },
  {
    text: "discord",
    image:
      "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
  },
];

function Icon({
  text,
  image,
  size = 25,
}: {
  text: string;
  image: string;
  size?: number;
}) {
  return (
    <div className="flex flex-row items-center gap-x-4 align-middle">
      <img src={image} width={size} height={size} alt={text} />
      <span>{text}</span>
    </div>
  );
}

export default function Page() {
  return (
    <div className="h-screen w-screen">
      <div className="flex h-full w-full flex-col">
        {SOCIALS.map(({ image, text }) => {
          return <Icon image={image} text={text} />;
        })}
      </div>
    </div>
  );
}
