// Resume data structured for the chatbot
export const resumeData = {
  personalInfo: {
    name: "Sai Rama Prasanth K",
    title: "Full Stack Developer",
    email: "saiprasanth2k2@gmail.com",
    phone: "+91 9392705483",
    location: "Vijayawada, Andhra Pradesh",
    linkedin: "linkedin.com/in/sai-rama-prasanth",
    github: "github.com/Saiprasanth-1"
  },

  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "VIT-AP University",
      location: "Amaravati",
      period: "2020 - 2024",
      gpa: "8.53 CGPA"
    }
  ],

  skills: {
    programming: [
      "Python", "Java", "JavaScript", "HTML", "CSS", "SQL", "C", "C++", "R"
    ],
    frameworks: [
      "React.js", "Node.js", "Express.js", "Django", "Flask", "Bootstrap"
    ],
    databases: [
      "MongoDB", "MySQL", "PostgreSQL", "SQLite"
    ],
    tools: [
      "Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook", "Eclipse"
    ],
    cloud: [
      "AWS", "Google Cloud Platform", "Microsoft Azure"
    ]
  },

  projects: [
    {
      name: "Automated Attendance System using Face Recognition",
      description: "Developed a face recognition-based attendance system using Python and OpenCV. Implemented deep learning models for face detection and recognition. Features include real-time face detection, automated attendance marking, and report generation.",
      technologies: ["Python", "OpenCV", "Deep Learning", "TensorFlow", "SQLite"]
    },
    {
      name: "Personal Portfolio Website",
      description: "Created a responsive portfolio website using React.js and modern web technologies. Integrated AI chatbot for interactive user experience. Features include dark mode, smooth animations, and project showcases.",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Hugging Face API"]
    },
    {
      name: "Smart Agriculture System",
      description: "Built an IoT-based smart agriculture system for monitoring soil conditions and automating irrigation. Implemented using Arduino and various sensors. Created a web dashboard for real-time monitoring.",
      technologies: ["IoT", "Arduino", "Python", "Web Development", "Sensors"]
    }
  ],

  experience: [
    {
      title: "Web Development Intern",
      company: "Exposys Data Labs",
      period: "May 2023 - July 2023",
      responsibilities: [
        "Developed and maintained web applications using React.js and Node.js",
        "Collaborated with team members using Git for version control",
        "Implemented responsive designs and user authentication systems",
        "Worked on database management using MongoDB"
      ]
    }
  ],

  certifications: [
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023"
    },
    {
      name: "Python for Data Science",
      issuer: "IBM",
      date: "2022"
    }
  ],

  achievements: [
    "Smart India Hackathon 2022 Finalist",
    "Published research paper on Face Recognition Systems",
    "Won first prize in college-level coding competition",
    "Active contributor to open-source projects"
  ]
};

// Helper function to get formatted responses about the resume
export const getResumeResponse = (topic) => {
  switch (topic.toLowerCase()) {
    case 'education':
      return `I completed my ${resumeData.education[0].degree} at ${resumeData.education[0].institution} (${resumeData.education[0].period}) with a CGPA of ${resumeData.education[0].gpa}.`;
    
    case 'skills':
      return `My technical skills include:
• Programming: ${resumeData.skills.programming.join(', ')}
• Frameworks: ${resumeData.skills.frameworks.join(', ')}
• Databases: ${resumeData.skills.databases.join(', ')}
• Cloud: ${resumeData.skills.cloud.join(', ')}`;
    
    case 'projects':
      return resumeData.projects.map(project => 
        `${project.name}: ${project.description} Technologies used: ${project.technologies.join(', ')}`
      ).join('\n\n');
    
    case 'experience':
      const exp = resumeData.experience[0];
      return `${exp.title} at ${exp.company} (${exp.period})\nKey responsibilities:\n${exp.responsibilities.map(r => '• ' + r).join('\n')}`;
    
    case 'certifications':
      return resumeData.certifications.map(cert => 
        `${cert.name} (${cert.issuer}, ${cert.date})`
      ).join('\n');
    
    case 'achievements':
      return resumeData.achievements.map(achievement => '• ' + achievement).join('\n');
    
    default:
      return `I'm ${resumeData.personalInfo.name}, a ${resumeData.personalInfo.title} based in ${resumeData.personalInfo.location}. I have experience in full-stack development, with expertise in various programming languages and frameworks. You can ask me about my education, skills, projects, work experience, or achievements!`;
  }
};
