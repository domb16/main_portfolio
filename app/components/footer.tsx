import { Linkedin, Mail } from "lucide-react";
import { BrandIcon } from "./icons";
import { siRefinedgithub } from "simple-icons";

export default function Footer() {
  return (
    <>
      <section id="contact" className="py-12 border-t border-fintech-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Ready to grow?</h2>
            <p className="text-slate-400">Available for contractual/full time roles and architectural consulting.</p>
          </div>
          <div className="flex gap-4">
            <a href="mailto:kyri0s@protonmail.com" className="p-3 bg-fintech-800 rounded-full hover:bg-fintech-700 text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://github.com/domb16" className="p-3 bg-fintech-800 rounded-full hover:bg-fintech-700 text-white transition-colors">
              <BrandIcon icon={siRefinedgithub} size={20} className="text-slate-400 group-hover:text-fintech-400 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/dominik-ky" className="p-3 bg-fintech-800 rounded-full hover:bg-fintech-700 text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      <footer className="text-center text-slate-600 text-sm font-mono py-8">
        © 2023 - {new Date().getFullYear()} // Dom B. // API Specialist // Systems Architect
      </footer>
    </>
  )
}