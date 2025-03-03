import BlackBoxWithText from "../components/BlackBoxWithText";
import ProductCardV2 from "../components/ProductCardV2";
import ProductDetail from "../components/ProductDetail";
import ProductDetailV1 from "../components/ProductDetailV1";
import ProductImage from "../components/ProductImage";
import ProductWithPrice from "../components/ProductWithPrice";
import Warning from "../components/Warning";

export default function Product() {
  return (
    <div className="w-full md:px-[30px] lg:px-[80px]">
      <div className="mb-[31px] text-center px-[15px] md:px-[80px]">
        <div className="font-['NotoSerifCJKjp-Bold'] md:text-[40px] text-[24px] font-bold mb-[20px]">
          男として、
          <br /> いつまでも輝き続けるために
        </div>
        <div className="font-['NotoSerifCJKjp-Bold'] md:text-[21px] text-[16px] font-bold md:p-0 text-justify">
          Black Horse Goldは、蜂蜜：9600mg、ローヤルゼリー：200mg、高麗人参：200mgという
          天然の稀少成分を原料とし、栄養素をたっぷり含んだ男性の性欲を増強するハチミツです。
        </div>
      </div>
      <ProductCardV2 />
      <BlackBoxWithText />
      <div className="flex justify-center">
        <ProductWithPrice />
      </div>
      <div className="flex-col md:flex-row flex">
        <ProductDetail />
        <ProductImage />
      </div>
      <br />
      <br />
      <ProductDetailV1 />
      <Warning />
    </div>
  );
}
