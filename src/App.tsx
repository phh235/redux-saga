import BlackBox from "./components/BlackBox";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import ProductCardV1 from "./components/ProductCardV1";

const App = () => {
  return (
    <div className="bg-white mt-[100px]">
      <ProductCard />
      <ProductCardV1 />
      <FAQ />
      <BlackBox />
      <Footer />
    </div>
  );
};

export default App;
