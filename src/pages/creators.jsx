import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

const creators = [
  {
    name: "Arjav Jain",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "Three.js"],
    image: "/Arjav Jain.jpeg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Nimit Jain",
    role: "Frontend Engineer",
    skills: ["UI/UX", "Tailwind CSS", "Framer Motion"],
    image: "/Nimit Jain.jpeg",
    github: "#",
    linkedin: "#",
  },
  {
    name: "Nagorao",
    role: "Backend Developer",
    skills: ["PostgreSQL", "Express", "API Design"],
    image: "/Nagorao.png",
    github: "#",
    linkedin: "#",
  }
];

export default function Creators() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[#030712] text-foreground">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-8 font-mono">
          <ArrowLeft size={20} />
          <span>Return to Base</span>
        </Link>
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary mb-6"
          >
            THE ARCHITECTS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Meet the minds behind KodeKurrent. Powered by caffeine, driven by innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3 }}
              className="sci-fi-panel p-6 relative group overflow-hidden bg-[#0a0a0c]/80 backdrop-blur-sm border border-primary/20 hover:border-primary/60 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="aspect-square w-full rounded-lg overflow-hidden border border-primary/30 mb-6 bg-black/50 relative">
                {/* Fallback pattern if image is not found */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-black to-black opacity-30 pointer-events-none" />
                <img 
                  src={creator.image} 
                  alt={creator.name} 
                  className="w-full h-full object-cover relative z-10 group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://ui-avatars.com/api/?name=" + creator.name.replace(' ', '+') + "&background=030712&color=8191b9&size=400";
                  }}
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-mono text-primary font-bold">{creator.name}</h3>
                  <p className="font-sans text-muted-foreground text-sm uppercase tracking-wider">{creator.role}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {creator.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary/80 rounded-md border border-primary/20">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex gap-4 border-t border-primary/10">
                  <a href={creator.github} target="_blank" rel="noopener noreferrer" className="p-2 border border-primary/30 rounded hover:bg-primary/20 hover:text-white transition-colors text-muted-foreground flex-1 flex justify-center items-center">
                    <Github size={20} />
                  </a>
                  <a href={creator.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 border border-primary/30 rounded hover:bg-secondary/20 hover:border-secondary/50 hover:text-secondary transition-colors text-muted-foreground flex-1 flex justify-center items-center">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
