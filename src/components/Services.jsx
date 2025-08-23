import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Target, Users, TrendingUp, Globe, Lightbulb, BookOpen, ArrowRight, Zap, ShieldCheck, BrainCircuit } from 'lucide-react'

const Services = () => {
  const consultancyFeatures = [
    {
      icon: BrainCircuit,
      title: 'Tailored AI Solutions',
      description: 'Custom AI solutions designed for operational efficiency and innovation specific to your business needs.',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Insights',
      description: 'Leverage data analytics to address unique African market challenges and opportunities.',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      icon: ShieldCheck,
      title: 'Strategic Guidance',
      description: 'Expert guidance to ensure global competitiveness in the AI-driven economy.',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
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
    <div className="min-h-screen bg-gray-50 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive AI solutions and training programs tailored for the African market, 
            blending global innovation with deep local insights.
          </p>
        </div>

        {/* AI Consultancy Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Consultancy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Partner with us to integrate cutting-edge AI into your business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultancyFeatures.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl overflow-hidden">
                <CardHeader className="p-6">
                  <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mb-6`}>
                    <feature.icon className={`h-8 w-8 ${feature.textColor}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <CardDescription className="text-gray-700 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link to="/contact">
                Consult Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* AI Training Section */}
        <section className="mb-24">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  AI Training Programs
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Empower your team with the skills to thrive in the AI era. Our programs are designed for maximum impact, from leadership to the frontline.
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <Zap className="h-6 w-6 text-yellow-500" />
                    <span>Hands-on, practical learning experiences</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Globe className="h-6 w-6 text-blue-500" />
                    <span>Curriculum with a focus on African market contexts</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Lightbulb className="h-6 w-6 text-green-500" />
                    <span>Taught by industry experts and leading AI practitioners</span>
                  </li>
                </ul>
                <div className="mt-10">
                   <Button size="lg" variant="outline" className="border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white" asChild>
                    <Link to="/contact">
                      Explore Training
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {trainingPrograms.map((program, index) => (
                  <Card key={index} className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 rounded-xl">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                          <program.icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-900">{program.title}</CardTitle>
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-gray-900 to-black rounded-2xl p-10 md:p-16 text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's collaborate to unlock the power of AI for your business and for Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-200" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
              <Link to="/team">Meet Our Experts</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services