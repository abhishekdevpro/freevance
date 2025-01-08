import React from "react";

const TalentPage = () => {
  return (
    <div className="font-sans mt-16">
      {/* Hero Section */}
      <header className="bg-orange-500 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">
          Find Your Next Great Job Opportunity!
        </h1>
        <p className="text-lg mb-6">
          Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam
          malesuada eros nec luctus laoreet.
        </p>
        <a
          href="#"
          className="bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
        >
          Register Freevance
        </a>
      </header>

      {/* Features Section */}
      <section className="bg-white py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-orange-600 mb-4">
              Discover Quality Talent Fast
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Post a job and receive proposals from talent</li>
              <li>See verified work history and reviews</li>
              <li>Send 30 invitations to talent per job post</li>
              <li>Use advanced search filters</li>
            </ul>
          </div>

          {/* Feature 2 */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-orange-600 mb-4">
              Safe, Easy Payments
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                Get an extra level of security with Freevance Payment Protection
              </li>
              <li>
                Pay-as-you-go billing for milestone and hourly contracts
              </li>
              <li>3-5% marketplace fee depending on billing method</li>
            </ul>
          </div>

          {/* Feature 3 */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-orange-600 mb-4">
              Collaboration Tools
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Chat, video call, and share files with talent</li>
              <li>Advanced reporting and tracking</li>
              <li>Set coworker teams and member permissions</li>
              <li>Customize invoices with activity codes</li>
            </ul>
          </div>

          {/* Feature 4 */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-orange-600 mb-4">
              Account Support
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>Dedicated account support</li>
              <li>Guidance throughout your hiring process</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalentPage;
