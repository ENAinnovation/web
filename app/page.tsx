export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#0a0a0a] flex flex-col">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-950/50"></div>

      {/* Main content - centered */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 sm:px-8 lg:px-12">

        {/* Brand */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-center flex items-start justify-center">
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-[#d4d4d4] inline-block font-[family-name:var(--font-work-sans)]" style={{textShadow: '0 0 50px rgba(212, 212, 212, 0.2)', letterSpacing: '0.05em'}}>
              ENA
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light italic text-zinc-500 ml-2.5 mt-1 font-[family-name:var(--font-ibm-plex-serif)]">
              innovation
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 text-center max-w-3xl mb-12 sm:mb-16 leading-relaxed font-light tracking-wide font-[family-name:var(--font-inter)]">
          AI-powered enterprise software solutions for science and healthcare.
        </p>

        {/* Coming Soon */}
        <div className="mb-8">
          <div className="inline-block px-6 py-2.5 border border-zinc-800/50 rounded-sm bg-zinc-900/20">
            <p className="text-xs sm:text-sm text-zinc-500 uppercase tracking-[0.35em] font-medium font-[family-name:var(--font-inter)]">
              COMING SOON
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pb-8 px-6">
        <p className="text-center text-xs sm:text-sm text-zinc-700 font-light">
          © 2026 ENA Innovation. All rights reserved.
        </p>
      </div>
    </main>
  );
}

