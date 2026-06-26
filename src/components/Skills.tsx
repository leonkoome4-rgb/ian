import { skills } from "../data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="bg-white py-20 md:py-28">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-medium uppercase tracking-wide text-sky-500">
            Expertise
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0f2733]">
            Skills &amp; tools
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-sky-100 bg-[#f2fbfd] px-5 py-2.5 text-sm text-[#0f2733] hover:border-sky-300 hover:bg-sky-50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
