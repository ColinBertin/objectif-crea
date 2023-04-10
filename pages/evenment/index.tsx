import Head from "next/head";
import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

import cloudinary from "../../utils/cloudinary";
import type { ImageProps } from "../../utils/types";
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder";
import { SetStateAction, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLastViewedPhoto } from "../../utils/useLastViewedPhoto";
import { useRouter } from "next/router";
import Modal from "../../components/Modal";

export default function Evenement({ images }: { images: ImageProps[] }) {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    console.log(images)
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current?.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto, images]);

  return (
    <div className="mx-auto max-w-[1960px]">
      <Head>
        <title>Évènement</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <NavBar />
        <Banner bg="/images/banner/evenement.png" />
      </div>
      <main>
        <div>
          <div className="px-10 py-8 lg:px-40 lg:py-20 text-white text-center">
            <h3 className="mb-3 text-xl">
              YOU DON’T TAKE A PHOTOGRAPH, YOU MAKE IT
            </h3>
            <p className="text-sm md:text-base leading-9 tracking-wide text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
              commodi quis esse, qui voluptatum distinctio perspiciatis. Ut
              quibusdam amet iste sit veniam, minima recusandae incidunt fugiat,
              voluptatem commodi natus debitis!
            </p>
          </div>
        </div>
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId as keyof SetStateAction<null>);
            }}
          />
        )}
        <div className="columns-1 gap-4 sm:columns-2 xl:columns-3 2xl:columns-4 p-4 justify-center">
          {images.map(({ id, public_id, format, blurDataUrl }) => (
            <Link
              key={id}
              href={`/evenment/?photoId=${id}`}
              as={`/evenment/p/${id}`}
              ref={id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null}
              shallow
              className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
            >
              <Image
                alt="Next.js Conf photo"
                className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                style={{ transform: "translate3d(0, 0, 0)" }}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
              />
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(20)
    .execute();
  let reducedResults: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}
