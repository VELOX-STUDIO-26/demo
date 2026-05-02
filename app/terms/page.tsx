import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-[72px]">
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="font-heading font-bold text-3xl md:text-[40px] text-primary mb-6">
              Terms &amp; Conditions
            </h1>
            <p className="text-caption mb-8">
              Last updated: January 1, 2025
            </p>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                By accessing and using the AI METRIX LLC website and services, you agree to be bound by these
                Terms &amp; Conditions.
              </p>
              <h2 className="font-heading font-semibold text-xl text-primary mt-8">Services</h2>
              <p>
                AI METRIX LLC provides digital marketing and AI consulting services. All services are subject to
                a separate agreement or statement of work executed between the parties.
              </p>
              <h2 className="font-heading font-semibold text-xl text-primary mt-8">Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of
                AI METRIX LLC and is protected by copyright and other intellectual property laws.
              </p>
              <h2 className="font-heading font-semibold text-xl text-primary mt-8">Limitation of Liability</h2>
              <p>
                AI METRIX LLC shall not be liable for any indirect, incidental, special, or consequential damages
                arising out of or in connection with the use of our services.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
