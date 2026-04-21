import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdBanner from "@/components/AdBanner";
import RentLocals from "@/components/RentLocals";
import Stores from "@/components/Stores";
import FoodCourt from "@/components/FoodCourt";
import Promotions from "@/components/Promotions";
import Events from "@/components/Events";
import Entertainment from "@/components/Entertainment";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import InstagramFeed from "@/components/InstagramFeed";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AdBanner />
        <RentLocals />
        <Stores />
        <FoodCourt />
        <Promotions />
        <Events />
        <Entertainment />
        <Hours />
        <Location />
        <InstagramFeed />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
