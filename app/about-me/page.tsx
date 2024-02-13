import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Image from "next/image";

export const metadata = {
  title: "À Propos",
};

export default function AboutMePage() {
  return (
    <>
      <div>
        <NavBar />
        <Banner bg="/images/banner/man2.png" title="Adam Krings" />
      </div>
      <div id="intro" className="text-center">
        <div className="px-10 py-8 lg:px-40 lg:py-20">
          <h4 className="mb-6 text-white">
            À Propos d&apos;Adam Krings, Photographe
          </h4>
          <p className="text-sm md:text-base lg:text-lg leading-9 tracking-wide text-gray-300">
            Bienvenue sur le portfolio d&apos;Adam Krings, un photographe
            passionné qui a su évoluer avec son art, passant de la chambre noire
            traditionnelle au dynamisme du numérique. Diplômé en arts et
            techniques visuels, Adam combine son amour pour la photographie
            traditionnelle avec les possibilités infinies offertes par le
            numérique pour créer des œuvres captivantes qui racontent des
            histoires.
          </p>
        </div>
        <div className="flex justify-between px-10 py-8 lg:px-40 lg:py-20 flex-wrap md:flex-nowrap">
          <div className="flex flex-col justify-center w-1/2">
            <h4 className="mb-6 text-white">Mon Voyage Photographique</h4>
            <p className="text-sm md:text-base lg:text-lg leading-9 tracking-wide text-gray-300">
              Bienvenue sur le portfolio d&apos;Adam Krings, un photographe
              passionné qui a su évoluer avec son art, passant de la chambre
              noire traditionnelle au dynamisme du numérique. Diplômé en arts et
              techniques visuels, Adam combine son amour pour la photographie
              traditionnelle avec les possibilités infinies offertes par le
              numérique pour créer des œuvres captivantes qui racontent des
              histoires.
            </p>
          </div>
          <Image
            src="/images/photos/road-min.jpg"
            alt="nouveau ne"
            quality={60}
            width={550}
            height={550}
          />
        </div>
        <div className="flex flex-row-reverse justify-between px-10 py-8 lg:px-40 lg:py-20 flex-wrap">
          <div className="flex flex-col justify-center w-1/2">
            <h4 className="mb-6 text-white">Mon Approche</h4>
            <p className="text-sm md:text-base lg:text-lg leading-9 tracking-wide text-gray-300">
              Je crois fermement que chaque photographie doit raconter une
              histoire, capturer un instant, une émotion, un fragment de temps
              qui, autrement, serait perdu. Que ce soit à travers les paysages
              urbains animés ou la tranquillité des scènes naturelles, ma
              mission est de révéler la beauté cachée dans les moments
              ordinaires, de souligner la lumière unique de chaque scène.
            </p>
          </div>
          <Image
            src="/images/photos/deck-min.jpg"
            alt="nouveau ne"
            quality={60}
            width={550}
            height={550}
          />
        </div>
        {/* <div className="flex flex-col px-10 py-8 lg:px-40 lg:py-20 text-white">
          <h4 className="mb-6">Mes Services</h4>
          <p className="text-sm md:text-base lg:text-lg leading-9 tracking-wide text-gray-300">
            Je propose une gamme de services photographiques, incluant mais non
            limitée à :
          </p>
          <ul className="text-sm md:text-base lg:text-lg leading-9 tracking-wide text-gray-300 py-2">
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
          <p className="text-sm md:text-base lg:text-lg leading-9 tracking-wide text-gray-300">
            Chaque projet est une nouvelle aventure, et je m&apos;engage à
            travailler étroitement avec mes clients pour capturer l&apos;essence
            de leurs visions et objectifs.
          </p>
        </div> */}
        <section className="bg-gray-500">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <div className="pt-8 md:pt-20 mb-3">
              <h4 className="uppercase text-white">Contactez-Moi</h4>
            </div>
            <p className="text-sm md:text-base lg:text-lg leading-9 tracking-wide text-gray-300 mb-6">
              Pour discuter de votre projet photographique et voir comment nous
              pouvons collaborer pour donner vie à votre vision, n&apos;hésitez
              pas à me contacter.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Vorte Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-white">
                  Suject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Faite-moi savoir comment puis-je vous aider"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-white">
                  Votre message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Laissez-moi un message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white transition ease-in-out duration-200 transform rounded-lg bg-gray-200 sm:w-fit hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Envoyer
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
