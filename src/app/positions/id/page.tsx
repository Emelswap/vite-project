import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, RefreshCw, Plus, Minus } from 'lucide-react';

export default function PositionDetailsPage() {
  const { id } = useParams<{ id: string }>();

  // Mock position data based on the ID
  const position = {
    id: id,
    pair: 'ETH / USDC',
    fee: '0.05%',
    status: 'In Range',
    statusColor: 'text-emerald-400',
    liquidity: '$42,850.42',
    unclaimedFees: '$142.50',
    token0: { symbol: 'ETH', amount: '12.4 ETH', value: '$25,120.00' },
    token1: { symbol: 'USDC', amount: '17,730.42 USDC', value: '$17,730.42' },
    range: { min: '2,450.00', max: '3,850.00', current: '3,142.12' },
    imgs: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuClYLTjMo-ECiwi1rxIYCry-M0GiEH4kWXDlAh3entO2pdN5tPzkWY_rajik19c48DLkT9cEzl40ERJ6fZ795zPp-nbGSuhplgI_gG2zeEM6zhGn6If4syR89Ar5sFHRQdCCuOPiNTgH8JzmxtzhbgcEgkIqzVBi1jJVBmxj4TCZvd_SEWAw8-wX2D04wS5s3UfTJC38p8wVqSmuaeug1kz6BFqmj9WEQjsx7pjtHm2NMxo5ZdufoPCwF1cgc5VVN7uMIbcWzFIv9It',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBloYkWcAZ6nPHwnmfr57eTpo9sQHjaPnq1pOAEahqybC22VT7cuyiepuqlQxTcbSBZWhCoIeGUkF4SDg4ujaMebFNeZozVwNLw3YEYuyeQi18wPDMjSvuKmYeePF6IFZLtG4qtswQf3z0TvGOOdNC6RVS_AXRLVTlaptmOzoPoC8tQNeXJkNFcCNS8wO9mxPgY9RgGPFN5FfRIF8vZgxnP8mn0sCLN_IFvdxkbCD7L-V_UVNWhc0agxbWvwV63hi5VKn0dqAerM1fd'
    ]
  };

  return (
    <div className="pt-8 pb-40 px-6 max-w-4xl mx-auto relative z-10">
      <Link to="/profile" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-8 group w-fit">
        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-[10px] font-black uppercase tracking-widest">Back to Profile</span>
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="flex items-center gap-6">
          <div className="flex -space-x-4 scale-125">
            {position.imgs.map((img, i) => (
              <div key={i} className="w-12 h-12 rounded-full border-[3px] border-black bg-black overflow-hidden relative z-[5-i]">
                <img alt="token" className="w-full h-full object-contain" src={img}/>
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-black text-white tracking-tighter uppercase">{position.pair}</h1>
              <span className="text-xs font-black bg-white/10 text-white/60 px-3 py-1 rounded-full uppercase tracking-widest">{position.fee}</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-white/5 ${position.statusColor}`}>
                {position.status}
              </span>
              <span className="text-[10px] text-white/20 font-mono uppercase">Position #{position.id}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest text-white/60 hover:bg-white/10 transition-all active:scale-95">
            Collect Fees
          </button>
          <button className="bg-primary text-black px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest gold-glow transition-all active:scale-95">
            Manage
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Liquidity Card */}
        <div className="glass-morphism bg-white/[0.01] border border-white/5 p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-primary/5 blur-[80px] rounded-full pointer-events-none transition-colors group-hover:bg-primary/10"></div>
          <p className="text-[10px] uppercase tracking-widest text-white/30 font-black mb-6">Total Liquidity</p>
          <p className="text-5xl font-black tracking-tighter text-white mb-8">{position.liquidity}</p>
          
          <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-center py-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <img src={position.imgs[0]} alt="token0" className="w-6 h-6 rounded-full" />
                <span className="text-sm font-black text-white">{position.token0.symbol}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-white">{position.token0.amount}</p>
                <p className="text-[10px] text-white/30 font-mono">{position.token0.value}</p>
              </div>
            </div>
            <div className="flex justify-between items-center py-4 border-t border-white/5">
              <div className="flex items-center gap-3">
                <img src={position.imgs[1]} alt="token1" className="w-6 h-6 rounded-full" />
                <span className="text-sm font-black text-white">{position.token1.symbol}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-black text-white">{position.token1.amount}</p>
                <p className="text-[10px] text-white/30 font-mono">{position.token1.value}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Unclaimed Fees Card */}
        <div className="glass-morphism bg-white/[0.01] border border-white/5 p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none transition-colors group-hover:bg-emerald-500/10"></div>
          <div className="flex justify-between items-start mb-6">
            <p className="text-[10px] uppercase tracking-widest text-white/30 font-black">Unclaimed Fees</p>
            <RefreshCw size={14} className="text-white/20" />
          </div>
          <p className="text-5xl font-black tracking-tighter text-emerald-400 mb-8">{position.unclaimedFees}</p>
          
          <div className="space-y-4 relative z-10">
             {/* Mock fees list */}
             <div className="flex justify-between items-center py-4 border-t border-white/5">
              <span className="text-sm font-black text-white/60">ETH</span>
              <span className="text-sm font-black text-white">0.042 ETH</span>
            </div>
            <div className="flex justify-between items-center py-4 border-t border-white/5 text-white/60">
              <span className="text-sm font-black">USDC</span>
              <span className="text-sm font-black text-white">12.50 USDC</span>
            </div>
            <button className="w-full mt-4 py-4 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white/60 hover:bg-white/10 transition-all active:scale-95">
              View History
            </button>
          </div>
        </div>
      </div>

      {/* Range Section */}
      <div className="glass-morphism bg-white/[0.01] border border-white/5 p-8">
        <p className="text-[10px] uppercase tracking-widest text-white/30 font-black mb-8 text-center">Price Range</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <p className="text-[9px] uppercase tracking-widest text-white/20 font-black mb-2">Min Price</p>
            <p className="text-2xl font-black text-white">{position.range.min}</p>
            <p className="text-[9px] text-white/40 uppercase mt-1">USDC per ETH</p>
          </div>
          
          <div className="text-center p-8 bg-primary/5 border border-primary/20 rounded-2xl relative shadow-[0_0_30px_rgba(255,210,23,0.05)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-[8px] font-black px-3 py-1 uppercase tracking-[0.2em] rounded-full">Current Market</div>
            <p className="text-[9px] uppercase tracking-widest text-primary/40 font-black mb-2">Current Price</p>
            <p className="text-4xl font-black text-primary">{position.range.current}</p>
            <p className="text-[9px] text-primary/40 uppercase mt-1">USDC per ETH</p>
          </div>

          <div className="text-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
            <p className="text-[9px] uppercase tracking-widest text-white/20 font-black mb-2">Max Price</p>
            <p className="text-2xl font-black text-white">{position.range.max}</p>
            <p className="text-[9px] text-white/40 uppercase mt-1">USDC per ETH</p>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="mt-12 relative h-2 bg-white/5 rounded-full overflow-hidden">
          <div className="absolute h-full glass-morphism bg-primary/20 border-x border-primary" style={{ left: '20%', right: '25%' }}></div>
          <div className="absolute top-0 h-full w-1 bg-primary gold-glow" style={{ left: '42%' }}></div>
        </div>
        <div className="flex justify-between mt-4 text-[9px] font-black uppercase tracking-widest text-white/20">
          <span>0</span>
          <span>&infin;</span>
        </div>
      </div>
    </div>
  );
}
