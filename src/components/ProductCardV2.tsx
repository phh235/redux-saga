export default function ProductCardV2() {
  return (
    <div className="bg-[#7e9bae] mb-[30px]">
      <div className="flex flex-col md:flex-row">
        <div className="flex-col">
          <div className="text-[#ceb56e] font-['Anton'] text-[64px] pt-[12px] px-[16px] md:pt-[8.5px] leading-[64px]">
            BLACK HORSE
            <div className="flex">
              GOLD
              <span className="flex justify-center text-white text-[15px] font-['Hiragino'] font-semibold px-[16px]">
                ブラックホースゴールド
              </span>
            </div>
            <div className="text-[16px] font-['Hiragino'] font-semibold text-white leading-normal pt-[8px] pb-[12px]">
              High quality elegant honey
            </div>
          </div>
          <img src="../src/assets/images/product-card-v2.png" alt="" className="w-full" />
        </div>
        <div className="md:w-[700px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/3f64/a111/e1d37e50f34766f110996d0471316dc7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CzdlD~2DdR3zG7rKj1Ovff90~dtd4QGYMFU12d4GXp4c0UJjV4E8BP6gHx5VjSQztY86JgCL15OwtC0JxXOfWMY~dGk8uRVxgOR0QkBvdhiiqpDmsexg55KEnMgEnfPIwhU8U9WAXqEcobY-FcO17~d37QvKGJpqwvH7-TxRpyCBm-fHgltn8WfBEGPvOgXD5naGnJBUooujIX~XIfMkJyvj1DKqLbxlQXJxO-zcG0r922iAbMUVjGrRqUNLcUIwWBUD1s7rUjBMpYk6h7~0r~gxkUgeTeDJejg7s5pjb8DNRaQTVva4bmz3lBAykmY7UaxAF6Gp6UcCQ43DozmLng__"
            alt=""
            className="p-[15px]"
          />
        </div>
      </div>
    </div>
  );
}
