import Link from 'next/link';
import { 
  Heart, 
  Users, 
  Award, 
  Star,
  TrendingUp,
  Camera
} from 'lucide-react';

export default function Impact() {
  const galleryImages = [
    { src: '/assets/images/gallery/1.jpeg', alt: 'Gallery Image 1', title: 'Community Support' },
    { src: '/assets/images/gallery/2.jpeg', alt: 'Gallery Image 2', title: 'Healthcare Services' },
    { src: '/assets/images/gallery/3.jpeg', alt: 'Gallery Image 3', title: 'Education Programs' },
    { src: '/assets/images/gallery/4.jpeg', alt: 'Gallery Image 4', title: 'Family Care' },
    { src: '/assets/images/gallery/5.jpeg', alt: 'Gallery Image 5', title: 'Empowerment Initiatives' },
    { src: '/assets/images/gallery/6.jpeg', alt: 'Gallery Image 6', title: 'Trust Activities' }
  ];

  const impactStats = [
    { icon: Users, number: "100+", label: "Families Supported", color: "text-blue-600" },
    { icon: Heart, number: "500+", label: "Lives Touched", color: "text-red-600" },
    { icon: Award, number: "200+", label: "Children Educated", color: "text-green-600" },
    { icon: TrendingUp, number: "2+", label: "Years of Service", color: "text-purple-600" },
  ];

  const transformationStories = [
    {
      name: "Priya Sharma",
      role: "Mother of a differently-abled child",
      story: "The trust has been a blessing for our family. They provided medical care and education support that we couldn&apos;t afford. My child now receives proper therapy and education.",
      image: "/assets/images/gallery/1.jpeg",
      rating: 5
    },
    {
      name: "Rajesh Kumar",
      role: "Beneficiary",
      story: "Thanks to their skill training program, I was able to start my own small business and support my family. The trust gave me not just skills but confidence.",
      image: "/assets/images/gallery/2.jpeg",
      rating: 5
    },
    {
      name: "Dr. Meera Patel",
      role: "Volunteer Doctor",
      story: "I've been volunteering here for 2 years. The dedication and compassion of the team is truly inspiring. Every day I see lives being transformed.",
      image: "/assets/images/gallery/3.jpeg",
      rating: 5
    }
  ];

  const achievements = [
    {
      year: "2023",
      title: "Trust Registration",
      description: "Successfully registered as a charitable trust with all necessary certifications"
    },
    {
      year: "2023",
      title: "Tax Exemption Status",
      description: "Obtained 80G and 12-A registration for tax exemption benefits"
    },
    {
      year: "2024",
      title: "Community Outreach",
      description: "Expanded services to reach more families in need"
    },
    {
      year: "2024",
      title: "Healthcare Initiative",
      description: "Launched comprehensive healthcare support program"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Impact & Stories
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Real stories of transformation and the positive impact we&apos;ve made in the lives of the differently-abled community.
          </p>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-gray-600">
              The real difference we&apos;ve made in the community
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stories of Transformation
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from our beneficiaries and their families
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {transformationStories.map((story, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">&ldquo;{story.story}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-gray-900">{story.name}</div>
                    <div className="text-gray-600 text-sm">{story.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600">
              Glimpses of our work and the lives we touch
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md">
                <div className="relative h-64">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <Camera className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-semibold">{image.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey & Achievements
            </h2>
            <p className="text-lg text-gray-600">
              Key milestones in our mission to serve the community
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold">
                      {achievement.year}
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in creating more success stories and transforming lives. 
            Your support helps us continue our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Support Our Mission
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
