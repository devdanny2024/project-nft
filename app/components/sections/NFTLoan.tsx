"use client";

import Image from "next/image";

export function NFTLoan() {
  const stats = [
    {
      label: "Total borrowed",
      value: "61,521.12",
      prefix: "$",
    },
    {
      label: "Loans num",
      value: "16,754",
    },
    {
      label: "Recent APR",
      value: "110.20",
      suffix: "%",
    },
    {
      label: "Accrued interest",
      value: "993.45",
      prefix: "$",
    },
  ];

  const nftAvatars = [
    "/nfts/avatar-1.jpg",
    "/nfts/avatar-2.jpg",
    "/nfts/avatar-3.jpg",
    "/nfts/avatar-4.jpg",
    "/nfts/avatar-5.jpg",
    "/nfts/avatar-6.jpg",
    "/nfts/avatar-7.jpg",
    "/nfts/avatar-8.jpg",
    "/nfts/avatar-9.jpg",
    "/nfts/avatar-10.jpg",
    "/nfts/avatar-11.jpg",
    "/nfts/avatar-12.jpg",
  ];

  return (
    <section className="px-4 py-24">
      <div className="max-w-[1400px] mx-auto text-center bg-blue-100 p-6 rounded-3xl">
        {/* Header */}
        <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
          NFT Loan
        </h2>
        <p className="text-xl text-muted-foreground mb-16">
          A new way to leverage your assets
        </p>

        {/* Stats Card */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
          <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-base mb-2">{stat.label}</p>
                <p className="text-2xl font-bold">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NFT Background Image */}
        {/* <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden">
          <Image
            src="/loan/imgbg.jpg"
            alt="NFT Collection Background"
            fill
            className="object-cover"
            priority
          />
        </div> */}
      </div>
    </section>
  );
}
