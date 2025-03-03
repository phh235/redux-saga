import BlackBox from "../components/BlackBox";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import ProductCardV1 from "../components/ProductCardV1";

const TopPage = () => {
  return (
    <div className="bg-white w-full">
      {/* <Header /> */}
      <ProductCard />
      <ProductCardV1 />
      <FAQ />
      <BlackBox />
      <Footer />
    </div>
  );
};

export default TopPage;
