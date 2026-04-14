export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Blog</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <h2 className="text-4xl font-bold text-white mb-16">最新記事</h2>

        <div className="flex flex-col items-center justify-center py-24 rounded-2xl border border-dashed border-slate-700 bg-slate-900/40">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
            style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(8,145,178,0.2))" }}>
            <svg className="w-8 h-8 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <p className="text-slate-300 font-semibold text-lg mb-2">準備中</p>
          <p className="text-slate-500 text-sm text-center max-w-xs">
            ブログ機能は現在開発中です。もうしばらくお待ちください。
          </p>
        </div>
      </div>
    </section>
  );
}
