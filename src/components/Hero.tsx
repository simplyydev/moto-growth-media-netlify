import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px)] bg-[size:40px] bg-[-20px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px] bg-[-20px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <span className="inline-block animate-fade-down">
          <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 ring-1 ring-inset ring-emerald-600/20 mb-8">
            Welcome to MotoGrowth Media
          </span>
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up">
          Empowering Your
          <span className="text-emerald-600 dark:text-emerald-400"> Business Growth</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-8 animate-fade-up">
          Expert Solutions in Investment Banking, Legal Services, and Marketing
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white px-8"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;