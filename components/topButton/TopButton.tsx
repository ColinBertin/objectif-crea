"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";
import { handleScroll } from "../../helpers";
import { Transition } from "@headlessui/react";

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
    <Transition
      show={isScrolling}
      className="w-full flex justify-center items-center"
      enter="transition ease-in duration-150 transform"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transition ease-out duration-150 transform"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <Link
        id="topBtn"
        className={`${
          !isScrolling && "hidden"
        } fixed bottom-28 right-7 z-50 bg-gray-300 text-white cursor-pointer p-2 text-md md:p-2 md:text-2xl rounded-full`}
        href={"#banner"}
        onClick={handleScroll}
      >
        <IoIosArrowRoundUp />
      </Link>
    </Transition>
  );
}
