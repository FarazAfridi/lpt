import About from "./components/about";
import BookDetails from "./components/bookdetails";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Necklace from "./components/necklace";
import Quote from "./components/quote";
import VideoBanner from "./components/videobanner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto">
        <Hero />
        <About />
        <VideoBanner />
        <Quote />
        <Necklace />
        <BookDetails />
        <Footer />
      </main>
    </>
  );
}
