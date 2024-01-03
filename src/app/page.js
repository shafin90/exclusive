import AdBanner from "./component/AdBanner/AdBanner";
import BestSellingProducts from "./component/BestSellingProducts/BestSellingProducts";
import BrowseByCategory from "./component/BrowseByCategory/BrowseByCategory";
import Featured from "./component/Featured/Featured";
import FlashSales from "./component/FlashSales/FlashSales";
import HeroSection from "./component/HeroSection/HeroSection";
import OurCommitment from "./component/OurCommitment/OurCommitment";
import OurProducts from "./component/OurProducts/OurProducts";


export default function Home() {
  return (
    <div className=" w-11/12 lg:w-5/6 mx-auto">
      <HeroSection></HeroSection>
      <FlashSales></FlashSales>
      <BrowseByCategory></BrowseByCategory>
      <BestSellingProducts></BestSellingProducts>
      <AdBanner></AdBanner>
      <OurProducts></OurProducts>
      <Featured></Featured>
      <OurCommitment></OurCommitment>
    </div>
  )
}
