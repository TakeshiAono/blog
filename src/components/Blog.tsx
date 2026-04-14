const posts = [
  {
    title: "Next.js App Router で作るモダンなブログ構成",
    excerpt: "App Router の Server Components を活用した静的ブログの設計パターンについて解説します。",
    date: "2024-04-01",
    tag: "Next.js",
    slug: "#",
  },
  {
    title: "Ruby on Rails と Next.js を組み合わせた API 設計",
    excerpt: "Rails を API サーバーとして使い、Next.js からデータフェッチする際のベストプラクティスを紹介します。",
    date: "2024-03-15",
    tag: "Rails",
    slug: "#",
  },
  {
    title: "TypeScript で型安全なフォームを作る",
    excerpt: "React Hook Form と Zod を組み合わせて、型安全なフォームバリデーションを実装する方法を解説します。",
    date: "2024-02-28",
    tag: "TypeScript",
    slug: "#",
  },
  {
    title: "個人開発を継続するための習慣づくり",
    excerpt: "仕事の傍ら個人開発を続けるために実践しているタスク管理・時間管理のコツをまとめました。",
    date: "2024-02-10",
    tag: "雑記",
    slug: "#",
  },
];

const tagColors: Record<string, string> = {
  "Next.js": "text-sky-400 bg-sky-400/10 border-sky-400/20",
  Rails: "text-rose-400 bg-rose-400/10 border-rose-400/20",
  TypeScript: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  雑記: "text-slate-400 bg-slate-400/10 border-slate-400/20",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });
}

export default function Blog() {
  return (
    <section id="blog" className="py-32 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Blog</span>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <div className="flex items-end justify-between mb-16">
          <h2 className="text-4xl font-bold text-white">最新記事</h2>
          <a href="#" className="text-sm text-violet-400 hover:text-violet-300 transition-colors font-medium">
            すべて見る →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={post.slug}
              className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium border ${tagColors[post.tag] ?? tagColors["雑記"]}`}
                >
                  {post.tag}
                </span>
                <time className="text-slate-500 text-xs">{formatDate(post.date)}</time>
              </div>

              <h3 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-violet-300 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{post.excerpt}</p>

              <div className="mt-4 inline-flex items-center gap-1 text-sm text-violet-400 group-hover:gap-2 transition-all">
                続きを読む
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
