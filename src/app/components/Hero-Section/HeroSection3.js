const HeroSection3 = () => {
    return (
      <section className="bg-orange-50 py-12">
        <div className="container mx-auto px-4 text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Achievement We Have Earned
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              At Freelancer, we believe that talent is borderless and opportunity should be too.
            </p>
          </div>
  
          {/* Achievement Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card Items */}
            {[
              { value: '9,207', label: 'Freelance developers', icon: '👨‍💻' },
              { value: '8,368', label: 'Projects Added', icon: '🖥️' },
              { value: '9,198', label: 'Completed projects', icon: '📋' },
              { value: '998', label: 'Companies Registered', icon: '🏢' },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg border-t-4 border-orange-400 hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center mb-4">
                  <span className="inline-block text-5xl text-orange-400">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.value}</h3>
                <p className="text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection3;
  