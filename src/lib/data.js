import { Mail, MapPin, Phone } from 'lucide-react'
import joshuaProfile from '../assets/team-profiles/joshua-profile.jpg?w=200&format=webp'
import nirelProfile from '../assets/team-profiles/nirel-profile.jpg?w=200&format=webp'

export const contactInfo = [
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

export const services = [
  { value: 'ai-consultancy', label: 'AI Consultancy' },
  { value: 'ai-training', label: 'AI Training' },
  { value: 'executive-training', label: 'Executive Training' },
  { value: 'workforce-training', label: 'Workforce Training' },
  { value: 'general-inquiry', label: 'General Inquiry' }
]

export const teamMembers = [
  {
    name: 'Joshua Musau',
    role: 'Data Scientist and Engineer',
    image: joshuaProfile,
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
    image: nirelProfile,
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

export const companyExpertise = [
  'AI strategy and implementation tailored to African industries',
  'Extensive experience training workforces for AI adoption',
  'A pan-African vision to drive innovation and growth across the continent'
]