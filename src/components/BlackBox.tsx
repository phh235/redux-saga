const BlackBox = () => {
  const images = [
    "https://s3-alpha-sig.figma.com/img/5faf/58a0/6409124d590866d61cc1aa6c6eff5c6d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YiUP7rAuMBhDy8GRZ6pr2JOkamRWIfMTKHoMR7Z1NM9s0J8VvTKOjulqtwQzkEIxyHx3gAaEw~FPlrkBZfta8Bb8qZL8ZR9jb9z8bLPxMdTTDcLjh0Sd56IImNK33fPbE0xFCFX3lae3kBpLcelgljz4Nt9nu1oDoh6vgCBJ6l-egOQQ0y-Ijl~A~dOHhT6YH4IuXlucvWSIUyU2NNMuU1TP3MAkkS1pZQDpYTyBrtReXGRGZ86kpoEjn5k3c-jUrrnT3TZ0hAVFZ1IuzNSDNBj5CsIBhUFNrYT~xWKAu7g6GiBIQ6TpsgKbiO8T1uSDhIaWr-x1nk3QzT-KkrmmhQ__",
    "https://s3-alpha-sig.figma.com/img/30fe/eb2a/0b0d6faed0cdcb6b3b0840b68ad6b1e5?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BovXR6c3Q5KOawS6Ih9~I181EyIUmcJaEZaYhyg2ViZzYB10duQ9D13Wb4FuCj8CQFcR3CfWZM~c~3Z~nt3u~d79HRVbs150Zs1gQv6SL6iQZeXsGbbA25w1b6RppM4upaNVjBF-bTjiuHXY0DEiFXqDvAdqwYUNT-higabnmVbnX57alYX~HtJpJCpEr5Fp3Hkf2vk1m0j6AAWcwrS4s5Nf6qSgeAWFWzWLu7KqMC9vMUJT5HoXTXckgQIzELirEKwV0bX8mSw2w-Iuck4n2CK0NUspb66MNSHTaHNzzwiMA9gAkt~vIBHO5FnohgYWQ6rK9SKIFRrqvrTb8mGQoA__",
    "https://s3-alpha-sig.figma.com/img/9354/6ed4/4558b7b7542e8f3344e971d60cc28077?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=H0akKIPIS6ZId4PF-8nNopd5FBKexqgLz6mQC-V78MaBic7xK9GIVqkyvUqflN~OdVpkIBR1k80eQ8hEvwBO0rrtvfVuUv5Evjc6re1nCKrt~Wv0WQ0K8FkxueLWTQ-tBb-6pWjnshejAZ2DKpTV7QG6lzmoxrJeyoi7D~0vH-5xHgJtWx0wwRDnMEyyJk27KVS18XDSXiDj1mS9efqFOW97MJeKq21YoXxRC9rlX6EoIpjMXTSqWPqD3ZdbPcBRe-bi5dfasberyGoLv~lxLBKyaO0pkTLM9GCq309Rix4VIiEi59xlOCg9wHoPj0ehcqtDS36zPlPRF~GnO53sLw__",
  ];

  return (
    <div className="w-full flex justify-center items-center mt-[40px] md:px-[30px] px-[15px] lg:px-[80px]">
      <div className="w-full h-auto px-[5px] py-[15px] md:p-[20px] bg-[#333333] rounded-[10px] flex-col md:flex-row md:justify-between justify-start items-start inline-flex overflow-hidden">
        <div className="self-stretch text-center text-white text-[22px] font-semibold font-['Hiragino'] md:flex flex-row">
          ロイヤルハニーの
          <span className="hidden md:inline"> </span>
          <br className="md:hidden" />
          ご購入はこちら
        </div>
        <div className="md:justify-end justify-center items-center flex md:w-[50%] w-full md:h-[126px] h-[141px] gap-2">
          {images.map((src, index) => (
            <img key={index} src={src} className="md:w-[200px] w-[117px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlackBox;
