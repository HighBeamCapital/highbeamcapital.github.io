export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl text-center">
        <div className="opacity-0 animate-fade-in-up">
          <p className="text-sm uppercase tracking-widest text-zinc-500 mb-6">Venture Capital</p>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-zinc-900 leading-tight mb-8 opacity-0 animate-fade-in-up animate-delay-100">
          Illuminating the future<br />of technology
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animate-delay-200">
          HighBeam Capital partners with exceptional founders building transformative companies that shape how we live and work.
        </p>
        <div className="opacity-0 animate-fade-in-up animate-delay-300">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-900 text-zinc-50 font-medium rounded-full hover:bg-zinc-800 transition-colors"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}