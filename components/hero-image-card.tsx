import Image from "next/image";

type HeroImageCardProps = {
  src: string;
  alt: string;
};

export function HeroImageCard({ src, alt }: HeroImageCardProps) {
  return (
    <div className="bezel-shell hero-image-card">
      <div className="bezel-core hero-visual-media">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 42vw"
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
