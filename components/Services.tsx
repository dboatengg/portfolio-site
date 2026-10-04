import {
  ArrowUpRight,
  Globe,
  ShoppingBag,
  LayoutDashboard,
  Wrench,
  CreditCard,
  Smartphone,
} from "lucide-react";
import ContactModalButton from "@/components/ContactModalButton";

const services = [
  {
    number: "01",
    title: "Business websites",
    description:
      "I build clean, professional websites that clearly explain what you do and make it easy for your customers to reach out to you.",
    icon: Globe,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    number: "02",
    title: "Online shops",
    description:
      "I build full e-commerce websites where your customers can pay with MoMo or bank, and you also get a full dashboard to manage products, orders, etc. yourself.",
    icon: ShoppingBag,
    gradient: "from-emerald-500 to-teal-700",
  },
  {
    number: "03",
    title: "Custom web apps",
    description:
      "Need more than a standard website? I build custom full-stack applications from the ground up to solve the specific, unique problems your business is facing.",
    icon: LayoutDashboard,
    gradient: "from-indigo-500 to-blue-700",
  },
  {
    number: "04",
    title: "Payment integration",
    description:
      "I connect Paystack, Flutterwave, or MoMo to your site so your customers can pay you directly without any stress.",
    icon: CreditCard,
    gradient: "from-violet-500 to-fuchsia-600",
  },
  {
    number: "05",
    title: "Progressive web apps",
    description:
      "Your customers can install your website on their phone. It works exactly like a mobile app but no play store or app store is needed.",
    icon: Smartphone,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    number: "06",
    title: "Fixes & upkeep",
    description:
      "Already have a site that's slow, broken, or impossible to update? I step in to fix the mess and make sure you have a site you're actually proud of.",
    icon: Wrench,
    gradient: "from-orange-500 to-red-600",
  },
];

export default function Services() {
  return (
    <section id="services" className="mb-16">
      <h2 className="section-heading">What I can build for you</h2>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
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