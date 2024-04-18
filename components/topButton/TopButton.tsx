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
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Link
        id="topBtn"
        className={`${
          !isScrolling && "hidden"
        } fixed bottom-28 right-7 z-10 bg-gray-300 hover:bg-gold-500 text-white cursor-pointer p-2 text-md md:p-2 md:text-2xl rounded-full transition ease-in duration-100 cursor-pointer`}
        href={"#banner"}
        onClick={handleScroll}
      >
        <IoIosArrowRoundUp />
      </Link>
    </Transition>
  );
}
