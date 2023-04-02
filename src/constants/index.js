import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  shopify,
  threejs,
  current2,
  finance,
  socialmedia,
  idf,
  tashan,
  tashan1,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
 
];

const experiences = [
  {
    title: "IDF spacial forces",
    company_name: "Paratroopers",
    icon: idf,
    iconBg: "#383E56",
    date: "August 2016 - March 2019",
    points: [
      "collaborated with team to carry out weapons line up, with goal of equipment deployment in under 7 minutes.",
      "Fast and independent learning - Learn a navigation axis from a random map and reached my destination alone.",
      " Decision making - Learnt how to apply the field combat skills I gained during constantly adapting situations.",
    ],
  },
  {
    title: "Oil & energy infrastructure",
    company_name: "O&E infrastructure",
    icon: tashan1,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Finance-Dashboard",
    description: `This Web-application going to consist of KPIs and information that business persons can use to display their information about key performance indicators, and other types of data that they need to keep track of their finances for their company.`,
    tags: [
      {
        name: "Recharts",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "white-text-gradient",
      },
      {
        name: "Mui",
        color: "pink-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
    ],
    image: finance,
    source_code_link: "https://github.com/Dawitlior/Finance-Project",
  },
  {
    name: "Admin-Dashboard",
    description: `end-to-end application that can help you manage
       the information you have in a convenient and modern way`,
    tags: [
      {
        name: "Nivo",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Mui",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "white-text-gradient",
      },
    ],
    image: current2,
    source_code_link: "https://github.com/Dawitlior/Admin-Dashboard.",
  },
  {
    name: "Social-Media",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "React",
        color: "white-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Mui",
        color: "pink-text-gradient",
      },
    ],
    image: socialmedia,
    source_code_link: "https://github.com/Dawitlior/S-M-SERVER",
  },
];

export { services, technologies, experiences, testimonials, projects };
