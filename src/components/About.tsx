const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Ruby on Rails", "Node.js", "PostgreSQL", "REST API"] },
  { category: "Tools", items: ["Git", "Docker", "GitHub Actions", "Vercel"] },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">About</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <h2 className="text-4xl font-bold text-white mb-16">自己紹介</h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Profile text */}
          <div>
            {/* Avatar placeholder */}
            <div className="w-24 h-24 rounded-full mb-8 flex items-center justify-center text-3xl font-bold text-white"
              style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}>
              TA
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">TakeshiAono</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              フルスタックエンジニアとして、Webアプリケーションの企画から設計・開発・リリースまでを一貫して手がけています。
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              フロントエンドは React / Next.js、バックエンドは Ruby on Rails を中心に、
              モダンな技術スタックを活用したプロダクト開発が得意です。
            </p>
            <p className="text-slate-400 leading-relaxed">
              個人開発や副業案件を通じて、要件定義からリリース後の運用まで幅広く経験。
              ユーザーに届く価値を意識しながら、コードを書くことを大切にしています。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://x.com/takeshi_program"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @takeshi_program
              </a>
              <a
                href="https://github.com/TakeshiAono"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-colors text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                TakeshiAono
              </a>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            {skills.map((group) => (
              <div key={group.category}>
                <h4 className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-3">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 bg-slate-800 border border-slate-700 hover:border-violet-500/50 hover:text-violet-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Timeline */}
            <div className="mt-10">
              <h4 className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-4">
                Experience
              </h4>
              <div className="space-y-4">
                {[
                  { year: "2023 -", role: "フリーランスエンジニア", desc: "Web アプリ開発・副業案件" },
                  { year: "2022", role: "個人開発スタート", desc: "Next.js / Rails でのプロダクト開発" },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <span className="text-violet-400 text-sm font-mono w-16 shrink-0 pt-0.5">{item.year}</span>
                    <div>
                      <p className="text-white text-sm font-medium">{item.role}</p>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
