import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "../../components/Navigation";
import Products from "./components/Products";
import Services from "./components/Services";
import CardsHero from "./components/CardsHero";

function HomePage() {
  return (
    <>
      {/* <Hero /> */}
      <CardsHero />
      <Products />
      <Services />
    </>
  );
}

export default HomePage;
