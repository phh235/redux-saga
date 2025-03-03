export default function ProductImage() {
  return (
    <div className="px-[37.5px]">
      <img
        src="https://s3-alpha-sig.figma.com/img/47bc/8425/63417ad32c1c60983da62c8b387ae1d2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k-HyWUpy2m1fkER-zi~Lakkl~1tNxn7zUo5B~ILjJFswfyeVOnEZROSNK7SiOTuCXooA4W4s5O5dmnGkyDKwRqmcCDCOInfPr38~VLggyoBQymlwymg~59KRHuDOCI61LvNNspjWca~4IlinbueDOAA-3ZS-QuBVuNaIhmtOqJdGkMzZu7mSfNQZRygZo2adMWqU2S18AoqwI5-QzqMxDV2xiZ6JgzDiZKIqUtENqNN15DQT3D6CrYdY804JuAoVKeqvSCxDBuLp5adxl3uTyjSoLHCONniHS49WuJo4hkjpA8wAvWrvfb4~68STJg2FTIo3rHLgf4cajNQJKtlcNw__"
        alt=""
        className="pb-5"
      />
      <div className="max-w-full min-[600px]:max-w-[380px] relative md:h-auto h-full">
        <img
          src="../src/assets/images/product-detail-img-2.png"
          alt=""
          className="w-full h-full md:object-contain object-cover"
        />
      </div>
    </div>
  );
}
