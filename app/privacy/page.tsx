import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-[72px]">
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="font-heading font-bold text-3xl md:text-[40px] text-primary mb-6">
              Privacy Policy
            </h1>
            <p className="text-caption mb-8">
              Last updated: January 1, 2025
            </p>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                AI METRIX LLC respects your privacy and is committed to protecting your personal data.
                This policy explains how we collect, use, and safeguard your information.
              </p>
              <h2 className="font-heading font-semibold text-xl text-primary mt-8">Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you fill out a contact form,
                book a consultation, or make a payment. This may include your name, email address, phone number,
                business name, and payment information.
              </p>
              <h2 className="font-heading font-semibold text-xl text-primary mt-8">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide and improve our services, communicate with you,
                process payments, and send you marketing communications (with your consent).
              </p>
              <h2 className="font-heading font-semibold text-xl text-primary mt-8">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data
                against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
