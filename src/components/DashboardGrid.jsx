import { Calendar as CalendarIcon, Wallet, StickyNote, PieChart, Clock } from 'lucide-react';

function MiniCard({ title, icon: Icon, children }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-emerald-950/40 to-black/60 p-4 shadow-xl shadow-emerald-900/10">
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-5 w-5 text-emerald-300" />
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function CalendarWidget() {
  const today = new Date();
  const weekday = today.toLocaleDateString('id-ID', { weekday: 'long' });
  const date = today.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <MiniCard title="Kalender" icon={CalendarIcon}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-white/70">{weekday}</p>
          <p className="text-lg font-semibold text-white">{date}</p>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400 to-emerald-600 text-black">
          <span className="text-xl font-bold">{today.getDate()}</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-white/60">
        {["S", "S", "R", "K", "J", "S", "M"].map((d, i) => (
          <div key={i} className="py-1">{d}</div>
        ))}
        {Array.from({ length: 28 }).map((_, i) => {
          const isToday = i + 1 === today.getDate();
          return (
            <div key={i} className={`rounded-md py-1 ${isToday ? 'bg-emerald-500 text-black font-medium' : 'bg-white/5 text-white/80'}`}>{i + 1}</div>
          );
        })}
      </div>
    </MiniCard>
  );
}

function FinanceWidget() {
  return (
    <MiniCard title="Keuangan" icon={Wallet}>
      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-white/70">Pemasukan</span>
          <span className="font-semibold text-emerald-300">Rp 2.500.000</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-white/70">Pengeluaran</span>
          <span className="font-semibold text-red-300">Rp 750.000</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
        </div>
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Target tabungan</span>
          <span>66%</span>
        </div>
      </div>
    </MiniCard>
  );
}

function NotesWidget() {
  return (
    <MiniCard title="Catatan" icon={StickyNote}>
      <textarea
        rows={5}
        placeholder="Tulis catatan singkat di sini..."
        className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 p-2 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-emerald-500/40"
      />
    </MiniCard>
  );
}

function ProgressWidget() {
  return (
    <MiniCard title="Progress Harian" icon={PieChart}>
      <div className="grid grid-cols-3 gap-3 text-sm">
        {[
          { label: 'Fokus', value: '2j 10m' },
          { label: 'Istirahat', value: '35m' },
          { label: 'Sisa', value: '4j 15m' },
        ].map((item) => (
          <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-3">
            <p className="text-xs text-white/60">{item.label}</p>
            <p className="font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div className="relative h-16 w-16">
          <svg viewBox="0 0 36 36" className="h-16 w-16">
            <path className="text-white/10" stroke="currentColor" strokeWidth="3" fill="none" d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32" />
            <path className="text-emerald-500" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="75, 100" d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">75%</div>
        </div>
        <div className="text-sm text-white/70">
          <p>Target harian: 6 jam fokus</p>
          <p className="mt-1 inline-flex items-center gap-1 text-white/60"><Clock className="h-4 w-4 text-emerald-300" /> Tercapai 75%</p>
        </div>
      </div>
    </MiniCard>
  );
}

export default function DashboardGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <ProgressWidget />
      </div>
      <CalendarWidget />
      <FinanceWidget />
      <NotesWidget />
    </div>
  );
}
