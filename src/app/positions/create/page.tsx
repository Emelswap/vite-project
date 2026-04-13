import { useParams } from 'react-router-dom';
import { ChevronDown, Minus, Plus, Infinity } from 'lucide-react';
import { useState } from 'react';
import TokenSelector, { Token } from '@/components/TokenSelector';

const TOKENS: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', balance: '45.23', address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2' },
  { symbol: 'USDC', name: 'USD Coin', logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png', balance: '12,400.00', address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eb48' },
  { symbol: 'USDT', name: 'Tether', logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png', balance: '5,120.50', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7' },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', logo: 'https://cryptologos.cc/logos/wrapped-bitcoin-wbtc-logo.png', balance: '1.24', address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599' },
  { symbol: 'DAI', name: 'Dai Stablecoin', logo: 'https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png', balance: '8,900.00', address: '0x6B175474E89094C44Da98b954EedeAC495271d0F' },
];

export default function PositionsPage() {
  const { params } = useParams<{ params: string }>();
  
  const [rangeType, setRangeType] = useState<'full' | 'custom'>('custom');
  const [strategy, setStrategy] = useState<'stable' | 'wide'>('wide');
  const [feeTier, setFeeTier] = useState('0.30%');
  const [token0, setToken0] = useState<Token>(TOKENS[3]);
  const [token1, setToken1] = useState<Token>(TOKENS[2]);

  const feeTiers = [
    { label: '0.01%', sub: 'STABLE', spacing: '1', popular: false },
    { label: '0.05%', sub: 'POPULAR', spacing: '10', popular: false },
    { label: '0.30%', sub: 'STANDARD', spacing: '60', popular: true },
    { label: '1.00%', sub: 'EXOTIC', spacing: '200', popular: false },
  ];

  // Optional: parser logic if needed later
  // const urlParams = new URLSearchParams(params);
  // const currency0 = urlParams.get("currency0");

  return (
    <div className="pt-8 pb-40 px-6 max-w-4xl mx-auto relative z-10">
      {/* Background Mesh */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-7xl h-full opacity-10 pointer-events-none flex justify-center">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 blur-[120px] rounded-full"></div>
      </div>

      <main className="w-full">
        {/* Step 1: Select Pair & Fee Tier */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary text-black h-8 w-8 flex items-center justify-center font-black">1</div>
            <h2 className="text-3xl font-black tracking-tight text-white uppercase">Select Pair & Fee Tier</h2>
          </div>

          {/* Token Selectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="glass-morphism bg-white/[0.01] p-6 hover:bg-white/[0.03] transition-all group border border-white/5 hover:border-white/20 flex items-center justify-between">
              <TokenSelector 
                selectedToken={token0}
                onSelect={setToken0}
                tokens={TOKENS}
              />
              <div className="text-right">
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{token0.address ? `${token0.address.slice(0, 6)}...${token0.address.slice(-4)}` : ''}</p>
                <p className="text-[10px] font-mono text-white/10 uppercase tracking-widest mt-1">Token 0</p>
              </div>
            </div>

            <div className="glass-morphism bg-white/[0.01] p-6 hover:bg-white/[0.03] transition-all group border border-white/5 hover:border-white/20 flex items-center justify-between">
              <TokenSelector 
                selectedToken={token1}
                onSelect={setToken1}
                tokens={TOKENS}
              />
              <div className="text-right">
                <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{token1.address ? `${token1.address.slice(0, 6)}...${token1.address.slice(-4)}` : ''}</p>
                <p className="text-[10px] font-mono text-white/10 uppercase tracking-widest mt-1">Token 1</p>
              </div>
            </div>
          </div>

          {/* Fee Tiers */}
          <div className="mb-4">
            <p className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-4">Fee Tier</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {feeTiers.map((tier) => (
                <div
                  key={tier.label}
                  onClick={() => setFeeTier(tier.label)}
                  className={`p-4 transition-all cursor-pointer relative ${
                    feeTier === tier.label
                      ? 'bg-primary/5 border border-primary/40 ring-1 ring-primary/20 shadow-[0_0_15px_rgba(255,210,23,0.1)]'
                      : 'bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-2 right-4 bg-primary text-black text-[8px] font-black px-2 py-0.5 uppercase tracking-widest">Popular</span>
                  )}
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-lg font-black tracking-tight ${feeTier === tier.label ? 'text-primary' : 'text-white'}`}>
                      {tier.label}
                    </span>
                    <span className={`text-[9px] px-2 py-0.5 uppercase font-black tracking-widest ${feeTier === tier.label ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white/60'}`}>
                      {tier.sub}
                    </span>
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest block ${feeTier === tier.label ? 'text-primary/60' : 'text-white/20'}`}>
                    tickSpacing: {tier.spacing}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/40 leading-relaxed max-w-2xl">
              The amount earned providing liquidity. Choose an amount that suits your risk tolerance and strategy.
            </p>
          </div>
        </section>

        {/* Step 2: Set Price Range */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary text-black h-8 w-8 flex items-center justify-center font-black">2</div>
            <h2 className="text-3xl font-black tracking-tight text-white uppercase">Set Price Range</h2>
          </div>

          {/* Toggles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div 
              onClick={() => setRangeType('full')}
              className={`glass-morphism p-6 transition-all border cursor-pointer ${rangeType === 'full' ? 'bg-white/[0.02] border-primary shadow-[0_0_20px_rgba(255,210,23,0.05)]' : 'bg-white/[0.01] border-white/5 hover:border-white/20'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-sm font-black uppercase tracking-widest ${rangeType === 'full' ? 'text-primary' : 'text-white/80'}`}>Full Range</h3>
                <div className={`h-6 w-12 p-1 flex items-center border ${rangeType === 'full' ? 'bg-primary/20 border-primary/30 justify-end' : 'bg-white/10 border-white/5'}`}>
                  <div className={`h-4 w-4 ${rangeType === 'full' ? 'bg-primary' : 'bg-white/40'}`}></div>
                </div>
              </div>
              <p className={`text-xs leading-relaxed font-medium ${rangeType === 'full' ? 'text-white/60' : 'text-white/40'}`}>
                Providing full range liquidity ensures continuous market participation across all possible prices, offering simplicity but with potential for higher impermanent loss.
              </p>
            </div>
            
            <div 
              onClick={() => setRangeType('custom')}
              className={`glass-morphism p-6 transition-all border cursor-pointer ${rangeType === 'custom' ? 'bg-white/[0.02] border-primary shadow-[0_0_20px_rgba(255,210,23,0.05)]' : 'bg-white/[0.01] border-white/5 hover:border-white/20'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-sm font-black uppercase tracking-widest ${rangeType === 'custom' ? 'text-primary' : 'text-white/80'}`}>Custom Range</h3>
                <div className={`h-6 w-12 p-1 flex items-center border ${rangeType === 'custom' ? 'bg-primary/20 border-primary/30 justify-end' : 'bg-white/10 border-white/5'}`}>
                  <div className={`h-4 w-4 ${rangeType === 'custom' ? 'bg-primary' : 'bg-white/40'}`}></div>
                </div>
              </div>
              <p className={`text-xs leading-relaxed font-medium ${rangeType === 'custom' ? 'text-white/60' : 'text-white/40'}`}>
                Custom range allows you to concentrate your liquidity within specific price bounds, enhancing capital efficiency and fee earnings but requiring more active management.
              </p>
            </div>
          </div>

          {/* Current Price Info */}
          <div className="glass-morphism bg-black/40 p-8 mb-8 border border-white/5 text-center">
            <p className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-2">Current Price</p>
            <h4 className="text-4xl font-black tracking-tight text-white mb-2">70,833.90 <span className="text-xl font-bold text-white/40 ml-2">USDT/WBTC</span></h4>
            <p className="text-sm text-white/60 font-mono">($70,864.63)</p>
          </div>

          {/* Price Strategies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button 
              onClick={() => setStrategy('stable')}
              className={`glass-morphism p-6 text-left transition-colors border group outline-none ${strategy === 'stable' ? 'bg-primary/5 border-primary shadow-[0_0_15px_rgba(255,210,23,0.1)]' : 'bg-white/[0.01] border-white/5 hover:bg-white/[0.03]'}`}
            >
              <p className={`font-black mb-2 transition-colors ${strategy === 'stable' ? 'text-primary' : 'text-white group-hover:text-primary'}`}>Stable</p>
              <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
                ± 3 ticks.<br/>Good for stablecoins or low volatility pairs
              </p>
            </button>
            <button 
              onClick={() => setStrategy('wide')}
              className={`glass-morphism p-6 text-left transition-colors border group outline-none ${strategy === 'wide' ? 'bg-primary/5 border-primary shadow-[0_0_15px_rgba(255,210,23,0.1)]' : 'bg-white/[0.01] border-white/5 hover:bg-white/[0.03]'}`}
            >
              <p className={`font-black mb-2 transition-colors ${strategy === 'wide' ? 'text-primary' : 'text-white group-hover:text-primary'}`}>Wide</p>
              <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest">
                -50% — +100%.<br/>Good for volatile pairs
              </p>
            </button>
          </div>

          {/* Min/Max Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-morphism bg-white/[0.01] p-6 border border-white/5 focus-within:border-primary/50 transition-colors">
              <p className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-4">Min Price</p>
              <div className="flex items-center justify-between mb-6">
                <button 
                  disabled={rangeType === 'full'}
                  className="h-10 w-10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5 text-white/60 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  <Minus size={16} />
                </button>
                {rangeType === 'full' ? (
                  <div className="text-3xl font-black text-center w-full text-white tracking-widest">0</div>
                ) : (
                  <input className="bg-transparent border-none text-3xl font-black text-center w-full focus:ring-0 text-white outline-none" type="text" defaultValue="71142.429" />
                )}
                <button 
                  disabled={rangeType === 'full'}
                  className="h-10 w-10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5 text-white/60 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  <Plus size={16} />
                </button>
              </div>
              <div className="flex justify-center h-[26px]">
                {rangeType !== 'full' && (
                  <span className="text-[10px] font-black tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary/20">+0.44%</span>
                )}
              </div>
            </div>
            
            <div className="glass-morphism bg-white/[0.01] p-6 border border-white/5 focus-within:border-primary/50 transition-colors">
              <p className="text-[10px] font-black tracking-widest text-white/30 uppercase mb-4">Max Price</p>
              <div className="flex items-center justify-between mb-6">
                <button 
                  disabled={rangeType === 'full'}
                  className="h-10 w-10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5 text-white/60 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  <Minus size={16} />
                </button>
                {rangeType === 'full' ? (
                  <div className="text-3xl font-black flex justify-center w-full text-white"><Infinity size={36} strokeWidth={3}/></div>
                ) : (
                  <input className="bg-transparent border-none text-3xl font-black text-center w-full focus:ring-0 text-white outline-none" type="text" defaultValue="141832.87" />
                )}
                <button 
                  disabled={rangeType === 'full'}
                  className="h-10 w-10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5 text-white/60 hover:text-white disabled:opacity-30 disabled:pointer-events-none"
                >
                  <Plus size={16} />
                </button>
              </div>
              <div className="flex justify-center h-[26px]">
                {rangeType !== 'full' && (
                  <span className="text-[10px] font-black tracking-widest text-primary bg-primary/10 px-3 py-1 border border-primary/20">+100.23%</span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: Deposit Tokens */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary text-black h-8 w-8 flex items-center justify-center font-black">3</div>
            <h2 className="text-3xl font-black tracking-tight text-white uppercase">Deposit Tokens</h2>
          </div>
          
          <div className="glass-morphism bg-white/[0.01] p-8 border border-white/5 relative">
            <div className="absolute inset-0 bg-primary/5 opacity-20 blur-3xl pointer-events-none"></div>
            
            {/* WBTC Input */}
            <div className="bg-black/40 p-6 mb-4 group focus-within:ring-1 focus-within:ring-primary transition-all border border-white/5 relative z-10">
              <div className="flex justify-between items-center mb-4">
                <input className="bg-transparent border-none text-4xl font-black w-full focus:ring-0 p-0 text-white outline-none" placeholder="0.0" type="text" defaultValue="0.5" />
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 border border-white/10 shrink-0">
                  <img className="h-6 w-6 rounded-full" alt="WBTC" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtxaYZh0k-AY0RUxniR3IfMw7LYL7WdHYVMoQ-KXTB0nfcmW6frJRUQ6icR6Rz0A_JHHh1t980_DbJETQ5-_QbNYv4Atz-Kq2tOn4PKEgPQfn1kkxvXiLHmAFrJ99JPVeGBNUPZUrYBSomQFihL5hwoZi4gP6L_J2yv9Nvaggszj7GSxqNBMKrrNe1Elu7GLoBVD__IvrzOhaeeiHtuRAQJMkJZknqC1tdQy64zq-EFEJAuVHUbmbbwQTe7jaIkhBD09KQbRHP5BGw"/>
                  <span className="font-black text-white tracking-widest">WBTC</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-mono text-white/40">$35,416.95</p>
                <p className="text-[10px] text-white/40 tracking-widest uppercase font-medium">
                  Balance: 1.24 WBTC 
                  <span className="text-primary font-black cursor-pointer ml-3 hover:text-white transition-colors">MAX</span>
                </p>
              </div>
            </div>

            {/* USDT Input */}
            <div className="bg-black/40 p-6 mb-8 group focus-within:ring-1 focus-within:ring-primary transition-all border border-white/5 relative z-10">
              <div className="flex justify-between items-center mb-4">
                <input className="bg-transparent border-none text-4xl font-black w-full focus:ring-0 p-0 text-white outline-none" placeholder="0.0" type="text" defaultValue="35416.95" />
                <div className="flex items-center gap-3 bg-white/5 px-4 py-2 border border-white/10 shrink-0">
                  <img className="h-6 w-6 rounded-full" alt="USDT" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMOhLCqCczOmMq-OgvYZDRRFpGPWp-Qkugz9IL7NpN-rouBKUtTMBeNLQKa9CfjZ9MEvruwsmrAiAcrEqXA8PQyCIT4M47PtF2KXWzvlDUXsKK9TEO4j7sglYuuGqjJfWTzstEGvfJs2TafOcoQuj4EqfQxadoUCJeAtEg8QFDIBeO-9sp6KawPc4UtXTlpwPj9xeBDcXJCKY4j0rGRcNd9ui9_Qw1ghGI7rhwdRFTW1xS2884SVzNA2sSq3yK2VmRSOuFisrj08xK"/>
                  <span className="font-black text-white tracking-widest">USDT</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[10px] font-mono text-white/40">$35,416.95</p>
                <p className="text-[10px] text-white/40 tracking-widest uppercase font-medium">
                  Balance: 50,000.00 USDT 
                  <span className="text-primary font-black cursor-pointer ml-3 hover:text-white transition-colors">MAX</span>
                </p>
              </div>
            </div>

            <div className="text-center mb-8 relative z-10">
              <p className="text-[10px] uppercase font-black tracking-widest text-white/40">Specify the token amounts for your liquidity contribution and click mint position.</p>
            </div>
            
            <button className="relative z-10 w-full bg-primary text-black font-black tracking-[0.2em] uppercase py-5 text-[10px] gold-glow hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 border-none outline-none">
              Mint Position
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
