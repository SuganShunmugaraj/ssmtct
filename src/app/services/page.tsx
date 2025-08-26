import Link from 'next/link';
import { 
  Home, 
  BookOpen, 
  Stethoscope, 
  Activity, 
  Users, 
  Heart,
  Shield,
  Target,
  Award,
  Star
} from 'lucide-react';

export default function Services() {
  const basicServices = [
    {
      icon: Home,
      title: "Food & Shelter",
      description: "Providing nutritious meals every day and clean, secure housing where individuals are looked after with attention and respect.",
      features: [
        "Daily nutritious meals",
        "Clean and secure housing",
        "24/7 care and attention",
        "Safe and comfortable environment"
      ]
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Customized learning opportunities that suit the capabilities and learning styles of each person, from basic literacy to skill-based learning.",
      features: [
        "Customized learning programs",
        "Basic literacy support",
        "Skill development training",
        "Inclusive and interactive environment"
      ]
    }
  ];

  const healthcareServices = [
    {
      icon: Stethoscope,
      title: "Multispeciality Hospital",
      description: "A dedicated hospital facility catering to physical and mental health needs with specialized treatments and therapies.",
      features: [
        "Regular health check-ups",
        "Specialized treatments",
        "Therapies and counseling",
        "Mental health care support"
      ]
    },
    {
      icon: Heart,
      title: "Mental Health Care",
      description: "Trained psychologists and counselors offering therapy and emotional support, recognizing the mental and emotional toll of disabilities.",
      features: [
        "Professional counseling",
        "Emotional support",
        "Family therapy sessions",
        "Crisis intervention"
      ]
    }
  ];

  const empowermentServices = [
    {
      icon: Activity,
      title: "Financial Support & Business Guidance",
      description: "Helping individuals start their own businesses with seed capital and guidance through the setup process.",
      features: [
        "Business startup support",
        "Seed capital assistance",
        "Vocational skill training",
        "Ongoing business guidance"
      ]
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Training in various vocational skills including tailoring, small retail, agriculture, and other income-generating activities.",
      features: [
        "Tailoring and crafts",
        "Small retail training",
        "Agricultural skills",
        "Technology training"
      ]
    }
  ];

  const familySupport = [
    {
      icon: Users,
      title: "Family Counseling",
      description: "Emotional and practical support for families of differently-abled individuals, including them in decision-making.",
      features: [
        "Family counseling sessions",
        "Emotional support groups",
        "Decision-making inclusion",
        "Access to all facilities"
      ]
    },
    {
      icon: Shield,
      title: "Comprehensive Family Care",
      description: "Creating a network of support around every individual by strengthening the family unit.",
      features: [
        "Holistic family support",
        "Financial assistance",
        "Educational support",
        "Healthcare access"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive support for the differently-abled community - completely free of charge
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Care, Completely Free
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At the core of our work lies the commitment to provide the basic necessities of life. 
              We offer essential services to those who need them most, ensuring no one is left behind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <Home className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Basic Needs</h3>
              <p className="text-gray-600">Food, shelter, and daily care</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
              <p className="text-gray-600">Learning and skill development</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Stethoscope className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600">Medical and mental health support</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Activity className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Empowerment</h3>
              <p className="text-gray-600">Financial independence and growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Needs Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Basic Needs Support
            </h2>
            <p className="text-lg text-gray-600">
              Providing the fundamental necessities for a dignified life
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {basicServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 text-red-600 mr-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive medical and mental health support
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {healthcareServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-100 text-green-600 mr-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Empowerment & Financial Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Empowerment & Financial Support
            </h2>
            <p className="text-lg text-gray-600">
              Building independence and self-worth through sustainable support
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {empowermentServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-100 text-purple-600 mr-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family Support */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Family Support
            </h2>
            <p className="text-lg text-gray-600">
              Strengthening families to create a network of support around every individual
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {familySupport.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mr-4">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Star className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Every Service is Free
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We believe that financial constraints should never be a barrier to receiving care and support. 
            All our services are provided completely free of charge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Support Our Mission
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Get Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
