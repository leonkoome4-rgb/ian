import { useState } from "react";
import { Award } from "lucide-react";
import { certifications } from "../data/certifications";
import Reveal from "./Reveal";

const INITIAL_COUNT = 8;

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll
    ? certifications
    : certifications.slice(0, INITIAL_COUNT);

  return (
    <section id="certifications" className="bg-[#f2fbfd] py-20 md:py-28">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-medium uppercase tracking-wide text-sky-500">
            Credentials
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0f2733]">
            Certifications &amp; training
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            {certifications.length}+ certifications across marketing strategy,
            media buying, analytics, and brand management from CIM, Meta,
            Google, HubSpot, and more.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map((cert) => (
              <div
                key={`${cert.name}-${cert.issuer}`}
                className="rounded-2xl bg-white border border-sky-100 p-5 hover:border-sky-300 hover:shadow-md hover:shadow-sky-100 transition-all"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-sky-500">
                  <Award size={18} />
                </span>
                <p className="mt-3 font-medium text-[#0f2733] leading-snug">
                  {cert.name}
                </p>
                <p className="mt-2 text-sm text-slate-600">{cert.issuer}</p>
                {cert.date && (
                  <p className="mt-1 text-xs text-slate-500">{cert.date}</p>
                )}
              </div>
            ))}
          </div>

          {certifications.length > INITIAL_COUNT && (
            <button
              onClick={() => setShowAll((v) => !v)}
              className="mt-8 inline-flex items-center rounded-full border border-sky-200 bg-white px-6 py-2.5 text-sm font-medium text-sky-600 hover:border-sky-400 transition-colors"
            >
              {showAll ? "Show fewer ↑" : `Show all ${certifications.length} ↓`}
            </button>
          )}
        </div>
      </Reveal>
    </section>
  );
}
