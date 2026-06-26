import { useState } from "react";
import { experience } from "../data/experience";
import Reveal from "./Reveal";

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="bg-[#f2fbfd] py-20 md:py-28">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-medium uppercase tracking-wide text-sky-500">
            Experience
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0f2733]">
            Where I've made an impact
          </h2>

          <div className="mt-12 relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-sky-200 md:left-[7.5rem]" />

            <ol className="space-y-6">
              {experience.map((job, i) => {
                const isOpen = expanded === i;
                return (
                  <li key={`${job.company}-${job.role}`} className="relative">
                    <button
                      onClick={() => setExpanded(isOpen ? null : i)}
                      className="w-full text-left grid md:grid-cols-[7rem_1fr] gap-4 md:gap-8 items-start pl-10 md:pl-0"
                    >
                      <span className="hidden md:block text-xs text-slate-500 pt-1.5">
                        {job.period.split("–")[0].trim()}
                      </span>

                      <span className="absolute left-0 md:left-[7.5rem] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-400 ring-4 ring-[#f2fbfd]" />

                      <div className="rounded-2xl bg-white border border-sky-100 p-6 hover:border-sky-300 transition-colors">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="font-semibold text-[#0f2733]">
                            {job.role}{" "}
                            <span className="text-sky-500">
                              · {job.company}
                            </span>
                          </h3>
                          <span className="text-xs text-slate-500">
                            {job.period}
                            {job.duration ? ` (${job.duration})` : ""}
                          </span>
                        </div>
                        {job.location && (
                          <p className="mt-1 text-xs text-slate-500">
                            {job.location}
                          </p>
                        )}

                        {job.bullets.length > 0 && (
                          <ul
                            className={`mt-4 space-y-2 text-sm text-slate-600 overflow-hidden transition-all ${
                              isOpen ? "max-h-[1000px]" : "max-h-16"
                            }`}
                          >
                            {job.bullets.map((b) => (
                              <li key={b} className="flex gap-2">
                                <span className="text-sky-400 mt-1">•</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {job.bullets.length > 0 && (
                          <span className="mt-2 inline-block text-xs font-medium text-sky-500">
                            {isOpen ? "Show less ↑" : "Show more ↓"}
                          </span>
                        )}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
