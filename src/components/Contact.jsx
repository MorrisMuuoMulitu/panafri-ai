import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Mail, MapPin, Phone, Send, MessageSquare, Users, Target } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add actual form submission logic here
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      description: 'Kenya, East Africa',
      details: 'Serving the pan-African market'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'hello@panafriai.com',
      details: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Available upon request',
      details: 'Schedule a consultation call'
    }
  ]

  const services = [
    { value: 'ai-consultancy', label: 'AI Consultancy' },
    { value: 'ai-training', label: 'AI Training' },
    { value: 'executive-training', label: 'Executive Training' },
    { value: 'workforce-training', label: 'Workforce Training' },
    { value: 'general-inquiry', label: 'General Inquiry' }
  ]

  return (
    <div className="min-h-screen py-20 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-light)] mb-6">
            Get Started Today
          </h1>
          <p className="text-xl text-[var(--color-text-dark)] max-w-3xl mx-auto">
            Partner with us to navigate the AI landscape and position your organization for success. 
            Contact us to explore how AI can transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="bg-[var(--color-secondary)] border border-[var(--color-border)]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center text-[var(--color-text-light)]">
                  <MessageSquare className="mr-3 h-6 w-6 text-[var(--color-accent-1)]" />
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-[var(--color-text-dark)]">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-[var(--color-text-light)]">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="mt-1 bg-[var(--color-primary)] border-[var(--color-border)] text-[var(--color-text-light)] placeholder-[var(--color-text-dark)] focus:ring-[var(--color-accent-1)] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-[var(--color-text-light)]">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        className="mt-1 bg-[var(--color-primary)] border-[var(--color-border)] text-[var(--color-text-light)] placeholder-[var(--color-text-dark)] focus:ring-[var(--color-accent-1)] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-[var(--color-text-light)]">Company/Organization</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                      className="mt-1 bg-[var(--color-primary)] border-[var(--color-border)] text-[var(--color-text-light)] placeholder-[var(--color-text-dark)] focus:ring-[var(--color-accent-1)] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-[var(--color-text-light)]">Service of Interest</Label>
                    <Select onValueChange={handleSelectChange}>
                      <SelectTrigger className="mt-1 bg-[var(--color-primary)] border-[var(--color-border)] text-[var(--color-text-light)] placeholder-[var(--color-text-dark)] focus:ring-[var(--color-accent-1)] focus:border-transparent">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[var(--color-secondary)] border-[var(--color-border)] text-[var(--color-text-light)]">
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value} className="hover:bg-[var(--color-primary)] focus:bg-[var(--color-primary)]">
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[var(--color-text-light)]">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, or questions..."
                      rows={5}
                      className="mt-1 bg-[var(--color-primary)] border-[var(--color-border)] text-[var(--color-text-light)] placeholder-[var(--color-text-dark)] focus:ring-[var(--color-accent-1)] focus:border-transparent"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)]/80 text-[var(--color-primary)] font-bold shadow-lg shadow-[var(--color-accent-1)]/20 transition-all duration-300 transform hover:scale-105 border-2 border-[var(--color-accent-1)] hover:border-[var(--color-accent-1)]/80">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--color-text-light)] mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-[var(--color-secondary)] border border-[var(--color-border)] hover:border-[var(--color-accent-1)] transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[var(--color-primary)] rounded-lg flex items-center justify-center flex-shrink-0 border border-[var(--color-accent-1)]/50">
                          <info.icon className="h-6 w-6 text-[var(--color-accent-1)]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[var(--color-text-light)] mb-1">{info.title}</h3>
                          <p className="text-[var(--color-text-dark)] font-medium">{info.description}</p>
                          <p className="text-[var(--color-text-dark)] text-sm">{info.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Why Partner with Us */}
            <Card className="bg-[var(--color-secondary)] border border-[var(--color-border)]">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[var(--color-text-light)]">Why Partner with Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-[var(--color-accent-1)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-light)]">African Market Expertise</h4>
                    <p className="text-[var(--color-text-dark)] text-sm">Deep understanding of local challenges and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-[var(--color-accent-1)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-light)]">Proven Track Record</h4>
                    <p className="text-[var(--color-text-dark)] text-sm">Successful AI implementations across various industries</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 text-[var(--color-accent-1)] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[var(--color-text-light)]">Personalized Approach</h4>
                    <p className="text-[var(--color-text-dark)] text-sm">Tailored solutions that fit your specific business needs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Response Promise */}
            <Card className="bg-[var(--color-secondary)] border border-[var(--color-border)]">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 border border-[var(--color-accent-1)]/50">
                  <Mail className="h-6 w-6 text-[var(--color-accent-1)]" />
                </div>
                <h3 className="font-semibold text-[var(--color-text-light)] mb-2">Quick Response Guarantee</h3>
                <p className="text-[var(--color-text-dark)] text-sm">
                  We respond to all inquiries within 24 hours. For urgent matters, 
                  we'll get back to you even sooner.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

