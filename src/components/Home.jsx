import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Brain, Target, Users, Zap, Globe, TrendingUp, Code, Cpu, Database, Network } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Expertise',
      description: 'Deep understanding of global emerging technologies and the African markets, led by a Kenyan-based team.'
    },
    {
      icon: Zap,
      title: 'AI Innovation',
      description: 'Customized solutions to harness AI for your business growth.'
    },
    {
      icon: Users,
      title: 'AI Workshops',
      description: 'Comprehensive training to empower your team with AI skills.'
    }
  ]

  const services = [
    {
      title: 'AI Consultancy',
      description: 'Expert guidance to integrate AI into your business strategy with tailored solutions for operational efficiency.',
      icon: Target
    },
    {
      title: 'AI Training',
      description: 'Comprehensive training programs designed for African businesses, combining global best practices with local context.',
      icon: Users
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div key={i} className="border border-blue-400/20 rounded-sm"></div>
            ))}
          </div>
        </div>
        
        {/* Floating Code Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-blue-400/30 font-mono text-sm animate-float">
            {'{ "ai": "solutions" }'}
          </div>
          <div className="absolute top-40 right-20 text-cyan-400/30 font-mono text-sm animate-float-delayed">
            &lt;innovation /&gt;
          </div>
          <div className="absolute bottom-40 left-20 text-indigo-400/30 font-mono text-sm animate-float">
            const future = () =&gt; AI
          </div>
          <div className="absolute bottom-20 right-10 text-blue-400/30 font-mono text-sm animate-float-delayed">
            #PanAfriAI
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            {/* Tech Icons */}
            <div className="flex justify-center space-x-8 mb-8 opacity-60">
              <Code className="h-8 w-8 text-blue-400 animate-pulse" />
              <Cpu className="h-8 w-8 text-cyan-400 animate-pulse delay-200" />
              <Database className="h-8 w-8 text-indigo-400 animate-pulse delay-400" />
              <Network className="h-8 w-8 text-blue-300 animate-pulse delay-600" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
                PanAfri AI Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Empowering African businesses with cutting-edge AI solutions. With a pan-African reach, 
              we deliver expert AI consulting and transformative training to help you thrive in the global AI era.
            </p>
            
            <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
              Unlock innovation, solve complex challenges, and stay ahead with our tailored strategies and AI training.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-300" asChild>
                <Link to="/services">
                  Choose Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to navigate the AI landscape and position your organization for success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg group">
                <CardHeader>
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored for the African market
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg group">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 relative z-10">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
            Contact us to explore how AI can transform your business and position your organization for success in the global market.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-2xl transform hover:scale-105 transition-all duration-300 relative z-10" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default Home

