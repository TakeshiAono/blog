import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background glow effects */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for work
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 animate-fade-in-up delay-100">
          Hi, I&apos;m{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #a78bfa, #38bdf8)" }}
          >
            TakeshiAono
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-slate-400 font-medium mb-6 animate-fade-in-up delay-200">
          Full Stack Developer
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed mb-10 animate-fade-in-up delay-300">
          Webアプリケーションの設計・開発を行うフルスタックエンジニア。
          <br className="hidden md:block" />
          モダンな技術スタックを活用し、価値あるプロダクトを届けます。
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
          <Link
            href="#works"
            className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}
          >
            Works を見る
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-full font-semibold text-slate-300 border border-slate-600 hover:border-slate-400 hover:text-white transition-all duration-200 hover:scale-105"
          >
            お問い合わせ
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-float">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
