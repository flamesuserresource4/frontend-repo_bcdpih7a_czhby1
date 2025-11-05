import { Bell, Search } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="md:hidden h-9 w-9 rounded-lg bg-gradient-to-tr from-emerald-400 to-emerald-600" />
          <h2 className="text-lg font-semibold text-white">Dasbor Harian</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
            <Search className="h-4 w-4 text-emerald-300/80" />
            <input 
              type="text" 
              placeholder="Cari tugas, proyek, catatan..." 
              className="w-64 bg-transparent outline-none placeholder:text-white/50"
            />
          </div>

          <button className="relative rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 transition hover:bg-white/10">
            <Bell className="h-5 w-5 text-emerald-300" />
            <span className="absolute -right-1 -top-1 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-emerald-500 px-1 text-[10px] font-medium text-black">3</span>
          </button>
        </div>
      </div>
    </header>
  );
}
