import Link from 'next/link';
import { 
  Heart, 
  Users, 
  Stethoscope, 
  BookOpen, 
  Clock, 
  Home as HomeIcon, 
  GraduationCap, 
  Activity,
  ChevronRight
} from 'lucide-react';
import SuccessStoriesCarousel from '@/components/SuccessStoriesCarousel';

export default function Home() {
  const impactStats = [
    { icon: Users, number: "100+", label: "Families Supported", color: "text-blue-600" },
    { icon: Stethoscope, number: "500+", label: "Free Medical Care Patients", color: "text-green-600" },
    { icon: BookOpen, number: "200+", label: "Children Educated", color: "text-purple-600" },
    { icon: Clock, number: "2+", label: "Years of Service", color: "text-red-600" },
  ];

  const services = [
    {
      icon: HomeIcon,
      title: "Food & Shelter",
      description: "Providing nutritious meals and secure housing for the differently-abled",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Customized learning opportunities for basic literacy and skill development",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Stethoscope,
      title: "Medical Care",
      description: "Free multispeciality hospital care with mental health support",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Activity,
      title: "Empowerment & Financial Support",
      description: "Helping individuals start businesses and achieve financial independence",
      color: "bg-purple-100 text-purple-600"
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Mother of a differently-abled child",
      content: "The trust has been a blessing for our family. They provided medical care and education support that we couldn&apos;t afford. My daughter now receives proper therapy and has improved significantly.",
      rating: 5,
      image: "/assets/images/gallery/1.jpeg"
    },
    {
      name: "Rajesh Kumar",
      role: "Beneficiary",
      content: "Thanks to their skill training program, I was able to start my own small business and support my family. The financial guidance and support changed my life completely.",
      rating: 5,
      image: "/assets/images/gallery/2.jpeg"
    },
    {
      name: "Dr. Meera Patel",
      role: "Volunteer Doctor",
      content: "I've been volunteering here for 2 years. The dedication and compassion of the team is truly inspiring. Every patient is treated with dignity and care.",
      rating: 5,
      image: "/assets/images/gallery/3.jpeg"
    },
  ];

  const galleryImages = [
    { src: '/assets/images/gallery/1.jpeg', alt: 'Gallery Image 1', title: 'Community Support' },
    { src: '/assets/images/gallery/2.jpeg', alt: 'Gallery Image 2', title: 'Healthcare Services' },
    { src: '/assets/images/gallery/3.jpeg', alt: 'Gallery Image 3', title: 'Education Programs' },
    { src: '/assets/images/gallery/4.jpeg', alt: 'Gallery Image 4', title: 'Family Care' },
    { src: '/assets/images/gallery/5.jpeg', alt: 'Gallery Image 5', title: 'Empowerment Initiatives' },
    { src: '/assets/images/gallery/6.jpeg', alt: 'Gallery Image 6', title: 'Trust Activities' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('/assets/images/banner/1.jpeg')"}}></div>
        <div className="absolute inset-0 bg-black opacity-20"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex justify-end items-center min-h-[80vh]">
            {/* Right Side - Donation Form Overlay */}
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-2xl max-w-md">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">உங்கள் சிறிய உதவி,</h3>
                <p className="text-sm text-gray-600">பலரின் வாழ்க்கையில் பெரிய மாற்றம்</p>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Donation Amount (₹) *
                  </label>
                  <select
                    id="amount"
                    name="amount"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select amount</option>
                    <option value="500">₹500</option>
                    <option value="1000">₹1,000</option>
                    <option value="2500">₹2,500</option>
                    <option value="5000">₹5,000</option>
                    <option value="10000">₹10,000</option>
                    <option value="custom">Custom Amount</option>
                  </select>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Donate Now
                </button>
              </form>
              
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Your donation is eligible for tax exemption under Section 80G
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Impact Combined */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* About Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-6">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Sri Sandhoshi Madha Group of Institutions
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              A heartfelt initiative born from the desire to uplift the lives of the most vulnerable in our society. 
              We focus on supporting physically and mentally challenged individuals, treating them with dignity, care, and love.
            </p>
           
          </div>
 
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 ${
                  stat.color === 'text-blue-600' ? 'bg-blue-100' :
                  stat.color === 'text-green-600' ? 'bg-green-100' :
                  stat.color === 'text-purple-600' ? 'bg-purple-100' :
                  stat.color === 'text-red-600' ? 'bg-red-100' : 'bg-gray-100'
                }`}>
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-3">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive support for the differently-abled community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${service.color} shadow-md`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Services
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Glimpses of Our Work
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              See the real impact we&apos;re making in the community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-gray-200">Click to learn more</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              href="/impact"
              className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View More Photos & Stories
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              SUCCESS STORIES
            </h2>
            <p className="text-lg text-gray-300">
              Real transformations from our beneficiaries
            </p>
          </div>
          
          <div className="relative">
            {/* Carousel Container */}
            <SuccessStoriesCarousel testimonials={testimonials} />
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/impact"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
            >
              View All Success Stories
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-8">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Join Us in Making a Difference
          </h2>
          <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
            Your support helps us provide free services to the differently-abled community. 
            Every donation makes a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/donate"
              className="bg-white text-red-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              Donate Now
            </Link>
            <Link
              href="/get-involved"
              className="border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
