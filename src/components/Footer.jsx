import React from 'react'
import { Link } from 'react-router-dom'
import { Brain, ArrowRight, Globe, Users, Target, Zap, Award, Code2, Database, Network } from 'lucide-react'
import { contactInfo } from '../lib/data'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-16 gap-1 h-full">
          {Array.from({ length: 256 }).map((_, i) => (
            <div key={i} className="border border-blue-400/20 rounded-sm"></div>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                PanAfri AI Solutions
              </span>
            </div>
            <p className="text-blue-100 mb-6 max-w-lg text-lg leading-relaxed">
              Empowering African businesses with cutting-edge AI solutions. We deliver expert 
              AI consulting and transformative training to help you thrive in the global AI era.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3 text-blue-100 hover:text-white transition-colors group">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <info.icon className="h-4 w-4" />
                </div>
                <span className="font-medium">{info.description}</span>
              </div>
            ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition-colors flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-blue-100 hover:text-white transition-colors flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-blue-100 hover:text-white transition-colors flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">Team</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-100 hover:text-white transition-colors flex items-center space-x-2 group">
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-blue-100">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Target className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">AI Consultancy</span>
              </li>
              <li className="flex items-center space-x-3 text-blue-100">
                <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Users className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">AI Training</span>
              </li>
              <li className="flex items-center space-x-3 text-blue-100">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Award className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">Executive Training</span>
              </li>
              <li className="flex items-center space-x-3 text-blue-100">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="font-medium">Workforce Training</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20">
          <form name="newsletter" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="newsletter" />
            <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated with AI Insights</h3>
            <p className="text-blue-100">Get the latest AI trends, case studies, and industry insights delivered to your inbox.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
              Subscribe
            </button>
          </div>
          </form>
        </div>
        
        {/* Tech Expertise Showcase */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Our Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
              <Code2 className="h-5 w-5 text-blue-400" />
              <span className="text-blue-100 font-medium">Machine Learning</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
              <Database className="h-5 w-5 text-cyan-400" />
              <span className="text-blue-100 font-medium">Data Analytics</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
              <Network className="h-5 w-5 text-indigo-400" />
              <span className="text-blue-100 font-medium">Neural Networks</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
              <Brain className="h-5 w-5 text-purple-400" />
              <span className="text-blue-100 font-medium">Deep Learning</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-4 py-2 border border-white/20">
              <Globe className="h-5 w-5 text-green-400" />
              <span className="text-blue-100 font-medium">AI Strategy</span>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-blue-200 font-medium">
                © 2025 PanAfri AI Solutions. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-blue-200 hover:text-white transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-blue-200 hover:text-white transition-colors font-medium">
                Terms of Service
              </Link>
              <div className="flex items-center space-x-2 text-blue-200">
                <Globe className="h-4 w-4" />
                <span className="font-medium">Serving Africa & Beyond</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your AI Transformation?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join hundreds of African businesses that have already transformed their operations with our AI solutions.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
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