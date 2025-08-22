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
      {/* Hero Section with CSS Particles */}
      <section className="relative bg-gray-900 text-white py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-900"></div>
          
          {/* CSS-only floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Generate floating dots with CSS */}
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${15 + Math.random() * 10}s`,
                }}
              />
            ))}
            
            {/* Larger floating elements */}
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={`large-${i}`}
                className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 animate-fade-in-up">
              Pioneering Africa's AI{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Renaissance
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Harnessing intelligent technology to unlock continental potential. 
              We build bespoke AI solutions that drive growth, innovation, and a connected future for Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400 hover:border-cyan-600" asChild>
                <Link to="/contact">
                  Start Your AI Journey
                  <Zap className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-bold transition-all duration-300 transform hover:scale-105 border-2 hover:border-cyan-400" asChild>
                <Link to="/services">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Add custom CSS animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-20px) translateX(10px); }
            50% { transform: translateY(-10px) translateX(-10px); }
            75% { transform: translateY(-30px) translateX(5px); }
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-float {
            animation: float linear infinite;
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
            opacity: 0;
          }
        `}</style>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-light)] mb-4">
              Why Choose PanAfri AI Solutions?
            </h2>
            <p className="text-xl text-[var(--color-text-dark)] max-w-2xl mx-auto">
              We combine global AI expertise with deep understanding of African markets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center bg-[var(--color-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent-1)] transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mb-4 border border-[var(--color-accent-1)]/50">
                    <feature.icon className="h-8 w-8 text-[var(--color-accent-1)]" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-[var(--color-text-light)]">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[var(--color-text-dark)]">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-accent-1)] mb-2">
                  {stat.number}
                </div>
                <div className="text-[var(--color-text-dark)] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-light)] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-[var(--color-text-dark)] max-w-2xl mx-auto">
              Comprehensive AI solutions tailored for African businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-[var(--color-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent-1)] transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[var(--color-text-light)]">{service.title}</CardTitle>
                  <CardDescription className="text-lg text-[var(--color-text-dark)]">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-[var(--color-accent-1)]" />
                        <span className="text-[var(--color-text-dark)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[var(--color-text-light)]">{service.price}</span>
                    <Button asChild className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400 hover:border-cyan-600">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-bold transition-all duration-300 transform hover:scale-105 border-2 hover:border-cyan-400">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-light)] mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-[var(--color-text-dark)] mb-8 max-w-2xl mx-auto">
            Join hundreds of African businesses that have already transformed their operations with our AI solutions.
          </p>
          <Button size="lg" asChild className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold shadow-lg shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 border-2 border-cyan-400 hover:border-cyan-600">
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