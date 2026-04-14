const works = [
  {
    title: "group_point",
    description:
      "グループでのポイント管理・共有を行うWebアプリ。メンバー間でのポイントの付与・集計をリアルタイムで管理できる。",
    tags: ["Next.js", "TypeScript", "Ruby on Rails", "PostgreSQL"],
    github: "https://github.com/TakeshiAono/group_point",
    demo: null,
    status: "開発中",
  },
  {
    title: "Portfolio & Blog",
    description:
      "このサイト。ポートフォリオとブログを兼ねた個人サイト。Next.js App Router と Tailwind CSS で構築。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/TakeshiAono/blog",
    demo: null,
    status: "公開中",
  },
  {
    title: "ケイドロアプリ",
    description:
      "iOSアプリ。現実の街を舞台にしたケイドロ（警泥）ゲーム。GPSを使ってプレイヤーの位置をリアルタイムで追跡し、警察と泥棒に分かれて遊べる。",
    tags: ["Swift", "iOS", "GPS"],
    github: "https://github.com/TakeshiAono/DeviceFieldPlay",
    demo: "https://apps.apple.com/jp/app/%E3%82%B1%E3%82%A4%E3%83%89%E3%83%AD%E3%82%A2%E3%83%97%E3%83%AA/id6747933405",
    status: "公開中",
  },
];

const statusColor: Record<string, string> = {
  公開中: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  開発中: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  準備中: "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

export default function Works() {
  return (
    <section id="works" className="py-32 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Works</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <h2 className="text-4xl font-bold text-white mb-16">制作物</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {works.map((work) => (
            <div
              key={work.title}
              className="group relative flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
            >
              {/* Status badge */}
              <span className={`inline-flex self-start px-2.5 py-1 rounded-full text-xs font-medium border mb-4 ${statusColor[work.status]}`}>
                {work.status}
              </span>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {work.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{work.description}</p>

              {/* Tags */}
              {work.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded bg-slate-800 text-slate-400 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              <div className="flex gap-3">
                {work.github && (
                  <a
                    href={work.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {work.demo && (
                  <a
                    href={work.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    App Store
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
