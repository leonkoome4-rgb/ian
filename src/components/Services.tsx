import { services } from "../data/services";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section className="bg-[#f2fbfd] py-20 md:py-28">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-medium uppercase tracking-wide text-sky-500">
            What I do
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0f2733]">
            Core focus areas
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white border border-sky-100 p-6 hover:border-sky-300 hover:shadow-md hover:shadow-sky-100 transition-all"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400 text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-semibold text-[#0f2733]">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
