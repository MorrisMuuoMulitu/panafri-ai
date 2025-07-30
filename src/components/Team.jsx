import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Mail, ArrowRight, MapPin, GraduationCap } from 'lucide-react'

const Team = () => {
  const teamMembers = [
    {
      name: 'Joshua Musau',
      role: 'Data Scientist and Engineer',
      image: '/joshua-profile.jpg',
      education: 'MSc in Engineering Artificial Intelligence, Carnegie Mellon University',
      experience: 'Over five years of expertise in data analytics and machine learning',
      currentProject: 'FICAP AI and Citizen Science for Climate Resilience project in Nakuru, Kenya',
      description: 'Joshua Musau is a dedicated Data Scientist and Engineer with over five years of expertise in data analytics and machine learning. He is currently working on the FICAP AI and Citizen Science for Climate Resilience project, utilizing data science and citizen-driven insights to enhance climate resilience in Nakuru, Kenya. He recently graduated with an MSc in Engineering Artificial Intelligence from Carnegie Mellon University, focusing on data-centric AI solutions tailored to African contexts. Joshua has a proven ability to lead projects, foster collaboration, and leverage data-driven insights to inform impactful decision-making and drive innovation.',
      expertise: [
        'Data Analytics',
        'AI and Machine Learning',
        'Climate Resilience',
        'Environmental Data Analysis',
        'Data Visualization',
        'Stakeholder Engagement',
        'Project Leadership'
      ]
    },
    {
      name: 'Nirel Kadzo',
      role: 'AI Consultant and Educator',
      image: '/nirel-profile.jpg',
      education: 'Master\'s degree from Carnegie Mellon University',
      experience: 'Worked across the US, East Africa, and Europe',
      specialization: 'Making artificial intelligence accessible and practical for organizations of all sizes',
      description: 'Nirel Kadzo is an AI consultant and Educator who specializes in making artificial intelligence accessible and practical for organizations of all sizes. With a background in Engineering AI solutions and a master\'s degree from Carnegie Mellon University, Nirel helps businesses unlock the value of AI without the technical jargon. She has worked across the US, East Africa, and Europe, guiding teams to seamlessly integrate AI into daily operations—streamlining workflows, improving decision-making, and boosting productivity. Nirel is passionate about empowering executives and employees alike, offering tailored training that demystifies AI and equips people at every level to use these tools confidently for business growth.',
      expertise: [
        'Art and Culture',
        'VC',
        'Entrepreneurship',
        'Marketing',
        'AI Education',
        'Business Strategy',
        'Workflow Optimization'
      ]
    }
  ]

  const companyExpertise = [
    'AI strategy and implementation tailored to African industries',
    'Extensive experience training workforces for AI adoption',
    'A pan-African vision to drive innovation and growth across the continent'
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Lost in the buzz of AI? We've got you covered. PanAfri AI Solutions is a team of AI experts 
            passionate about transforming the African market.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            With deep expertise in artificial intelligence and a commitment to knowledge transfer, 
            we help businesses across Africa tap into emerging technologies. Our mission is to empower you 
            with AI-driven strategies, positioning your organization to compete on a global stage.
          </p>
        </div>

        {/* Team Members */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-32 h-32 bg-gray-200 rounded-full mb-6 overflow-hidden">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Users className="h-16 w-16 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{member.name}</CardTitle>
                  <CardDescription className="text-lg text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Education */}
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Education</h4>
                      <p className="text-gray-600">{member.education}</p>
                    </div>
                  </div>

                  {/* Experience/Specialization */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {member.experience ? 'Experience' : 'Specialization'}
                      </h4>
                      <p className="text-gray-600">
                        {member.experience || member.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Current Project or Work */}
                  {member.currentProject && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Current Project</h4>
                      <p className="text-gray-600">{member.currentProject}</p>
                    </div>
                  )}

                  {/* Description */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Expertise */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Combining global AI knowledge with deep understanding of African markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companyExpertise.map((expertise, index) => (
                <Card key={index} className="bg-white text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                    <p className="text-gray-700 font-medium">{expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="text-center bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Are you an expert interested in joining our team? We're always looking for passionate 
            AI professionals who share our vision of transforming the African market.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Reach Out to Us
            </Link>
          </Button>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your business with AI solutions 
            tailored for the African market.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}

export default Team

