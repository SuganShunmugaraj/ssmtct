'use client';

import Link from 'next/link';
import { 
  Heart, 
  CreditCard, 
  Shield, 
  Users, 
  Target,
  Star,
  CheckCircle,
  Gift
} from 'lucide-react';

export default function Donate() {
  const donationTypes = [
    {
      title: "One-Time Donation",
      description: "Make a single donation to support our immediate needs",
      amount: "₹500 - ₹10,000+",
      icon: Gift
    },
    {
      title: "Monthly Support",
      description: "Become a monthly donor and provide consistent support",
      amount: "₹100 - ₹1,000/month",
      icon: Heart
    },
    {
      title: "Project-Specific",
      description: "Support specific programs like education or healthcare",
      amount: "Any amount",
      icon: Target
    }
  ];

  const impactExamples = [
    {
      amount: "₹500",
      impact: "Provides nutritious meals for a family for one week"
    },
    {
      amount: "₹1,000",
      impact: "Supports a child's education for one month"
    },
    {
      amount: "₹2,500",
      impact: "Provides medical care and therapy for one person"
    },
    {
      amount: "₹5,000",
      impact: "Helps start a small business for financial independence"
    }
  ];

  const paymentMethods = [
    {
      name: "Bank Transfer",
      description: "Direct transfer to our bank account",
      icon: CreditCard
    },
    {
      name: "UPI Payment",
      description: "Quick and secure UPI transfers",
      icon: CreditCard
    },
    {
      name: "Online Banking",
      description: "Net banking from any bank",
      icon: CreditCard
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Support Our Mission
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your donation helps us provide free services to the differently-abled community. 
            Every contribution makes a real difference.
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Your Donation Matters
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Sri Sandhoshi Madha Group of Institutions – A Charitable Trust is committed to providing 
                  <strong> completely free services</strong> to physically and mentally challenged individuals. 
                  We rely on generous donors like you to continue our mission.
                </p>
                <p>
                  Your donation directly supports our core services: food and shelter, education, 
                  medical care, and empowerment programs. We ensure that financial constraints never 
                  become a barrier to receiving care and support.
                </p>
                <p>
                  With your support, we can reach more families, expand our services, and create 
                  lasting positive change in the lives of the differently-abled community.
                </p>
              </div>
            </div>
            <div className="bg-red-50 rounded-lg p-8">
              <div className="text-center">
                <Heart className="h-16 w-16 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Transparent</h3>
                <p className="text-gray-600">
                  Every rupee of your donation goes directly to supporting our beneficiaries. 
                  We maintain complete transparency in our financial operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Donation Type
            </h2>
            <p className="text-lg text-gray-600">
              Select the donation option that works best for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {donationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-6">
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="text-red-600 font-semibold">{type.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Donation's Impact
            </h2>
            <p className="text-lg text-gray-600">
              See how your contribution directly helps our beneficiaries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">{example.amount}</div>
                <p className="text-gray-700">{example.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Account Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bank Account Details
            </h2>
            <p className="text-lg text-gray-600">
              For direct bank transfers and donations
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-md max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <CreditCard className="h-8 w-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Account Information</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <span className="font-semibold">Account Name:</span><br />
                    Shri Shanthoshi Madha Temple Charitable Trust
                  </div>
                  <div>
                    <span className="font-semibold">Account Number:</span><br />
                    41933008379
                  </div>
                  <div>
                    <span className="font-semibold">Bank:</span><br />
                    State Bank of India, Muthu Nagar Branch, Thoothukudi – 628008
                  </div>
                  <div>
                    <span className="font-semibold">IFSC Code:</span><br />
                    SBIN0001463
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Tax Exemption</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div>
                    <span className="font-semibold">PAN Number:</span><br />
                    ABFTS9687P
                  </div>
                  <div>
                    <span className="font-semibold">80G Registration:</span><br />
                    ABFTS9687PPF2031
                  </div>
                  <div>
                    <span className="font-semibold">12-A Registration:</span><br />
                    ABFTS9687PE20231
                  </div>
                  <div>
                    <span className="font-semibold">Trust Registration:</span><br />
                    TN/18-2023
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-1">Tax Exemption Available</h4>
                  <p className="text-green-700 text-sm">
                    Your donations are eligible for tax exemption under Section 80G of the Income Tax Act. 
                    Please keep the transaction details for your tax records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Secure Payment Methods
            </h2>
            <p className="text-lg text-gray-600">
              Choose your preferred payment method
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-600 mb-4">
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.name}</h3>
                <p className="text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Make a Difference Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your donation helps us continue providing free services to the differently-abled community. 
            Every contribution, no matter how small, makes a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us for Donation
            </Link>
            <Link
              href="/get-involved"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Other Ways to Help
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
