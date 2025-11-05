import { LayoutDashboard, Calendar, CheckSquare, Wallet, StickyNote, Bell, PieChart, Settings, User } from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: CheckSquare, label: 'Tugas' },
  { icon: Calendar, label: 'Kalender' },
  { icon: PieChart, label: 'Progress' },
  { icon: Wallet, label: 'Keuangan' },
  { icon: StickyNote, label: 'Catatan' },
  { icon: Bell, label: 'Notifikasi' },
  { icon: Settings, label: 'Pengaturan' },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex h-screen w-64 flex-col border-r border-white/10 bg-gradient-to-b from-emerald-900/50 to-black/80 backdrop-blur-sm">
      <div className="flex items-center gap-3 px-6 py-6">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-emerald-400 to-emerald-600" />
        <div>
          <p className="text-sm text-emerald-300">Jadwal Harian</p>
          <h1 className="text-lg font-semibold text-white">GreenFlow</h1>
        </div>
      </div>

      <nav className="mt-4 flex-1 space-y-1 px-3">
        {navItems.map((item) => (
          <button key={item.label} className="group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-white/80 transition hover:bg-white/5 hover:text-white">
            <item.icon className="h-5 w-5 text-emerald-300/80 group-hover:text-emerald-300" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto border-t border-white/10 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
            <User className="h-5 w-5 text-emerald-300" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Kamu</p>
            <p className="text-xs text-white/60">Mode fokus aktif</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
