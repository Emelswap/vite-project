import { useState } from 'react';

export default function CreatePoolPage() {
  const [feeTier, setFeeTier] = useState('0.30%');

  const feeTiers = [
    { label: '0.01%', sub: 'STABLE', spacing: '1', popular: false },
    { label: '0.05%', sub: 'POPULAR', spacing: '10', popular: true },
    { label: '0.30%', sub: 'STANDARD', spacing: '60', popular: false },
    { label: '1.00%', sub: 'EXOTIC', spacing: '200', popular: false },
  ];

  return (
    <main className="pt-8 pb-40 px-6 max-w-6xl mx-auto relative z-10 flex flex-col items-center">

      {/* Header Section */}
      <div className="text-center mb-12 relative z-10 max-w-2xl mt-8">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
          Create Pool
        </h1>
        <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">
          Deploy a new liquidity position with industrial precision.
        </p>
      </div>

      {/* Create Pool Monolith */}
      <div className="w-full max-w-xl glass-morphism p-8 rounded-lg relative z-10">

        {/* Select Pair Section */}
        <div className="space-y-4 mb-8">
          <label className="text-[10px] uppercase tracking-[0.2em] font-black text-white/30 px-1">Select Pair</label>
          <div className="grid grid-cols-1 gap-3">
            {/* Currency 0 */}
            <div className="bg-white/[0.03] border border-white/[0.05] p-4 rounded-lg flex items-center justify-between group hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full border-[2px] border-black overflow-hidden bg-black relative z-10">
                  <img
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt="ETH"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACACtYioQgw1RHiHAmL_mdMRtsJ1yqlEmuC753zaQTvqFbQSTL5m3W_Z-a92YMeG6CA-TD3PDUdH8GVQAPDc1BZTQqtBXRwbVAT_7w8XQ_FescRa72XkQdTNV6iFr9at7DCJkkGTeCj6p2m08aKGZWMhmpYkqeXeKMGSDZ0mqiASWQEOgdljvCkJbpltfmFdfHxgoh94mQEP0Mdp2CMEMzjtYS3WHrMUquwewzix_JoSimjilvGFB2m_fp46qxrXj9KkDevA0XY7N5"
                  />
                </div>
                <div>
                  <div className="text-xl font-black text-white tracking-tight">ETH</div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-0.5">0xbhj...xgfhd</div>
                </div>
              </div>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/30 hover:text-primary hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>

            {/* Currency 1 */}
            <div className="bg-white/[0.03] border border-white/[0.05] p-4 rounded-lg flex items-center justify-between group hover:bg-white/[0.05] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full border-[2px] border-black overflow-hidden bg-black relative z-10">
                  <img
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt="DAI"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIBZTlxrrUPshZlD2Y8nI6D0SbZVkkipLnuBB6xosA6jnsxuShdpERDyBhwKR1D9dCPC2VTU7_yZnREWvvaFIizOk9Fb4W4ogx-qETPNq9v2RHR9xXQHwYnVTKM3uLphoYb0tNjEgH6BdWbLjCLkWWuS8MYKyIAY9ohcTntpIrQVtgT2Vy17m20S0V_MnblzfO9mAliDZyiU0DMRGLTnJzPvBuFfV9_7kz9o4f4YiSUUknMX6cUSc2FbnHv4B-lrXbz4MJGOskUuKC"
                  />
                </div>
                <div>
                  <div className="text-xl font-black text-white tracking-tight">DAI</div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-0.5">0xa2e...z9p8q</div>
                </div>
              </div>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/30 hover:text-primary hover:border-primary/50 transition-colors">
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>
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
                className={`py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${opt === 'CUSTOM'
                    ? 'bg-primary/10 border border-primary/30 text-primary'
                    : 'bg-white/[0.03] border border-white/5 hover:border-white/10 text-white/40 hover:text-white'
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-4 bg-white/[0.02] border border-white/[0.05] p-4 rounded-lg">
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
        </div>

        {/* Primary Action */}
        <button className="w-full bg-primary text-black font-black tracking-[0.2em] uppercase py-5 rounded-full text-[10px] gold-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3">
          Initialize Pool
        </button>
      </div>

      {/* Footer Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl relative z-10">
        {[
          { icon: 'trending_down', title: 'Impermanent Loss', desc: 'Advanced protection algorithms to minimize divergence loss.' },
          { icon: 'speed', title: 'Gas Optimized', desc: 'Contract logic minimized for sub-micro transaction overhead.' },
          { icon: 'verified_user', title: 'Multi-Audit', desc: 'Triple-vetted by industry leads to ensure smart contract safety.' }
        ].map((card, i) => (
          <div key={i} className="glass-morphism p-6 rounded-lg group hover:scale-[1.02] transition-transform cursor-pointer border border-white/[0.02] hover:border-white/10">
            <div className="bg-white/[0.03] border border-white/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary transition-transform group-hover:rotate-12">
              <span className="material-symbols-outlined">{card.icon}</span>
            </div>
            <h3 className="text-[11px] font-black mb-2 text-white uppercase tracking-[0.1em]">{card.title}</h3>
            <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">{card.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
