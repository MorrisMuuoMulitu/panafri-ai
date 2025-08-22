import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Brain, Target, Users, TrendingUp, Globe, Lightbulb, CheckCircle, Star, Zap, Award, Code2, Database } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Target,
      title: 'Strategic AI Implementation',
      description: 'Tailored AI solutions designed for African market challenges and opportunities.'
    },
    {
      icon: Users,
      title: 'Expert Training Programs',
      description: 'Comprehensive training for executives and workforce to maximize AI adoption.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of successful AI implementations across various industries.'
    }
  ]

  const stats = [
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Businesses Transformed' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' }
  ]

  const services = [
    {
      title: 'AI Consultancy',
      description: 'Strategic guidance for AI integration and digital transformation',
      features: ['Custom AI Strategy', 'Market Analysis', 'Implementation Roadmap', 'ROI Assessment'],
      price: 'From $5,000',
      icon: Brain,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Training',
      description: 'Comprehensive training programs for teams and executives',
      features: ['Executive Workshops', 'Team Training', 'Hands-on Practice', 'Certification'],
      price: 'From $2,500',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Original Design Restored */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-32 overflow-hidden">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 gap-1 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-cyan-400/20 rounded-sm"></div>
            ))}
          </div>
        </div>
        
        {/* Floating Code Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-cyan-400/30 font-mono text-sm animate-float">
            {'<AI />'}
          </div>
          <div className="absolute top-40 right-20 text-blue-400/30 font-mono text-sm animate-float-delayed">
            {'function transform() {}'}
          </div>
          <div className="absolute bottom-40 left-20 text-purple-400/30 font-mono text-sm animate-float">
            {'const innovation = true;'}
          </div>
          <div className="absolute bottom-20 right-10 text-green-400/30 font-mono text-sm animate-float-delayed">
            {'// Future is now'}
          </div>
        </div>
        
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            {/* Tech Icons Header */}
            <div className="flex justify-center space-x-8 mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center animate-float shadow-2xl">
                <Code2 className="h-10 w-10 text-white" />
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center animate-float-delayed shadow-2xl">
                <Cpu className="h-10 w-10 text-white" />
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center animate-float shadow-2xl">
                <Database className="h-10 w-10 text-white" />
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center animate-float-delayed shadow-2xl">
                <Brain className="h-10 w-10 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-8 animate-gradient">
              Empowering African Businesses with{' '}
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">AI Solutions</span>
            </h1>
            <p className="text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI consultancy and training. 
              We help African companies navigate the AI landscape and achieve global competitiveness.
            </p>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-12 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300" asChild>
                <Link to="/contact">
                  <Zap className="mr-3 h-6 w-6" />
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" className="bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 px-12 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300" asChild>
                <Link to="/services">
                  <Brain className="mr-3 h-6 w-6" />
                  Explore AI Solutions
                </Link>
              </Button>
            </div>
            
            {/* Tech Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                <div className="text-blue-200 font-medium">AI Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-blue-200 font-medium">Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                <div className="text-blue-200 font-medium">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-orange-400 mb-2">5+</div>
                <div className="text-blue-200 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose PanAfri AI Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine global AI expertise with deep understanding of African markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI solutions tailored for African businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                    <Button asChild>
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of African businesses that have already transformed their operations with our AI solutions.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Start Your AI Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home