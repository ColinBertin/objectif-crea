"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegEnvelope } from "react-icons/fa";

export default function ContactButton() {
  const pathname = usePathname();
  return (
    <>
      {!pathname?.endsWith("about-me") && (
        <Transition
          show={true}
          enter="transition ease-out duration-100"
          enterFrom="translate-x-0"
          enterTo="translate-x-12"
          leave="transition ease-in duration-75"
          leaveFrom="right-10translate-y-12"
          leaveTo="right-0"
        >
          1
          <Link
            className="flex gap-2 items-center fixed right-0 top-40 md:top-1/2 text-white bg-gray-300 hover:bg-gold-500 py-2 md:-mr-20 pr-2 md:pr-6 pl-3 md:pl-4 rounded-l-full md:hover:pr-6 md:hover:mr-0 transition-all ease-in-out duration-500 z-40"
            href={"/about-me#contact-form"}
            scroll={true}
          >
            <FaRegEnvelope size={20} />
            <p className="hidden md:block text-lg">Contact</p>
          </Link>
        </Transition>
      )}
    </>
  );
}
