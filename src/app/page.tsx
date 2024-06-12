import AboutBook from "./components/aboutBook";
import BookDetails from "./components/bookDetails";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Necklace from "./components/necklace";
import Quote from "./components/quote";
import VideoBanner from "./components/videoBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto">
        <Hero />
        <AboutBook />
        {/* <VideoBanner /> */}
        <Quote />
        <Necklace />
        <BookDetails />
        <Footer secondVariant={false}/>
      </main>
    </>
  );
}
