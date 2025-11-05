import { useMemo, useState } from 'react';
import { CheckSquare, Plus, Trash2 } from 'lucide-react';

export default function TaskTracker() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Rencana pagi: olahraga 20 menit', done: true },
    { id: 2, title: 'Kerjakan proyek A - 2 pomodoro', done: false },
    { id: 3, title: 'Catat pengeluaran harian', done: false },
  ]);
  const [input, setInput] = useState('');

  const progress = useMemo(() => {
    const total = tasks.length || 1;
    const done = tasks.filter((t) => t.done).length;
    return Math.round((done / total) * 100);
  }, [tasks]);

  const addTask = () => {
    const title = input.trim();
    if (!title) return;
    setTasks((prev) => [{ id: Date.now(), title, done: false }, ...prev]);
    setInput('');
  };

  const toggle = (id) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  const remove = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));

  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-emerald-950/40 to-black/60 p-4 shadow-xl shadow-emerald-900/10">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CheckSquare className="h-5 w-5 text-emerald-300" />
          <h3 className="font-semibold text-white">Tracker Tugas</h3>
        </div>
        <div className="text-xs text-white/60">{progress}% selesai</div>
      </div>

      <div className="mb-4">
        <div className="relative">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="Tambah tugas baru dan tekan Enter"
            className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-emerald-500/40"
          />
          <button onClick={addTask} className="absolute right-1 top-1 rounded-md bg-emerald-600 px-2 py-1 text-xs font-medium text-black hover:bg-emerald-500">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {tasks.map((t) => (
          <div key={t.id} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-2">
            <label className="flex items-center gap-2 text-sm text-white/90">
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} className="h-4 w-4 accent-emerald-500" />
              <span className={t.done ? 'line-through text-white/50' : ''}>{t.title}</span>
            </label>
            <button onClick={() => remove(t.id)} className="rounded-md p-1 text-white/60 hover:bg-white/10 hover:text-white">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
