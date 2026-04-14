const links = [
  {
    name: "X (Twitter)",
    handle: "@takeshi_program",
    description: "技術・開発に関するつぶやき",
    href: "https://x.com/takeshi_program",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    color: "from-slate-700 to-slate-800",
    hoverBorder: "hover:border-slate-500",
  },
  {
    name: "GitHub",
    handle: "TakeshiAono",
    description: "個人開発・OSSへの貢献",
    href: "https://github.com/TakeshiAono",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: "from-slate-700 to-slate-800",
    hoverBorder: "hover:border-slate-500",
  },
  {
    name: "Zenn",
    handle: "技術記事を投稿",
    description: "技術ブログ・スクラップ",
    href: "https://zenn.dev",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 88 88">
        <path d="M0 88h19.4L63 0H43.6L0 88zm68.9 0h19.4L63.1 44.4 53.4 62l15.5 26z" />
      </svg>
    ),
    color: "from-sky-900 to-slate-800",
    hoverBorder: "hover:border-sky-500/40",
  },
  {
    name: "Qiita",
    handle: "技術記事を投稿",
    description: "プログラミングのナレッジ共有",
    href: "https://qiita.com",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12C24 5.373 18.628 0 12 0zm-.46 15.864H8.844l3.23-7.488H8.844V6.624h5.508l-3.217 7.488h3.217v1.752h-.812z" />
      </svg>
    ),
    color: "from-emerald-900 to-slate-800",
    hoverBorder: "hover:border-emerald-500/40",
  },
];

export default function SocialLinks() {
  return (
    <section id="links" className="py-32 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Links</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <h2 className="text-4xl font-bold text-white mb-4">リンク一覧</h2>
        <p className="text-slate-400 mb-16">各プラットフォームで活動しています。お気軽にフォロー・ご連絡ください。</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-start gap-4 p-6 rounded-2xl border border-slate-800 bg-slate-900 ${link.hoverBorder} hover:shadow-xl transition-all duration-300`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${link.color}`}
              >
                {link.icon}
              </div>
              <div>
                <p className="text-white font-semibold group-hover:text-violet-300 transition-colors">
                  {link.name}
                </p>
                <p className="text-slate-500 text-sm mt-0.5">{link.handle}</p>
                <p className="text-slate-400 text-xs mt-2">{link.description}</p>
              </div>
              <div className="mt-auto inline-flex items-center gap-1 text-xs text-violet-400 group-hover:gap-2 transition-all">
                開く
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
