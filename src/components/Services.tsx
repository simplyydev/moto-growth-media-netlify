import {
  Briefcase,
  Scale,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    title: "Investment Banking",
    description:
      "Strategic financial advisory, mergers & acquisitions, and capital raising solutions for your business growth.",
    icon: Briefcase,
    features: [
      "Financial Advisory",
      "Mergers & Acquisitions",
      "Capital Raising",
      "Strategic Planning",
    ],
  },
  {
    title: "Legal Services",
    description:
      "Comprehensive legal solutions to protect and advance your business interests with expert guidance.",
    icon: Scale,
    features: [
      "Corporate Law",
      "Contract Management",
      "Regulatory Compliance",
      "Legal Consulting",
    ],
  },
  {
    title: "Marketing Solutions",
    description:
      "Data-driven marketing strategies to enhance your brand presence and drive sustainable growth.",
    icon: TrendingUp,
    features: [
      "Digital Marketing",
      "Brand Strategy",
      "Content Creation",
      "Market Analysis",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to accelerate your business growth
            and success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300 animate-fade-up bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              <div className="p-6">
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-foreground"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;