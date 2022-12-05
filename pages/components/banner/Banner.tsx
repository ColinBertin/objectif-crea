export default function Banner() {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url('/bannerImg1.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <h3 className="text-xl tracking-widest">— WE TAKE THE TIME TO —</h3>
        <h1 className="text-4xl tracking-widest">STAND & STARE</h1>
        <button type="button" className="tracking-widest text-white-500 hover:text-white-700 py-3 px-10 border border-white-500 hover:border-white-700">BE INSPIRED</button>
      </div>
    </div>
  );
}
