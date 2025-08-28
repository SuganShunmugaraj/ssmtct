'use client';

import Link from 'next/link';
import {
  Users,
  Stethoscope,
  BookOpen,
  Clock,
  Home as HomeIcon,
  GraduationCap,
  Activity,
  ChevronRight,
  X,
  CreditCard,
  Smartphone
} from 'lucide-react';
import SuccessStoriesCarousel from '@/components/SuccessStoriesCarousel';
import { useState } from 'react';

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    amount: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              
                              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Donation Amount (₹) *
                  </label>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                    min="1"
                    step="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter amount in ₹"
                  />
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
            <div className="inline-flex items-center justify-center mb-6">
              <img 
                src="/assets/images/logo.png" 
                alt="Sri Sandhoshi Madha Charitable Trust Logo" 
                className="h-24 w-auto"
              />
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

      {/* Leadership & Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Leadership & Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders and compassionate team members who drive our mission forward
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Leadership Team
              </h3>
              <p className="text-lg text-gray-600">
                Visionary leaders guiding our charitable mission
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="group relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                    <div className="aspect-square">
                      <img
                        src={`/assets/images/leaders/${index}.jpeg`}
                        alt={`Leader ${index}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-lg font-bold mb-1">Trust Leader</h4>
                      <p className="text-sm text-gray-200">Dedicated to Service</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Team Members
              </h3>
              <p className="text-lg text-gray-600">
                Compassionate individuals working together for the community
              </p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((index) => (
                <div key={index} className="group relative">
                  <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="aspect-square">
                      <img
                        src={`/assets/images/members/${index}.jpeg`}
                        alt={`Team Member ${index}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-xs font-semibold">Team Member</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Our Team CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our Mission
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Be part of our dedicated team and help us make a difference in the lives of the differently-abled community.
              </p>
              <Link
                href="/get-involved"
                className="inline-flex items-center bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Involved
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Complete Your Donation</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Bank Payment Details */}
                <div className="space-y-6">
                  <div className="flex items-center mb-4">
                    <CreditCard className="h-8 w-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Bank Transfer Details</h3>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <div>
                      <span className="font-semibold text-gray-700">Account Name:</span>
                      <p className="text-gray-900 mt-1">Shri Shanthoshi Madha Temple Charitable Trust</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Account Number:</span>
                      <p className="text-gray-900 mt-1">41933008379</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Bank:</span>
                      <p className="text-gray-900 mt-1">State Bank of India, Muthu Nagar Branch, Thoothukudi – 628008</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">IFSC Code:</span>
                      <p className="text-gray-900 mt-1">SBIN0001463</p>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      </div>
                      <p className="text-green-800 text-sm ml-3">
                        Your donations are eligible for tax exemption under Section 80G of the Income Tax Act.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - UPI Details */}
                <div className="space-y-6">
                  <div className="flex items-center mb-4">
                    <Smartphone className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">UPI Payment</h3>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 space-y-4">
                    <div>
                      <span className="font-semibold text-gray-700">UPI ID:</span>
                      <p className="text-gray-900 mt-1">shrishanthoshi2023@okicici</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">UPI App:</span>
                      <p className="text-gray-900 mt-1">Any UPI-enabled app (Google Pay, PhonePe, Paytm, etc.)</p>
                    </div>
                  </div>

                  {/* UPI QR Code Placeholder */}
                  <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="text-center">
                        <Smartphone className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 text-sm">UPI QR Code</p>
                        <p className="text-gray-400 text-xs">Image will be added here</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Scan this QR code with any UPI app to make instant payment
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      </div>
                      <p className="text-blue-800 text-sm ml-3">
                        UPI payments are instant and secure. You&apos;ll receive a confirmation immediately.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
                <Link
                  href="/donate"
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors text-center"
                >
                  View More Options
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
