export type UnsplashPhoto = {
  src: string;
  width: number;
  height: number;
};

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashResize = (src: string, width: number, height: number) =>
  `${src}?auto=format&fit=crop&w=${width}&h=${height}&q=80`;

const mapPhotos = (photos: UnsplashPhoto[]) => {
  return photos.map((photo) => ({
    src: unsplashResize(photo.src, photo.width, photo.height),
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((bp) => {
      const height = Math.round((photo.height / photo.width) * bp);
      return {
        src: unsplashResize(photo.src, bp, height),
        width: bp,
        height,
      };
    }),
  }));
};

const weddingPhotos: UnsplashPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552",
    width: 1080,
    height: 720,
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e",
    width: 1080,
    height: 1620,
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    width: 1080,
    height: 720,
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    width: 1080,
    height: 721,
  },
  {
    src: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4",
    width: 1080,
    height: 1440,
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    width: 1080,
    height: 720,
  },
];

const maternityPhotos: UnsplashPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1457342813143-a1ae27448a82",
    width: 1080,
    height: 720,
  },
  {
    src: "https://images.unsplash.com/photo-1528218635780-5952720c9729",
    width: 1080,
    height: 1549,
  },
  {
    src: "https://images.unsplash.com/photo-1568043625493-2b0633c7c491",
    width: 1080,
    height: 721,
  },
  {
    src: "https://images.unsplash.com/flagged/photo-1551457457-699ff7c5d5f5",
    width: 1080,
    height: 1440,
  },
  {
    src: "https://images.unsplash.com/photo-1501516834911-269dbce099a0",
    width: 1080,
    height: 720,
  },
  {
    src: "https://images.unsplash.com/photo-1544382732-8f70c0b50ea3",
    width: 1080,
    height: 1620,
  },
];

const eventPhotos: UnsplashPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    width: 1080,
    height: 694,
  },
  {
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    width: 1080,
    height: 1620,
  },
  {
    src: "https://images.unsplash.com/photo-1522158637959-30385a09e0da",
    width: 1080,
    height: 720,
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
    width: 1080,
    height: 1440,
  },
  {
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
    width: 1080,
    height: 720,
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    width: 1080,
    height: 1620,
  },
];

const newbornPhotos: UnsplashPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1604917621956-10dfa7cce2e7",
    width: 1080,
    height: 810,
  },
  {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba",
    width: 1080,
    height: 610,
  },
  {
    src: "https://images.unsplash.com/photo-1583710457367-47de0ea21fef",
    width: 1080,
    height: 720,
  },
  {
    src: "https://images.unsplash.com/photo-1610901158532-d246c011729e",
    width: 1080,
    height: 1440,
  },
  {
    src: "https://images.unsplash.com/photo-1510154221590-ff63e90a136f",
    width: 1080,
    height: 720,
  },
  {
    src: "https://images.unsplash.com/photo-1610122748280-d0ae76b10750",
    width: 1080,
    height: 1620,
  },
];

export const wedding = mapPhotos(weddingPhotos);
export const maternity = mapPhotos(maternityPhotos);
export const event = mapPhotos(eventPhotos);
export const newborn = mapPhotos(newbornPhotos);