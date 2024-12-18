import Image from 'next/image';

const HeroSection2 = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Popular Categories Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Popular Categories
          </h2>
          <p className="text-gray-500">Get some Inspirations from 1300+ skills</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Category Cards */}
          {[
            { title: 'Development & IT', skills: '958 Skills', icon: '🖥️' },
            { title: 'Design & Creative', skills: '515 Skills', icon: '🎨' },
            { title: 'Digital Marketing', skills: '486 Skills', icon: '📧' },
            { title: 'Writing & Translation', skills: '956 Skills', icon: '✍️' },
            { title: 'Music & Video', skills: '662 Skills', icon: '🎵' },
            { title: 'Video & Animation', skills: '226 Skills', icon: '🎥' },
            { title: 'Engineering & Arch...', skills: '756 Skills', icon: '🛠️' },
            { title: 'Finance & Accounting', skills: '958 Skills', icon: '📊' },
          ].map((category, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-500 rounded-full text-2xl mr-4">
                {category.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{category.title}</h3>
                <p className="text-gray-500 text-sm">{category.skills} →</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left CTA */}
          <div className="flex items-center p-6 bg-orange-50 rounded-lg">
            <div className="w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                I need a Developed Project
              </h3>
              <p className="text-gray-600 mb-6">
                Get the perfect Developed project for your budget from our creative
                community.
              </p>
              <a
                href="/browse-projects"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full"
              >
                Browse
              </a>
            </div>
            <div className="w-1/2">
              <Image
                src="/project-img.png" // Replace with your image path
                alt="Developed Project"
                width={250}
                height={150}
                priority
              />
            </div>
          </div>

          {/* Right CTA */}
          <div className="flex items-center p-6 bg-blue-50 rounded-lg">
            <div className="w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Find Your Next Great Job Opportunity!
              </h3>
              <p className="text-gray-600 mb-6">
                Do you want to earn money, find unlimited clients and build your
                freelance career?
              </p>
              <a
                href="/browse-jobs"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full"
              >
                Browse
              </a>
            </div>
            <div className="w-1/2">
              <Image
                src="/job-img.png" // Replace with your image path
                alt="Job Opportunity"
                width={250}
                height={150}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
