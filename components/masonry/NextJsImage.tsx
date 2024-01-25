import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <>
      <div
        className="filter sepia hover:sepia-0 ease-in duration-300 cursor-pointer"
        style={{ ...wrapperStyle, position: "relative" }}
      >
        <Image
          fill
          src={photo}
          placeholder={"blurDataURL" in photo ? "blur" : undefined}
          onClick={onClick}
          {...{ alt, title, sizes, className }}
        />
      </div>
    </>
  );
}

// import Image from "next/image";
// import {
//   isImageFitCover,
//   isImageSlide,
//   useLightboxProps,
// } from "yet-another-react-lightbox";

// function isNextJsImage(slide) {
//   return (
//     isImageSlide(slide) &&
//     typeof slide.width === "number" &&
//     typeof slide.height === "number"
//   );
// }

// export default function NextJsImage({ slide, rect }) {
//   const { imageFit } = useLightboxProps().carousel;
//   const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

//   if (!isNextJsImage(slide)) return undefined;

//   // const width = !cover
//   //   ? Math.round(
//   //       Math.min(rect.width, (rect.height / slide.height) * slide.width)
//   //     )
//   //   : rect.width;

//   // const height = !cover
//   //   ? Math.round(
//   //       Math.min(rect.height, (rect.width / slide.width) * slide.height)
//   //     )
//   //   : rect.height;

//   // console.log(width, height);

//   return (
//     <div
//       // className="filter sepia hover:sepia-0 ease-in duration-300 cursor-pointer"
//       style={{ position: "relative", width: rect.width, height: rect.height }}
//     >
//       <Image
//         fill
//         alt=""
//         src={slide}
//         loading="eager"
//         draggable={false}
//         placeholder={slide.blurDataURL ? "blur" : undefined}
//         style={{ objectFit: cover ? "cover" : "contain" }}
//         sizes="(max-width: 768px) 100vw, 33vw"
//       />
//     </div>
//   );
// }
