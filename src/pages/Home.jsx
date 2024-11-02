import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
}
