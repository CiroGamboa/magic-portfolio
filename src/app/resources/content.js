const person = {
  firstName: "Ciro",
  lastName: "Gamboa",
  firstName: "Ciro",
  lastName: "Gamboa",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Bogota", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish", "German"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/CiroGamboa",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/cirogam",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:cirossj10@hotmail.com",
    link: "mailto:cirossj10@hotmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer & Community Builder</>,
  subline: (
    <>
      Community builder and leader, growing Chill & Chat to 1,500+ attendees through immersive networking and language events. Senior Software Engineer with 8 years in Python and AWS, specializing in scalable AI and data engineering backends.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/ciro-alberto-gamboa-5x7tnk/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ciro is a seasoned Senior Software Engineer with 8 years of experience in Python backend development and AWS Cloud Services, specializing in designing and deploying scalable backend solutions for AI and data engineering applications. He is also a passionate community builder and leader.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Chill & Chat",
        timeframe: "May 2023 - Present",
        role: "Co-Founder & Community and Tech Lead",
        image: "/images/work/chill-chat.jpg",
        achievements: [
          <>Founded a platform and community that fosters networking and meaningful connections.</>,
          <>Led a multidisciplinary team of 15+ members, growing the community to 1,500+ attendees.</>,
          <>Developed an AI-powered matchmaking system using AWS and Python, and built a Python AI chatbot for WhatsApp and Instagram.</>,
          <>Executed digital acquisition and engagement strategies leveraging agile methodologies and B2B partnerships.</>,
        ],
        images: [
          { src: "/images/work/chill-chat.jpg", alt: "Chill & Chat event", width: 16, height: 9 },
        ],
      },
      {
        company: "SoftServe",
        timeframe: "April 2024 - November 2024",
        role: "Senior Software Engineer (Backend/Integrations Focused)",
        image: "/images/work/softserve.jpg",
        achievements: [
          <>Designed and developed Customer Engineering modules for industrial software and hardware.</>,
          <>Maintained Python-based integrations with AWS services and automated deployment processes using AWS Lambda, Step Functions, and CloudFormation.</>,
          <>Created and managed RESTful APIs and implemented storage services utilizing AWS S3 and AWS DynamoDB.</>,
          <>Implemented Snowflake ingestion pipelines using Python and AWS tools.</>,
        ],
        images: [
          { src: "/images/work/softserve.jpg", alt: "SoftServe project", width: 16, height: 9 },
        ],
      },
      {
        company: "AIESEC in Panamá",
        timeframe: "June 2023 - Present",
        role: "National Information Technology Manager (Part-time)",
        image: "/images/work/aiesec.jpg",
        achievements: [
          <>Led technological development and implementation to support organizational needs.</>,
          <>Integrated tools using Python and AWS (e.g., AWS Lambda and API Gateway with Expa).</>,
          <>Automated repetitive tasks with Zapier and streamlined CRM workflows with Podio.</>,
          <>Monitored and maintained AIESEC portals deployed with AWS Amplify and ECS, providing ongoing technical support.</>,
        ],
        images: [
          { src: "/images/work/aiesec.jpg", alt: "AIESEC in Panamá", width: 16, height: 9 },
        ],
      },
      {
        company: "Softwaremind",
        timeframe: "June 2023 - November 2023",
        role: "Senior Software Engineer (Backend/Data Engineering Focused)",
        image: "/images/work/softwaremind.jpg",
        achievements: [
          <>Designed and developed Python-Flask backend modules for user platforms.</>,
          <>Automated backend deployment with GitHub Actions, AWS ECR, and ECS.</>,
          <>Created GraphQL endpoints using Strawberry and REST APIs for user authentication.</>,
          <>Configured automated database migrations with SQLAlchemy, Alembic, and PostgreSQL.</>,
          <>Developed and deployed AWS Greengrass custom components and implemented comprehensive testing with Pytest.</>,
        ],
        images: [
          { src: "/images/work/softwaremind.jpg", alt: "Softwaremind project", width: 16, height: 9 },
        ],
      },
      {
        company: "The Walt Disney Company",
        timeframe: "March 2022 - June 2023",
        role: "Senior Software Engineer (AI Focused)",
        image: "/images/work/disney.jpg",
        achievements: [
          <>Designed backend modules to support recommendation workflows for Disney online platforms such as ABC News, National Geographic, Marvel Comics, and Disney+.</>,
          <>Developed web services using Spring Boot, Maven, Docker, GraphQL, and REST APIs, implementing robust security measures.</>,
          <>Configured ETL pipelines using AWS Glue, AWS Step Functions, Lambda, S3, and Open Search.</>,
        ],
        images: [
          { src: "/images/work/disney.jpg", alt: "Disney project", width: 16, height: 9 },
        ],
      },
      {
        company: "AI for Good Foundation",
        timeframe: "February 2022 - June 2023",
        role: "Volunteer AI Engineer",
        image: "/images/work/aiforgood.jpg",
        achievements: [
          <>Designed and developed a network model for the Climate TrendScanner project using Neo4j.</>,
          <>Built backend services using Flask and Django, and created API demos with Swagger.</>,
          <>Configured and deployed Neo4j instances on Digital Ocean and Azure ACI, and developed NLP modules using SpaCy and DBpedia.</>,
        ],
        images: [
          { src: "/images/work/aiforgood.jpg", alt: "AI for Good Foundation", width: 16, height: 9 },
        ],
      },
      {
        company: "Bimoi",
        timeframe: "August 2020 - January 2022",
        role: "Founder – Fullstack Engineer",
        image: "/images/work/bimoi.jpg",
        achievements: [
          <>Developed a web and mobile app with a search engine/social network for finding n-degree contacts.</>,
          <>Led a team of developers, designers, and a business analyst; co-created the business model and guided product strategy iterations.</>,
          <>Built the frontend in ReactJS and the backend in ExpressJS using Docker containers, and automated deployments with GitHub Actions, Firebase, and Google Cloud.</>,
        ],
        images: [
          { src: "/images/work/bimoi.jpg", alt: "Bimoi project", width: 16, height: 9 },
        ],
      },
      {
        company: "Ministry of Information Technology in Colombia",
        timeframe: "July 2021 - December 2021",
        role: "Software Engineering Instructor",
        image: "/images/work/ministry.jpg",
        achievements: [
          <>Designed and taught courses for over 200 students in the MisiónTic 2022 programs.</>,
          <>Covered object-oriented programming (using Java, Swing, and MySQL) as well as full-stack web development (using Python frameworks like Flask and Django, along with Bootstrap, HTML, and CSS).</>,
          <>Developed hackathon challenges and project pitching training, achieving high student success rates.</>,
        ],
        images: [
          { src: "/images/work/ministry.jpg", alt: "Ministry of IT in Colombia", width: 16, height: 9 },
        ],
      },
      {
        company: "Golden Security Services",
        timeframe: "June 2019 - February 2021",
        role: "Backend/IoT Engineer",
        image: "/images/work/golden-security.jpg",
        achievements: [
          <>Developed software architecture for protecting radioactive sources and industrial assets.</>,
          <>Designed, implemented, and supported hardware and software modules across platforms (Raspberry Pi, Lattepanda, Arduino, and industrial boards).</>,
          <>Created scheduling algorithms for IoT traffic balancing and developed data analysis modules using Java and Python.</>,
          <>Configured AWS services (EC2, Lambda, etc.) and integrated commercial security cameras for enhanced security features.</>,
        ],
        images: [
          { src: "/images/work/golden-security.jpg", alt: "Golden Security Services", width: 16, height: 9 },
        ],
      },
      {
        company: "Geological Service of Colombia",
        timeframe: "June 2018 - September 2019",
        role: "Scrum Master and Machine Learning Engineer",
        image: "/images/work/geological-service.jpg",
        achievements: [
          <>Led a project to detect incoming earthquakes and provide an early warning system.</>,
          <>Developed highly accurate machine learning models using Python, Keras, and Scikit-Learn, achieving up to 99.2% accuracy.</>,
          <>Acted as Scrum Master to manage development and published two indexed articles on earthquake detection methodologies.</>,
        ],
        images: [
          { src: "/images/work/geological-service.jpg", alt: "Geological Service of Colombia", width: 16, height: 9 },
        ],
      },
      {
        company: "Freelance Projects and Research",
        timeframe: "2015 - 2019",
        role: "Senior Software Engineer / AI & IoT Consultant",
        image: "/images/work/freelance.jpg",
        achievements: [
          <>Chill English Bot (2024): Developed a WhatsApp chatbot for English learners using a custom GPT assistant, ManyChat, and a Flask backend.</>,
          <>Tramitarte (2019): Created a chatbot for vehicle transfer documentation using DialogFlow and Django, winning first place in an AI Hackatón.</>,
          <>Demain Ideas (2018-2019): Built an open innovation platform aligned with Sustainable Development Goals using ReactJS, NodeJS, and Firebase; presented at the GKE Edutech congress.</>,
          <>Edén (2017-2018): Designed a smart pot with sensors for automated irrigation paired with a Unity mobile app, becoming a finalist in the TuApp Latam contest.</>,
          <>Bushido (2018): Developed a 3D spaceship game using Unity with integrated Apple Watch controls, exhibited at the AsoVac Venezuelan congress.</>,
          <>CilixBrain (2017): Created a toolkit for object recognition and route analysis using Python and OpenCV.</>,
          <>LLFD (2015-2017): Developed a motorcyclist's accident monitoring system leveraging IoT technology, securing second place in an international IoT contest.</>,
        ],
        images: [
          { src: "/images/work/freelance.jpg", alt: "Freelance Projects", width: 16, height: 9 },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Pontificia Bolivariana University, Colombia",
        description: <>B.Sc in Electronic Engineering</>,
      },
      {
        name: "Pontificia Bolivariana University, Colombia",
        description: <>B.Ss in Computer Engineering</>,
      },
      {
        name: "Pontificia Bolivariana University, Colombia",
        description: <>Postgraduate Program on Business Management</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Python",
        description: <>Extensive experience in backend development and data engineering.</>,
      },
      {
        title: "AWS",
        description: <>Expertise in cloud computing, serverless architectures, and infrastructure automation.</>,
      },
      {
        title: "AI & Data Engineering",
        description: <>Building scalable machine learning pipelines and data-driven solutions.</>,
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };
