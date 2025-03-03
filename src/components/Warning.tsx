import ProductWithPrice from "./ProductWithPrice";

export default function Warning() {
  return (
    <div className="pt-[30px]">
      <div className="px-[15px] font-['Hiragino] text-justify text-base">
        ブラックホース
        ゴールドは薬ではないため、いつ飲んでも問題ありません。身体への負担が少なく、副作用等もなく、
        「バイアグラ・シアリス・レビトラ・ラブグラ」などのED治療薬、ジェネリック医薬品が飲めない方も安心して飲用できす。
      </div>
      <div className="flex justify-center">
        <ProductWithPrice />
      </div>
    </div>
  );
}
