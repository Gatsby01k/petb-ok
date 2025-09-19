"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Zap,
  Coins,
  PieChart,
  Crown,
  Star,
} from "lucide-react";

// === UI helpers ===
function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-8 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl ${className}`}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-50" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// === Nav ===
const Nav = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <span className="text-xl font-bold tracking-wide text-white">
        Peter Todd Bitcoin
      </span>
      <a
        href="#apply"
        className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
      >
        Apply
      </a>
    </div>
  </nav>
);

// === Hero ===
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center text-center px-6">
    <div className="max-w-4xl">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-7xl font-extrabold text-white drop-shadow-lg"
      >
        The Future of Bitcoin, <br />
        powered by <span className="text-yellow-400">Peter Todd</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-6 text-lg sm:text-xl text-white/80"
      >
        A new-gen blockchain: transparent equity, DAO governance,
        investor-first design.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <a
          href="#tiers"
          className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
        >
          Explore Tiers <ArrowRight className="h-5 w-5" />
        </a>
      </motion.div>
    </div>
  </section>
);

// === Vision ===
const Vision = () => (
  <section id="vision" className="relative py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-stretch">
      <GlassCard>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Why Peter Todd Bitcoin?
        </h2>
        <p className="mt-4 text-white/85 leading-relaxed">
          We are designing a sustainable monetary network with a focus on
          verifiability, modular scalability, and fee-based economics, where
          participants receive a share of the network’s value.
        </p>
        <ul className="mt-6 space-y-3 text-white/85">
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-400" />
            Uncompromising transparency: funds and shares are managed by smart
            contracts.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
            Legal clarity: KYC/AML processes and shareholder registries.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400" />
            DAO synergy: voting, treasury, and on-chain reporting.
          </li>
        </ul>
      </GlassCard>

      <GlassCard>
        <div className="flex items-center justify-between">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Tokenomics & Governance
          </h3>
          <div className="text-xs text-white/70">v0.1</div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 text-white/85">
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-sm text-white/70">DAO Council</div>
            <div className="text-2xl font-extrabold mt-1">Strategists</div>
            <p className="text-sm text-white/75 mt-2">
              Permanent seats for top investors.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-sm text-white/70">Network Fees</div>
            <div className="text-2xl font-extrabold mt-1">Rev-Share</div>
            <p className="text-sm text-white/75 mt-2">
              A portion of fees is distributed to holders under DAO rules.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-sm text-white/70">Incentives</div>
            <div className="text-2xl font-extrabold mt-1">Airdrop</div>
            <p className="text-sm text-white/75 mt-2">
              With multipliers depending on tier participation.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-4">
            <div className="text-sm text-white/70">Compliance</div>
            <div className="text-2xl font-extrabold mt-1">Reg-Ready</div>
            <p className="text-sm text-white/75 mt-2">
              A framework for transparent ownership and equity tracking.
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  </section>
);

// === Tiers ===
const tiers = [
  {
    name: "Strategic Investor",
    badge: "1% Equity",
    min: "≥ 1 BTC",
    accent: "from-yellow-400 to-amber-500",
    icon: Crown,
    equity: true,
    airdrop: "x10",
  },
  {
    name: "Core Contributor",
    badge: "DAO Seat",
    min: "≥ 0.25 BTC",
    accent: "from-emerald-400 to-teal-500",
    icon: ShieldCheck,
    equity: false,
    airdrop: "x5",
  },
  {
    name: "Community Builder",
    badge: "Whitelist",
    min: "≥ 0.05 BTC",
    accent: "from-purple-400 to-pink-500",
    icon: Star,
    equity: false,
    airdrop: "x2",
  },
];

const Tiers = () => {
  return (
    <section id="tiers" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
            Participation Tiers
          </h2>
          <p className="mt-3 text-white/75">
            Choose your strategy and unlock the project’s on-chain economy.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2">
                    <div
                      className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${t.accent} grid place-items-center`}
                    >
                      <t.icon className="h-5 w-5 text-black/70" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{t.name}</h3>
                  </div>
                  <span className="text-xs text-white/70 border border-white/10 rounded-full px-2 py-1">
                    {t.badge}
                  </span>
                </div>
                <div className="mt-4 text-white/85">
                  <div className="text-sm uppercase tracking-wide">Minimum</div>
                  <div className="text-lg font-semibold">{t.min}</div>
                  {t.equity && (
                    <div className="mt-2 text-sm">Equity: {t.badge}</div>
                  )}
                  <div className="mt-2 text-sm">Airdrop: {t.airdrop}</div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// === Placeholder components for rest ===
const OnChain = () => (
  <section className="py-16 text-center text-white/70">OnChain section</section>
);
const Apply = () => (
  <section id="apply" className="py-16 text-center text-white/70">
    Apply section
  </section>
);
const FAQ = () => (
  <section className="py-16 text-center text-white/70">FAQ section</section>
);
const Footer = () => (
  <footer className="py-8 text-center text-white/50">© Peter Todd Bitcoin</footer>
);

// === Main Page ===
export default function Page() {
  return (
    <div className="min-h-screen bg-[#11100c] text-white">
      <Nav />
      <Hero />
      <Vision />
      <Tiers />
      <OnChain />
      <Apply />
      <FAQ />
      <Footer />
    </div>
  );
}
