import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="flex items-center gap-2 mb-8">
          <FileText className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mt-8">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using MotoGrowth Media's services, you agree to be bound by these Terms of Service.
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mt-8">
            <h2>2. Services Description</h2>
            <p>
              MotoGrowth Media provides business growth solutions including:
              - Investment banking services
              - Legal advisory
              - Marketing and digital media production
              - Social media management
              - Event coverage
            </p>
          </section>

          <section className="mt-8">
            <h2>3. User Responsibilities</h2>
            <p>
              Users of our services agree to:
              - Provide accurate information
              - Maintain confidentiality of account information
              - Use services in compliance with applicable laws
              - Not engage in unauthorized activities
            </p>
          </section>

          <section className="mt-8">
            <h2>4. Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property on our platform belong to MotoGrowth Media.
              Users may not use, copy, or distribute our content without explicit permission.
            </p>
          </section>

          <section className="mt-8">
            <h2>5. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
              help@aboutdevendra.in
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
