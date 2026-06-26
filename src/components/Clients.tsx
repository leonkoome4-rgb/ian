import clientLogos from "../assets/client-logos.png";
import { otherClients } from "../data/clients";
import Reveal from "./Reveal";

export default function Clients() {
  return (
    <section className="bg-white py-14 border-y border-sky-100">
      <Reveal>
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-sm font-medium uppercase tracking-wide text-sky-500">
            Brands I've worked with
          </p>

          <img
            src={clientLogos}
            alt="Logos of brands Ian has worked with: Denri Africa, Geminia Insurance, Text Book Centre, Tusker, Naivas, Remy Capital, Nairobi Beauty Week, Safaricom, Standard Chartered, Cadbury, Inchcape, DSTV"
            className="mt-8 mx-auto max-w-3xl w-full"
          />

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {otherClients.map((client) => (
              <span
                key={client}
                className="rounded-full border border-sky-100 bg-[#f2fbfd] px-5 py-2 text-sm font-medium text-[#0f2733]"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
