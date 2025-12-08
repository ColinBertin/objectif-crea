export const categories = [
  {
    title: "Mariage",
    link: "/wedding",
    bg: "/images/banner/wedding.jpg",
  },
  {
    title: "Maternité",
    link: "/maternity",
    bg: "/images/banner/maternity.jpg",
  },
  {
    title: "Nouveau Né",
    link: "/newBorn",
    bg: "/images/banner/newborn.jpg",
  },
  {
    title: "Évènement",
    link: "/event",
    bg: "/images/banner/event.jpg",
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

export const handleScrollTopBtn = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
};
