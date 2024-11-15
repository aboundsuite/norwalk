import React from 'react';
import Link from 'next/link';

const Terms = () => {
  return (
    <section className="min-h-screen bg-white text-black py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
          <p className="text-gray-600 italic">Last updated: November 16, 2024</p>
        </div>

        <div className="prose max-w-none">
          <p className="mb-6">
            Welcome to the Norwalk Baptist Church website ("the Site") and mobile application ("the App"). 
            By accessing or using the Site or the App, you agree to comply with and be bound by these Terms 
            of Use ("Terms"). Please read them carefully. If you do not agree to these Terms, you may not 
            use the Site or the App.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Use of the Site and App</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Site and App are intended for use by members of Norwalk Baptist Church and those 
                    interested in learning more about our community.</li>
                <li>You agree to use the Site and App only for lawful purposes and in a manner that does 
                    not infringe on the rights or restrict the use and enjoyment of the Site or App by others.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Certain features of the Site and App require you to create an account. You are 
                    responsible for maintaining the confidentiality of your account information.</li>
                <li>By creating an account, you confirm that the information you provide is accurate, 
                    complete, and current.</li>
                <li>Unauthorized access or use of another member's account is strictly prohibited.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Privacy</h2>
              <p>
                Your use of the Site and App is governed by our{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-800">
                  Privacy Policy
                </Link>
                . By using the Site or App, you consent to the collection and use of your information 
                as outlined in the Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Content Management</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Content on the Site and App is generated and moderated by church administrators. 
                    Members are responsible for ensuring their submitted content aligns with Norwalk 
                    Baptist Church's values.</li>
                <li>The church reserves the right to remove any content deemed inappropriate or in 
                    violation of these Terms.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All content on the Site and App, including text, images, videos, and graphics, is 
                    the property of Norwalk Baptist Church unless otherwise stated.</li>
                <li>You may not copy, reproduce, distribute, or create derivative works from any content 
                    without prior written permission.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Links to Third-Party Sites</h2>
              <p>
                The Site and App may include links to external websites. Norwalk Baptist Church is not 
                responsible for the content, security, or privacy practices of third-party websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Disclaimer of Warranties</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Site and App are provided on an "as-is" basis. We do not guarantee that the Site 
                    or App will be free of errors, viruses, or interruptions.</li>
                <li>Norwalk Baptist Church disclaims all warranties, express or implied, including but not 
                    limited to merchantability and fitness for a particular purpose.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p>
                Norwalk Baptist Church shall not be held liable for any damages arising out of your use 
                or inability to use the Site or App, including but not limited to direct, indirect, 
                incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
              <p>
                We reserve the right to suspend or terminate your access to the Site or App at our 
                discretion if you violate these Terms or engage in activities that harm the church community.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Any changes will be posted on this page, 
                and your continued use of the Site or App constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Ohio. Any disputes arising from 
                these Terms shall be resolved in the courts located in Norwalk, OH.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <div className="mt-4">
                <p className="font-semibold">Norwalk Baptist Church</p>
                <p>2084 US-20 West</p>
                <p>Norwalk, OH 44857</p>
                <p>Phone: (419) 668-4629</p>
                <p>Email: <a href="mailto:info@norwalkbc.com" className="text-blue-600 hover:text-blue-800">
                  info@norwalkbc.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;