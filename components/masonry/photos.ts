"use client"

export type unsplashPhoto = {
  id: string;
  width: number;
  height: number;
}

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
  `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashingPhoto = (photos: unsplashPhoto[]) => {
  return photos.map((photo) => ({
  src: unsplashLink(photo.id, photo.width, photo.height),
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: unsplashLink(photo.id, breakpoint, height),
      width: breakpoint,
      height,
    };
  }),
}));
}

const unsplashPhotos = [
  { id: "8gVv6nxq6gY", width: 1080, height: 800 },
  { id: "Dhmn6ete6g8", width: 1080, height: 1620 },
  { id: "RkBTPqPEGDo", width: 1080, height: 720 },
  { id: "Yizrl9N_eDA", width: 1080, height: 721 },
  { id: "KG3TyFi0iTU", width: 1080, height: 1620 },
  { id: "9CRd1J1rEOM", width: 1080, height: 720 },
  { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
];

const unsplashPhotos3 = [
  { id: "twukN12EN7c", width: 1080, height: 694 },
  { id: "9UjEyzA6pP4", width: 1080, height: 1620 },
  { id: "sEXGgun3ZiE", width: 1080, height: 720 },
  { id: "S-cdwrx-YuQ", width: 1080, height: 1440 },
  { id: "q-motCAvPBM", width: 1080, height: 1620 },
  { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
  { id: "Jztmx9yqjBw", width: 1080, height: 607 },
];

const unsplashPhotos4 = [
  { id: "Xn4L310ztMU", width: 1080, height: 810 },
  { id: "iMchCC-3_fE", width: 1080, height: 610 },
  { id: "X48pUOPKf7A", width: 1080, height: 160 },
  { id: "GbLS6YVXj0U", width: 1080, height: 810 },
  { id: "9CRd1J1rEOM", width: 1080, height: 720 },
  { id: "xKhtkhc9HbQ", width: 1080, height: 1440 },
];

export const weddingPhotos = [
  {
    src: "/images/photos/wedding/wedding_1.png",
    alt: "Wedding 1",
    caption: "Wedding 1",
    width: 900, height: 900
  },
  {
    src: "/images/photos/wedding/wedding_2.png",
    alt: "Wedding 2",
    caption: "Wedding 2",
    width: 1080, height: 1620
  },
  {
    src: "/images/photos/wedding/wedding_3.png",
    alt: "Wedding 3",
    caption: "Wedding 3",
    width: 1024, height: 1024
  },
  {
    src: "/images/photos/wedding/wedding_4.png",
    alt: "Wedding 4",
    caption: "Wedding 4",
    width: 1080, height: 1080
  },
  {
    src: "/images/photos/wedding/wedding_5.png",
    alt: "Wedding 5",
    caption: "Wedding 5",
    width: 1080, height: 1080
  },
];

export const maternityPhotos = [
  {
    src: "/images/photos/maternity/maternity_1.png",
    alt: "Maternity 1",
    caption: "Maternity 1",
    width: 900, height: 900
  },
  {
    src: "/images/photos/maternity/maternity_2.png",
    alt: "Maternity 2",
    caption: "Maternity 2",
    width: 1080, height: 1620
  },
  {
    src: "/images/photos/maternity/maternity_3.png",
    alt: "Maternity 3",
    caption: "Maternity 3",
    width: 1024, height: 1024
  },
  {
    src: "/images/photos/maternity/maternity_4.png",
    alt: "Maternity 4",
    caption: "Maternity 4",
    width: 1080, height: 1080
  },
  {
    src: "/images/photos/maternity/maternity_5.png",
    alt: "Maternity 5",
    caption: "Maternity 5",
    width: 1080, height: 1080
  },
  {
    src: "/images/photos/maternity/maternity_6.png",
    alt: "Maternity 6",
    caption: "Maternity 6",
    width: 1080, height: 1620
  },
];

export const lightboxImages = weddingPhotos.map(({ src, alt, caption }) => ({
  src,
  alt,
  caption
}));

const photos = unsplashingPhoto(unsplashPhotos);
export const photos3 = unsplashingPhoto(unsplashPhotos3);
export default photos;
