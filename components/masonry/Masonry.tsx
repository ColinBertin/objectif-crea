"use client";

// import PhotoAlbum from "react-photo-album";
import Gallery from "react-photo-album";

import { useState } from "react";
import NextJsImage from "./NextJsImage";
import photos, { photos3, weddingPhotos, maternityPhotos } from "./photos";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type MasonryProps = {
  category: string;
};

export default function Masonry({ category }: MasonryProps) {
  const [index, setIndex] = useState(-1);
  const [open, setOpen] = useState(false);

  const handleLightBox = (index: number) => {
    setIndex(index);
    setOpen(true);
  };

  const handleCloseLightBox = () => {
    setOpen(false);
    setIndex(-1);
  };

  const handleCategory = (cat: string) => {
    switch (cat) {
      case "event":
        return photos;
      case "maternity":
        return maternityPhotos;
      case "newborn":
        return photos3;
      case "wedding":
        return weddingPhotos;
      default:
        break;
    }
  };

  return (
    <>
      {/* <PhotoAlbum
        photos={handleCategory(category) as any}
        layout="rows"
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
        onClick={({ index: current }) => handleLightBox(current)}
        sizes={{
          size: "calc(100vw - 40px)",
          sizes: [
            { viewport: "(max-width: 299px)", size: "calc(100vw - 5px)" },
            { viewport: "(max-width: 599px)", size: "calc(100vw - 10px)" },
            { viewport: "(max-width: 1199px)", size: "calc(100vw - 20px)" },
          ],
        }}
      /> */}

      <Gallery
        layout="masonry"
        columns={(containerWidth: number) => {
          let columns = 1;
          if (containerWidth >= 500) columns = 2;
          if (containerWidth >= 900) columns = 3;
          return columns;
        }}
        onClick={({ index: current }) => handleLightBox(current)}
        photos={handleCategory(category) as any}
        spacing={32}
        renderPhoto={NextJsImage}
      />

      <Lightbox
        slides={handleCategory(category)}
        open={open}
        index={index}
        close={handleCloseLightBox}
        // enable optional lightbox plugins
        plugins={[Thumbnails]}
      />
    </>
  );
}
