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
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h2 className="text-lg md:text-xl lg:text-2xl tracking-widest">
          — WE TAKE THE TIME TO —
        </h2>
        <h1 className="text-xl md:text-2xl lg:text-4xl tracking-widest">
          STAND & STARE
        </h1>
        <button
          type="button"
          className="md:tracking-widest py-1.5 md:py-3 px-4 md:px-10 border border-white-500 hover:border-white-700"
        >
          <h3 className="">BE INSPIRED</h3>
        </button>
      </div>
    </div>
  );
}
