import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RefundPage() {
  return (
    <>
      <Header />
      <main id="main" className="pt-[72px]">
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <h1 className="font-heading font-bold text-3xl md:text-[40px] text-primary mb-6">
              Refund Policy
            </h1>
            <p className="text-caption mb-8">
              Last updated: January 1, 2025
            </p>
            <div className="space-y-6 text-body leading-relaxed">
              <p>
                At AI METRIX LLC, we are committed to delivering high-quality services. If you are not satisfied,
                please review our refund policy below.
              </p>
              <h2 className="font-heading font-semibold text-xl text-primary mt-8">Strategy Sessions</h2>
              <p>
                Strategy sessions cancelled with at least 24 hours notice are eligible for a full refund.
                Cancellations within 24 hours may be subject to a 50% cancellation fee.
              </p>
              <h2 className="font-heading font-semibold text-xl text-primary mt-8">Monthly Retainers</h2>
              <p>
                Monthly retainer fees are billed in advance. You may cancel your retainer with 30 days written notice.
                No partial month refunds are provided.
              </p>
              <h2 className="font-heading font-semibold text-xl text-primary mt-8">Project Deposits</h2>
              <p>
                Project deposits are non-refundable once work has commenced. In exceptional circumstances,
                a partial refund may be granted at the discretion of AI METRIX LLC management.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
