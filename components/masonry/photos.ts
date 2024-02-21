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

const unsplashPhotos2 = [
  { id: "Jztmx9yqjBw", width: 1080, height: 607 },
  { id: "-heLWtuAN3c", width: 1080, height: 608 },
  { id: "xOigCUcFdA8", width: 1080, height: 720 },
  { id: "1azAjl8FTnU", width: 1080, height: 1549 },
  { id: "ALrCdq-ui_Q", width: 1080, height: 720 },
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

export const mosaicImages = [
  {
    src: "/images/photos/wedding/wedding_1.png",
    alt: "Wedding 1",
    caption: "Wedding 1",
    width: 1080, height: 694
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
    width: 1080, height: 720
  },
  {
    src: "/images/photos/wedding/wedding_4.png",
    alt: "Wedding 4",
    caption: "Wedding 4",
    width: 1080, height: 1440
  },
  {
    src: "/images/photos/wedding/wedding_5.png",
    alt: "Wedding 5",
    caption: "Wedding 5",
    width: 1080, height: 720
  },
];

export const lightboxImages = mosaicImages.map(({ src, alt, caption }) => ({
  src,
  alt,
  caption
}));

const photos = unsplashingPhoto(unsplashPhotos);
export const photos2 = unsplashingPhoto(unsplashPhotos2);
export const photos3 = unsplashingPhoto(unsplashPhotos3);
// export const photos4 = unsplashingPhoto(unsplashPhotos4);
export const photos4 = mosaicImages;
export default photos;
