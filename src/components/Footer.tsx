import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-red-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-red-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-red-400 transition-colors">Services</Link></li>
              <li><Link href="/impact" className="hover:text-red-400 transition-colors">Our Impact</Link></li>
              <li><Link href="/contact" className="hover:text-red-400 transition-colors">Contact</Link></li>
              <li><Link href="/donate" className="hover:text-red-400 transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Trust Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Trust Details</h3>
            <div className="space-y-2 text-sm">
              <p>Shri Shanthoshi Madha Temple Charitable Trust</p>
              <p>Registration: TN/18-2023</p>
              <p>PAN: ABFTS9687P</p>
              <p>80G Registration: ABFTS9687PPF2031</p>
              <p>12-A Registration: ABFTS9687PE20231</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  4/125/3 Mullai Nagar (near housing board, Stempk),<br />
                  Thoothukudi – 628002
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                <div>
                  <a href="tel:6382312596" className="hover:text-red-400">6382312596</a><br />
                  <a href="tel:7904114732" className="hover:text-red-400">7904114732</a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                <a href="mailto:shrishanthoshi2023@gmail.com" className="hover:text-red-400">
                  shrishanthoshi2023@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-2">Follow us on social media</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-2">Visit our website</p>
                <a 
                  href="http://www.ssmtct.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  www.ssmtct.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-sm">
                © 2024 Shri Shanthoshi Madha Temple Charitable Trust. All rights reserved.
              </span>
            </div>
            <div className="text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white mr-4">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
