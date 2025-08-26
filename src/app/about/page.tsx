import Link from 'next/link';
import { Heart, Users, Target, Award, Shield, Star } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every action is rooted in deep sense of humanity and genuine care for others"
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "We see ability where others see disability, creating an inclusive environment"
    },
    {
      icon: Target,
      title: "Empowerment",
      description: "Building independence and self-worth through support and guidance"
    },
    {
      icon: Shield,
      title: "Dignity",
      description: "Treating every individual with respect and ensuring their fundamental rights"
    }
  ];

  const leadership = [
    {
      name: "Trust Board",
      role: "Leadership Team",
      description: "Dedicated trustees committed to serving the differently-abled community with compassion and integrity.",
      image: "/placeholder-avatar.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our Trust
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            A heartfelt initiative born from the desire to uplift the lives of the most vulnerable in our society
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Sri Sandhoshi Madha Group of Institutions – A Charitable Trust is a heartfelt initiative born from the desire to uplift the lives of the most vulnerable in our society. The trust focuses primarily on supporting physically and mentally challenged individuals, the disabled, and the differently-abled.
                </p>
                <p>
                  These individuals often face neglect, isolation, and marginalization, and our organization stands as a symbol of hope and inclusion for them. With compassion as our core value, we aim to give them not just support, but a renewed purpose and a better quality of life.
                </p>
                <p>
                  Everything we offer is completely free, provided without expecting anything in return. Our mission is to ensure that each individual in need is treated with dignity, care, and love, and given access to the fundamental rights they deserve—food, shelter, education, medical support, and the opportunity to live independently.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="text-center">
                <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Promise</h3>
                <p className="text-gray-600">
                  We are more than just an organization—it is a living commitment to the idea that no person should be left behind because of their challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Vision & Mission
            </h2>
            <p className="text-lg text-gray-600">
              Building an inclusive society where everyone has the opportunity to thrive
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg">
                To create an inclusive society where people with disabilities and challenges are empowered to lead independent, fulfilling lives. We believe in equal opportunity for all, and our actions reflect that belief.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg">
                Not just to provide temporary aid, but to build a system of lasting support that allows individuals to thrive in their own way. Through our trust, we are building a community that nurtures people regardless of their limitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes Us Unique
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  What sets the Sri Sandhoshi Madha Group of Institutions apart is our approach: <strong>complete care, completely free</strong>. Every service—be it food, shelter, education, health care, or financial support—is given without charge.
                </p>
                <p>
                  We rely not on profit, but on purpose. Every effort is rooted in a deep sense of humanity, and every initiative is driven by a genuine intention to help. We are not only building a support system—we are building a culture of inclusion and kindness.
                </p>
                <p>
                  Our trust goes beyond charity—it stands for empowerment, sustainability, and transformation. We see ability where others see disability. And we act with love, where others turn away.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Complete Care</h4>
                    <p className="text-gray-600">All services provided free of charge</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Holistic Support</h4>
                    <p className="text-gray-600">From basic needs to financial independence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Family Inclusion</h4>
                    <p className="text-gray-600">Supporting entire families, not just individuals</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sustainable Impact</h4>
                    <p className="text-gray-600">Building lasting change through empowerment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600">
              Dedicated trustees committed to serving the community
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 max-w-2xl mx-auto">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us create a world where everyone, regardless of ability, has the chance to live fully, freely, and with dignity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
