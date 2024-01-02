import FlashSales from "./component/FlashSales/FlashSales";
import HeroSection from "./component/HeroSection/HeroSection";


export default function Home() {
  return (
    <div className="w-5/6 mx-auto">
      <HeroSection></HeroSection>
      <FlashSales></FlashSales>

    </div>
  )
}
