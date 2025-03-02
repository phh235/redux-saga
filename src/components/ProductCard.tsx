const ProductCard = () => {
  const products = [
    {
      id: 1,
      title: "男として、いつまでも輝き続けるために",
      mainImage:
        "https://s3-alpha-sig.figma.com/img/d505/187e/055a577d227e5d013e897ac5442f8f80?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JE8ckcG34r7UT4jdJAfApnS~h2vnd-evsQFC5GL-A4M7gl2aODgnGaI4hE0brXYU3ldt4onkHOs5jPE8KSXaH1YWVgX6ynjK3HKf1zY0~MdKYJYztLqpUmp~g52wLi-EPxy0NHRdUFhClmwd-bGygqS1AVkvJ~4gkn6iSsqm0baxrV8bV17B29QGgGV7zIes6KOFaQaHYdkIJJXNhnX~BaRJ06upa4hGQYD8cbS2FkCuB~ghfLJoQg4m3fTSFjdFYN7TId4KpjAKJbVvrT0MiXPuycJzNxh6TuVNRXTelaX7qbGg6eai11QRwEyXQgeAhYn0eWu3WwEvE3sLW7OjQQ__",
      subImage: "../src/assets/images/box-1.png",
      name: "BLACK HORSE GOLD",
      nameColor: "#ceb56e",
      shadowColor: "#000",
      description: "ブラックホースゴールド",
      tagline: "High quality elegant honey",
    },
    {
      id: 2,
      title: "プレミアムな貴方へ",
      mainImage:
        "https://s3-alpha-sig.figma.com/img/1fa3/b787/3fc68dd6edc2515199c7255d39bbd121?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JI5H2TnS6R88l9oBBeJ-334xxPLdBC71D4mWl6NkwIME0GQwUPNq3D35Bels4pmU9TWtXFHKGBBjQNhoZtrKVO2aviu-Z9kJ-1s7Qa4-ricJz2YnYWbJyiQM6om7S-QVBhc9lIDFVF1oFNbSvJ2h1b1e0YwB9ajenswu6dKpVdV5Ddw6j9pxhq7rJXaGBFmFEQdTKgTgHUo8~pW6Lny3VvKM1twrHL-3tyYPJiv7DavYv-68eev51wSiOVwn6c93GC~NBlYnnEV9rAZsEnND~NBDvna0NvZVtoc2zPE-iVy69V9SmiOwsfUXfTwOhWpL3VXktZUBK-cSJzr4Da1tKQ__",
      subImage: "../src/assets/images/box-2.png",
      name: "ROYAL HONEY VIP",
      nameColor: "black",
      shadowColor: "#fff",
      description: "ロイヤルハニーヴィップ",
      tagline: "High quality premium honey",
    },
    {
      id: 3,
      title: "もっと愛され、求められる女性に",
      mainImage:
        "https://s3-alpha-sig.figma.com/img/3548/5302/60ab9cd149493cef75a6fac6ea0ed97b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EJyeSMJ1uvPCU4IbAZv5HsvgR-ejXP~EZ3sjofvUHQDrP42OCmWmkskyuZKvHs7sOMpskxzD3sC6wgK64rIZqDV8dM0cgEKwvGbRjyfIwBPn4fWYCxfs7akO3Puckikt-xm5nHDUR3LTu8Sf4cJlKiavmtg4eRBqA8cWKSMrpA7axC6rRU~K3F~76j2TDnvzlLjGcLfO9N904dH~dcK~rsRUmaNcpt8DEgSs1J65eT1RJWWTXRKdQgfsb2PvTafObK~vDqmipAIRBeWrNEpRXvUOnNHzgYTt~XXcAtbTa27yM89vtX6BAi7rcIBzC7tSij77itUWPYd-6bQA7XHhUQ__",
      subImage: "../src/assets/images/box-3.png",
      name: "ROYAL HONEY FOR HER",
      nameColor: "#942d5d",
      shadowColor: "#fff",
      description: "ロイヤルハニーフォーハー",
      tagline: "Celebrity Honey",
    },
  ];

  return (
    <div className="w-full max-w-[1140px] mx-auto">
      <div className="md:px-[205px] px-[15px] md:text-center text-justify leading-[36px] font-bold text-base mb-[39px] font-[NotoSerifCJKjp-Bold]">
        弊社で取り扱っている「ロイヤルハニー VIP」「ブラックホース Gold」「ロイヤルハニー for
        Her」の3種類の商品についてご紹介します。
      </div>
      <div className="flex justify-center px-[15px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col rounded-[10px] w-auto overflow-hidden">
              {/* Title header */}
              <div className="bg-[#7e9bae] text-white text-[17px] text-center py-[10px] font-semibold">
                {product.title}
              </div>

              {/* Main image */}
              <div className="relative w-full h-[315px]">
                <img
                  src={product.mainImage || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Product box overlay */}
                <div className="absolute bottom-[-50px] left-[12px]">
                  <img
                    src={product.subImage}
                    alt={`${product.name} box`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Product name section */}
              <div className="bg-[#7e9bae] pt-[10px]">
                <div className="p-[12px] bg-gradient-to-r from-[#a0b5c3] to-[#7e9bae]">
                  <div
                    className="tracking-[-0.4px] leading-[60px]"
                    style={{ color: product.nameColor }}
                  >
                    <div
                      style={{ textShadow: `1.5px 1.5px 0px ${product.shadowColor}` }}
                      className="text-[40px] font-[Anton]  line-clamp-1"
                    >
                      {product.name}
                    </div>
                  </div>
                  <p
                    className="text-[15px] font-bold font-[Hiragino] -mt-[10px]"
                    style={{ color: product.nameColor }}
                  >
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <div className="bg-[#7e9bae] text-white px-[12px] py-[10px] font-[Hiragino] font-bold text-sm">
                {product.tagline}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
