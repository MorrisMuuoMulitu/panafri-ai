import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Mail, ArrowRight, MapPin, GraduationCap, Award, Briefcase, Code2, Brain } from 'lucide-react'

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
    <div className="min-h-screen py-24 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          {/* Tech Icons Header */}
          <div className="flex justify-center space-x-6 mb-8 opacity-60">
            <Brain className="h-10 w-10 text-[var(--color-accent-1)] animate-pulse" />
            <Code2 className="h-10 w-10 text-[var(--color-accent-2)] animate-pulse delay-200" />
            <Award className="h-10 w-10 text-[var(--color-accent-1)] animate-pulse delay-400" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[var(--color-text-light)] via-[var(--color-accent-1)] to-[var(--color-accent-2)] bg-clip-text text-transparent mb-8">
            Meet Our Team
          </h1>
          <p className="text-2xl text-[var(--color-text-dark)] max-w-4xl mx-auto mb-8 leading-relaxed">
            Lost in the buzz of AI? We've got you covered. PanAfri AI Solutions is a team of AI experts 
            passionate about transforming the African market.
          </p>
          <p className="text-xl text-[var(--color-text-dark)] max-w-5xl mx-auto leading-relaxed">
            With deep expertise in artificial intelligence and a commitment to knowledge transfer, 
            we help businesses across Africa tap into emerging technologies. Our mission is to empower you 
            with AI-driven strategies, positioning your organization to compete on a global stage.
          </p>
        </div>

        {/* Team Members */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 bg-[var(--color-secondary)] border border-[var(--color-border)] group relative">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent-1)] via-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                
                <CardHeader className="text-center pb-6 relative">
                  {/* Profile Image with Enhanced Styling */}
                  <div className="mx-auto w-40 h-40 bg-[var(--color-primary)] rounded-3xl mb-8 overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500 border-4 border-[var(--color-primary)]">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)]">
                        <Users className="h-20 w-20 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <CardTitle className="text-3xl font-bold text-[var(--color-text-light)] group-hover:text-[var(--color-accent-1)] transition-colors duration-300 mb-2">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="text-xl text-[var(--color-accent-1)] font-semibold bg-[var(--color-primary)] px-4 py-2 rounded-full inline-block border border-[var(--color-accent-1)]/50">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-8 px-8 pb-8">
                  {/* Education */}
                  <div className="flex items-start space-x-4 p-4 bg-[var(--color-primary)] rounded-xl border border-[var(--color-border)]">
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-text-light)] mb-2 text-lg">Education</h4>
                      <p className="text-[var(--color-text-dark)] leading-relaxed">{member.education}</p>
                    </div>
                  </div>

                  {/* Experience/Specialization */}
                  <div className="flex items-start space-x-4 p-4 bg-[var(--color-primary)] rounded-xl border border-[var(--color-border)]">
                    <div className="w-10 h-10 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-text-light)] mb-2 text-lg">
                        {member.experience ? 'Experience' : 'Specialization'}
                      </h4>
                      <p className="text-[var(--color-text-dark)] leading-relaxed">
                        {member.experience || member.specialization}
                      </p>
                    </div>
                  </div>

                  {/* Current Project or Work */}
                  {member.currentProject && (
                    <div className="p-4 bg-[var(--color-primary)] rounded-xl border border-[var(--color-border)]">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-lg flex items-center justify-center">
                          <Code2 className="h-4 w-4 text-white" />
                        </div>
                        <h4 className="font-bold text-[var(--color-text-light)] text-lg">Current Project</h4>
                      </div>
                      <p className="text-[var(--color-text-dark)] leading-relaxed">{member.currentProject}</p>
                    </div>
                  )}

                  {/* Description */}
                  <div className="p-4 bg-[var(--color-primary)] rounded-xl border border-[var(--color-border)]">
                    <h4 className="font-bold text-[var(--color-text-light)] mb-3 text-lg flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-lg flex items-center justify-center mr-2">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      About
                    </h4>
                    <p className="text-[var(--color-text-dark)] leading-relaxed text-base">{member.description}</p>
                  </div>

                  {/* Expertise */}
                  <div className="p-4 bg-[var(--color-primary)] rounded-xl border border-[var(--color-border)]">
                    <h4 className="font-bold text-[var(--color-text-light)] mb-4 text-lg flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-lg flex items-center justify-center mr-2">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      Areas of Expertise
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          className="bg-gradient-to-r from-[var(--color-accent-1)] to-[var(--color-accent-2)] text-white px-4 py-2 text-sm font-medium hover:from-[var(--color-accent-1)]/80 hover:to-[var(--color-accent-2)]/80 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
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
        <section className="mb-24">
          <div className="bg-[var(--color-secondary)] rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl border border-[var(--color-border)]">
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-text-light)]/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--color-text-light)]/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="text-center mb-12 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text-light)] mb-6">
                Our Expertise
              </h2>
              <p className="text-xl text-[var(--color-text-dark)] max-w-3xl mx-auto leading-relaxed">
                Combining global AI knowledge with deep understanding of African markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {companyExpertise.map((expertise, index) => (
                <Card key={index} className="bg-[var(--color-primary)] backdrop-blur-lg border border-[var(--color-border)] text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:bg-[var(--color-secondary)] group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-accent-1)] to-[var(--color-accent-2)] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <p className="text-[var(--color-text-light)] font-semibold text-lg leading-relaxed">{expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Team CTA */}
        <section className="text-center bg-[var(--color-secondary)] rounded-3xl p-12 md:p-16 text-[var(--color-text-light)] relative overflow-hidden shadow-2xl border border-[var(--color-border)]">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--color-text-light)]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--color-text-light)]/10 rounded-full blur-2xl"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">
            Join Our Team
          </h2>
          <p className="text-xl text-[var(--color-text-dark)] mb-12 max-w-3xl mx-auto leading-relaxed relative z-10">
            Are you an expert interested in joining our team? We're always looking for passionate 
            AI professionals who share our vision of transforming the African market.
          </p>
          <Button size="lg" className="bg-[var(--color-accent-1)] text-[var(--color-primary)] hover:bg-[var(--color-accent-1)]/80 shadow-2xl transform hover:scale-105 transition-all duration-300 relative z-10" asChild>
            <Link to="/contact">
              <Mail className="mr-2 h-5 w-5" />
              Reach Out to Us
            </Link>
          </Button>
        </section>

        {/* CTA Section */}
        <section className="text-center mt-24">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-text-light)] to-[var(--color-accent-1)] bg-clip-text text-transparent mb-8">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-[var(--color-text-dark)] mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our expertise can help transform your business with AI solutions 
            tailored for the African market.
          </p>
          <Button size="lg" className="bg-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)]/80 text-[var(--color-primary)] shadow-2xl transform hover:scale-105 transition-all duration-300" asChild>
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

