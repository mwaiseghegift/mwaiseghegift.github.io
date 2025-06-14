// Profile Info
export const profile = {
  name: 'Gift Mwaiseghe',
  title: 'Software Developer',
  residence: 'Kenya',
  city: 'Nyeri',
  languages: [
    { name: 'English', level: 90 },
    { name: 'Swahili', level: 85 }
  ],
  skills: [
    { name: 'C#', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS/SASS/LESS', level: 90 },
    { name: 'Angular', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Next.js', level: 75 },
    { name: '.NET Core', level: 85 },
    { name: 'Node.js (Express)', level: 75 },
    { name: 'Django', level: 70 },
    { name: 'Flask', level: 65 },
    { name: 'GraphQL', level: 70 }
  ],
  extraSkills: [
    'Spectator, Jest, Cypress, vtest, k6, Pytest',
    'Git, Azure DevOps, Docker',
    'Jira/Atlassian Tools, CI/CD',
    'Adobe Photoshop, Adobe Illustrator',
    'API Integration',
    'Responsive Design'
  ],
  summary: `Software Engineer with a strong track record in frontend and backend technologies. Proven expertise in software development, testing, integration, and deployment across diverse projects. Recognized for effectively communicating technical concepts and delivering solutions that enhance efficiency and user experience. Dedicated to developing secure, reliable, and user-friendly applications using modern technologies.`
};



// Services
export const services = [
  {
    title: 'Full-Stack Web Development',
    icon: 'pi pi-code',
    color: 'blue-500',
    description: 'Build modern, scalable web applications using technologies like Angular, React, .NET Core, Django, and Node.js.',
    tags: ['Frontend & Backend', 'API Development', 'Database Integration']
  },
  {
    title: 'Software Quality Assurance',
    icon: 'pi pi-check-circle',
    color: 'green-500',
    description: 'Ensure software quality and reliability through test automation, performance testing, and manual QA practices.',
    tags: ['Jest', 'Cypress', 'vtest', 'k6', 'Pytest']
  },
  {
    title: 'API Integration & Backend Systems',
    icon: 'pi pi-server',
    color: 'indigo-500',
    description: 'Integrate RESTful and GraphQL APIs with robust backend services and cloud functions.',
    tags: ['GraphQL', 'REST', 'Azure Functions', 'Express', 'Django']
  },
  {
    title: 'DevOps & CI/CD Pipelines',
    icon: 'pi pi-cog',
    color: 'gray-700',
    description: 'Automate builds, testing, and deployment using Docker, GitHub Actions, and Azure DevOps.',
    tags: ['Docker', 'Azure DevOps', 'CI/CD', 'Version Control']
  },
  {
    title: 'UI/UX & Responsive Design',
    icon: 'pi pi-palette',
    color: 'pink-500',
    description: 'Design clean, accessible, and mobile-first user interfaces using Figma, TailwindCSS, and modern design tools.',
    tags: ['Responsive Design', 'Figma', 'Photoshop', 'TailwindCSS']
  },
  {
    title: 'Technical Documentation & Support',
    icon: 'pi pi-file',
    color: 'purple-500',
    description: 'Create developer-friendly documentation and offer ongoing maintenance and support for software products.',
    tags: ['Documentation', 'Maintenance', 'Post-Deployment Support']
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

// Portfolio Items
export const portfolio = [
  {
    title: 'VMS System (Veterinary Management System)',
    image: 'https://res.cloudinary.com/ddv1q5oiq/image/upload/v1749917917/others/vns1.png',
    description: `A comprehensive web application for veterinary clinics and agricultural operations. Features real-time dashboards, management modules (veterinary, farmers, cooperatives, clusters, inventory, payments), secure authentication, responsive UI (PrimeNG, Chart.js), and data visualization. Built with Angular (frontend), Node.js/Express.js (backend), MongoDB, and JWT authentication.`,
    link: 'https://cirizdigitaltest.com/',
    tools: ['Angular', 'PrimeNG', 'Chart.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT']
  },
  {
    title: 'Onix Market – E-Commerce Platform',
    image: 'https://res.cloudinary.com/ddv1q5oiq/image/upload/v1749918054/others/onix1.png',
    description: `A full-stack E-commerce platform for businesses to set up online stores. Includes product management, customer tracking, order processing, and payment gateways. Built with Angular (frontend) and Django (backend).`,
    link: 'https://onix-market.com/',
    tools: ['Angular', 'Django']
  },
  {
    title: 'Taimba WhatsApp CRM',
    image: 'https://res.cloudinary.com/ddv1q5oiq/image/upload/v1749925985/others/whatsapp.png',
    description: `Order Management System integrated with WhatsApp/Meta API. Enables real-time customer communication, order tracking, automated notifications, and seamless Meta API integration for businesses.`,
    link: '', // Add live demo link if available
    tools: ['WhatsApp API', 'Node.js', 'Express.js']
  },
  {
    title: 'Fyllup API Documentation',
    image: 'https://res.cloudinary.com/ddv1q5oiq/image/upload/v1749926837/others/fyllup.png',
    description: `API-driven management system documentation for business operations. Covers integration, authentication, and usage of services for customer and internal process management. Built with MDX and Next.js.`,
    link: '', // Add documentation link if available
    tools: ['MDX', 'Next.js']
  },
  {
    title: 'Josmati: Company Portfolio',
    image: 'https://res.cloudinary.com/ddv1q5oiq/image/upload/v1749918253/others/josmati.png',
    description: `Portfolio website for Josmati, showcasing business solutions, services, and projects. Features a clean, modern design and easy navigation. Built with Angular (frontend) and Python Django (backend).`,
    link: 'https://josmati.com/',
    tools: ['Angular', 'Python', 'Django']
  },
  {
    title: 'Jake Tech Solution – Agricultural Management System',
    image: 'https://res.cloudinary.com/ddv1q5oiq/image/upload/v1749918400/others/jakeoils.png',
    description: `Agricultural management system for farmers and cooperatives. Provides tools for farm operations, inventory management, and data-driven decision-making. Built with Angular (frontend) and Python Django/Rest Framework (backend).`,
    link: 'https://fms.jakehealthyoils.co.ke', // Add live demo link if available
    tools: ['Angular', 'Python', 'Django', 'DRF']
  },
  {
    title: 'Paystack4Python',
    image: 'https://res.cloudinary.com/ddv1q5oiq/image/upload/v1749918552/others/paystack4python.png',
    description: `Python client library for Paystack API. Simplifies integration for payments, customer management, transactions, and subscriptions. Features easy integration, utility functions, and robust error handling.`,
    link: 'https://pypi.org/project/paystack4python/',
    tools: ['Python', 'Paystack API']
  },
  {
    title: 'Motorshop – Car Listing System',
    image: 'https://res.cloudinary.com/ddv1q5oiq/image/upload/v1749925748/others/cars24.png',
    description: `Car listing platform for browsing, filtering, and managing vehicle listings. Offers detailed specs and price comparisons. Built with Next.js (frontend) and .NET Core (backend).`,
    link: '', // Add live demo link if available
    tools: ['Next.js', '.NET Core', 'C#']
  },
];

// Work History
export const workHistory = [
  {
    date: 'Oct 2023 - Present',
    title: 'Software Engineer',
    type: 'Full-time',
    company: 'GRIFFIN Global Technologies',
    location: 'Nyeri, Kenya',
    description: 'Develop and maintain robust client-server applications using .NET Core, Angular, GraphQL, and Azure Functions on the Azure Cloud Platform for diverse global clients. Conduct comprehensive code reviews and implement coding best practices to consistently deliver high-quality solutions. Received positive feedback from clients for exceeding expectations in project delivery and enhancing system performance.'
  },
  {
    date: 'July 2023',
    title: 'Software QA/QE',
    type: 'Contract',
    company: 'THE JITU',
    location: 'Nyeri, Kenya',
    description: 'Developed and executed comprehensive test plans and test cases, resulting in a significant reduction in production bugs. Documented test results meticulously and participated in code reviews to uphold regulatory standards and enhance software quality. Tools utilized included NodeJS (Express), Git, and testing frameworks like Jest, Cypress, vtest, and k6.'
  },
  {
    date: 'July 2022 – Oct 2022',
    title: 'Full Stack Developer (Attachment)',
    type: 'Internship',
    company: 'EUJIM SOLUTIONS',
    location: 'Remote/Nairobi, Kenya',
    description: 'Collaborated in the design and deployment of systems using React and Django, focusing on REST API development, optimization, and the integration of a USSD application. Played a key role in improving code quality through rigorous code reviews and effective version control management with Git.'
  }
];

// Education
export const education = [
  {
    date: 'Aug 2019 – May 2023',
    title: 'Karatina University',
    role: 'Student',
    certificate: 'BSc, Computer Science',
    description: 'Successfully completed my Computer Science degree, gaining in-depth knowledge of computer principles, algorithms, data structures, and programming paradigms. Experience with Agile methodologies and software design and development in a test-driven environment.'
  }
];

// Contact Info
export const contactInfo = {
  email: 'mwaiseghe23@gmail.com',
  phone: '+254712345678',
  social: [
    {
      type: 'email',
      label: 'Email',
      icon: 'pi pi-envelope',
      link: 'mailto:mwaiseghe23@gmail.com'
    },
    {
      type: 'github',
      label: 'GitHub',
      icon: 'pi pi-github',
      link: 'https://github.com/mwaiseghegift'
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      icon: 'pi pi-linkedin',
      link: 'https://www.linkedin.com/in/gift-mwaiseghe-2969031a4'
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


// Referees (optional, if you want to add)
export const referees = [
  {
    name: 'Daniel Kakinyi',
    role: 'Software Developer/Trainer',
    company: 'The Jitu LTD',
    phone: '+254795900647',
    email: 'kakinyidk@gmail.com'
  },
  {
    name: 'Ombwayo Michael',
    role: 'CEO',
    company: 'Eujim Solutions',
    phone: '+254718099959',
    email: 'michael.ombwayo@gmail.com'
  }
];
