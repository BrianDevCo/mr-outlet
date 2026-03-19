import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RentLocals from "@/components/RentLocals";
import Stores from "@/components/Stores";
import FoodCourt from "@/components/FoodCourt";
import Events from "@/components/Events";
import Entertainment from "@/components/Entertainment";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <RentLocals />
        <Stores />
        <FoodCourt />
        <Events />
        <Entertainment />
        <Hours />
        <Location />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
