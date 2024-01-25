export const categories = [
  {
    title: "Mariage",
    link: "/wedding",
    bg: "/images/banner/mariage.png",
  },
  {
    title: "Maternité",
    link: "/maternity",
    bg: "/images/banner/maternite.jpg",
  },
  {
    title: "Nouveau Née",
    link: "/newBorn",
    bg: "/images/banner/nouveauNee.png",
  },
  {
    title: "Évènement",
    link: "/event",
    bg: "/images/banner/evenement.png",
  },
  {
    title: "Landscape",
  },
  // {
  //   title: "Landscape",
  // },
  // {
  //   title: "Landscape",
  // },
  // {
  //   title: "Landscape",
  // },
];

export const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  // first prevent the default behavior
  e.preventDefault();
  // get the href and remove everything before the hash (#)
  console.log("Hellooooooo");
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  elem?.scrollIntoView({
    behavior: "smooth",
  });
};
