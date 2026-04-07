
import { useState } from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';

export default function SwapPage() {
  const [fromAmount, setFromAmount] = useState('1.00');
  const [toAmount, setToAmount] = useState('2,431.12');
  const [slippage, setSlippage] = useState('5');
  const [isAutoSlippage, setIsAutoSlippage] = useState(true);

  return (
    <div className="flex-grow flex items-center justify-center px-4 pt-8 pb-40 relative">
      {/* Background Glows */}
      <div className="fixed top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[480px]">      

        <div className="glass-morphism p-6 rounded-2xl border border-white/5 bg-white/[0.01] shadow-2xl relative">
          <div className="space-y-4">
            {/* From Token */}
            <div className="bg-white/[0.03] p-6 rounded-none border border-white/5 hover:border-white/10 transition-all">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">You Pay</span>
                <span className="text-[10px] font-bold text-white/40">Balance: 1.42 ETH</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <input 
                  type="text" 
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="bg-transparent border-none p-0 text-3xl font-black text-white focus:ring-0 focus:outline-none w-full placeholder:text-white/10"
                  placeholder="0.00"
                />
                <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all shrink-0">
                  <div className="w-6 h-6 rounded-full bg-white/10 overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuClYLTjMo-ECiwi1rxIYCry-M0GiEH4kWXDlAh3entO2pdN5tPzkWY_rajik19c48DLkT9cEzl40ERJ6fZ795zPp-nbGSuhplgI_gG2zeEM6zhGn6If4syR89Ar5sFHRQdCCuOPiNTgH8JzmxtzhbgcEgkIqzVBi1jJVBmxj4TCZvd_SEWAw8-wX2D04wS5s3UfTJC38p8wVqSmuaeug1kz6BFqmj9WEQjsx7pjtHm2NMxo5ZdufoPCwF1cgc5VVN7uMIbcWzFIv9It" alt="ETH" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest text-white">ETH</span>
                  <ChevronDown size={14} className="text-white/40" />
                </button>
              </div>
            </div>

            {/* Interchange Arrow */}
            <div className="flex justify-center -my-8 relative z-10">
              <button className="w-10 h-10 bg-black border border-white/10 rounded-none flex items-center justify-center text-primary shadow-xl hover:scale-110 active:scale-95 transition-all">
                <ArrowDown size={18} strokeWidth={3} />
              </button>
            </div>

            {/* To Token */}
            <div className="bg-white/[0.03] p-6 rounded-none border border-white/5 hover:border-white/10 transition-all">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">You Receive</span>
                <span className="text-[10px] font-bold text-white/40">Balance: 4,102 USDC</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <input 
                  type="text" 
                  value={toAmount}
                  readOnly
                  className="bg-transparent border-none p-0 text-3xl font-black text-white/40 focus:ring-0 focus:outline-none w-full"
                  placeholder="0.00"
                />
                <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all shrink-0">
                  <div className="w-6 h-6 rounded-full bg-white/10 overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBloYkWcAZ6nPHwnmfr57eTpo9sQHjaPnq1pOAEahqybC22VT7cuyiepuqlQxTcbSBZWhCoIeGUkF4SDg4ujaMebFNeZozVwNLw3YEYuyeQi18wPDMjSvuKmYeePF6IFZLtG4qtswQf3z0TvGOOdNC6RVS_AXRLVTlaptmOzoPoC8tQNeXJkNFcCNS8wO9mxPgY9RgGPFN5FfRIF8vZgxnP8mn0sCLN_IFvdxkbCD7L-V_UVNWhc0agxbWvwV63hi5VKn0dqAerM1fd" alt="USDC" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest text-white">USDC</span>
                  <ChevronDown size={14} className="text-white/40" />
                </button>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <button className="w-full mt-6 py-5 rounded-xl bg-primary text-black font-black text-[10px] uppercase tracking-[0.3em] transition-all gold-glow hover:brightness-110 active:scale-[0.98]">
            SWAP
          </button>
        </div>

        {/* Detailed Stats */}
        <div className="mt-8 px-6 space-y-3">
          <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-white/20">
            <span>Rate</span>
            <span className="text-white/40">1 ETH = 2,431.12 USDC</span>
          </div>
          <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-white/20">
            <span>Slippage Tolerance</span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => { setIsAutoSlippage(true); setSlippage('5'); }}
                className={`px-2 py-1 rounded-md transition-all font-bold ${isAutoSlippage ? 'bg-primary text-black' : 'bg-white/5 text-white/40 hover:text-white'}`}
              >
                Auto
              </button>
              <div className={`relative flex items-center bg-black/40 border rounded-md px-2 py-1 transition-all ${!isAutoSlippage ? 'border-primary/50' : 'border-white/5'}`}>
                <input 
                  type="text" 
                  value={slippage}
                  onChange={(e) => { setSlippage(e.target.value); setIsAutoSlippage(false); }}
                  className="bg-transparent border-none p-0 text-[10px] font-bold text-white focus:ring-0 focus:outline-none w-6 text-right"
                />
                <span className="text-[10px] ml-0.5 text-white/40">%</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-white/20">
            <span>Estimated Gas</span>
            <span className="text-white/40">$4.12</span>
          </div>
        </div>
      </div>
    </div>
  );
}
