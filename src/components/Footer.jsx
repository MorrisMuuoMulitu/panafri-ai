import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, Mail, MapPin, Phone, ArrowRight, Globe, Users, Target, Zap, Award, Code2, Database, Network } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-text-light)] relative overflow-hidden border-t border-[var(--color-border)]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[var(--color-accent-1)]/10 to-[var(--color-accent-2)]/10"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--color-text-light)]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--color-text-light)]/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-5 hero-grid-pattern"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-text-light)] to-[var(--color-accent-1)] bg-clip-text text-transparent">
                PanAfri AI Solutions
              </span>
            </div>
            <p className="text-[var(--color-text-dark)] mb-6 max-w-lg text-lg leading-relaxed">
              Empowering African businesses with cutting-edge AI solutions. We deliver expert 
              AI consulting and transformative training to help you thrive in the global AI era.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-[var(--color-text-dark)] hover:text-[var(--color-accent-1)] transition-colors group">
                <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center group-hover:bg-[var(--color-accent-1)]/20 transition-colors">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="font-medium">Kenya, East Africa</span>
              </div>
              <div className="flex items-center space-x-3 text-[var(--color-text-dark)] hover:text-[var(--color-accent-1)] transition-colors group">
                <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center group-hover:bg-[var(--color-accent-1)]/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium">hello@panafriai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-[var(--color-text-dark)] hover:text-[var(--color-accent-1)] transition-colors group">
                <div className="w-8 h-8 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center group-hover:bg-[var(--color-accent-1)]/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-medium">Available upon request</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[var(--color-text-light)]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-[var(--color-text-dark)] hover:text-[var(--color-accent-1)] transition-colors flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[var(--color-text-dark)] hover:text-[var(--color-accent-1)] transition-colors flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-[var(--color-text-dark)] hover:text-[var(--color-accent-1)] transition-colors flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">Team</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[var(--color-text-dark)] hover:text-[var(--color-accent-1)] transition-colors flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-[var(--color-text-light)]">Our Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-[var(--color-text-dark)]">
                <div className="w-6 h-6 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-lg flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">AI Consultancy</span>
              </li>
              <li className="flex items-center space-x-3 text-[var(--color-text-dark)]">
                <div className="w-6 h-6 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-lg flex items-center justify-center">
                  <Users className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">AI Training</span>
              </li>
              <li className="flex items-center space-x-3 text-[var(--color-text-dark)]">
                <div className="w-6 h-6 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-lg flex items-center justify-center">
                  <Award className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">Executive Training</span>
              </li>
              <li className="flex items-center space-x-3 text-[var(--color-text-dark)]">
                <div className="w-6 h-6 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-lg flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">Workforce Training</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-[var(--color-secondary)] backdrop-blur-lg rounded-2xl p-8 mb-12 border border-[var(--color-border)]">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-2">Stay Updated with AI Insights</h3>
            <p className="text-[var(--color-text-dark)]">Get the latest AI trends, case studies, and industry insights delivered to your inbox.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-[var(--color-primary)] border border-[var(--color-border)] text-[var(--color-text-light)] placeholder-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-1)] focus:border-transparent backdrop-blur-sm"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] hover:from-[var(--color-accent-1)]/80 hover:to-[var(--color-accent-2)]/80 text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Tech Expertise Showcase */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-[var(--color-text-light)] mb-8">Our Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 bg-[var(--color-secondary)] backdrop-blur-lg rounded-full px-4 py-2 border border-[var(--color-border)]">
              <Code2 className="h-5 w-5 text-[var(--color-accent-1)]" />
              <span className="text-[var(--color-text-dark)] font-medium">Machine Learning</span>
            </div>
            <div className="flex items-center space-x-2 bg-[var(--color-secondary)] backdrop-blur-lg rounded-full px-4 py-2 border border-[var(--color-border)]">
              <Database className="h-5 w-5 text-[var(--color-accent-1)]" />
              <span className="text-[var(--color-text-dark)] font-medium">Data Analytics</span>
            </div>
            <div className="flex items-center space-x-2 bg-[var(--color-secondary)] backdrop-blur-lg rounded-full px-4 py-2 border border-[var(--color-border)]">
              <Network className="h-5 w-5 text-[var(--color-accent-1)]" />
              <span className="text-[var(--color-text-dark)] font-medium">Neural Networks</span>
            </div>
            <div className="flex items-center space-x-2 bg-[var(--color-secondary)] backdrop-blur-lg rounded-full px-4 py-2 border border-[var(--color-border)]">
              <Brain className="h-5 w-5 text-[var(--color-accent-1)]" />
              <span className="text-[var(--color-text-dark)] font-medium">Deep Learning</span>
            </div>
            <div className="flex items-center space-x-2 bg-[var(--color-secondary)] backdrop-blur-lg rounded-full px-4 py-2 border border-[var(--color-border)]">
              <Globe className="h-5 w-5 text-[var(--color-accent-1)]" />
              <span className="text-[var(--color-text-dark)] font-medium">AI Strategy</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-[var(--color-border)] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-[var(--color-text-dark)] font-medium">
                © 2025 PanAfri AI Solutions. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-[var(--color-text-dark)] hover:text-[var(--color-accent-1)] transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[var(--color-text-dark)] hover:text-[var(--color-accent-1)] transition-colors font-medium">
                Terms of Service
              </Link>
              <div className="flex items-center space-x-2 text-[var(--color-text-dark)]">
                <Globe className="h-4 w-4" />
                <span className="font-medium">Serving Africa & Beyond</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-[var(--color-secondary)] rounded-2xl p-8 relative overflow-hidden border border-[var(--color-border)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-1)]/20 to-[var(--color-accent-2)]/20"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-[var(--color-text-light)] mb-4">
                Ready to Start Your AI Transformation?
              </h3>
              <p className="text-[var(--color-text-dark)] mb-6 max-w-2xl mx-auto">
                Join hundreds of African businesses that have already transformed their operations with our AI solutions.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center space-x-2 bg-[var(--color-accent-1)] text-[var(--color-primary)] px-8 py-4 rounded-lg font-bold hover:bg-[var(--color-accent-1)]/80 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span>Get Started Today</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer