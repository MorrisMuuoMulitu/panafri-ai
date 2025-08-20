import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Brain, Target, Users, Zap, Globe, TrendingUp, Star, ChevronRight, Play, Award, Lightbulb } from 'lucide-react'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: 'AI Consultancy',
      description: 'Strategic integration for operational excellence',
      icon: Target,
      features: ['Custom AI Solutions', 'Data Strategy', 'Process Optimization', 'ROI Analysis'],
      color: 'from-emerald-400 to-cyan-400'
    },
    {
      title: 'AI Training',
      description: 'Upskilling teams with global best practices, tailored for Africa',
      icon: Users,
      features: ['Executive Workshops', 'Technical Training', 'Change Management', 'Certification Programs'],
      color: 'from-blue-400 to-purple-400'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Kimani',
      role: 'CEO, TechHub Nairobi',
      content: 'PanAfri AI transformed our operations with AI solutions that actually work in our context. Their understanding of African markets is unmatched.',
      rating: 5
    },
    {
      name: 'Michael Ochieng',
      role: 'CTO, FinanceFlow Kenya',
      content: 'The training program equipped our entire team with practical AI skills. We saw immediate improvements in productivity and decision-making.',
      rating: 5
    },
    {
      name: 'Amina Hassan',
      role: 'Operations Director, AgriTech Solutions',
      content: 'Their consultancy helped us implement AI-driven crop monitoring that increased our efficiency by 40%. Truly game-changing.',
      rating: 5
    }
  ]

  const clientLogos = [
    { name: 'TechHub Nairobi', logo: '/api/placeholder/120/60' },
    { name: 'FinanceFlow Kenya', logo: '/api/placeholder/120/60' },
    { name: 'AgriTech Solutions', logo: '/api/placeholder/120/60' },
    { name: 'EduTech Africa', logo: '/api/placeholder/120/60' },
    { name: 'HealthTech Kenya', logo: '/api/placeholder/120/60' },
    { name: 'LogiTech East Africa', logo: '/api/placeholder/120/60' }
  ]

  const caseStudies = [
    {
      title: 'AgriTech Revolution',
      description: 'AI-powered crop monitoring system increasing yields by 40%',
      industry: 'Agriculture',
      impact: '40% yield increase',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'FinTech Innovation',
      description: 'Machine learning fraud detection reducing losses by 60%',
      industry: 'Financial Services',
      impact: '60% fraud reduction',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Healthcare Transformation',
      description: 'AI diagnostic tools improving patient outcomes across rural clinics',
      industry: 'Healthcare',
      impact: '35% faster diagnosis',
      image: '/api/placeholder/400/250'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M0 10h5v-5h5v5h5v5h-5v5h-5v-5H0z" fill="currentColor" opacity="0.1"/>
              <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.2"/>
              <circle cx="15" cy="15" r="1" fill="currentColor" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-400/20 border border-emerald-400/30 mb-8">
              <Award className="w-4 h-4 mr-2 text-emerald-400" />
              <span className="text-sm font-medium">Kenyan-led | Pan-African Impact | Future-Ready</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Accelerating{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Africa's AI frontier
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-300 font-normal">
                where local ingenuity meets global intelligence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Empowering African businesses with cutting-edge AI solutions. We deliver expert consulting 
              and transformative training to help you thrive in the global AI era.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 hover:from-emerald-500 hover:to-cyan-500 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/contact">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/services">
                  <Play className="mr-2 h-5 w-5" />
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-gray-400">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-400">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">1000+</div>
                <div className="text-gray-400">Professionals Trained</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20 border-t border-gray-800 section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg">Trusted by leading African organizations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center p-4 hover:opacity-100 transition-opacity duration-300">
                <div className="w-24 h-12 bg-gray-700 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-400 text-center">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-emerald-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for African businesses
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 hover:border-emerald-400/50 card-hover group backdrop-blur-sm glass-morphism"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-8 w-8 text-gray-900" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-300 text-lg">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-emerald-400/50 text-emerald-400 hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300"
                    asChild
                  >
                    <Link to="/services">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-800/30 section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Success <span className="text-blue-400">Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real impact across African industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 card-hover group backdrop-blur-sm glass-morphism overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {study.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-emerald-400">{study.impact}</div>
                    <Button variant="ghost" size="sm" className="text-blue-400 hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-amber-400">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from leaders who've transformed their businesses with AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-amber-400/50 card-hover backdrop-blur-sm glass-morphism">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-300 text-lg italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-400/10 via-blue-400/10 to-purple-400/10 border-t border-gray-800 section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Ahead of the <span className="text-emerald-400">AI Curve</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get insights, trends, and success stories delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors duration-300"
            />
            <Button className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 hover:from-emerald-500 hover:to-cyan-500 px-6 py-3 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900/20 to-gray-900 section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mb-8">
            <Lightbulb className="w-10 h-10 text-gray-900" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the AI revolution with Africa's leading consultancy. Let's build the future together.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 hover:from-emerald-500 hover:to-cyan-500 btn-hover-scale px-12 py-4 text-xl font-bold"
            asChild
          >
            <Link to="/contact">
              Start Your AI Journey Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home