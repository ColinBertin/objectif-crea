import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  // const func = () => {
  //   console.log("Hello");
  // };

  return (
    <>
      {/* <button
        className="-mt-1 inline-flex rounded-md align-middle text-gray-50 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 print:hidden"
        type="button"
        onClick={func}
      >
        Push
      </button> */}
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
