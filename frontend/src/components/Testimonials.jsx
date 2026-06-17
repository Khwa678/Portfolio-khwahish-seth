import { motion } from "motion/react";
import { MessageSquare, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/portfolioData";
export default function Testimonials({}) {
  return <section
    id="testimonials"
    className="relative bg-[#070709] border-b border-zinc-800 text-white overflow-hidden"
  >
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />

      {
    /* Grid Layout structure */
  }
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
        
        {
    /* LEFT COMPARTMENT (lg:col-span-3) - Vertical Title Label */
  }
        <div className="lg:col-span-3 p-6 sm:p-8 flex flex-col justify-between space-y-12 bg-[#09090c]">
          <div className="space-y-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-500 block">
              08 / REFERENCE ENDORSEMENTS
            </span>
            <span className="text-[2.2rem] leading-none font-bold tracking-tight uppercase block font-sans">
              RECOM
              <br />
              MEND
              <br />
              ATIONS
            </span>
            <div className="w-12 h-1 bg-amber-400" />
            <p className="text-zinc-500 text-xs font-mono leading-relaxed mt-2">
              Endorsements from academic leaders, engineering supervisors, and contract directors.
            </p>
          </div>

          <div className="relative py-8 select-none overflow-hidden">
            <span className="text-[5rem] font-black font-sans leading-none text-zinc-900 tracking-tighter block uppercase">
              REFE
              <br />
              RENS
            </span>
          </div>

          <span className="font-mono text-[9px] text-zinc-550">STATUS: VERIFIED_CONTACTS</span>
        </div>

        {
    /* RIGHT COMPARTMENT (lg:col-span-9) - Testimonial cards list */
  }
        <div className="lg:col-span-9 p-6 sm:p-8 bg-[#070709] space-y-8">
          
          <div className="flex items-center justify-between border-b border-zinc-850 pb-4">
            <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400">
              CANDIDATE PEER REVIEW PANEL
            </span>
            <span className="font-mono text-[10px] text-zinc-500">PEERS: 03 ACTIVE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {TESTIMONIALS.map((test, idx) => <motion.div
    key={idx}
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.3, delay: idx * 0.05 }}
    className="p-5 bg-zinc-950 border border-zinc-850 hover:border-zinc-800 transition-colors flex flex-col justify-between relative group"
  >
                <Quote className="absolute right-4 top-4 size-10 text-zinc-900 pointer-events-none" />

                <div>
                  {
    /* Referral Header Profile */
  }
                  <div className="flex items-center space-x-3 mb-5 pb-4 border-b border-zinc-900">
                    <div className="size-11 rounded border border-zinc-800 overflow-hidden bg-zinc-950 flex-shrink-0">
                      <img
    src={test.avatar}
    alt={test.name}
    className="w-full h-full object-cover filter grayscale"
    referrerPolicy="no-referrer"
  />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-sans font-bold text-xs truncate text-white uppercase tracking-tight">
                        {test.name}
                      </h4>
                      <p className="text-[9px] font-mono font-bold text-amber-400 truncate mt-0.5">
                        {test.role.toUpperCase()}
                      </p>
                      <p className="text-[8px] font-mono text-zinc-500 truncate uppercase mt-0.5 font-bold">
                        {test.company}
                      </p>
                    </div>
                  </div>

                  {
    /* Quotation text */
  }
                  <p className="text-zinc-300 text-xs leading-relaxed font-sans italic">
                    "{test.content}"
                  </p>
                </div>

                {
    /* Verified bar */
  }
                <div className="mt-6 pt-3 border-t border-zinc-900 flex items-center justify-between font-mono text-[8px] text-zinc-500">
                  <span className="flex items-center space-x-1.5 font-bold text-emerald-400">
                    <MessageSquare className="size-3 text-emerald-400" />
                    <span>VERIFIED_SDE_PEER</span>
                  </span>
                  <span>CONTACT_OK</span>
                </div>
              </motion.div>)}
          </div>

        </div>

      </div>
    </section>;
}
