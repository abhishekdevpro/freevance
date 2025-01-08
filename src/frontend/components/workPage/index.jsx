import React from "react";

const WorkPage = () => {
  return (
    <div className="font-sans mt-16">
      {/* Hero Section */}
      <header className="bg-orange-500 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold mb-4">Find Your Next Freelance Opportunity!</h1>
        <p className="text-lg mb-6">
          Freevance helps you connect with clients and grow your freelancing career. Explore projects, submit proposals, and get paid securely.
        </p>
        <a
          href="#"
          className="bg-black text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition"
        >
          Start Finding Work
        </a>
      </header>

      {/* How It Works Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-orange-600 mb-4">Create Your Profile</h3>
            <p className="text-gray-700">
              Highlight your skills, experience, and achievements to attract clients.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-orange-600 mb-4">Explore Projects</h3>
            <p className="text-gray-700">
              Use advanced filters to find projects that match your expertise.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-orange-600 mb-4">Submit Proposals</h3>
            <p className="text-gray-700">
              Pitch your services to potential clients and showcase your value.
            </p>
          </div>
          {/* Step 4 */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-orange-600 mb-4">Get Paid</h3>
            <p className="text-gray-700">
              Enjoy timely payments through our secure platform.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
    
    </div>
  );
};

export default  WorkPage 
    ;
