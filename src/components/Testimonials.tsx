import { references, testimonials } from "../data/testimonials";
import Reveal from "./Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -top-16 right-0 h-64 w-64 rounded-full bg-sky-50 blur-3xl" />

      <Reveal>
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-sm font-medium uppercase tracking-wide text-sky-500">
            Recommendations
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0f2733]">
            What clients say
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-3xl bg-[#f2fbfd] border border-sky-100 p-7"
              >
                <span className="text-4xl text-sky-300 leading-none">“</span>
                <blockquote className="mt-2 flex-1 text-sm text-slate-600 leading-relaxed">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-sky-100 pt-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-400 text-xs font-semibold text-white">
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="font-medium text-[#0f2733]">{t.name}</p>
                    <p className="text-xs text-slate-500">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-xl">
            {references.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl border border-sky-100 p-5 bg-[#f2fbfd]"
              >
                <p className="font-medium text-[#0f2733]">{r.name}</p>
                <p className="text-sm text-slate-600">{r.title}</p>
                <p className="text-xs text-slate-500 mt-1">
                  Contact available on request
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
