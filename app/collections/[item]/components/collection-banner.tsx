import Image from "next/image";

export function CollectionBanner() {
  return (
    <div className="relative h-[440px] w-full">
      <Image
        src="/recommend/recommend.jpg"
        alt="Collection banner"
        fill
        className="object-cover"
      />
    </div>
  );
}
