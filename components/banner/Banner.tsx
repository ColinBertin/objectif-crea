export default function Banner() {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.40), rgba(0,0,0,0.40)), url('/bannerImg1.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-lg md:text-xl lg:text-2xl tracking-widest">— WE TAKE THE TIME TO —</h2>
        <h1 className="text-xl md:text-2xl lg:text-4xl tracking-widest">STAND & STARE</h1>
        <button
          type="button"
          className="tracking-widest text-white-500 hover:text-white-700 py-3 px-10 border border-white-500 hover:border-white-700"
        >
          BE INSPIRED
        </button>
      </div>
    </div>
  );
}
