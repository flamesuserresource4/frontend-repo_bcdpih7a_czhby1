import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import TaskTracker from './components/TaskTracker';
import DashboardGrid from './components/DashboardGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* Background gradient aura */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-600/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl">
        <Sidebar />
        <main className="flex-1">
          <Topbar />

          <div className="px-4 py-6">
            <section className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h2 className="mb-3 text-xl font-semibold text-white">Selamat datang 👋</h2>
                <p className="text-sm text-white/70">Atur jadwal, kelola tugas, pantau keuangan, dan catat ide — semuanya dalam satu tempat dengan tema hijau gradasi hitam.</p>
              </div>
              <div className="">
                <div className="rounded-xl border border-white/10 bg-gradient-to-b from-emerald-950/40 to-black/60 p-4">
                  <p className="text-sm text-white/70">Ringkasan hari ini</p>
                  <div className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="rounded-lg bg-white/5 p-3 text-white/80"><p className="text-emerald-300 text-lg font-semibold">5</p>Tugas</div>
                    <div className="rounded-lg bg-white/5 p-3 text-white/80"><p className="text-emerald-300 text-lg font-semibold">3</p>Agenda</div>
                    <div className="rounded-lg bg-white/5 p-3 text-white/80"><p className="text-emerald-300 text-lg font-semibold">Rp</p>Saldo</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <TaskTracker />
              </div>
              <div>
                <DashboardGrid />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
