import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Users, TrendingUp, Globe, Lightbulb, BookOpen, ArrowRight } from 'lucide-react'

const Services = () => {
  const consultancyFeatures = [
    {
      icon: Target,
      title: 'Tailored AI Solutions',
      description: 'Custom AI solutions designed for operational efficiency and innovation specific to your business needs.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Insights',
      description: 'Leverage data analytics to address unique African market challenges and opportunities.'
    },
    {
      icon: Globe,
      title: 'Strategic Guidance',
      description: 'Expert guidance to ensure global competitiveness in the AI-driven economy.'
    }
  ]

  const trainingPrograms = [
    {
      icon: Users,
      title: 'Executive Training',
      description: 'Equip leaders with cutting-edge AI knowledge to make informed investment decisions, drive digital transformation, and stay competitive in the global market.'
    },
    {
      icon: BookOpen,
      title: 'Workforce Training',
      description: 'Upskill your team with practical AI tools and techniques to enhance productivity and innovation.'
    }
  ]

  return (
    <div className="min-h-screen py-20 section-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions designed specifically for African businesses, 
            combining global best practices with local market understanding.
          </p>
        </div>

        {/* AI Consultancy Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Consultancy
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our expert team partners with you to integrate AI into your business strategy. 
                We provide comprehensive solutions tailored to your unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {consultancyFeatures.map((feature, index) => (
                <Card key={index} className="bg-white hover:shadow-lg card-hover">
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI Training Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                AI Training
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Equip your organization with the skills to excel in AI adoption. 
                Our training programs are designed for African businesses, combining global best practices with local context.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className="bg-white hover:shadow-lg card-hover">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <program.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-xl font-semibold">{program.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {program.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Training Highlights
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Designed specifically for African businesses and market contexts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Combines global best practices with local market understanding</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Practical, hands-on approach to AI implementation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Maximum impact through tailored training programs</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white" asChild>
                <Link to="/contact">
                  Explore Training Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gray-900 rounded-2xl p-8 md:p-12 text-white section-spacing">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you need strategic AI consulting or comprehensive training programs, 
            we're here to help you succeed in the AI-driven economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services