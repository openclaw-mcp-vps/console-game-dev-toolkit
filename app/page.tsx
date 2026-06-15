export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Retro Console Dev
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Build Retro Game Consoles{" "}
          <span className="text-[#58a6ff]">From Scratch</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Hardware templates, ROM development tools, and a cloud-based IDE — everything indie developers and hardware hobbyists need to ship retro-style consoles.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Start Building — $29/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl mb-2">🕹️</div>
            <h3 className="font-semibold text-white mb-1">Hardware Templates</h3>
            <p className="text-sm text-[#8b949e]">PCB schematics and BOM lists for 8-bit and 16-bit console designs, ready to manufacture.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">💾</div>
            <h3 className="font-semibold text-white mb-1">ROM Dev Tools</h3>
            <p className="text-sm text-[#8b949e]">Assemblers, emulators, and debuggers pre-configured for your target architecture.</p>
          </div>
          <div>
            <div className="text-3xl mb-2">☁️</div>
            <h3 className="font-semibold text-white mb-1">Cloud Compilation</h3>
            <p className="text-sm text-[#8b949e]">Compile ROMs in the browser with zero local setup. Flash directly to your hardware.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">One Plan. Everything Included.</h2>
        <p className="text-[#8b949e] mb-8">No tiers, no feature gating. Subscribe and get the full toolkit.</p>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8">
          <div className="text-5xl font-extrabold text-white mb-1">$29<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Billed monthly. Cancel anytime.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "All hardware design templates",
              "Online IDE with cloud compilation",
              "ROM assembler & debugger suite",
              "Priority Discord community access",
              "Monthly new console template drops",
              "Commercial use license included"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Instant Access
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need hardware experience to get started?</h3>
            <p className="text-sm text-[#8b949e]">No. Our templates include step-by-step guides for beginners. If you can solder and follow a schematic, you can build your first console in a weekend.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What architectures are supported?</h3>
            <p className="text-sm text-[#8b949e]">We currently support 6502, Z80, and 68000-based designs — the same chips that powered the NES, Game Boy, and Sega Genesis.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I sell games I build with the toolkit?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Your subscription includes a commercial use license. Sell physical cartridges, digital ROMs, or complete console kits — it's all yours.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Console Game Dev Toolkit. All rights reserved.
      </footer>
    </main>
  );
}
