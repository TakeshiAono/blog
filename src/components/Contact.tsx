export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #7c3aed 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-slate-800" />
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Contact</span>
          <div className="h-px w-8 bg-slate-800" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">お問い合わせ</h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-12">
          お仕事のご依頼・ご相談はお気軽にどうぞ。
          <br />
          X のDMまたはメールにてお待ちしております。
        </p>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          <a
            href="https://x.com/takeshi_program"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-slate-700 bg-slate-900 text-white font-medium hover:border-violet-500/50 hover:bg-slate-800 transition-all duration-200 group"
          >
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            X でDMを送る
          </a>
          <a
            href="mailto:example@example.com"
            className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "linear-gradient(135deg, #7c3aed, #0891b2)" }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            メールを送る
          </a>
        </div>
      </div>
    </section>
  );
}
