export type PersonalInfo = {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
};

export type Skill = {
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string;
};

export type Certification = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const personalInfo: PersonalInfo = {
  name: "Ayush Jadhav",
  title: "Software Developer | Java | Spring Boot | Cloud Computing",
  location: "Dublin, Ireland",
  email: "jadhavayush2024@gmail.com",
  phone: "+353 892564877",
  linkedin: "https://linkedin.com/in/your-linkedin",
  github: "https://github.com/your-github",
};

export const skills: Skill[] = [
  {
    title: "Backend Development",
    description:
      "Core Java, J2EE, Spring Boot, REST APIs, GraphQL, microservices, Flask, Django, and enterprise backend systems.",
  },
  {
    title: "Frontend Development",
    description:
      "Angular, React, HTML5, CSS3, JavaScript, TypeScript, responsive UI development, and reusable component design.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS EC2, Lambda, S3, CloudWatch, IAM, OpenShift, Docker, Kubernetes, Jenkins, Git, GitHub, and Bitbucket.",
  },
  {
    title: "Databases & Messaging",
    description:
      "PostgreSQL, MongoDB, Firebase, MS SQL Server, Kafka, Apache ActiveMQ, schema design, and query optimization.",
  },
  {
    title: "Testing & Quality",
    description:
      "JUnit, Mockito, Selenium, TDD, integration testing, static code analysis, Pylint, SonarCloud, and CI workflows.",
  },
  {
    title: "Monitoring & Networking",
    description:
      "Grafana, LogInsight, Prometheus, AWS CloudWatch, VPC, subnets, routing, ingress controllers, load balancers, and security groups.",
  },
];

export const projects: Project[] = [

{
  title: "Full-Stack Todo Application (Spring Boot + React)",

  description:
    "A production-ready full-stack task management application built with a Spring Boot backend and React frontend. Implements secure user authentication and complete CRUD functionality for managing tasks. Designed with RESTful APIs and a responsive UI, and deployed live on Vercel. Demonstrates real-world full-stack architecture, API integration, and deployment workflows.",

  tech:
    "Java, Spring Boot, React, REST APIs, Authentication, PostgreSQL (or your DB), Vercel, GitHub"
},

  {
    title: "Mental Health Analysis using Cloud-based Machine Learning",
    description:
      "Developed an AI-driven mental health risk prediction model using Random Forest and SVM with 99% accuracy. Built a scalable AWS-based ML pipeline using Lambda, DynamoDB, S3, Flask API, and Elastic Beanstalk.",
    tech: "Python, Machine Learning, AWS Lambda, DynamoDB, S3, Flask, Elastic Beanstalk",
  },
  {
    title: "SnapVibe",
    description:
      "Built a social media application using Django, SQLite, HTML5, and Bootstrap 5. Deployed it on AWS Elastic Beanstalk with CI/CD through AWS CodePipeline, with code quality checks using Pylint and SonarCloud.",
    tech: "Django, SQLite, HTML5, Bootstrap 5, AWS Elastic Beanstalk, CodePipeline",
  },
  {
    title: "House Renting Management System",
    description:
      "Developed a house renting management system with Django, SQLite, HTML5, and Bootstrap 5. Implemented CI/CD deployment on AWS Elastic Beanstalk and used SonarCloud for security and quality analysis.",
    tech: "Django, SQLite, HTML5, Bootstrap 5, AWS, SonarCloud",
  }
];

export const certifications: Certification[] = [
  {
    title: "NPTEL Gold+Elite Certificate in Java",
    description: "Scored 96%",
    image:
      "https://raw.githubusercontent.com/AyushJadhav/Certificates/main/Java%20NPTEL%20certificate.jpg",
    link:
      "https://raw.githubusercontent.com/AyushJadhav/Certificates/main/Java%20NPTEL%20certificate.jpg",
  },
  {
    title: "NPTEL Gold+Elite Certificate in IoT",
    description: "Scored 98%",
    image:
      "https://raw.githubusercontent.com/AyushJadhav/Certificates/main/IOT%20NPTEL%20certificate.jpg",
    link:
      "https://raw.githubusercontent.com/AyushJadhav/Certificates/main/IOT%20NPTEL%20certificate.jpg",
  },
  {
    title: "NPTEL Certificate in Data Structures and Algorithms",
    description: "Completed certification",
    image:
      "https://raw.githubusercontent.com/AyushJadhav/Certificates/main/DSA%20Python.jpg",
    link:
      "https://raw.githubusercontent.com/AyushJadhav/Certificates/main/DSA%20Python.jpg",
  },
];

export const experience: string[] = [
  "Software Developer at IBM, Dublin, Ireland - July 2025 to Present",
  "Designed and developed high-volume, low-latency backend applications using Core Java, J2EE, and Spring Boot.",
  "Built secure RESTful APIs and implemented business logic using enterprise design patterns and microservices architecture.",
  "Optimized PostgreSQL and NoSQL database schemas to improve query performance and data reliability.",
  "Teaching Assistant at National College of Ireland - September 2024 to December 2024",
  "Delivered training on Spring Boot microservices, REST API design, Spring Security, Spring Data JPA, Angular integration, SQL/NoSQL databases, CI/CD, Jenkins, and Azure deployment.",
  "Software Engineer at Cognizant Technology Solutions, Pune, India - December 2020 to December 2023",
  "Developed responsive web interfaces using Angular, HTML, CSS, and JavaScript.",
  "Built and integrated RESTful APIs, reducing system latency by 40%.",
  "Migrated legacy .NET monolith applications to modular Spring Boot microservices.",
];

export const education: string[] = [
  "MSc in Cloud Computing - National College of Ireland, Dublin - Jan 2024 to Feb 2025",
  "Bachelor of Engineering in Computer Engineering - All India Shri Shivaji Memorial Society College of Engineering, Pune - Aug 2016 to Jun 2020",
];

export const achievements: string[] = [
  "Won IBM Developer Academy hackathon among 6 teams by developing a Python-based game, fixing existing GitHub issues, and deploying on OpenShift.",
  "Completed NPTEL Gold+Elite Java certification with 96% and ranked in the top 5%.",
];

export const summary: string =
  "Passionate and results-driven software engineer with 5 years of experience building reliable, user-friendly, and scalable applications across frontend, backend, and cloud platforms.";