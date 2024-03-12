import Banner from "../../components/banner/Banner";
import Image from "next/image";

import ContactForm from "./contact-form";

export const metadata = {
  title: "À Propos",
};

export default function AboutMePage() {
  return (
    <>
      <Banner bg="/images/banner/man4.png" title="Adam Krings" />
      <div id="intro" className="text-center">
        <section className="px-10 py-8 lg:px-40 lg:py-20">
          <h4 className="mb-6 text-white">
            À Propos d&apos;Adam Krings, Photographe
          </h4>
          <p className="text-base text-start md:text-center md:text-xl leading-7 tracking-wide text-gray-300">
            Bienvenue sur le portfolio d&apos;Adam Krings, un photographe
            passionné qui a su évoluer avec son art, passant de la chambre noire
            traditionnelle au dynamisme du numérique. Diplômé en arts et
            techniques visuels, Adam combine son amour pour la photographie
            traditionnelle avec les possibilités infinies offertes par le
            numérique pour créer des œuvres captivantes qui racontent des
            histoires.
          </p>
        </section>
        <section className="flex justify-center items-center space-y-8 px-10 py-8 lg:px-20 xl:px-40 lg:py-20 flex-wrap">
          <div className="flex flex-col justify-center lg:w-1/2">
            <h4 className="mb-6 text-white">Mon Voyage Photographique</h4>
            <p className="text-base text-start md:text-xl leading-7 lg:leading-9 md:p-4 tracking-wide text-gray-300">
              Mon amour pour la photographie a commencé dans l&apos;intimité
              d&apos;un laboratoire, où j&apos;ai appris à développer mes
              photos, capturant l&apos;essence du moment dans chaque goutte de
              révélateur. Cette période a été fondamentale, m&apos;enseignant la
              patience, le détail, et le respect pour chaque image. Avec
              l&apos;avènement du numérique, j&apos;ai embrassé cette nouvelle
              ère, me permettant de fusionner techniques classiques et
              innovations modernes. Mon diplôme en arts et techniques visuels
              n&apos;a été que le début d&apos;un voyage sans fin à travers
              l&apos;exploration et la création visuelle.
            </p>
          </div>
          <div className="md:w-1/2 flex lg:justify-end">
            <Image
              src="/images/photos/road-min.jpg"
              alt="nouveau ne"
              quality={60}
              width={550}
              height={550}
            />
          </div>
        </section>
        <section className="flex flex-row-reverse justify-center items-center space-y-8 px-10 py-8 lg:px-20 xl:px-40 lg:py-20 flex-wrap">
          <div className="flex flex-col justify-center md:w-1/2">
            <h4 className="mb-6 text-white">Mon Approche</h4>
            <p className="text-base text-start md:text-xl leading-7 lg:leading-9 md:p-4 tracking-wide text-gray-300">
              Je crois fermement que chaque photographie doit raconter une
              histoire, capturer un instant, une émotion, un fragment de temps
              qui, autrement, serait perdu. Que ce soit à travers les paysages
              urbains animés ou la tranquillité des scènes naturelles, ma
              mission est de révéler la beauté cachée dans les moments
              ordinaires, de souligner la lumière unique de chaque scène.
            </p>
          </div>
          <div className="md:w-1/2 flex lg:justify-start">
            <Image
              src="/images/photos/deck-min.jpg"
              alt="nouveau ne"
              quality={60}
              width={550}
              height={550}
            />
          </div>
        </section>
        {/* <div className="flex flex-col px-10 py-8 lg:px-40 lg:py-20 text-white">
          <h4 className="mb-6">Mes Services</h4>
          <p className="text-base md:text-xl leading-9 tracking-wide text-gray-300">
            Je propose une gamme de services photographiques, incluant mais non
            limitée à :
          </p>
          <ul className="text-base md:text-xl leading-9 tracking-wide text-gray-300 py-2">
            <li className="hover:text-white underline cursor-pointer">
              Mariage
            </li>
            <li className="hover:text-white underline cursor-pointer">
              Maternité
            </li>
            <li className="hover:text-white underline cursor-pointer">
              Nouveau-Né
            </li>
            <li className="hover:text-white underline cursor-pointer">
              Évènement
            </li>
          </ul>
          <p className="text-base md:text-xl leading-9 tracking-wide text-gray-300">
            Chaque projet est une nouvelle aventure, et je m&apos;engage à
            travailler étroitement avec mes clients pour capturer l&apos;essence
            de leurs visions et objectifs.
          </p>
        </div> */}
        <section id="contact-form" className="bg-gray-500">
          <div className="py-8 lg:pb-16 px-4 mx-auto max-w-screen-md">
            <div className="pt-8 md:pt-20 mb-3">
              <h4 className="uppercase text-white">Contactez-Moi</h4>
            </div>
            <p className="text-base text-start md:text-center md:text-xl tracking-wide text-gray-300 mb-6">
              Pour discuter de votre projet photographique et voir comment nous
              pouvons collaborer pour donner vie à votre vision, n&apos;hésitez
              pas à me contacter.
            </p>
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  );
}
