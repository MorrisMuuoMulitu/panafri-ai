import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, Mail, MapPin, Phone, ArrowRight, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-gray-900" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">PanAfri AI Solutions</div>
                <div className="text-emerald-400 text-sm font-medium">Accelerating Africa's AI Frontier</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering African businesses with cutting-edge AI solutions. 
              With a pan-African reach, we deliver expert AI consulting and 
              transformative training to help you thrive in the global AI era.
            </p>

            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-400/20 border border-emerald-400/30 mb-6">
              <Award className="w-4 h-4 mr-2 text-emerald-400" />
              <span className="text-sm font-medium text-white">Kenyan-led | Pan-African Impact | Future-Ready</span>
            </div>

            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4 text-emerald-400" />
              <span>Kenya, East Africa</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/team" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Team
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center group"
                >
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <span className="text-gray-300">AI Consultancy</span>
              </li>
              <li>
                <span className="text-gray-300">AI Training</span>
              </li>
              <li>
                <span className="text-gray-300">Executive Training</span>
              </li>
              <li>
                <span className="text-gray-300">Workforce Training</span>
              </li>
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h4 className="text-sm font-semibold mb-3 text-white">Stay Updated</h4>
              <div className="flex flex-col space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-emerald-400 transition-colors duration-300"
                />
                <Button 
                  size="sm" 
                  className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 hover:from-emerald-500 hover:to-cyan-500 font-semibold"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 PanAfri AI Solutions. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-emerald-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-emerald-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-emerald-400 transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer