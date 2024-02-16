"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { handleScroll } from "../../helpers";

export default function TopButton() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = function () {
        if (window.scrollY === 0) {
          setIsScrolling(false);
        } else {
          setIsScrolling(true);
        }
      };
    }

    return () => {
      if (typeof window !== "undefined") {
        window.onscroll = null;
      }
    };
  }, []);
  return (
    <Link
      id="topBtn"
      className={`${
        !isScrolling && "hidden"
      } fixed bottom-28 right-7 z-50 bg-gray-300 text-white cursor-pointer p-2 text-md md:p-2 md:text-2xl rounded-full transition ease-in-out duration-300 transform`}
      href={"#banner"}
      onClick={handleScroll}
    >
      <IoIosArrowRoundUp />
    </Link>
  );
}
