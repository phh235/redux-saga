const BlackBox = () => {
  const images = [
    "../src/assets/images/box-1-mini.png",
    "../src/assets/images/box-2-mini.png",
    "../src/assets/images/box-3-mini.png",
  ];

  return (
    <div className="flex justify-center items-center mt-[40px] px-[15px]">
      <div className="w-full h-auto px-[5px] py-[15px] md:p-[20px] bg-[#333333] rounded-[10px] flex-col md:flex-row md:justify-between justify-start items-start inline-flex overflow-hidden">
        <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Hiragino'] md:flex md:flex-row">
          ロイヤルハニーの
          <span className="hidden md:inline"> </span>
          <br className="md:hidden" />
          ご購入はこちら
        </div>
        <div className="self-stretch justify-end items-center inline-flex w-[40%] gap-2">
          {images.map((src, index) => (
            <img key={index} src={src} className="w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlackBox;
