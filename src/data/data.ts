// Profile Info
export const profile = {
  name: 'Gift Mwaiseghe',
  title: 'Software Engineer',
  residence: 'KENYA',
  city: 'Nyeri',
  languages: [
    { name: 'English', level: 90 },
    { name: 'Swahili', level: 80 }
  ],
  skills: [
    { name: 'HTML/CSS/SASS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'C#', level: 75 },
    { name: 'Python', level: 75 },
    { name: 'Angular', level: 80 },
    { name: 'React', level: 70 },
    { name: 'Next.js', level: 65 },
    { name: '.NET Core', level: 70 },
    { name: 'Node.js (Express)', level: 70 },
    { name: 'Django', level: 65 },
    { name: 'Flask', level: 60 },
    { name: 'GraphQL', level: 60 }
  ],
  extraSkills: [
    'Bootstrap, Material UI',
    'Git, Github',
    'API Integration',
    'Figma, Adobe XD',
    'Unit Testing (Jest, Jasmine)',
    'Responsive Design'
  ]
};

// Services
export const services = [
  {
    title: 'Web Development',
    icon: 'pi pi-code',
    color: 'google-blue',
    description: 'Modern, mobile-ready websites to help you reach your audience and grow your business.',
    tags: ['Frontend & Backend']
  },
  {
    title: 'UI/UX Design',
    icon: 'pi pi-pencil',
    color: 'google-red',
    description: 'Intuitive and engaging interfaces for web and mobile applications.',
    tags: ['Wireframes & Prototypes']
  },
  {
    title: 'Sound Design',
    icon: 'pi pi-volume-up',
    color: 'google-yellow',
    description: 'Professional sound design for digital products, games, and media.',
    tags: ['Audio & SFX']
  },
  {
    title: 'Game Design',
    icon: 'pi pi-verified',
    color: 'google-green',
    description: 'Character design, storyboarding, and game mechanics development.',
    tags: ['2D/3D & Prototyping']
  },
  {
    title: 'Photography',
    icon: 'pi pi-camera',
    color: 'google-blue',
    description: 'High-quality photography for business, events, and personal needs.',
    tags: ['Studio & Outdoor']
  },
  {
    title: 'Advertising',
    icon: 'pi pi-megaphone',
    color: 'google-red',
    description: 'Creative advertising solutions to boost your brand awareness.',
    tags: ['Digital & Print']
  }
];

// Price Plans
export const pricePlans = [
  {
    name: 'Silver',
    price: 0,
    features: ['Web Development', 'Advetising', 'Game Design', 'Photography']
  },
  {
    name: 'Gold',
    price: 50,
    features: ['Web Development', 'UI/UX Design', 'Advertising', 'Photography']
  },
  {
    name: 'Diamond',
    price: 80,
    features: ['Web Development', 'UI/UX Design', 'Game Design', 'Advertising']
  }
];

// Portfolio Items
export const portfolio = [
  {
    title: 'Web Design Project',
    image: '/assets/portfolio1.jpg',
    description: 'A modern, responsive web design project showcasing the latest trends in UI/UX.',
    link: 'https://example.com/portfolio1',
    tools: ['HTML', 'CSS', 'JavaScript', 'Figma']
  },
  {
    title: 'E-commerce Website',
    image: '/assets/portfolio2.jpg',
    description: 'An e-commerce platform with a focus on user experience and conversion optimization.',
    link: 'https://example.com/portfolio2',
    tools: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Mobile App Design',
    image: '/assets/portfolio3.jpg',
    description: 'A mobile application design that emphasizes usability and aesthetics.',
    link: 'https://example.com/portfolio3',
    tools: ['Figma', 'Adobe XD', 'React Native']
  },
  {
    title: 'Game Development',
    image: '/assets/portfolio4.jpg',
    description: 'A game development project featuring engaging gameplay and stunning graphics.',
    link: 'https://example.com/portfolio4',
    tools: ['Unity', 'C#', 'Blender']
  }
];

// Recommendations
export const recommendations = [
  {
    name: 'James Osue',
    role: 'Web Designer',
    rating: 5,
    text: 'Great Quality! Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Tina Philips',
    role: 'UI Designer',
    rating: 5,
    text: 'Amazing Work! Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Tara Weinsret',
    role: 'Web Developer',
    rating: 5,
    text: 'Great Quality! Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

// Work History
export const workHistory = [
  {
    date: '2023 - Present',
    title: 'Lead Web Designer',
    type: 'Full-time',
    company: 'Creative Studio',
    description: 'Leading a team to design modern, user-centric web experiences for diverse clients.'
  },
  {
    date: '2022 - 2023',
    title: 'Senior Web Designer',
    type: 'Full-time',
    company: 'Tech Agency',
    description: 'Designed and implemented responsive websites, collaborating with cross-functional teams.'
  },
  {
    date: '2021 - 2022',
    title: 'Junior Web Designer',
    type: 'Internship',
    company: 'Startup Inc.',
    description: 'Assisted in UI/UX design and front-end development for startup projects.'
  }
];

// Education
export const education = [
  {
    date: '2019 - 2021',
    title: 'University Of Toronto',
    role: 'Student',
    certificate: 'Certificate Of Web Training',
    description: 'Focused on modern web technologies, best practices, and hands-on projects.'
  },
  {
    date: '2021 - 2022',
    title: 'Programming Courses',
    role: 'Student',
    certificate: 'Certificate Of Web Training',
    description: 'Completed advanced programming courses in JavaScript, Python, and frameworks.'
  },
  {
    date: '2022 - 2023',
    title: 'Web Developer Courses',
    role: 'Student',
    certificate: 'Certificate Of Web Training',
    description: 'Hands-on experience building responsive and accessible web applications.'
  }
];

export const contactInfo = {
  email: 'giftmwaiseghe@gmail.com',
  phone: '+254712345678',
  social: [
    {
      type: 'email',
      label: 'Email',
      icon: 'pi pi-envelope',
      link: 'mailto:giftmwaiseghe@gmail.com'
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      icon: 'pi pi-whatsapp',
      link: 'https://wa.me/254712345678'
    },
    {
      type: 'skype',
      label: 'Skype',
      icon: 'pi pi-skype',
      link: 'skype:giftmwaiseghe?chat'
    }
  ],
  description: "What’s next? Feel free to reach out if you’re looking for a developer, have a question, or simply want to connect."
};
