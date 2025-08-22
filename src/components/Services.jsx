import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Target, Users, TrendingUp, Globe, Lightbulb, BookOpen, ArrowRight, 
  CheckCircle, Star, Zap, Award, Code2, Database, Brain, Cpu, 
  BarChart3, Shield, Clock, Rocket, MessageSquare, Phone, Mail,
  ChevronRight, Play, Download, ExternalLink
} from 'lucide-react'

const Services = () => {
  const [activeTab, setActiveTab] = useState('consultancy')

  const consultancyFeatures = [
    {
      icon: Target,
      title: 'AI Strategy Development',
      description: 'Comprehensive AI roadmaps tailored to your business objectives and market position.',
      benefits: ['Custom AI Strategy', 'Market Analysis', 'Competitive Assessment', 'ROI Projections']
    },
    {
      icon: TrendingUp,
      title: 'Implementation Planning',
      description: 'Detailed execution plans with timelines, resources, and success metrics.',
      benefits: ['Project Roadmap', 'Resource Planning', 'Risk Assessment', 'Success Metrics']
    },
    {
      icon: Globe,
      title: 'Market Intelligence',
      description: 'Deep insights into African markets and global AI trends for strategic advantage.',
      benefits: ['Market Research', 'Trend Analysis', 'Opportunity Mapping', 'Competitive Intelligence']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for AI implementations.',
      benefits: ['Risk Assessment', 'Compliance Review', 'Security Audit', 'Mitigation Plans']
    }
  ]

  const trainingPrograms = [
    {
      icon: Users,
      title: 'Executive AI Leadership',
      description: 'Strategic AI training for C-suite executives and senior management teams.',
      duration: '2-3 days',
      format: 'In-person/Virtual',
      participants: '5-15 executives',
      outcomes: ['AI Strategy Skills', 'Investment Decisions', 'Change Management', 'Digital Leadership']
    },
    {
      icon: BookOpen,
      title: 'Technical Team Training',
      description: 'Hands-on AI implementation training for technical teams and developers.',
      duration: '1-2 weeks',
      format: 'Hands-on Workshop',
      participants: '10-25 team members',
      outcomes: ['Technical Skills', 'Tool Proficiency', 'Best Practices', 'Project Delivery']
    },
    {
      icon: Rocket,
      title: 'Workforce Transformation',
      description: 'Organization-wide AI literacy and adoption training programs.',
      duration: '3-6 months',
      format: 'Blended Learning',
      participants: '50+ employees',
      outcomes: ['AI Literacy', 'Process Optimization', 'Productivity Gains', 'Cultural Change']
    }
  ]

  const servicePackages = [
    {
      name: 'AI Starter',
      price: '$5,000',
      duration: '4-6 weeks',
      description: 'Perfect for businesses beginning their AI journey',
      features: [
        'AI Readiness Assessment',
        'Strategic Roadmap',
        'Use Case Identification',
        'Executive Workshop',
        'Implementation Plan'
      ],
      popular: false,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AI Accelerator',
      price: '$15,000',
      duration: '8-12 weeks',
      description: 'Comprehensive AI transformation for growing companies',
      features: [
        'Everything in Starter',
        'Pilot Project Implementation',
        'Team Training Program',
        'Performance Monitoring',
        '3-month Support',
        'ROI Analysis'
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'AI Enterprise',
      price: 'Custom',
      duration: '3-6 months',
      description: 'Full-scale AI transformation for large organizations',
      features: [
        'Everything in Accelerator',
        'Multiple Use Cases',
        'Organization-wide Training',
        'Change Management',
        '12-month Support',
        'Dedicated Success Manager'
      ],
      popular: false,
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const industries = [
    { name: 'Financial Services', icon: BarChart3, projects: '25+' },
    { name: 'Healthcare', icon: Shield, projects: '18+' },
    { name: 'Agriculture', icon: Globe, projects: '30+' },
    { name: 'Manufacturing', icon: Cpu, projects: '22+' },
    { name: 'Education', icon: BookOpen, projects: '15+' },
    { name: 'Retail', icon: Target, projects: '20+' }
  ]

  const testimonials = [
    {
      quote: "PanAfri AI Solutions transformed our understanding of AI and helped us implement solutions that increased our efficiency by 40%.",
      author: "Sarah Kimani",
      role: "CEO, TechCorp Kenya",
      rating: 5
    },
    {
      quote: "The training program was exceptional. Our team now confidently uses AI tools in their daily work, boosting productivity significantly.",
      author: "Michael Osei",
      role: "CTO, Ghana FinTech",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-[var(--color-primary)]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--color-accent-1)]/20 to-[var(--color-accent-2)]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[var(--color-accent-1)]/20 to-[var(--color-accent-2)]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-2xl flex items-center justify-center animate-float">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-2)] to-[var(--color-accent-1)] rounded-2xl flex items-center justify-center animate-float-delayed">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-2xl flex items-center justify-center animate-float">
                <Target className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[var(--color-text-light)] via-[var(--color-accent-1)] to-[var(--color-accent-2)] bg-clip-text text-transparent mb-8">
              AI Services That Drive Results
            </h1>
            <p className="text-2xl text-[var(--color-text-dark)] max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your business with our comprehensive AI consulting and training services, 
              designed specifically for the African market.
            </p>
            
            {/* Service Navigation Tabs */}
            <div className="flex justify-center space-x-4 mb-8">
              <Button
                variant={activeTab === 'consultancy' ? 'default' : 'outline'}
                onClick={() => setActiveTab('consultancy')}
                className={`px-8 py-3 text-lg ${
                  activeTab === 'consultancy'
                    ? 'bg-[var(--color-accent-1)] text-[var(--color-primary)] hover:bg-[var(--color-accent-1)]/80'
                    : 'border-[var(--color-accent-1)] text-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)]/20'
                }`}
              >
                AI Consultancy
              </Button>
              <Button
                variant={activeTab === 'training' ? 'default' : 'outline'}
                onClick={() => setActiveTab('training')}
                className={`px-8 py-3 text-lg ${
                  activeTab === 'training'
                    ? 'bg-[var(--color-accent-1)] text-[var(--color-primary)] hover:bg-[var(--color-accent-1)]/80'
                    : 'border-[var(--color-accent-1)] text-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)]/20'
                }`}
              >
                AI Training
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Service Content */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'consultancy' && (
            <div className="space-y-16">
              {/* Consultancy Header */}
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-light)] mb-6">
                  AI Consultancy Services
                </h2>
                <p className="text-xl text-[var(--color-text-dark)] max-w-3xl mx-auto">
                  Strategic guidance to navigate your AI transformation journey with confidence and clarity.
                </p>
              </div>

              {/* Consultancy Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {consultancyFeatures.map((feature, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-[var(--color-secondary)] border border-[var(--color-border)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-1)]/5 to-[var(--color-accent-2)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <CardHeader className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-[var(--color-text-light)] group-hover:text-[var(--color-accent-1)] transition-colors">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-lg text-[var(--color-text-dark)] leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative z-10">
                      <div className="grid grid-cols-2 gap-3">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-[var(--color-accent-1)] flex-shrink-0" />
                            <span className="text-sm text-[var(--color-text-dark)] font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'training' && (
            <div className="space-y-16">
              {/* Training Header */}
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-light)] mb-6">
                  AI Training Programs
                </h2>
                <p className="text-xl text-[var(--color-text-dark)] max-w-3xl mx-auto">
                  Comprehensive training solutions to build AI capabilities across your organization.
                </p>
              </div>

              {/* Training Programs */}
              <div className="space-y-8">
                {trainingPrograms.map((program, index) => (
                  <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-[var(--color-secondary)] border border-[var(--color-border)] overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] p-8 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-text-light)]/10 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                          <div className="w-16 h-16 bg-[var(--color-text-light)]/20 rounded-2xl flex items-center justify-center mb-6">
                            <program.icon className="h-8 w-8 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                          <p className="text-[var(--color-text-light)] mb-6">{program.description}</p>
                          
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <Clock className="h-4 w-4" />
                              <span className="text-sm">{program.duration}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-4 w-4" />
                              <span className="text-sm">{program.participants}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Play className="h-4 w-4" />
                              <span className="text-sm">{program.format}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3 p-8">
                        <h4 className="text-xl font-bold text-[var(--color-text-light)] mb-6">Learning Outcomes</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                          {program.outcomes.map((outcome, outcomeIndex) => (
                            <div key={outcomeIndex} className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-full flex items-center justify-center border border-[var(--color-accent-1)]/50">
                                <CheckCircle className="h-4 w-4 text-[var(--color-accent-1)]" />
                              </div>
                              <span className="text-[var(--color-text-dark)] font-medium">{outcome}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex space-x-4">
                          <Button asChild className="bg-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)]/80 text-[var(--color-primary)] font-bold shadow-lg shadow-[var(--color-accent-1)]/20 transition-all duration-300 transform hover:scale-105 border-2 border-[var(--color-accent-1)] hover:border-[var(--color-accent-1)]/80">
                            <Link to="/contact">
                              Get Details
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="outline" className="border-[var(--color-accent-1)] text-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)]/20 font-bold transition-all duration-300 transform hover:scale-105">
                            <Download className="mr-2 h-4 w-4" />
                            Download Brochure
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-light)] mb-6">
              Choose Your AI Journey
            </h2>
            <p className="text-xl text-[var(--color-text-dark)] max-w-3xl mx-auto">
              Flexible packages designed to meet your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-500 transform hover:-translate-y-4 bg-[var(--color-secondary)] border border-[var(--color-border)] ${pkg.popular ? 'ring-2 ring-[var(--color-accent-1)] shadow-2xl scale-105' : 'hover:shadow-xl'}`}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white text-center py-2 text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                
                <CardHeader className={`${pkg.popular ? 'pt-12' : 'pt-8'} text-center`}>
                  <div className={`w-20 h-20 bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                    <Rocket className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[var(--color-text-light)]">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-[var(--color-text-light)] mb-2">{pkg.price}</div>
                  <div className="text-[var(--color-text-dark)] mb-4">{pkg.duration}</div>
                  <CardDescription className="text-lg text-[var(--color-text-dark)]">{pkg.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-[var(--color-accent-1)] flex-shrink-0" />
                      <span className="text-[var(--color-text-dark)]">{feature}</span>
                    </div>
                  ))}
                  
                  <div className="pt-6">
                    <Button className="w-full bg-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)]/80 text-[var(--color-primary)] font-bold shadow-lg shadow-[var(--color-accent-1)]/20 transition-all duration-300 transform hover:scale-105 border-2 border-[var(--color-accent-1)] hover:border-[var(--color-accent-1)]/80" size="lg" asChild>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-light)] mb-6">
              Industries We Transform
            </h2>
            <p className="text-xl text-[var(--color-text-dark)] max-w-3xl mx-auto">
              Our AI solutions have delivered measurable results across diverse African industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="group text-center bg-[var(--color-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent-1)] transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-text-light)] mb-2">{industry.name}</h3>
                  <Badge variant="secondary" className="bg-[var(--color-primary)] text-[var(--color-accent-1)] border border-[var(--color-accent-1)]/50">
                    {industry.projects} Projects
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[var(--color-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-light)] mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[var(--color-text-dark)]">
              Real results from real businesses across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-[var(--color-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent-1)] transition-shadow">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[var(--color-accent-1)] fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-[var(--color-text-dark)] mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-[var(--color-text-light)]">{testimonial.author}</div>
                    <div className="text-[var(--color-text-dark)]">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-secondary)] text-[var(--color-text-light)] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-text-light)]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-text-light)]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Start Your AI Transformation?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-[var(--color-text-dark)]">
            Join hundreds of African businesses that have already transformed their operations 
            with our AI solutions. Get started with a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)]/80 text-[var(--color-primary)] font-bold shadow-lg shadow-[var(--color-accent-1)]/20 transition-all duration-300 transform hover:scale-105 border-2 border-[var(--color-accent-1)] hover:border-[var(--color-accent-1)]/80" asChild>
              <Link to="/contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                Free Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[var(--color-accent-1)] text-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)]/20 font-bold transition-all duration-300 transform hover:scale-105" asChild>
              <Link to="/team">
                <Users className="mr-2 h-5 w-5" />
                Meet Our Experts
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center space-x-8 text-[var(--color-text-dark)]">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>100% Confidential</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5" />
              <span>Proven Results</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
