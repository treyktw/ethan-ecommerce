import Navbar from "./components/navbar";
import Hero from "./components/hero";
import HoverComponent from "./components/hover-components/page/hover-image-snap";
import Shop from "./components/shop";
import FooterComponent from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen justify-center items-center">
        <main>
          <Hero />         
        </main>
        <div>
          <HoverComponent />
        </div>
        <div>
          <Shop />
        </div>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </>
  );
}
