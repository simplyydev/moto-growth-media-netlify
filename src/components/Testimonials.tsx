import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "MotoGrowth Media transformed our business strategy. Their investment banking team provided invaluable guidance for our expansion.",
    author: "Sarah Chen",
    position: "CEO, TechVision Inc.",
  },
  {
    quote:
      "The legal expertise and attention to detail demonstrated by the team was exceptional. They helped us navigate complex regulatory challenges.",
    author: "Michael Rodriguez",
    position: "Director, Global Solutions Ltd.",
  },
  {
    quote:
      "Their marketing solutions drove remarkable growth in our digital presence. The results exceeded our expectations.",
    author: "Emily Watson",
    position: "CMO, Innovation Hub",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setCurrentIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 ring-1 ring-inset ring-emerald-600/20 mb-6">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses we've helped grow and succeed
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-card p-8 md:p-12 animate-fade-up">
            <Quote className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-6" />
            <p className="text-xl md:text-2xl text-foreground mb-8">
              {testimonials[currentIndex].quote}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-foreground">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].position}
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prev}
                  className="hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={next}
                  className="hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;