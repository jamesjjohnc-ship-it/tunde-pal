"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-600/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center z-10"
      >
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-sm font-medium tracking-wide">
          D&H Partners LLC
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          Join our elite team of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-200">
            Financial Representatives
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Facilitate financial transactions, earn highly competitive compensation up to 13%, and enjoy unparalleled welfare support including rent, bills, and insurance.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/application" className="w-full sm:w-auto">
            <button className="w-full px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(5,150,105,0.5)]">
              View Contract & Apply
            </button>
          </Link>
          <button className="w-full sm:w-auto px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl font-medium border border-neutral-800 transition-all">
            Learn More
          </button>
        </div>
      </motion.div>

      {/* Stats/Highlights */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 z-10 w-full max-w-4xl"
      >
        {[
          { title: "Up to 13%", desc: "Compensation on transactions" },
          { title: "$900", desc: "Loyalty bonus milestone" },
          { title: "Full Welfare", desc: "Rent, bills & medical covered" }
        ].map((stat, i) => (
          <div key={i} className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.title}</div>
            <div className="text-neutral-500 text-sm">{stat.desc}</div>
          </div>
        ))}
      </motion.div>
    </main>
  );
}
