import { useParams } from 'react-router-dom';

export default function PositionsPage() {
  const { params } = useParams<{ params: string }>();

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="glass-morphism bg-white/[0.01] border border-white/5 p-12 text-center">
        <h1 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 italic">Positions Interface</h1>
        <p className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-8">System Initialized</p>
        
        <div className="bg-black/40 border border-white/5 p-8 inline-block text-left mb-8">
          <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-4 border-b border-white/5 pb-2">Debug Params</p>
          <code className="text-emerald-400 font-mono text-xs block truncate max-w-md">
            {params || "No Parameters Detected"}
          </code>
        </div>
        
        <div className="flex justify-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse delay-75"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse delay-150"></div>
        </div>
        
        <p className="mt-12 text-white/20 text-[9px] uppercase font-black tracking-[0.2em]">Build 0.1.0 - Terminal Ready</p>
      </div>
    </div>
  );
}
