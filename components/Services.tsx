import {
  ArrowUpRight,
  Globe,
  ShoppingBag,
  LayoutDashboard,
  Wrench,
} from "lucide-react";
import ContactModalButton from "@/components/ContactModalButton";

const services = [
  {
    number: "01",
    title: "Business websites",
    description:
      "I build clean, professional websites that clearly explain what you do and make it effortless for your customers to reach out to you.",
    icon: Globe,
    gradient: "from-slate-700 to-blue-900",
  },
  {
    number: "02",
    title: "Online shops",
    description:
      "I build e-commerce websites where your customers can pay with MoMo or card, and you also get a full dashboard to manage products, orders, etc. yourself.",
    icon: ShoppingBag,
    gradient: "from-slate-600 to-emerald-900",
  },
  {
    number: "03",
    title: "Custom web apps",
    description:
      "Need more than a standard website? I build custom full-stack applications from the ground up to solve the specific, unique problems your business is facing.",
    icon: LayoutDashboard,
    gradient: "from-slate-700 to-indigo-900",
  },
  {
    number: "04",
    title: "Fixes & upkeep",
    description:
      "Already have a site that's slow, broken, or impossible to update? I step in to fix the mess and make sure you have a site you're actually proud of.",
    icon: Wrench,
    gradient: "from-slate-700 to-amber-900",
  },
];

export default function Services() {
  return (
    <section id="services" className="mb-16">
      <h2 className="section-heading">What I can build for you</h2>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="overflow-hidden rounded-2xl bg-[rgb(var(--card))] border border-[rgb(var(--border))]"
            >
              <div
                className={`relative h-36 bg-gradient-to-br ${service.gradient} p-5`}
              >
                <span className="text-3xl font-semibold tracking-tight text-white/50">
                  {service.number}
                </span>

                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm">
                  <Icon size={19} strokeWidth={1.8} />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-medium text-[rgb(var(--text))]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted-text))]">
                  {service.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[rgb(var(--border))] p-5 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-base font-medium text-[rgb(var(--text))]">
            Need something different?
          </h3>

          <p className="mt-1 text-sm text-[rgb(var(--muted-text))]">
            Tell me what you&apos;re trying to achieve, and let&apos;s take it
            from there.
          </p>
        </div>

        <ContactModalButton className="button-primary shrink-0">
          Let&apos;s talk
          <ArrowUpRight size={15} />
        </ContactModalButton>
      </div>
    </section>
  );
}