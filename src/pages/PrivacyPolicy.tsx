import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="flex items-center gap-2 mb-8">
          <Shield className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mt-8">
            <h2>1. Information We Collect</h2>
            <p>
              At MotoGrowth Media, we collect information that you provide directly to us, including:
              - Name and contact information
              - Business details
              - Payment information
              - Communication preferences
            </p>
          </section>

          <section className="mt-8">
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
              - Provide and improve our services
              - Communicate with you about our services
              - Process your payments
              - Comply with legal obligations
            </p>
          </section>

          <section className="mt-8">
            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
              - Service providers who assist in our operations
              - Legal authorities when required by law
              - Business partners with your consent
            </p>
          </section>

          <section className="mt-8">
            <h2>4. Your Rights</h2>
            <p>
              You have the right to:
              - Access your personal information
              - Correct inaccurate information
              - Request deletion of your information
              - Opt-out of marketing communications
            </p>
          </section>

          <section className="mt-8">
            <h2>5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              help@aboutdevendra.in
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
