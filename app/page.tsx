import Banner from "../components/banner/Banner";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navBar/NavBar";

export default function HomePage() {
  return (
    <div className="relative h-screen w-screen">
      <header className="h-screen w-screen">
        <NavBar />
        <Banner bg="/images/banner/bannerImg1small.png" />
      </header>
      <main className="h-100">
        <Main />
      </main>
      <Footer />
    </div>
  );
}
