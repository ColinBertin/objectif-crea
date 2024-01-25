"use client";

import PhotoAlbum from "react-photo-album";

import { useState } from "react";
import NextJsImage from "./NextJsImage";
import photos from "./photos";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Masonry() {
  const [index, setIndex] = useState(-1);

  const [num, setNum] = useState(0);

  return (
    <>
      <button
        onClick={() => setNum((prev) => (prev += 1))}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Button
      </button>
      <PhotoAlbum
        photos={photos}
        layout="rows"
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
        onClick={({ index }) => {
          console.log(index);
          setIndex(index);
        }}
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
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
