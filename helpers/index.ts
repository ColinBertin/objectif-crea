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
  window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};
