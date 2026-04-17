export default function PrivacyPolicy() {
  return (
    <main className="bg-white min-h-screen py-24 px-6">
      <div className="max-w-[800px] mx-auto text-[#2E2E2E] leading-relaxed">

        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-2">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          <strong>Last updated:</strong> January 2026
        </p>

        <p>
          Flywheel Media (“we”, “us”, “our”) respects your privacy and is committed to protecting
          your personal and business information. This Privacy Policy explains how we collect,
          use, and safeguard information when you use our website or services.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-bold mt-10">
          1. Information We Collect
        </h2>

        <ul className="list-disc pl-6 mt-4 space-y-2">
          <li>Name, email address, phone number</li>
          <li>Business and billing information</li>
          <li>Information submitted via forms, proposals, or communication</li>
          <li>Website usage data such as cookies and analytics</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-xl font-bold mt-10">
          2. Use of Information
        </h2>

        <p className="mt-4">
          Information is used to provide services, communicate with clients, generate proposals
          and invoices, improve our offerings, and comply with legal obligations.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-bold mt-10">
          3. Data Sharing
        </h2>

        <p className="mt-4">
          We do not sell personal data. Information may be shared only with trusted service
          providers (such as payment processors), internal tools, or legal authorities when
          required by law.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-bold mt-10">
          4. Data Security
        </h2>

        <p className="mt-4">
          We implement reasonable technical and organisational measures to protect data.
          However, no method of transmission over the internet is completely secure.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-bold mt-10">
          5. Legal Compliance
        </h2>

        <p className="mt-4">
          This Privacy Policy complies with the Information Technology Act, 2000 and applicable
          consumer protection regulations in India.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-bold mt-10">
          6. Your Rights
        </h2>

        <p className="mt-4">
          You may request access, correction, or deletion of your personal information by
          contacting us at the email address below, subject to legal and contractual obligations.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-bold mt-10">
          7. Contact Information
        </h2>

        <p className="mt-4">
          For privacy-related queries, please contact:
        </p>

        <p className="mt-2">
          <strong>Email:</strong>{" "}
          <a
            href="mailto:cusstard.marketing@gmail.com"
            className="text-[#FF6A2A] hover:underline"
          >
            cusstard.marketing@gmail.com
          </a>
        </p>

      </div>
    </main>
  );
}