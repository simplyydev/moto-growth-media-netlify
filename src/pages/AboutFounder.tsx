import { User, Award, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutFounder = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About The Founder</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the visionary behind MotoGrowth Media
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Card className="p-6 bg-card">
              <div className="flex items-center gap-4 mb-4">
                <User className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-2xl font-semibold text-foreground">Devendra Nath Tiwari</h2>
              </div>
              <p className="text-muted-foreground">
                Founder & CEO of MotoGrowth Media, with a passion for helping businesses grow through innovative solutions.
              </p>
            </Card>

            <Card className="p-6 bg-emerald-50 dark:bg-emerald-900/30">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-semibold text-foreground">Experience & Expertise</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Over 2 years in business development</li>
                <li>• Expert in digital marketing and media production</li>
                <li>• Specialized in investment banking solutions</li>
                <li>• Proven track record of client success</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-semibold text-foreground">Vision & Mission</h3>
              </div>
              <p className="text-muted-foreground">
                "My vision is to empower businesses with the tools and expertise they need to thrive in today's competitive landscape. Through MotoGrowth Media, we're committed to delivering innovative solutions that drive real results."
              </p>
            </Card>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg"
              alt="Devendra Nath Tiwari"
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
