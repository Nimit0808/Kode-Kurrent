import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Timeline } from "@/components/sections/Timeline";
import { Prizes } from "@/components/sections/Prizes";
import { Gallery } from "@/components/sections/Gallery";
import { Team } from "@/components/sections/Team";
import { Sponsors } from "@/components/sections/Sponsors";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { motion } from "framer-motion";
import { Gamepad2, Rocket, Cpu } from "lucide-react";
export default function Home() {
  return <div className="min-h-screen text-foreground overflow-x-hidden selection:bg-primary selection:text-white">
    <Navbar />

    <main>
      <section id="home" className="section-blend">
        <Hero />
      </section>

      <div id="about" className="section-blend">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <About />
        </motion.div>
      </div>

      <div id="timeline" className="section-blend">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Timeline />
        </motion.div>
      </div>

      <div id="sponsors" className="section-blend">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Sponsors />
        </motion.div>
      </div>

      <div id="prizes" className="section-blend">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Prizes />
        </motion.div>
      </div>

      <div id="gallery" className="section-blend">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Gallery />
        </motion.div>
      </div>

      <div id="team" className="section-blend">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Team />
        </motion.div>
      </div>

      <div id="faq" className="section-blend">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <FAQ />
        </motion.div>
      </div>

      <div id="contact" className="section-blend">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Contact />
        </motion.div>
      </div>
    </main>

    <footer className="relative py-20 bg-[#060608] border-t border-primary/20 overflow-hidden">
      {/* Decorative Graphics */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <motion.div animate={{
          rotate: 360
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute -top-20 -left-20 text-primary">
          <Cpu size={150} />
        </motion.div>
        <motion.div animate={{
          y: [0, -20, 0]
        }} transition={{
          duration: 5,
          repeat: Infinity
        }} className="absolute top-40 right-10 text-secondary">
          <Rocket size={100} />
        </motion.div>
        <div className="absolute bottom-10 left-1/4 text-accent opacity-30">
          <Gamepad2 size={120} />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 sci-fi-panel max-w-2xl py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl font-pixel text-primary tracking-widest">
            IEEE SB RGIPT
          </h2>
          <div className="flex gap-6 mt-4">


            <a href="https://www.instagram.com/ieee_rgipt/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="font-mono text-sm hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="font-mono text-sm hover:text-primary transition-colors">Twitter</a>
          </div>
          <p className="font-pixel text-[10px] mt-8 text-white/30">
            © 2026 KodeKurrent. Powered by Innovation.
          </p>
        </div>
      </div>
    </footer>
  </div>;
}