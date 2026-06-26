export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Their team possesses a deep understanding of the marketing industry's regulatory nuances and customer psychology. They are professional, results-oriented, and highly innovative in their approach to digital growth. We have no hesitation in recommending them to any firm looking to modernize their digital presence or scale their lead generation efforts.",
    name: "Ben Ndegwa",
    title: "Managing Director",
    company: "Geminia Insurance Co. Ltd.",
  },
  {
    quote:
      "Throughout our partnership, they have demonstrated an exceptional ability to translate brand vision into measurable market impact — from integrated digital strategy and conversational commerce to omnichannel presence and creative direction. I highly recommend them to any organization seeking a forward-thinking partner that delivers high-level execution and genuine ROI.",
    name: "Joy Ndanu",
    title: "Marketing Manager",
    company: "Denri Africa",
  },
  {
    quote:
      "They approached the project with strategic clarity, taking time to understand our brand values, target audience, and market positioning. Throughout the engagement, communication was clear, timelines were respected, and feedback was incorporated with flexibility. The final output significantly strengthened our brand presence and reinforced a credible, high-quality corporate image.",
    name: "Venessa Gatumo",
    title: "Marketing Manager",
    company: "Remy Capital",
  },
];

export interface Reference {
  name: string;
  title: string;
}

export const references: Reference[] = [
  { name: "Janet Mbugua", title: "Digital Manager, Beiersdorf" },
  { name: "Alex Ofio", title: "CEO, Bluetrain Consultancy" },
];
