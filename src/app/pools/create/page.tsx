import { useState } from 'react';

export default function CreatePoolPage() {
  const [feeTier, setFeeTier] = useState('0.30%');
  const [startingRatio, setStartingRatio] = useState('1:1');
  const [copiedA, setCopiedA] = useState(false);
  const [copiedB, setCopiedB] = useState(false);

  const copyToken = (address: string, isA: boolean) => {
    navigator.clipboard.writeText(address);
    if (isA) {
      setCopiedA(true);
      setTimeout(() => setCopiedA(false), 2000);
    } else {
      setCopiedB(true);
      setTimeout(() => setCopiedB(false), 2000);
    }
  };

  const feeTiers = [
    { label: '0.01%', sub: 'STABLE', spacing: '1', popular: false },
    { label: '0.05%', sub: 'POPULAR', spacing: '10', popular: true },
    { label: '0.30%', sub: 'STANDARD', spacing: '60', popular: false },
    { label: '1.00%', sub: 'EXOTIC', spacing: '200', popular: false },
  ];

  const [tokenA] = useState({
    symbol: 'ETH',
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACACtYioQgw1RHiHAmL_mdMRtsJ1yqlEmuC753zaQTvqFbQSTL5m3W_Z-a92YMeG6CA-TD3PDUdH8GVQAPDc1BZTQqtBXRwbVAT_7w8XQ_FescRa72XkQdTNV6iFr9at7DCJkkGTeCj6p2m08aKGZWMhmpYkqeXeKMGSDZ0mqiASWQEOgdljvCkJbpltfmFdfHxgoh94mQEP0Mdp2CMEMzjtYS3WHrMUquwewzix_JoSimjilvGFB2m_fp46qxrXj9KkDevA0XY7N5',
  });

  const [tokenB] = useState({
    symbol: 'DAI',
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIBZTlxrrUPshZlD2Y8nI6D0SbZVkkipLnuBB6xosA6jnsxuShdpERDyBhwKR1D9dCPC2VTU7_yZnREWvvaFIizOk9Fb4W4ogx-qETPNq9v2RHR9xXQHwYnVTKM3uLphoYb0tNjEgH6BdWbLjCLkWWuS8MYKyIAY9ohcTntpIrQVtgT2Vy17m20S0V_MnblzfO9mAliDZyiU0DMRGLTnJzPvBuFfV9_7kz9o4f4YiSUUknMX6cUSc2FbnHv4B-lrXbz4MJGOskUuKC',
  });

  const isTokenA0 = tokenA.address.toLowerCase() < tokenB.address.toLowerCase();
  const token0 = isTokenA0 ? tokenA : tokenB;
  const token1 = isTokenA0 ? tokenB : tokenA;

  return (
    <main className="pt-8 pb-40 px-6 max-w-6xl mx-auto relative z-10 flex flex-col items-center">

      {/* Header Section */}
      <div className="text-center mb-12 relative z-10 max-w-2xl mt-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
          Create Pool
        </h1>
      </div>

      {/* Create Pool Monolith */}
      <div className="w-full max-w-xl glass-morphism p-8 rounded-lg relative z-10">

        {/* Select Pair Section */}
        <div className="space-y-4 mb-4">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-white/30 px-1">Select Pair</label>
          <div className="grid grid-cols-1 gap-3">
            {/* Currency A */}
            <div className="bg-white/[0.03] border border-white/[0.05] p-4 rounded-lg flex items-center justify-between group hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full border-[2px] border-black overflow-hidden bg-black relative z-10">
                  <img
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={tokenA.symbol}
                    src={tokenA.icon}
                  />
                </div>
                <div>
                  <div className="text-xl font-black text-white tracking-tight">{tokenA.symbol}</div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-0.5">{`${tokenA.address.slice(0, 6)}...${tokenA.address.slice(-4)}`}</div>
                </div>
              </div>
              <button 
                onClick={() => copyToken(tokenA.address, true)}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/30 hover:text-primary hover:border-primary/50 transition-colors"
                title="Copy Address"
              >
                <span className="material-symbols-outlined text-sm">{copiedA ? 'check' : 'content_copy'}</span>
              </button>
            </div>

            {/* Currency B */}
            <div className="bg-white/[0.03] border border-white/[0.05] p-4 rounded-lg flex items-center justify-between group hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full border-[2px] border-black overflow-hidden bg-black relative z-10">
                  <img
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={tokenB.symbol}
                    src={tokenB.icon}
                  />
                </div>
                <div>
                  <div className="text-xl font-black text-white tracking-tight">{tokenB.symbol}</div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-0.5">{`${tokenB.address.slice(0, 6)}...${tokenB.address.slice(-4)}`}</div>
                </div>
              </div>
              <button 
                onClick={() => copyToken(tokenB.address, false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/30 hover:text-primary hover:border-primary/50 transition-colors"
                title="Copy Address"
              >
                <span className="material-symbols-outlined text-sm">{copiedB ? 'check' : 'content_copy'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Token0 / Token1 Order */}
        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-lg mb-8 flex flex-col gap-2 relative overflow-hidden">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase text-primary tracking-widest w-16">Token0:</span>
            <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">{token0.address}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/80 ml-auto">{token0.symbol}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase text-white/30 tracking-widest w-16">Token1:</span>
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{token1.address}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/60 ml-auto">{token1.symbol}</span>
          </div>
        </div>

        {/* Fee Tier Section */}
        <div className="space-y-4 mb-8">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-white/30 px-1">Select Fee Tier</label>
          <div className="grid grid-cols-2 gap-3">
            {feeTiers.map((tier) => (
              <div
                key={tier.label}
                onClick={() => setFeeTier(tier.label)}
                className={`p-4 rounded-lg transition-all cursor-pointer group ${feeTier === tier.label
                    ? 'bg-primary/5 border border-primary/40 ring-1 ring-primary/20 shadow-[0_0_15px_rgba(255,210,23,0.1)]'
                    : 'bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10'
                  }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-lg font-black tracking-tight ${feeTier === tier.label ? 'text-primary' : 'text-white'}`}>
                    {tier.label}
                  </span>
                  <span className={`text-[9px] px-2 py-0.5 rounded uppercase font-black tracking-widest ${feeTier === tier.label ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white/60'
                    }`}>
                    {tier.sub}
                  </span>
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-widest block ${feeTier === tier.label ? 'text-primary/60' : 'text-white/20'}`}>
                  tickSpacing: {tier.spacing}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Starting Price Section */}
        <div className="space-y-4 mb-10">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-white/30 px-1">Starting Price Ratio</label>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {['1:1', '2:1', '1:2', 'CUSTOM'].map((opt) => (
              <button
                key={opt}
                onClick={() => setStartingRatio(opt)}
                className={`py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${startingRatio === opt
                    ? 'bg-primary/10 border border-primary/30 text-primary'
                    : 'bg-white/[0.03] border border-white/5 hover:border-white/10 text-white/40 hover:text-white'
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
          {startingRatio === 'CUSTOM' && (
            <div className="flex items-center justify-center space-x-4 bg-white/[0.02] border border-white/[0.05] p-4 rounded-lg animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="relative w-full">
                <input
                  className="w-full bg-white/[0.03] border border-white/10 text-center py-3 rounded-lg focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] font-mono text-xl text-white transition-all"
                  type="text"
                  defaultValue="1"
                />
              </div>
              <span className="text-primary font-black text-2xl">:</span>
              <div className="relative w-full">
                <input
                  className="w-full bg-white/[0.03] border border-white/10 text-center py-3 rounded-lg focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] font-mono text-xl text-white transition-all"
                  type="text"
                  defaultValue="1"
                />
              </div>
            </div>
          )}
        </div>

        {/* Primary Action */}
        <button className="w-full bg-primary text-black font-black tracking-[0.2em] uppercase py-5 rounded-full text-[10px] gold-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3">
          Initialize Pool
        </button>
      </div>
    </main>
  );
}
