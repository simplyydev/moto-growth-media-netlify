import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 mb-6">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Driving Success Through Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At MotoGrowth Media, we believe in the power of integrated
              solutions. Our mission is to provide comprehensive business
              services that enable our clients to thrive in today's dynamic
              market environment.
            </p>

            <Card className="p-6 bg-white shadow-md">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-emerald-600">DT</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Devendra Nath Tiwari
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Founder & CEO
                  </p>
                  <p className="text-gray-700">
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
              <Card className="p-6 bg-emerald-50">
                <h4 className="text-2xl font-bold text-emerald-600 mb-2">10+</h4>
                <p className="text-gray-700">Years of Experience</p>
              </Card>
              <Card className="p-6">
                <h4 className="text-2xl font-bold text-emerald-600 mb-2">250+</h4>
                <p className="text-gray-700">Satisfied Clients</p>
              </Card>
            </div>
            <div className="space-y-6 mt-6">
              <Card className="p-6">
                <h4 className="text-2xl font-bold text-emerald-600 mb-2">95%</h4>
                <p className="text-gray-700">Success Rate</p>
              </Card>
              <Card className="p-6 bg-emerald-50">
                <h4 className="text-2xl font-bold text-emerald-600 mb-2">24/7</h4>
                <p className="text-gray-700">Support Available</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;