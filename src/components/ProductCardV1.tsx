const ProductCardV1 = () => {
  const data = [
    {
      title: "HONEY",
      image:
        "https://s3-alpha-sig.figma.com/img/47bc/8425/63417ad32c1c60983da62c8b387ae1d2?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=t68Y-Eoo3eRhBGOuZE5nQn6klhQybfuC6RJQAmr-bStRyP-NmvYXmP5mDobhrSMPp2cXO99cd~YZhGyx4LzkC0E0x9FUkZa-M1OVa0f6XsyIE2fileuuEAMqhVeZpCUCqtNzeSfnqaameaV5eEolqli-81e8EyY5TSRlaSp4HgYDVoh49UXkGjBzmRql-bGF08vaZsNgFTU1j023QNNHcbTmKDNjJggEJhoDnQZZPad8xfCt6XDQC17CLyLQTnhJmE6kj8hS~4FXj7Bf-SqXKTm257zXOUdLIWXrtBw9F7-1B7u5k0k04pFBUrrDq2WZQDVQDYcCoekgTyftZTHG2Q__",
      content: [{ text: "ハチミツについて" }],
    },
    {
      title: "KACIP FATIMA - TONGKAT ALI - PREMIUM GINSENG",
      image:
        "https://s3-alpha-sig.figma.com/img/0bf7/b290/c5b3b3b328f29ba0ad2c36f5ecae4d49?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ACvMoMjq1MMBlzpjPfI365Ib7wDW2cDp-JM6MbGS5bXTUGSV6wipgjKXAzEs1t5MWIJ9kcZdkdlJ2CliHXAohIiPsiMJSlzC376K1MbJDAo5BXHxVXHrWkOLDWSoRG2ffSaRdWPm7souDVRaEmLyppwT0IBYE1TSBR8XQQ2KmGctiLicSwysU2YQilZ3vgMp0ZduJv1Cp0NZdg75dCeJBwmZewKsVDd309JSWUEgfyo3Nw~3YOFTBHLWF5aVyP5kYANny0WZHSXYI6XX9kRmJofjVrucTllMT8l2~Prbnrufkf7dqKki9oeGGRqB8sZo8iugijl5o~E3mPv3z1pFOA__",
      content: [
        { text: "カチプファティマについて" },
        { text: "トンカットアリについて" },
        { text: "高麗人参について" },
      ],
    },
    {
      title: "BEE POLLEN - ROYAL JELLY - BEE LARVA POEDER",
      image:
        "https://s3-alpha-sig.figma.com/img/7770/a061/ea7bf70f80314cfcdda0c8420392c314?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dGORwdwbUrq0X0ZdUHfLklCwvQM3KC2i0OnnbNoiZAJ5nEud1CPT2t7oLyptOQuY-2GAHvczGVZfFdqjt5SyUJ9UxQE9MgpWIThNe70Mh1to2Pp8KPbIlActPO~rTA4h~SPUAtdvydHIVdLGT3OdvS~vhbVfri54sLYpG6C42ag21URuVEzviYj0SYpM7H9SVcRKZ73DTGK5wlcN~N1WeabtepuGuk9MEY2U8EWtyKFGDIfQFWujATkLbo8NwZj9On4GuvgI5LUUYKpMrPKUxkh5NXi67yiWawLCZF1LaGyHJ8Fw6hSwlWmxlc~Ap7DGieJhYcYd3E6TYK3tpLFWaA__",
      content: [
        { text: "ビーポーレンについて" },
        { text: "ローヤルゼリーについて" },
        { text: "蜂の子　についてについて" },
      ],
    },
  ];
  return (
    <div className="bg-[#7E9BAE] mt-[100px]">
      <div className="font-[NotoSerifCJKjp-Bold] text-white md:text-[30px] text-[22px] md:flex md:justify-center md:items-center text-center px-[47.5px] py-4">
        Royal Honeyに欠かせない有効成分と効果
      </div>
      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="max-w-[1123px] md:p-0 p-[15px] md:px-[30px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-start md:mb-[32px] mb-[20px] bg-white"
            >
              <img
                className="md:p-0 p-[15px] w-full md:w-[300px] h-auto pb-0 md:pb-0 md:self-stretch"
                src={item.image}
                alt={item.title}
              />
              <div className="flex-grow md:flex-grow-0 w-full h-auto md:h-[170px] px-0 md:px-6 md:py-3 py-0 pt-0 md:pt-[12px] bg-white flex-col justify-start items-start gap-2">
                <div className="text-[#ebb133] md:text-[32px] md:leading-[44px] leading-[36px] md:flex md:items-center md:content-between lg:items-start md:p-0 px-[15px] text-[24px] font-[Anton] font-normal md:mt-0 mt-[12px] md:mb-0 mb-[10px]">
                  <span className="line-clamp-2 text-center md:line-clamp-1 md:text-left">
                    {item.title}
                  </span>
                </div>
                <div className="h-auto md:h-[88px] md:px-3 px-0 md:py-1 py-0 flex-col justify-start items-start gap-1 flex">
                  {item.content.map((content, index2) => (
                    <div
                      key={index2}
                      className="w-full md:py-0 py-[8px] flex items-center justify-center font-[Hiragino] md:justify-start gap-2 md:bg-white bg-[#ebb133] text-[16px]"
                    >
                      <span className="text-[#ebb133]">● </span>
                      <span className="md:text-black text-white text-base font-semibold">
                        {content.text}
                      </span>
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

export default ProductCardV1;
