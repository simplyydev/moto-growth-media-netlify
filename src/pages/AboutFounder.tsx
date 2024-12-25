import { User, Award, BookOpen, Briefcase, Code, Laptop } from "lucide-react";
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
                Ethical Hacker & Founder of MotoGrowth Media, passionate about creating innovative solutions and helping businesses grow through technology.
              </p>
            </Card>

            <Card className="p-6 bg-emerald-50 dark:bg-emerald-900/30">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-semibold text-foreground">Professional Experience</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Founder & CEO at MotoGrowth Media</li>
                <li>• Ethical Hacker and Cyber Securtiy Expert</li>
                <li>• Experienced in building scalable web applications</li>
                <li>• Proficient in modern development technologies</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card">
              <div className="flex items-center gap-4 mb-4">
                <Code className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-semibold text-foreground">Technical Skills</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Frontend: React.js, Next.js, TypeScript</li>
                <li>• Backend: Node.js, Express.js, MongoDB</li>
                <li>• Cloud: AWS, Digital Ocean, Vercel</li>
                <li>• Tools: Git, Docker, CI/CD</li>
              </ul>
            </Card>

            <Card className="p-6 bg-emerald-50 dark:bg-emerald-900/30">
              <div className="flex items-center gap-4 mb-4">
                <Laptop className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-semibold text-foreground">Projects & Achievements</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Built multiple successful web applications</li>
                <li>• Developed efficient business solutions</li>
                <li>• Created scalable architecture designs</li>
                <li>• Led development teams to success</li>
              </ul>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-semibold text-foreground">Education & Learning</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Continuously learning and staying updated with the latest technologies and development practices in the ever-evolving tech landscape.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Self-taught programmer</li>
                <li>• Regular participant in tech conferences</li>
                <li>• Active open-source contributor</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card">
              <div className="flex items-center gap-4 mb-4">
                <Award className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-xl font-semibold text-foreground">Vision & Mission</h3>
              </div>
              <p className="text-muted-foreground">
                "My vision is to empower businesses with cutting-edge technology solutions that drive growth and success. Through MotoGrowth Media, we're committed to delivering innovative solutions that make a real difference in how businesses operate and succeed in the digital age."
              </p>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Connect with Devendra</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/simplyydev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  LinkedIn Profile
                </a>
                <a
                  href="https://www.aboutdevendra.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  Portfolio Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFounder;
