const FAQ = () => {
  const data = [
    {
      title: "FAQ",
      image: "../src/assets/images/faq-1.png",
      content: [{ text: "ロイヤルハニーについての" }, { text: "ご質問はこちら" }],
    },
    {
      title: "FAKE!",
      image: "../src/assets/images/faq-2.png",
      content: [{ text: "偽物商品に" }, { text: "お気をつけください！" }],
    },
    {
      title: "CONTACT",
      image: "../src/assets/images/faq-3.png",
      content: [{ text: "商品・卸売に関する" }, { text: "お問い合わせはこちら" }],
    },
  ];
  return (
    <div className="bg-[#fff] mt-[100px]">
      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-[1123px] p-0 px-[15px] md:px-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
          {data.map((item, index) => (
            <div key={index} className="w-full mb-[15px] md:mb-0">
              <img className="w-full h-auto" src={item.image} alt={item.title} />
              <div className="w-full px-4 py-2 bg-[#ebb133] justify-start items-center gap-4 inline-flex md:inline-block">
                <div className="text-white text-[40px] font-normal font-['Anton'] leading-[58px]">
                  {item.title}
                </div>
                <div className="w-full text-white text-base font-semibold font-['Hiragino']">
                  {item.content.map((content, index2) => (
                    <div key={index2} className="w-full font-[Hiragino] leading-[24px]">
                      <span className="text-white text-base font-semibold">{content.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
