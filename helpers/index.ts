export const categories = [
  {
    title: "Mariage",
    link: "/wedding",
    bg: "/images/banner/mariageBig.png",
  },
  {
    title: "Maternité",
    link: "/maternity",
    bg: "/images/banner/materniteSmall.jpg",
  },
  {
    title: "Nouveau Né",
    link: "/newBorn",
    bg: "/images/banner/nouveauNeSmall.png",
  },
  {
    title: "Évènement",
    link: "/event",
    bg: "/images/banner/evenementSmall.png",
  },
];

export const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  // get the href and remove everything before the hash (#)
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};
