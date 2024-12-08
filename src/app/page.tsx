import HeroSection from "./components/Hero";  // Ensure the file name is correct
import FeaturedProducts from "./components/FeaturedProducts";
import LatestBlog from "./components/LatestBlog"; 
import LatestProducts from "./components/LatestProducts";
import MyAccount from "./components/MyAccount";
import TrendingProducts from "./components/TrendingProduct";
import Th from "./components/TrendingTh";
import DiscountItems from "./components/Discount";
import UniqueFeature from "./components/UniqueFeatures";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <UniqueFeature/>
      <LatestProducts />
      <DiscountItems />
      <TrendingProducts />
      <Th />
      <LatestBlog /> 
      <MyAccount />
    </div>
  );
}