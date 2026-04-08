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
    <main className="relative pt-16 pb-40 px-4 flex flex-col items-center">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 bg-mesh-glow pointer-events-none -z-10"></div>
      
      {/* Header Section */}
      <div className="text-center mb-12 relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-on-surface">Create Pool</h1>
        <p className="text-on-surface-variant text-lg tracking-tight font-medium opacity-80">Deploy a new liquidity position with industrial precision.</p>
      </div>

      {/* Create Pool Monolith */}
      <div className="w-full max-w-xl bg-surface-container-high rounded-lg p-8 shadow-[0_0_40px_rgba(255,210,23,0.15)] relative z-10 border border-white/[0.03]">
        
        {/* Select Pair Section */}
        <div className="space-y-4 mb-8">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant px-1">Select Pair</label>
          <div className="grid grid-cols-1 gap-3">
            {/* Currency 0 */}
            <div className="bg-surface-container-low p-4 rounded-full flex items-center justify-between group hover:bg-surface-container hover:scale-[1.01] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="ETH" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuACACtYioQgw1RHiHAmL_mdMRtsJ1yqlEmuC753zaQTvqFbQSTL5m3W_Z-a92YMeG6CA-TD3PDUdH8GVQAPDc1BZTQqtBXRwbVAT_7w8XQ_FescRa72XkQdTNV6iFr9at7DCJkkGTeCj6p2m08aKGZWMhmpYkqeXeKMGSDZ0mqiASWQEOgdljvCkJbpltfmFdfHxgoh94mQEP0Mdp2CMEMzjtYS3WHrMUquwewzix_JoSimjilvGFB2m_fp46qxrXj9KkDevA0XY7N5"
                  />
                </div>
                <div>
                  <div className="font-bold text-on-surface">ETH</div>
                  <div className="text-[10px] font-mono text-on-surface-variant">0xbhj...xgfhd</div>
                </div>
              </div>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>

            {/* Currency 1 */}
            <div className="bg-surface-container-low p-4 rounded-full flex items-center justify-between group hover:bg-surface-container hover:scale-[1.01] transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container-highest">
                  <img 
                    className="w-full h-full object-cover" 
                    alt="DAI" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIBZTlxrrUPshZlD2Y8nI6D0SbZVkkipLnuBB6xosA6jnsxuShdpERDyBhwKR1D9dCPC2VTU7_yZnREWvvaFIizOk9Fb4W4ogx-qETPNq9v2RHR9xXQHwYnVTKM3uLphoYb0tNjEgH6BdWbLjCLkWWuS8MYKyIAY9ohcTntpIrQVtgT2Vy17m20S0V_MnblzfO9mAliDZyiU0DMRGLTnJzPvBuFfV9_7kz9o4f4YiSUUknMX6cUSc2FbnHv4B-lrXbz4MJGOskUuKC"
                  />
                </div>
                <div>
                  <div className="font-bold text-on-surface">DAI</div>
                  <div className="text-[10px] font-mono text-on-surface-variant">0xa2e...z9p8q</div>
                </div>
              </div>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-highest text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-sm">content_copy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Fee Tier Section */}
        <div className="space-y-4 mb-8">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant px-1">Select Fee Tier</label>
          <div className="grid grid-cols-2 gap-3">
            {feeTiers.map((tier) => (
              <div 
                key={tier.label}
                onClick={() => setFeeTier(tier.label)}
                className={`p-4 rounded-lg border transition-all cursor-pointer group ${
                  feeTier === tier.label
                  ? 'bg-surface-container border-primary/40 ring-1 ring-primary/20'
                  : 'bg-surface-container-low border-transparent hover:bg-surface-container hover:border-white/5'
                }`}
              >
                <div className="flex justify-between items-start mb-1">
                  <span className={`text-sm font-bold ${feeTier === tier.label ? 'text-primary' : 'text-on-surface'}`}>
                    {tier.label}
                  </span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded uppercase ${
                    feeTier === tier.label ? 'bg-primary-container/20 text-primary' : 'bg-surface-container-highest text-on-surface-variant'
                  }`}>
                    {tier.sub}
                  </span>
                </div>
                <span className={`text-[10px] font-mono ${feeTier === tier.label ? 'text-primary/60' : 'text-on-surface-variant'}`}>
                  tickSpacing: {tier.spacing}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Starting Price Section */}
        <div className="space-y-4 mb-10">
          <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant px-1">Starting Price Ratio</label>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {['1:1', '2:1', '1:2', 'CUSTOM'].map((opt) => (
              <button 
                key={opt}
                className={`py-2 rounded-full text-sm font-bold transition-all ${
                  opt === 'CUSTOM'
                  ? 'bg-surface-container border border-primary/20 text-primary'
                  : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center space-x-4 bg-surface-container-low p-4 rounded-lg">
            <div className="relative w-full">
              <input 
                className="w-full bg-surface-container text-center py-3 rounded-full border-none focus:ring-1 focus:ring-primary font-mono text-xl text-on-surface" 
                type="text" 
                defaultValue="1"
              />
            </div>
            <span className="text-primary font-black text-2xl">:</span>
            <div className="relative w-full">
              <input 
                className="w-full bg-surface-container text-center py-3 rounded-full border-none focus:ring-1 focus:ring-primary font-mono text-xl text-on-surface" 
                type="text" 
                defaultValue="1"
              />
            </div>
          </div>
        </div>

        {/* Primary Action */}
        <button className="w-full bg-primary-container text-on-primary-container font-black tracking-tight py-6 rounded-full text-lg shadow-[0_10px_30px_rgba(253,208,19,0.3)] hover:brightness-110 active:scale-95 duration-300 transition-all flex items-center justify-center space-x-3 uppercase">
          <span>Initialize Pool</span>
          <span className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
        </button>
      </div>

      {/* Footer Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl relative z-10">
        {[
          { icon: 'trending_down', title: 'Impermanent Loss', desc: 'Advanced protection algorithms to minimize divergence loss in volatile pairs.' },
          { icon: 'speed', title: 'Gas Optimized', desc: 'Contract logic minimized for sub-micro transaction overhead on every tick.' },
          { icon: 'verified_user', title: 'Multi-Audit', desc: 'Triple-vetted by industry leads to ensure institutional-grade smart contract safety.' }
        ].map((card, i) => (
          <div key={i} className="bg-surface-container-low p-6 rounded-lg group hover:scale-[1.02] transition-transform cursor-pointer border border-white/[0.02] hover:border-white/5">
            <div className="bg-surface-container-high w-12 h-12 rounded-full flex items-center justify-center mb-4 text-primary transition-transform group-hover:rotate-12">
              <span className="material-symbols-outlined">{card.icon}</span>
            </div>
            <h3 className="text-sm font-bold mb-1 text-on-surface uppercase tracking-tight">{card.title}</h3>
            <p className="text-[11px] text-on-surface-variant leading-relaxed opacity-70">{card.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
