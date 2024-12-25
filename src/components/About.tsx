import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 ring-1 ring-inset ring-emerald-600/20 mb-6">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Driving Success Through Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At MotoGrowth Media, we believe in the power of integrated
              solutions. Our mission is to provide comprehensive business
              services that enable our clients to thrive in today's dynamic
              market environment.
            </p>

            <Card className="p-6 bg-card">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">DT</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Devendra Nath Tiwari
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-foreground">
                    "Our vision is to empower businesses with the tools and
                    expertise they need to achieve sustainable growth and
                    lasting success."
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-fade-up">
            <div className="space-y-6">
              <Card className="p-6 bg-emerald-50 dark:bg-emerald-900/30">
                <h4 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">2+</h4>
                <p className="text-foreground">Years of Experience</p>
              </Card>
              <Card className="p-6 bg-card">
                <h4 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">100+</h4>
                <p className="text-foreground">Satisfied Clients</p>
              </Card>
            </div>
            <div className="space-y-6 mt-6">
              <Card className="p-6 bg-card">
                <h4 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">95%</h4>
                <p className="text-foreground">Success Rate</p>
              </Card>
              <Card className="p-6 bg-emerald-50 dark:bg-emerald-900/30">
                <h4 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">24/7</h4>
                <p className="text-foreground">Support Available</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
