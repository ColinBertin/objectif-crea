"use client";

import PhotoAlbum, { Photo } from "react-photo-album";

import { useState } from "react";
import NextJsImage from "./NextJsImage";
import photos, { photos2, photos3, photos4 } from "./photos";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

type MasonryProps = {
  category: number;
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

  const handleCategory = (cat: number) => {
    switch (cat) {
      case 1:
        return photos;
      case 2:
        return photos2;
      case 3:
        return photos3;
      case 4:
        return photos4;
      default:
        break;
    }
  };

  return (
    <>
      <PhotoAlbum
        photos={handleCategory(category) as Photo[]}
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
