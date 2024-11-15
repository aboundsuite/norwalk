import React from "react";

const Privacy = () => {
  return (
    <section className="min-h-screen bg-white text-black py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600 italic">
            Last updated: November 16, 2024
          </p>
        </div>

        <div className="prose max-w-none">
          <p className="mb-6">
            Norwalk Baptist Church ("we," "our," or "us") is committed to
            protecting your privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you use
            our Norwalk Baptist Church mobile application ("the App"). Please
            read this policy carefully to understand our views and practices
            regarding your information and how we will treat it.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect and store the following types of information when
                you use the App:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="mb-2">
                  <span className="font-semibold">Personal Information:</span>{" "}
                  This includes your name, email address, phone number, profile
                  picture, and any other information you voluntarily provide
                  when signing up or updating your profile in the App.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Usage Data:</span> We may
                  collect information about your usage of the App, such as the
                  features you use, the time and duration of your visits, and
                  interactions with other users or church content.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Device Information:</span>{" "}
                  This includes information about the device you use to access
                  the App, such as your device's model, operating system, and IP
                  address.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                2. How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Facilitate your use of the App and its features.</li>
                <li>
                  Allow you to participate in church community activities, such
                  as sharing prayer requests, accessing devotional content, and
                  receiving church announcements.
                </li>
                <li>
                  Manage your account, including personalizing your profile.
                </li>
                <li>
                  Improve the functionality and user experience of the App.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                3. How We Share Your Information
              </h2>
              <p className="mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to outside parties. Your information may be shared
                with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Church Administrators:</span>{" "}
                  For managing church community interactions, church content,
                  and to support your spiritual needs.
                </li>
                <li>
                  <span className="font-semibold">Service Providers:</span>{" "}
                  Trusted third parties who assist us in operating the App and
                  conducting our business, provided they agree to keep this
                  information confidential.
                </li>
                <li>
                  <span className="font-semibold">Legal Requirements:</span> We
                  may disclose your information if required by law or in
                  response to valid requests by public authorities.
                </li>
              </ul>
            </section>

            {/* Additional sections */}
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p>
                We use industry-standard security measures to protect your
                information. However, no transmission over the internet or
                electronic storage method is 100% secure, and we cannot
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                5. Your Privacy Rights
              </h2>
              <p>
                You have the right to access, update, or delete your personal
                information. If you wish to exercise any of these rights, please
                contact us at{" "}
                <a
                  href="mailto:info@norwalkbc.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  info@norwalkbc.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Children's Privacy</h2>
              <p>
                The App is intended for use by individuals who are part of the
                church community, including supervised minors. We do not
                knowingly collect personal information from children under 13
                without parental consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                7. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-4">
                <p className="font-semibold">Norwalk Baptist Church</p>
                <p>2084 US-20 West</p>
                <p>Norwalk, OH 44857</p>
                <p>Phone: (419) 668-4629</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@norwalkbc.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    info@norwalkbc.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
