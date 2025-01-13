import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Terms and Conditions
        </h1>

        <p className="text-gray-700 mb-4">
          Welcome to Perfumetrics. These terms and conditions outline the rules
          and regulations for the use of our website. By accessing and using our
          platform, you agree to comply with these terms. Please read them
          carefully before using any services provided by Perfumetrics.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-700 mb-4">
          By accessing Perfumetrics.com, you agree to be bound by these Terms
          and Conditions. If you do not agree with any part of these terms,
          please refrain from using our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          2. User Account and Security
        </h2>
        <p className="text-gray-700 mb-4">
          To access certain features of Perfumetrics.com, such as saving
          preferences or engaging with our content, you may need to create a
          user account. By creating an account, you agree to the following:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </li>
          <li>
            All information you provide during registration must be accurate and
            up-to-date.
          </li>
          <li>
            You are responsible for all activities that occur under your
            account.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          At Perfumetrics.com, we take the privacy and security of your personal
          data seriously. We ensure that your information is kept safe and
          secure. Under no circumstances do we sell, share, or disclose your
          data to third parties without your explicit consent.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          3. Intellectual Property
        </h2>
        <p className="text-gray-700 mb-4">
          All content available on Perfumetrics, including but not limited to
          text, images, reviews, and research, is owned by us or borrowed from
          other sites with credit given through our website. All reviews on our
          website are created by our team through internal research and
          development efforts. They are authentic and represent the opinions of
          our team, free from any third-party influence.
        </p>
        <p className="text-gray-700 mb-4">
          You may not copy, modify, distribute, reproduce, or publish any
          content from Perfumetrics.com without obtaining prior written consent
          from us.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Content and Reviews</h2>
        <p className="text-gray-700 mb-4">
          Perfumetrics.com is a review platform focused on fragrances and
          lifestyle products. All reviews published on our website are based on
          our own independent research and experiences. We do not accept
          payments or incentives in exchange for any favorable reviews. While we
          strive to provide the most accurate and helpful information, we do not
          guarantee that the products reviewed will perform the same way for
          every individual. Your personal experience with a product may vary, so
          purchase it at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          5. User-Generated Content
        </h2>
        <p className="text-gray-700 mb-4">
          Users may be permitted to post comments, feedback, and reviews on our
          platform. By submitting content to Perfumetrics.com, you grant us the
          right to use, modify, and display that content in connection with the
          operation of our platform. You must not post content that is unlawful,
          defamatory, or violates the rights of any third party.
        </p>
        <p className="text-gray-700 mb-4">
          We reserve the right to remove any content that violates these terms
          or is deemed inappropriate at our sole discretion.
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          6. Limitation of Liability
        </h2>
        <p className="text-gray-700 mb-4">
          Perfumetrics.com is a review platform that provides information and
          opinions based on personal experiences and research. While we aim to
          provide helpful insights, we do not make any representations or
          warranties about the completeness, accuracy, or reliability of the
          content on our site. We are not liable for any damages arising from
          the use of our website or the information presented, including but not
          limited to direct, indirect, incidental, or consequential damages.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          We are committed to protecting your privacy. Please refer to our{" "}
          <a href="/privacy-policy" className="text-blue-500 underline">
            Privacy Policy
          </a>{" "}
          to understand how we collect, use, and safeguard your personal data.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Termination of Use</h2>
        <p className="text-gray-700 mb-4">
          We reserve the right to terminate or suspend access to your account or
          use of the platform at any time without notice if we believe you have
          violated these Terms and Conditions or engaged in unlawful conduct.
        </p>

        <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
        <p className="text-gray-700 mb-4">
          Perfumetrics.com reserves the right to modify these Terms and
          Conditions at any time. Any changes will be posted on this page, and
          it is your responsibility to review the Terms regularly. Continued use
          of the website after any modifications constitutes your acceptance of
          the revised Terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions regarding these Terms and Conditions, please
          contact us at:
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
          <a href="/contactUs" className="text-blue-500 underline">
            Link to contact page
          </a>
        </p>

        <p className="text-gray-700 mb-4">
          By using Perfumetrics.com, you agree to adhere to these Terms and
          Conditions. Thank you for choosing us as your trusted resource for
          fragrance and lifestyle reviews!
        </p>
      </div>
    </div>
  );
};

export default page;
