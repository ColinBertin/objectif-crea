export default function Banner() {
  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url('/bannerImg1.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // filter: "blur(2px)"
      }}
    >
      <div className="fixed h-screen w-screen -z-1"></div>
      {/* <h1 className="absolute">Do you see me?</h1> */}
    </div>
  );
}
