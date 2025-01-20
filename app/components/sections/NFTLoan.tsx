export function NFTLoan() {
  return (
    <section className="px-4 py-12">
      <div className="max-w-[1400px] mx-auto bg-gradient-to-r from-[#2E6EFF] to-[#2555CC] rounded-xl p-8">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold mb-2">NFT Loan</h2>
            <p className="text-lg text-white/90">A new way to leverage your assets</p>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <p className="text-sm text-white/80">Total Borrowed</p>
              <p className="text-xl font-bold">$13,512.12</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-white/80">Total APR</p>
              <p className="text-xl font-bold">26.2%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-white/80">Account savings</p>
              <p className="text-xl font-bold">$1,325.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 