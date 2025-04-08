// app/privacy/page.tsx
import { Container } from '@/components/Container'

export default function PrivacyPolicy() {
  return (
    <Container>
      <section className="py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Welcome to WellFed! Your privacy is extremely important to us. This Privacy Policy
          explains how we collect, use, and protect your personal data when you use our app,
          and it details your rights regarding your personal information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Information We Collect
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We collect both personal and non-personal information to provide you with a personalized
          and efficient experience. Personal information may include your name, email address,
          dietary preferences, and any other data you provide directly through the app. Non-personal
          information includes technical data such as your device type, IP address, usage statistics,
          and other data automatically collected through cookies and similar technologies.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          How We Use Your Information
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Your information is used to tailor your experience with WellFed and to improve our services.
          Specifically, we use your data to:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
          <li>
            Provide personalized recipe recommendations and meal plans based on your dietary
            preferences, favorite cuisines, and nutritional goals.
          </li>
          <li>
            Enhance app functionality and performance through the collection of usage data and
            technical details.
          </li>
          <li>
            Analyze user behavior using services like Google Analytics to understand how our app is
            used and to improve our offerings.
          </li>
          <li>
            Communicate with you regarding updates, support, and promotional offers.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Data Sharing and Third Parties
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We value your privacy and do not sell your personal data to third parties. We may, however,
          share anonymized or aggregated data with trusted partners to help us analyze trends and
          improve our service. Additionally, we use third-party analytics services, such as Google
          Analytics, to gather insights about app usage and performance. These services collect data
          in a manner that does not personally identify you.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Data Security
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We implement robust security measures, including encryption, secure storage, and access
          controls, to protect your personal data from unauthorized access, disclosure, alteration,
          or destruction. While no security system is perfect, we continuously work to safeguard your
          information.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Your Rights and Choices
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          You have the right to access, correct, or delete your personal data at any time. If you have
          any questions, concerns, or requests regarding your data, please contact us at{' '}
          <a href="mailto:info@wellfed.us" className="text-primary underline">
            info@wellfed.us
          </a>.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Changes to This Privacy Policy
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated effective date. We encourage you to review this Privacy Policy
          periodically to stay informed about our data practices.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700">
          If you have any questions about this Privacy Policy or our data practices, please contact us
          at{' '}
          <a href="mailto:info@wellfed.us" className="text-primary underline">
            info@wellfed.us
          </a>.
        </p>
      </section>
    </Container>
  )
}
