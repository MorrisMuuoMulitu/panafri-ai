import React from 'react'

const Privacy = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how PanAfri AI Solutions collects, uses, and protects your personal information.
          </p>
        </div>

        <div className="prose prose-lg mx-auto text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
          <p>We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.</p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, company name, and any other information you choose to provide.</li>
            <li><strong>Usage Data:</strong> Information on how the website is accessed and used (e.g., IP addresses, browser type, pages visited).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes:</p>
          <ul>
            <li>To provide and maintain our service.</li>
            <li>To notify you about changes to our service.</li>
            <li>To allow you to participate in interactive features of our service when you choose to do so.</li>
            <li>To provide customer support.</li>
            <li>To gather analysis or valuable information so that we can improve our service.</li>
            <li>To monitor the usage of our service.</li>
            <li>To detect, prevent and address technical issues.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclosure of Your Information</h2>
          <p>We may disclose your personal information in the good faith belief that such action is necessary to:</p>
          <ul>
            <li>Comply with a legal obligation.</li>
            <li>Protect and defend the rights or property of PanAfri AI Solutions.</li>
            <li>Prevent or investigate possible wrongdoing in connection with the service.</li>
            <li>Protect the personal safety of users of the service or the public.</li>
            <li>Protect against legal liability.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Security of Data</h2>
          <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have the following data protection rights:</p>
          <ul>
            <li>The right to access, update or to delete the information we have on you.</li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability.</li>
            <li>The right to withdraw consent.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Privacy Policy</h2>
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us by email: hello@panafriai.com.</p>
        </div>
      </div>
    </div>
  )
}

export default Privacy