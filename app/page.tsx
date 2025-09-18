\
"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Zap, Coins, PieChart, Crown, Star } from "lucide-react";

// === UI helpers ===
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl ${className}`}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-white/0 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function Noise() {
  return (
    <div
      className="pointer-events-none fixed inset-0 opacity-15 mix-blend-soft-light"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'1400\\' height=\\'800\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.08\\'/></svg>')",
      }}
      aria-hidden
    />
  );
}

function GradientOrb({ className = "" }: { className?: string }) {
  return <div className={`absolute blur-3xl opacity-30 ${className}`} aria-hidden />;
}

function BTCWatermarks() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div className="absolute inset-0 opacity-90 bg-[radial-gradient(900px_600px_at_15%_10%,rgba(255,211,96,0.10),transparent),radial-gradient(1100px_700px_at_85%_110%,rgba(255,180,0,0.10),transparent)]" />
      <div
        className="absolute inset-0 opacity-10 [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_70%)]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'160\\' height=\\'160\\' viewBox=\\'0 0 160 160\\'><defs><linearGradient id=\\'g\\' x1=\\'0\\' y1=\\'0\\' x2=\\'1\\' y2=\\'1\\'><stop offset=\\'0\\' stop-color=\\'%23ffd35f\\'/><stop offset=\\'1\\' stop-color=\\'%23c98a1a\\'/></linearGradient></defs><g opacity=\\'0.55\\'><text x=\\'20\\' y=\\'120\\' font-family=\\'Inter,Segoe UI,Arial\\' font-size=\\'120\\' font-weight=\\'800\\' fill=\\'url(%23g)\\'>\\u20BF</text></g></svg>')",
          backgroundSize: "160px 160px",
        }}
      />
    </div>
  );
}

// === Data ===
const tiers = [
  {
    name: "Strategic Investor",
    min: "From 1 BTC",
    equity: "1% company equity",
    perks: ["x10 $PETB Airdrop", "Permanent DAO council seat", "Revenue share from network fees"],
    icon: Crown,
    accent: "from-yellow-500 to-amber-500",
    badge: "Top Tier",
  },
  {
    name: "Premium Supporter",
    min: "From 0.1 BTC",
    equity: null,
    perks: [
      "x5 $PETB Airdrop",
      "Priority access to all releases",
      "Enhanced yields in staking projects",
      "Access to insights and private analytics",
    ],
    icon: Star,
    accent: "from-amber-500 to-orange-500",
    badge: "Pro",
  },
  {
    name: "Early Partner",
    min: "From 0.01 BTC",
    equity: null,
    perks: ["x2 $PETB Airdrop", "Bonus conditions for future grant rounds"],
    icon: Coins,
    accent: "from-amber-300 to-lime-400",
    badge: "Early",
  },
] as const;

// === Sections ===
const Nav = () => (
  <nav className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10">
    <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
      <a href="#home" className="group inline-flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-500 grid place-items-center font-black text-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">PT</div>
        <span className="text-white/90 font-semibold tracking-wide group-hover:text-white transition">
          <span className="sr-only">Brand:</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">Peter Todd</span>
          <span className="ml-1">Bitcoin</span>
        </span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a href="#vision" className="hover:text-white transition">Vision</a>
        <a href="#tiers" className="hover:text-white transition">Tiers</a>
        <a href="#onchain" className="hover:text-white transition">On‑chain</a>
        <a href="#faq" className="hover:text-white transition">FAQ</a>
        <a href="#apply" className="hover:text-white transition"><span className="inline-flex items-center gap-2">Apply <ArrowRight className="h-4 w-4" /></span></a>
      </div>
      <a href="#apply" className="md:inline-flex hidden rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-400 text-black/80 px-4 py-2 font-semibold shadow hover:shadow-lg transition">Join Whitelist</a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative overflow-hidden">
    <GradientOrb className="-top-40 -left-20 h-[36rem] w-[36rem] bg-gradient-to-tr from-yellow-500 to-amber-500" />
    <GradientOrb className="-bottom-40 -right-10 h-[32rem] w-[32rem] bg-gradient-to-tr from-amber-600 to-orange-500" />

    <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 mb-6">
          <Sparkles className="h-3.5 w-3.5" /> Awwwards‑style concept
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
          The future of Bitcoin
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 drop-shadow-[0_2px_8px_rgba(255,200,0,0.25)]">powered by Peter Todd</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/85 mx-auto max-w-3xl">
          Investments and strategic support: Peter Todd Bitcoin is launching a next‑generation blockchain, offering a limited circle of investors a unique opportunity to become co‑owners of the project. Every contribution is recorded on‑chain, ensuring transparency and legal integrity.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#apply" className="rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-400 text-black/80 px-6 py-3 font-semibold shadow hover:shadow-lg transition inline-flex items-center gap-2">Join <ArrowRight className="h-4 w-4"/></a>
          <a href="#tiers" className="rounded-2xl border border-white/20 text-white px-6 py-3 font-semibold hover:bg-white/10 transition">View Tiers</a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6 text-white/70 text-sm">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> On‑chain Proof</span>
          <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4"/> High‑throughput L1</span>
          <span className="inline-flex items-center gap-2"><PieChart className="h-4 w-4"/> DAO Governance</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Vision = () => (
  <section id="vision" className="relative py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-stretch">
      <GlassCard>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Why Peter Todd Bitcoin?</h2>
        <p className="mt-4 text-white/85 leading-relaxed">
          We are designing a sustainable monetary network with a focus on verifiability, modular scalability, and fee‑based economics, where participants receive a share of the network’s value.
        </p>
        <ul className="mt-6 space-y-3 text-white/85">
          <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-400"/> Uncompromising transparency: funds and shares are managed by smart contracts.</li>
          <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400"/> Legal clarity: KYC/AML processes and shareholder registries.</li>
          <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400"/> DAO synergy: voting, treasury, and on‑chain reporting.</li>
        </ul>
      </GlassCard>
      <GlassCard>
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-white">Tokenomics & Governance</h3>
          <div className="text-xs text-white/70">v0.1</div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 text-white/85">
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-sm text-white/70">DAO Council</div>
            <div className="text-2xl font-extrabold mt-1">Strategists</div>
            <p className="text-sm text-white/75 mt-2">Permanent seats for top investors.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-sm text-white/70">Network Fees</div>
            <div className="text-2xl font-extrabold mt-1">Rev‑Share</div>
            <p className="text-sm text-white/75 mt-2">A portion of fees is distributed to holders under DAO rules.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-sm text-white/70">Incentives</div>
            <div className="text-2xl font-extrabold mt-1">Airdrop</div>
            <p className="text-sm text-white/75 mt-2">With multipliers depending on tier participation.</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-sm text-white/70">Compliance</div>
            <div className="text-2xl font-extrabold mt-1">Reg‑Ready</div>
            <p className="text-sm text-white/75 mt-2">A framework for transparent ownership and equity tracking.</p>
          </div>
        </div>
      </GlassCard>
    </div>
  </section>
);

const Tiers = () => (
  <section id="tiers" className="relative py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">Participation Tiers</h2>
        <p className="mt-3 text-white/75">Choose your strategy and unlock the project’s on‑chain economy.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {tiers.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
            <GlassCard className="h-full">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2">
                  <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${t.accent} grid place-items-center`}>
                    <t.icon className="h-5 w-5 text-black/70" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t.name}</h3>
                </div>
                <span className="text-xs text-white/70 border border-white/10 rounded-full px-2 py-1">{t.badge}</span>
              </div>
              <div className="mt-4 text-white/85">
                <div className="text-sm uppercase tracking-wide">Minimum</div>
                <div className="text-lg font-semibold">{t.min}</div>
                {t.equity && (
                  <div className="mt-2 text-sm bg-white/5 border border-white/10 rounded-xl px-3 py-2 inline-block">{t.equity}</div>
                )}
                <ul className="mt-5 space-y-3">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/40"/> {p}</li>
                  ))}
                </ul>
                <a href="#apply" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-white hover:bg-white/10 transition">Apply <ArrowRight className="h-4 w-4"/></a>\n              </div>\n            </GlassCard>\n          </motion.div>\n        ))}\n      </div>\n    </div>\n  </section>\n);\n\nconst OnChain = () => (\n  <section id="onchain" className="relative py-16 sm:py-24">\n    <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8 items-center">\n      <GlassCard>\n        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">On‑chain Confirmations</h2>\n        <p className="mt-3 text-white/85">Every contribution is tied to a transaction. Public registries and Merkle proofs confirm participation.</p>\n        <div className="mt-6 grid sm:grid-cols-3 gap-4 text-white/85">\n          {["TX Explorer", "DAO Snapshot", "Audit Trail"].map((k) => (\n            <div key={k} className="rounded-2xl border border-white/10 p-4">\n              <div className="text-sm text-white/70">{k}</div>\n              <div className="text-lg font-bold mt-1">Live</div>\n              <a href="#" className="text-xs text-amber-300 hover:underline">Open →</a>\n            </div>\n          ))}\n        </div>\n      </GlassCard>\n      <GlassCard>\n        <h3 className="text-xl sm:text-2xl font-bold text-white">How it works</h3>\n        <ol className="mt-4 list-decimal pl-5 text-white/85 space-y-2">\n          <li>Send BTC to a designated multi‑sig address.</li>\n          <li>Receive an on‑chain receipt and an NFT participation certificate.</li>\n          <li>At the end of the round, $PETB is minted and the airdrop is distributed.</li>\n          <li>Manage your stake via the DAO and receive fee revenue sharing.</li>\n        </ol>\n        <div className="mt-6 text-xs text-white/70">Important: demonstration interface only. Ensure legal review and compliance with your local regulation before any real fundraising.</div>\n      </GlassCard>\n    </div>\n  </section>\n);\n\nconst Apply = () => {\n  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n    e.preventDefault();\n    alert("Thank you! Your demo application has been captured locally. Replace this handler with a real endpoint.");\n  };\n  return (\n    <section id="apply" className="relative py-16 sm:py-24">\n      <div className="mx-auto max-w-4xl px-6">\n        <GlassCard>\n          <div className="flex flex-col gap-6">\n            <div>\n              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Whitelist Application</h2>\n              <p className="mt-2 text-white/85">Share your contact details and intended tier. We’ll reach out for KYC/AML and on‑chain instructions.</p>\n            </div>\n            <form className="grid sm:grid-cols-2 gap-4" onSubmit={onSubmit}>\n              <div className="sm:col-span-1">\n                <label className="text-sm text-white/75">Full name</label>\n                <input name="fullName" required placeholder="Satoshi Nakamoto" className="mt-1 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>\n              </div>\n              <div className="sm:col-span-1">\n                <label className="text-sm text-white/75">Email</label>\n                <input name="email" type="email" required placeholder="you@domain.com" className="mt-1 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>\n              </div>\n              <div className="sm:col-span-1">\n                <label className="text-sm text-white/75">Participation tier</label>\n                <select name="tier" className="mt-1 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400">\n                  <option>Strategic Investor (≥ 1 BTC)</option>\n                  <option>Premium Supporter (≥ 0.1 BTC)</option>\n                  <option>Early Partner (≥ 0.01 BTC)</option>\n                </select>\n              </div>\n              <div className="sm:col-span-1">\n                <label className="text-sm text-white/75">Intended contribution (BTC)</label>\n                <input name="amount" type="number" step="0.00000001" placeholder="1.00" className="mt-1 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>\n              </div>\n              <div className="sm:col-span-2">\n                <label className="text-sm text-white/75">Message</label>\n                <textarea name="message" rows={4} placeholder="Briefly describe your background and expectations" className="mt-1 w-full rounded-xl bg-white/5 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>\n              </div>\n              <div className="sm:col-span-2 flex items-center justify-between">\n                <label className="inline-flex items-center gap-2 text-white/75 text-sm"><input name="consent" type="checkbox" required className="accent-yellow-400"/> I agree to personal data processing</label>\n                <button type="submit" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-400 text-black/80 px-5 py-3 font-semibold shadow hover:shadow-lg transition">Submit application <ArrowRight className="h-4 w-4"/></button>\n              </div>\n            </form>\n            <div className="text-xs text-white/70">Disclaimer: this is informational only and not investment advice. Use of the name “Peter Todd” requires appropriate permission/rights. Ensure compliance with applicable regulations.</div>\n          </div>\n        </GlassCard>\n      </div>\n    </section>\n  );\n};\n\nconst FAQ = () => (\n  <section id="faq" className="relative py-16 sm:py-24">\n    <div className="mx-auto max-w-5xl px-6">\n      <div className="grid md:grid-cols-2 gap-6">\n        {[\n          { q: "Is this a public offer?", a: "No. This website is a demonstration concept. A formal legal review and official documentation are required before launch." },\n          { q: "What does on‑chain recording mean?", a: "Each contribution is linked to a transaction and address, validated by a smart contract, and viewable in a blockchain explorer." },\n          { q: "How is rev‑share distributed?", a: "Under DAO rules — based on ownership snapshots and votes; details are published in on‑chain reports." },\n          { q: "Can I exit?", a: "Depends on tokenomics and local regulation: cliff/vesting periods and secondary markets may apply." },\n        ].map((item, i) => (\n          <GlassCard key={i}>\n            <h3 className="text-lg font-bold text-white">{item.q}</h3>\n            <p className="mt-2 text-white/85">{item.a}</p>\n          </GlassCard>\n        ))}\n      </div>\n    </div>\n  </section>\n);\n\nconst Footer = () => (\n  <footer className="relative py-10 border-t border-white/10">\n    <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70 text-sm">\n      <div className="flex items-center gap-3">\n        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-500 grid place-items-center font-black text-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">PT</div>\n        <span>\n          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 font-semibold">Peter Todd</span>\n          <span className="ml-1">Bitcoin</span>\n          <span> © {new Date().getFullYear()}</span>\n        </span>\n      </div>\n      <div className="flex items-center gap-6">\n        <a href="#" className="hover:text-white transition">Terms</a>\n        <a href="#" className="hover:text-white transition">Privacy</a>\n        <a href="#" className="hover:text-white transition">Imprint</a>\n      </div>\n    </div>\n  </footer>\n);\n\nexport default function Page() {\n  return (\n    <div className="min-h-screen bg-[#11100c] text-white">\n      <BTCWatermarks />\n      <Noise />\n      <Nav />\n      <Hero />\n      <Vision />\n      <Tiers />\n      <OnChain />\n      <Apply />\n      <FAQ />\n      <Footer />\n    </div>\n  );\n}\n