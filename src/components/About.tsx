import { education, languages } from "../data/education";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1fr] gap-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-sky-500">
              About
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0f2733]">
              Marketer by trade, strategist at heart
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed">
              I bring five years of agency and in-house expertise developing and
              executing campaigns for notable clients such as NIVEA, Jubilee
              Insurance, KETEPA, MyDawa, M-GAS, and Text Book Centre. My
              approach blends consumer psychology with data-driven media
              planning — translating brand vision into measurable market impact.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Today, as Digital &amp; Brand Lead at Geminia Insurance, I drive
              brand consistency across corporate and digital touchpoints, manage
              end-to-end social strategy, and oversee media planning to maximize
              ROI across the Kenyan insurance market.
            </p>

            <div className="mt-8 flex gap-3">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full bg-sky-50 px-4 py-1.5 text-sm text-sky-600 border border-sky-100"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#f2fbfd] p-8 border border-sky-100">
            <p className="text-sm font-medium uppercase tracking-wide text-sky-500">
              Education
            </p>
            <ul className="mt-6 space-y-6">
              {education.map((e) => (
                <li key={e.school} className="border-l-2 border-sky-200 pl-5">
                  <p className="font-semibold text-[#0f2733]">{e.school}</p>
                  <p className="text-sm text-slate-600">{e.degree}</p>
                  <p className="text-xs text-slate-500 mt-1">{e.period}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
