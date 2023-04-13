import Link from "next/link";
import { BsChevronCompactDown } from "react-icons/bs";

type banner = {
  bg: string;
};

export default function Banner({ bg }: banner) {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    console.log(elem)
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen text-white px-10 md:px-16 lg:px-20">
        <h1 className="text-center text-xl sm:text-2xl md:text-4xl tracking-widest mb-10">
          NOTRE OBJECTIF EST DE RÉALISER VOTRE PROJET CRÉATIF !
        </h1>
        <Link href={"#intro"} onClick={handleScroll}>
          <BsChevronCompactDown className="h-8 w-8 md:h-12 md:w-12" />
        </Link>
      </div>
    </div>
  );
}
