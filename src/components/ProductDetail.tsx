export default function ProductDetail() {
  const details = [
    {
      title: "純粋ハチミツ",
      desc: "純粋のハチミツには男女の営みに必要不可欠なエネルギーの源の宝庫です。ハチミツは体内への吸収が非常に優れているため、日常生活における肉体の疲れやストレスなど軽減してくれることも期待されます。",
    },
    {
      title: "ローヤルゼリー",
      desc: "必須アミノ酸9種類をはじめとし、アミノ酸15種類が豊富に含まれています。非常に栄養価が高く、栄養バランスを整える働きががあります",
    },
    {
      title: "高麗人参",
      desc: "高麗人参の有効成分は男性の精子製造能力を高めたり、精子の運動を活性化させる働きがあります。さらに美容健康や滋養強壮にも優れ、万能薬としても広く認知されています。",
    },
  ];

  return (
    <div className="px-[15px] font-['Hiragino'] text-base">
      {details.map((detail, index) => (
        <div key={index} className="mb-[20px] md:mb-[32px]">
          <div className="w-full md:py-0 py-[8px] gap-2 flex">
            <span className="text-[#ebb133]">● </span>
            <span className="text-black font-semibold">{detail.title}</span>
          </div>
          <div className="text-justify">{detail.desc}</div>
        </div>
      ))}
    </div>
  );
}
