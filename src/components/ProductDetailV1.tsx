export default function ProductDetailV1() {
  const details = [
    {
      sections: [
        {
          id: 1,
          title: "精力の向上・勃起力の強化",
          content:
            "最近、性欲があまり湧かなくなってしまったり、若い頃のような朝の衝撃もなく、性生活で持続力や持久力もない。性的興奮があっても下半身が硬くならない、セックスの途中で中折れしてしまう。そんなお悩みを抱えている方のサポートを致します。",
        },
        {
          id: 2,
          title: "不妊治療対策",
          content: [
            "天然のトンカットアリには男性ホルモンを増加させ、質の良い精子をつくりだし、質の良い精子の量も増加させる働きがあります。",
            "さらには低作用があり、アドレナリンが出て、ヤル気が起こり、勤起力も自然と高めてくれます。ロイヤルハニーは男性の不妊症に効果が期待できます。",
          ],
        },
      ],
      image: {
        src: "https://s3-alpha-sig.figma.com/img/c98a/dea4/38a9dd1ddbd486899b5175d79232e6f8?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RScLK-s8leG5XqUEN4gCrPPEHc9knkhhoerLGtvb0sAxI0Y~hQkhQ2YYdBK6M2-W7MrZ-z29DSxLOSYtD7TfilQcITlHnUhfNt~AztF4FqbLwUm2yzTMiRzKk-FELvKHXTINmcok0Y0xcLj79wvaeCGMUhzdTXD60axQQz0WN34A44JKln02fWbUACanvcCsj-LA8-~IiKI8KDpKcjba1ZW0Cm82Dcqy71DxCQ5Kd36eNL4KGprnkYuWynd7bH~avT13Zl-jqFw1a0FvBjNfXZ5~7B5G4HInx497lnleaxCHc89kO35~pUHdQwsqlBGWtlT4UVQbJULef~eUb4kUlw__",
        alt: "",
      },
    },
  ];
  return (
    <div className="flex flex-col md:flex-row">
      <div className="px-[15px] font-['Hiragino'] text-base self-stretch">
        {details.map((detail, index) => (
          <div key={index}>
            {detail.sections.map((section) => (
              <div key={section.id} className="py-[20px]">
                <div className="font-semibold text-[#F04438] mb-[8px]">
                  {section.id}：{section.title}
                </div>
                {Array.isArray(section.content) ? (
                  section.content.map((text, i) => (
                    <div key={i} className="text-justify font-light">
                      {text}
                    </div>
                  ))
                ) : (
                  <div className="text-justify font-light">{section.content}</div>
                )}
              </div>
            ))}
            <img
              src={detail.image.src}
              alt={detail.image.alt}
              className="px-[22.5px] max-w-full min-[600px]:max-w-[380px] relative md:h-auto h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
