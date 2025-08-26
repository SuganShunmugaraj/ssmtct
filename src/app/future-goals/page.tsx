import { Target, Building, Smartphone, Users, Heart, ArrowRight } from 'lucide-react';

export default function FutureGoalsPage() {
  const plannedExpansions = [
    {
      icon: Building,
      title: "New Rehabilitation Centers",
      description: "Establishing state-of-the-art rehabilitation centers across multiple districts",
      timeline: "2024-2026"
    },
    {
      icon: Target,
      title: "Skill Development Campuses",
      description: "Creating dedicated campuses for vocational training and skill development",
      timeline: "2025-2027"
    },
    {
      icon: Smartphone,
      title: "Technology-Driven Help",
      description: "Developing mobile apps and helplines for better accessibility",
      timeline: "2024-2025"
    }
  ];

  const collaborations = [
    {
      title: "Government Partnerships",
      description: "Working with state and central government agencies for policy advocacy and program implementation"
    },
    {
      title: "Corporate Collaborations",
      description: "Partnering with corporate organizations for CSR initiatives and funding support"
    },
    {
      title: "NGO Networks",
      description: "Building strong networks with other NGOs for knowledge sharing and resource optimization"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Future Goals
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building a sustainable future where every differently-abled individual 
            can live with independence and dignity.
          </p>
        </div>
      </section>

      {/* Dream Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-lg shadow-lg max-w-4xl mx-auto">
            <Heart className="h-16 w-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Dream
            </h2>
            <p className="text-xl text-gray-700 italic leading-relaxed">
              "Our dream is to see every differently-abled person live with independence and dignity. 
              We envision a world where barriers are broken, opportunities are equal, and every 
              individual has the chance to reach their full potential."
            </p>
          </div>
        </div>
      </section>

      {/* Planned Expansions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Planned Expansions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our roadmap for growth and impact expansion over the next few years.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plannedExpansions.map((expansion, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <expansion.icon className="h-8 w-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {expansion.title}
                    </h3>
                    <p className="text-sm text-red-600 font-medium">
                      {expansion.timeline}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  {expansion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations & Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Collaborations & Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Building strong partnerships to amplify our impact and reach more communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborations.map((collaboration, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {collaboration.title}
                </h3>
                <p className="text-gray-600">
                  {collaboration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sustainability Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ensuring our programs continue to serve communities for generations to come.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Financial Sustainability
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Diversified funding sources and donor base</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Income-generating programs and social enterprises</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Long-term partnerships with corporate and government entities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Program Sustainability
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Community ownership and participation</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Capacity building and local leadership development</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Evidence-based program design and continuous improvement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Support Our Vision
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us achieve our future goals and create lasting impact in the lives 
            of differently-abled individuals and their families.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </a>
            <a
              href="/get-involved"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
