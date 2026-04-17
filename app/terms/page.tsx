import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <>

      <main className="bg-white min-h-screen py-24 px-6">
        <div className="max-w-[800px] mx-auto text-[#2E2E2E] leading-relaxed">

          {/* Title */}
          <h1 className="text-4xl font-extrabold mb-2">
            Terms of Service
          </h1>

          <p className="text-sm text-gray-500 mb-8">
            <strong>Last updated:</strong> January 2026
          </p>

          <p>
            These Terms of Service (“Terms”) govern your access to and use of the website{" "}
            <a
              href="https://www.flyweel.media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6A2A] hover:underline"
            >
              https://www.flyweel.media
            </a>{" "}
            (“Website”) and the services provided by{" "}
            <strong>Cusstard Marketing (OPC) Private Limited</strong>,
            operating under the brand name <strong>Flywheel Media</strong>
            (“Company”, “we”, “us”, “our”).
          </p>

          <p className="mt-4">
            By accessing our Website or engaging our services, you agree to be bound by these Terms.
            If you do not agree, please do not use our Website or services.
          </p>

          {/* Section 1 */}
          <h2 className="text-xl font-bold mt-10">1. Company Details</h2>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li><strong>Legal Name:</strong> Cusstard Marketing (OPC) Private Limited</li>
            <li><strong>Registered Office:</strong> 8 Thanikachalam St, Thyagarayanagar, Chennai – 600017, Tamil Nadu, India</li>
            <li><strong>Contact Email:</strong> cusstard.marketing@gmail.com</li>
            <li><strong>Jurisdiction:</strong> Chennai, Tamil Nadu, India</li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-xl font-bold mt-10">2. Scope of Services</h2>

          <p className="mt-4">
            Flywheel Media provides customised digital marketing and related professional services,
            including but not limited to performance marketing, social media management, SEO,
            website and landing page development, CRM and marketing automation, consulting,
            one-time projects, and monthly retainers.
          </p>

          <p className="mt-4">
            All services are tailored per client and governed by a written proposal,
            statement of work, or agreement (“Proposal”).
          </p>

          {/* Section 3 */}
          <h2 className="text-xl font-bold mt-10">3. No Guarantees</h2>

          <p className="mt-4">
            We do not guarantee leads, conversions, revenue, ROAS, rankings, or business outcomes.
            Results depend on multiple factors outside our control, including platforms, budgets,
            market conditions, and client responsiveness.
          </p>

          {/* Section 4 */}
          <h2 className="text-xl font-bold mt-10">4. Payments, Billing & Invoicing</h2>

          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Payment models may include advance payments, milestones, retainers, or a combination.</li>
            <li>Accepted methods include UPI, bank transfer, and payment gateways such as Zoho and Razorpay.</li>
            <li>Invoices are payable within <strong>10 days</strong> unless stated otherwise.</li>
            <li>Services may be paused or suspended after <strong>7 days</strong> of non-payment.</li>
            <li>Services may be provided in INR or USD, as specified in the Proposal.</li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-xl font-bold mt-10">5. Advertising Spend</h2>

          <p className="mt-4">
            Advertising platform spend (e.g., Meta, Google) is separate from our service fees,
            non-refundable, and not controlled by Flywheel Media.
          </p>

          {/* Section 6 */}
          <h2 className="text-xl font-bold mt-10">6. Client Responsibilities</h2>

          <p className="mt-4">
            Unless otherwise agreed in writing, clients are responsible for providing accurate
            information, approvals, and access required to deliver services. Delays or failures
            caused by the client may affect timelines and outcomes.
          </p>

          {/* Section 7 */}
          <h2 className="text-xl font-bold mt-10">7. Intellectual Property & Usage Rights</h2>

          <p className="mt-4">
            Upon full payment, the client owns final deliverables created specifically for them.
            Flywheel Media retains the perpetual right to display work, assets, creatives, and results
            for portfolio, marketing, advertising, and promotional purposes.
          </p>

          {/* Section 8 */}
          <h2 className="text-xl font-bold mt-10">8. Limitation of Liability</h2>

          <p className="mt-4">
            Flywheel Media shall not be liable for platform bans, algorithm changes, loss of revenue,
            or indirect or consequential damages. Any liability is strictly limited to the fees paid
            by the client in the immediately preceding one (1) month.
          </p>

          {/* Section 9 */}
          <h2 className="text-xl font-bold mt-10">9. Indemnity</h2>

          <p className="mt-4">
            Clients agree to indemnify and hold harmless Flywheel Media against any claims arising
            from client-provided content, legal non-compliance, or misrepresentation.
          </p>

          {/* Section 10 */}
          <h2 className="text-xl font-bold mt-10">10. Termination</h2>

          <p className="mt-4">
            We reserve the right to terminate or suspend services for non-payment, breach of terms,
            or unlawful or unethical business activity. Outstanding dues remain payable upon termination.
          </p>

          {/* Section 11 */}
          <h2 className="text-xl font-bold mt-10">11. Governing Law</h2>

          <p className="mt-4">
            These Terms are governed by the laws of India. All disputes shall be subject to the exclusive
            jurisdiction of the courts of Chennai, Tamil Nadu.
          </p>

        </div>
      </main>
    </>
  );
}