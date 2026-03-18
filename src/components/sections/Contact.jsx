import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";
import { InteractiveGlobe } from "@/components/InteractiveGlobe.jsx";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/40">
      <div className="container mx-auto px-4">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-pixel tracking-widest text-center mb-16 text-white"
        >
          Contact <span className="text-secondary">Us</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sci-fi-panel p-8"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-pixel text-primary uppercase">Name</label>
                  <Input placeholder="Enter your name" className="bg-black/50 border-white/10 font-mono" />
                </div>
                <div>
                  <label className="text-xs font-pixel text-primary uppercase">Email</label>
                  <Input placeholder="Enter your email" className="bg-black/50 border-white/10 font-mono" />
                </div>
              </div>

              <div>
                <label className="text-xs font-pixel text-primary uppercase">Message</label>
                <Textarea placeholder="Enter your message" className="bg-black/50 border-white/10 font-mono min-h-[150px]" />
              </div>

              <Button className="w-full font-pixel bg-primary hover:bg-primary/80">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* RIGHT SIDE ANIMATED GLOBE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-8"
          >
            {/* 3D WebGL Globe */}
            <div className="relative w-[300px] h-[300px] flex items-center justify-center">
              {/* Glow Pulse behind globe */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute inset-0 rounded-full shadow-[0_0_60px_#8090B8] opacity-30 z-0"
              />
              <div className="relative z-10 w-full h-full">
                <InteractiveGlobe />
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2 sci-fi-panel px-4 py-2 rounded-lg text-primary">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono">
                  ieee_sb@rgipt.ac.in
                </span>
              </div>

              <a
                href="https://www.google.com/maps/place/Rajiv+Gandhi+Institute+of+Petroleum+Technology+(RGIPT)/@26.2649711,81.5041047,837m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399ba1580bf13c33:0x32df0c8e914ab52e!8m2!3d26.2649711!4d81.5066796!16s%2Fm%2F03d7rbq?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sci-fi-panel px-4 py-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-primary"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono">
                  RGIPT, Jais
                </span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}