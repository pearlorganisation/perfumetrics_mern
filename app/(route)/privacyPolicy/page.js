"use client";
import Link from "next/link";
import React, { useEffect } from "react";
// export const metadata = {
//   title: {
//     absolute: "Privacy Policy",
//   },
// };
export default function page() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: 'smooth' or 'auto'
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

        <p className="text-gray-700 mb-4">
          At Perfumetrics.com, your privacy is of utmost importance to us, and
          we are committed to protecting your personal information. This Privacy
          Policy outlines how we collect, use, and safeguard your data when you
          interact with our website. By accessing and using Perfumetrics.com,
          you agree to the practices described in this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We collect personal information when you create an account, interact
          with our content, or contact us. The types of data we collect include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Personal Information:</strong> When you register, we may
            collect details such as your name and email address.
          </li>
          <li>
            <strong>Non-Personal Information:</strong> Includes your IP address,
            browser type, and device information, as well as browsing patterns
            on our website.
          </li>
          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies
            to enhance your user experience, such as remembering your
            preferences and understanding how users interact with our site.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          Perfumetrics.com uses the information we collect for the following
          purposes:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Personalization:</strong> To offer personalized
            recommendations, save your preferences, and improve your experience
            on the website.
          </li>
          <li>
            <strong>Communication:</strong> We may use your contact information
            to notify you of updates, respond to your inquiries, or send
            newsletters.
          </li>
          <li>
            <strong>Site Improvement:</strong> Data collected helps us analyze
            user behavior to enhance the website’s performance and
            user-friendliness.
          </li>
          <li>
            <strong>Security:</strong> We use your information to maintain the
            security of your account and detect any suspicious activity.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">
          3. Data Protection and Security
        </h2>
        <p className="text-gray-700 mb-4">
          We take the security of your personal information seriously and
          implement robust security measures, such as encryption and secure
          servers, to protect your data from unauthorized access or disclosure.
          We store your information for as long as it is necessary to provide
          our services or as required by law. Once the information is no longer
          needed, we securely delete or anonymize it.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          4. Data Sharing and Third-Party Disclosure
        </h2>
        <p className="text-gray-700 mb-4">
          Perfumetrics.com does not share, sell, trade, or rent your personal
          information to third parties under any circumstances, except in cases
          where disclosure is required to comply with legal obligations.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Legal Compliance:</strong> In the event of a legal issue,
            such as responding to a court order, subpoena, or legal process, we
            may be required to disclose your personal information to comply with
            applicable laws and regulations.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          Other than these legal exceptions, your data remains completely
          confidential and is not shared with any external parties.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          5. Cookies and Tracking Technologies
        </h2>
        <p className="text-gray-700 mb-4">
          We use cookies and similar technologies to improve your browsing
          experience. These help us understand user behavior, remember
          preferences, and provide relevant content. You can manage cookies
          through your browser settings, but disabling them may affect your
          ability to fully experience certain features on the website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          6. User Accounts and Data Privacy
        </h2>
        <p className="text-gray-700 mb-4">
          When you create an account on Perfumetrics.com, you are responsible
          for keeping your login credentials secure. You can update or delete
          your personal information by logging into your account at any time. We
          prioritize the safety and privacy of your personal data and ensure
          that it is not shared with any third parties except as stated above.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Access:</strong> You can request access to the personal
            information we hold about you.
          </li>
          <li>
            <strong>Correction:</strong> You can ask us to correct any
            inaccurate or incomplete data.
          </li>
          <li>
            <strong>Deletion:</strong> You have the right to request the
            deletion of your personal data when it is no longer needed for the
            purposes for which it was collected.
          </li>
          <li>
            <strong>Restriction:</strong> You may request that we limit the
            processing of your personal information.
          </li>
          <li>
            <strong>Portability:</strong> You can request a copy of your data in
            a machine-readable format.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          To exercise these rights, please contact us at{" "}
          <a
            href="mailto:help@perfumetrics.com"
            className="text-blue-500 underline"
          >
            help@perfumetrics.com
          </a>
          .
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
        <p className="text-gray-700 mb-4">
          Perfumetrics.com may contain links to third-party websites. These
          websites are not controlled by us, and we encourage you to review
          their privacy policies before providing any personal information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          9. Changes to This Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to update this Privacy Policy at any time. Any
          changes will be posted on this page, and it is your responsibility to
          review the policy periodically. Continued use of Perfumetrics.com
          after any changes constitutes your acceptance of the revised terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or concerns regarding this Privacy Policy or
          your personal data, please contact us at:
        </p>
        <p className="text-gray-700 mb-4">
          Email:{" "}
          <a
            href="mailto:help@perfumetrics.com"
            className="text-blue-500 underline"
          >
            help@perfumetrics.com
          </a>
        </p>
        <p className="text-gray-700 mb-4">
          Contact Page:{" "}
          <Link href="/contactUs" className="text-blue-500 underline">
            Link to contact page
          </Link>
        </p>

        <p className="text-gray-700 mb-4">
          Perfumetrics.com is committed to protecting your personal data and
          ensuring your privacy. Thank you for trusting us with your
          information.
        </p>
      </div>
    </div>
  );
}
