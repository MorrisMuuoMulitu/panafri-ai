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
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-1 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div key={i} className="border border-blue-400/20 rounded-sm"></div>
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative z-10">
            {/* Floating Tech Icons */}
            <div className="flex justify-center space-x-8 mb-8 opacity-60">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center animate-float-delayed shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center animate-float shadow-lg">
                <Globe className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8 leading-tight">
              Why Partner with
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                PanAfri AI?
              </span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto mb-6 leading-relaxed">
              We don't just implement AI—we transform your entire business ecosystem with 
              cutting-edge solutions designed for the African market.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join the AI revolution with partners who understand both global innovation and local impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-6 bg-white/80 backdrop-blur-lg border-0 shadow-xl group relative overflow-hidden">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                
                <CardHeader className="relative z-10">
                  <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-2xl relative">
                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 px-8 pb-8">
                  <CardDescription className="text-gray-700 text-xl leading-relaxed font-medium">
                    {feature.description}
                  </CardDescription>
                  
                  {/* Feature Highlights */}
                  <div className="mt-8 space-y-3">
                    {index === 0 && (
                      <>
                        <div className="flex items-center justify-center space-x-2 text-blue-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-semibold">5+ Years Experience</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-blue-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-semibold">Pan-African Focus</span>
                        </div>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <div className="flex items-center justify-center space-x-2 text-blue-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-semibold">Custom AI Solutions</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-blue-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-semibold">Rapid Implementation</span>
                        </div>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <div className="flex items-center justify-center space-x-2 text-blue-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-semibold">Hands-On Training</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-blue-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm font-semibold">Ongoing Support</span>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Stats Section */}
          <div className="mt-24 relative z-10">
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
              {/* Background Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
                <div className="group">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    100+
                  </div>
                  <div className="text-xl text-blue-100 font-semibold">AI Projects Delivered</div>
                </div>
                <div className="group">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <div className="text-xl text-blue-100 font-semibold">Businesses Transformed</div>
                </div>
                <div className="group">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    95%
                  </div>
                  <div className="text-xl text-blue-100 font-semibold">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 relative z-10">
            {/* Service Icons Header */}
            <div className="flex justify-center space-x-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center animate-pulse shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center animate-pulse delay-200 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8 leading-tight">
              AI Solutions That
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                Drive Results
              </span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto mb-6 leading-relaxed">
              From strategic consulting to hands-on training, we deliver AI solutions 
              that transform businesses across Africa.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the service that matches your AI transformation goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-8 bg-white/90 backdrop-blur-lg border-0 shadow-xl group relative overflow-hidden">
                {/* Service Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                
                <CardHeader className="relative z-10 pb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl relative">
                      {/* Icon Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                        {service.title}
                      </CardTitle>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:w-24 transition-all duration-500"></div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10 px-8 pb-8">
                  <CardDescription className="text-gray-700 text-xl leading-relaxed mb-8 font-medium">
                    {service.description}
                  </CardDescription>
                  
                  {/* Service Features */}
                  <div className="space-y-4 mb-8">
                    {index === 0 ? (
                      <>
                        <div className="flex items-center space-x-3 text-gray-700">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="font-semibold">Strategic AI Roadmapping</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="font-semibold">Custom Solution Development</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="font-semibold">Implementation Support</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center space-x-3 text-gray-700">
                          <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="font-semibold">Executive AI Leadership</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700">
                          <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="font-semibold">Workforce Upskilling</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-700">
                          <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="font-semibold">Practical Implementation</span>
                        </div>
                      </>
                    )}
                  </div>
                  
                  {/* Service CTA */}
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300 group-hover:shadow-lg" 
                      asChild
                    >
                      <Link to="/services">
                        Explore {service.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        {index === 0 ? 'From $5K' : 'From $2K'}
                      </div>
                      <div className="text-sm text-gray-500">Starting price</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Service Comparison */}
          <div className="mt-20 relative z-10">
            <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Not Sure Which Service You Need?
                </h3>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Let us help you choose the perfect AI solution for your business goals.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h4 className="text-2xl font-bold text-white mb-4">AI Consultancy</h4>
                  <p className="text-blue-100 mb-6">Perfect for businesses ready to implement AI solutions and need strategic guidance.</p>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Strategic planning & roadmapping</li>
                    <li>• Custom solution development</li>
                    <li>• Implementation support</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <h4 className="text-2xl font-bold text-white mb-4">AI Training</h4>
                  <p className="text-blue-100 mb-6">Ideal for organizations looking to build internal AI capabilities and expertise.</p>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Executive leadership training</li>
                    <li>• Workforce skill development</li>
                    <li>• Hands-on implementation</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 shadow-2xl transform hover:scale-105 transition-all duration-300" asChild>
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-cyan-600/20 to-purple-600/20"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-blue-400/20 font-mono text-lg animate-float">
            AI.transform()
          </div>
          <div className="absolute top-40 right-20 text-cyan-400/20 font-mono text-lg animate-float-delayed">
            {'{ success: true }'}
          </div>
          <div className="absolute bottom-40 left-20 text-indigo-400/20 font-mono text-lg animate-float">
            const future = AI
          </div>
          <div className="absolute bottom-20 right-10 text-blue-400/20 font-mono text-lg animate-float-delayed">
            #TransformWithAI
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Tech Icons */}
          <div className="flex justify-center space-x-8 mb-12 opacity-60">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center animate-pulse shadow-lg">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-2xl flex items-center justify-center animate-pulse delay-200 shadow-lg">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center animate-pulse delay-400 shadow-lg">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to 
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
              Transform Your Business
            </span>
            with AI?
          </h2>
          
          <p className="text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join the AI revolution and unlock unprecedented growth opportunities. 
            Don't let your competitors get ahead—start your AI transformation today.
          </p>
          
          <p className="text-lg text-blue-200 mb-12 max-w-3xl mx-auto">
            Schedule a free consultation and discover how AI can revolutionize your business operations, 
            boost productivity, and drive sustainable growth across Africa.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-2xl transform hover:scale-110 transition-all duration-300 px-8 py-4 text-lg" asChild>
              <Link to="/contact">
                Start Your AI Journey
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm bg-white/10 transform hover:scale-110 transition-all duration-300 px-8 py-4 text-lg" asChild>
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
          
          {/* Urgency Elements */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  🚀 Free Consultation
                </div>
                <div className="text-blue-100">No commitment required</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  ⚡ Quick Implementation
                </div>
                <div className="text-blue-100">Results in 30-90 days</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  💡 Proven ROI
                </div>
                <div className="text-blue-100">Average 300% return</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

