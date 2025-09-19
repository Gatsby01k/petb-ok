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
    perks: [
      "x10 $PETB Airdrop",
      "Permanent DAO council seat",
      "Revenue share from network fees",
    ],
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
    perks: [
      "x2 $PETB Airdrop",
      "Bonus conditions for future grant rounds",
    ],
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
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-500 grid place-items-center font-black text-black/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
          PT
        </div>
        <span className="text-white/90 font-semibold tracking-wide group-hover:text-white transition">
          <span className="sr-only">Brand:</span>
          <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]">
            Peter Todd
          </span>
          <span className="ml-1">Bitcoin</span>
        </span>
      </a>
      <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
        <a href="#vision" className="hover:text-white transition">
          Vision
        </a>
        <a href="#tiers" className="hover:text-white transition">
          Tiers
        </a>
        <a href="#onchain" className="hover:text-white transition">
          On-chain
        </a>
        <a href="#faq" className="hover:text-white transition">
          FAQ
        </a>
        <a href="#apply" className="hover:text-white transition">
          <span className="inline-flex items-center gap-2">
            Apply <ArrowRight className="h-4 w-4" />
          </span>
        </a>
      </div>
      <a
        href="#apply"
        className="md:inline-flex hidden rounded-2xl bg-gradient-to-br from-amber-200 to-yellow-400 text-black/80 px-4 py-2 font-semibold shadow hover:shadow-lg transition"
      >
        Join Whitelist
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
    <BTCWatermarks />
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg"
    >
      The Future of Bitcoin <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500">
        powered by Peter Todd
      </span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80"
    >
      Investments and strategic support: transparent equity, on-chain proof,
      DAO governance, and high-throughput Bitcoin L1.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="mt-8 flex gap-4"
    >
      <a
        href="#tiers"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-400 text-black/80 font-semibold shadow hover:shadow-lg transition"
      >
        Explore Tiers <ArrowRight className="h-5 w-5" />
      </a>
    </motion.div>
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
const Tiers = () => (
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
                  <div className="mt-2 text-sm">Equity: {t.equity}</div>
                )}
                <ul className="mt-2 space-y-1 text-sm">
                  {t.perks.map((perk) => (
                    <li key={perk} className="flex gap-2 items-start">
                      <Sparkles className="h-4 w-4 text-yellow-300 mt-0.5" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// === On-Chain Proof ===
const OnChain = () => (
  <section id="onchain" className="relative py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8 items-center">
      <GlassCard>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          On-chain Proof
        </h2>
        <p className="mt-4 text-white/85 leading-relaxed">
          Every contribution is immutably recorded on the blockchain,
          guaranteeing transparency and legal clarity. Equity shares and token
          distributions are enforced by smart contracts.
        </p>
      </GlassCard>
      <GlassCard>
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <ShieldCheck className="h-5 w-5 text-green-400" /> Compliance-first
        </h3>
        <p className="mt-2 text-white/80">
          KYC/AML integrated. Shareholder registries and DAO governance
          aligned with regulations.
        </p>
      </GlassCard>
    </div>
  </section>
);

// === Apply ===
const Apply = () => (
  <section id="apply" className="relative py-16 sm:py-24 text-center">
    <div className="mx-auto max-w-2xl">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
        Apply Now
      </h2>
      <p className="mt-4 text-white/80">
        Be part of the next generation of Bitcoin innovation. Limited seats
        for strategic investors.
      </p>
      <a
        href="mailto:apply@petbitcoin.org"
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-amber-300 to-yellow-400 text-black/80 font-semibold shadow hover:shadow-lg transition"
      >
        Apply via Email <ArrowRight className="h-5 w-5" />
      </a>
    </div>
  </section>
);

// === FAQ ===
const FAQ = () => (
  <section id="faq" className="relative py-16 sm:py-24">
    <div className="mx-auto max-w-4xl px-6">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10">
        Frequently Asked Questions
      </h2>
      <GlassCard>
        <h3 className="font-semibold text-white">How is equity managed?</h3>
        <p className="text-white/80 mt-2">
          Equity shares are tokenized and represented on-chain, ensuring
          immutable ownership records.
        </p>
      </GlassCard>
      <GlassCard className="mt-6">
        <h3 className="font-semibold text-white">
          What’s the role of Peter Todd?
        </h3>
        <p className="text-white/80 mt-2">
          Peter Todd provides strategic guidance, cryptographic research, and
          vision for governance.
        </p>
      </GlassCard>
    </div>
  </section>
);

// === Footer ===
const Footer = () => (
  <footer className="relative py-8 text-center text-white/60">
    <p>© {new Date().getFullYear()}
