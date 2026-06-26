import Reveal from "./Reveal";

// Resume PDF lists "iamutuma23@gmaill.com" (double L) — using gmail.com here
// since that's almost certainly a typo; confirm with Ian before publishing.
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f2fbfd] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-100/60 blur-3xl" />
      <Reveal>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-sky-500">
            Contact
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-[#0f2733]">
            Let's build something great together
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto">
            Open to brand, digital strategy, and marketing leadership
            conversations. Based in Nairobi, Kenya.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:iamutuma23@gmail.com"
              className="inline-flex items-center rounded-full bg-sky-400 px-7 py-3 text-sm font-medium text-white shadow-md shadow-sky-200 hover:bg-sky-500 transition-colors"
            >
              iamutuma23@gmail.com
            </a>
            <a
              href="tel:+254706140214"
              className="inline-flex items-center rounded-full border border-sky-200 bg-white px-7 py-3 text-sm font-medium text-[#0f2733] hover:border-sky-400 transition-colors"
            >
              +254 706 140 214
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">Nairobi, Kenya</p>
        </div>
      </Reveal>
    </section>
  );
}
