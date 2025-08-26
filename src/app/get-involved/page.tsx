'use client';

import { useState } from 'react';
import { Users, Heart, Target, Mail, Phone, MapPin } from 'lucide-react';

export default function GetInvolvedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    volunteerType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const volunteerOpportunities = [
    {
      title: "Teaching & Education",
      description: "Help with educational programs and skill development",
      icon: Users
    },
    {
      title: "Healthcare Support",
      description: "Assist with medical camps and healthcare programs",
      icon: Heart
    },
    {
      title: "Administrative Support",
      description: "Help with office work and program coordination",
      icon: Target
    }
  ];

  const donationOptions = [
    {
      title: "One-time Donation",
      amount: "₹500 - ₹10,000",
      description: "Make a one-time contribution to support our programs"
    },
    {
      title: "Monthly Donation",
      amount: "₹100 - ₹1,000",
      description: "Become a monthly donor and provide consistent support"
    },
    {
      title: "Yearly Donation",
      amount: "₹1,000 - ₹10,000",
      description: "Make an annual contribution to support our long-term goals"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Involved
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us in making a difference. There are many ways you can support 
            our mission and help differently-abled individuals thrive.
          </p>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Volunteer with Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Share your time, skills, and compassion to help us serve the community better.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Volunteer Opportunities */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Volunteer Opportunities
              </h3>
              <div className="space-y-6">
                {volunteerOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <opportunity.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {opportunity.title}
                      </h4>
                      <p className="text-gray-600">
                        {opportunity.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteer Form */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Apply to Volunteer
              </h3>
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
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="volunteerType" className="block text-sm font-medium text-gray-700 mb-1">
                    Area of Interest
                  </label>
                  <select
                    id="volunteerType"
                    name="volunteerType"
                    value={formData.volunteerType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="">Select an area</option>
                    <option value="teaching">Teaching & Education</option>
                    <option value="healthcare">Healthcare Support</option>
                    <option value="administrative">Administrative Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Tell us about your interests and availability..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Make a Donation
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your donation helps us provide free services to differently-abled individuals and their families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {donationOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-2xl font-bold text-red-600 mb-4">
                  {option.amount}
                </p>
                <p className="text-gray-600 mb-6">
                  {option.description}
                </p>
                <a
                  href="/donate"
                  className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
                >
                  Donate Now
                </a>
              </div>
            ))}
          </div>

          {/* Tax Exemption Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Tax Exemption Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">12A Certificate</h4>
                <p className="text-gray-600">
                  We have 12A registration which exempts us from income tax on our charitable activities.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">80G Certificate</h4>
                <p className="text-gray-600">
                  Donations to our trust are eligible for tax deduction under Section 80G of the Income Tax Act.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraise Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Fundraise for Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Organize events, campaigns, or initiatives to raise funds and awareness for our cause.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How to Fundraise
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Organize community events and awareness programs</li>
                <li>• Start online fundraising campaigns</li>
                <li>• Host charity walks or marathons</li>
                <li>• Arrange corporate donation drives</li>
                <li>• Create birthday or anniversary fundraisers</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Get Started
              </h3>
              <p className="text-gray-600 mb-6">
                Contact us to discuss your fundraising ideas and get support for your initiatives.
              </p>
              <a
                href="/contact"
                className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Have questions about volunteering or getting involved? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Mail className="h-8 w-8 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">info@sandhoshi.org</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+91 XXXXXXXXXX</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">[Your Address]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
