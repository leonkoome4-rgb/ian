import ianPhoto from "../assets/ian-photo.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#e6f7fb] via-[#f2fbfd] to-white pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/60 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-32 h-72 w-72 rounded-full bg-cyan-200/50 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] items-center gap-12">
        <div>
          <p className="inline-flex items-center rounded-full bg-sky-100 px-4 py-1.5 text-xs font-medium tracking-wide text-sky-600 uppercase">
            Digital &amp; Brand Lead · Nairobi
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.05] text-[#0f2733]">
            Ian Mutuma
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-xl">
            Results-oriented marketer with 5+ years of agency and in-house
            experience building campaigns for brands like Geminia Insurance,
            NIVEA, Jubilee Insurance, KETEPA, MyDawa, M-GAS, and Text Book
            Centre.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex items-center rounded-full bg-sky-400 px-6 py-3 text-sm font-medium text-white shadow-md shadow-sky-200 hover:bg-sky-500 transition-colors"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-medium text-[#0f2733] hover:border-sky-400 transition-colors"
            >
              Get in touch
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <dt className="text-2xl font-semibold text-[#0f2733]">5+</dt>
              <dd className="text-sm text-slate-600">Years experience</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-[#0f2733]">10+</dt>
              <dd className="text-sm text-slate-600">Brands served</dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold text-[#0f2733]">25+</dt>
              <dd className="text-sm text-slate-600">Certifications</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto">
          <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full bg-gradient-to-br from-sky-300 to-cyan-200 p-1.5 shadow-xl shadow-sky-200/70">
            <img
              src={ianPhoto}
              alt="Ian Mutuma"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 rounded-2xl bg-white px-4 py-3 shadow-lg shadow-sky-100">
            <p className="text-sm font-medium text-[#0f2733]">
              Geminia Insurance
            </p>
            <p className="text-xs text-slate-600">Digital &amp; Brand Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
}
