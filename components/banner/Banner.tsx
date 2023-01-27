type banner = {
  bg: string;
};

export default function Banner({ bg }: banner) {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen text-white px-10 md:px-16 lg:px-20">
        <h1 className="text-center text-xl sm:text-2xl md:text-4xl tracking-widest mb-10">
          NOTRE OBJECTIF EST DE RÉALISER VOTRE PROJET CRÉATIF !
        </h1>
        {/* <button
          type="button"
          className="md:tracking-widest py-1.5 md:py-3 px-4 md:px-10 border border-white-500 hover:border-white-700"
        >
          <h3 className="text-base sm:text-lg md:text-xl">BE INSPIRED</h3>
        </button> */}
      </div>
    </div>
  );
}
