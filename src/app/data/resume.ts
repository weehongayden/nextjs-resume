type ResumeProp = {
  detail: {
    name: string;
    role: string;
    nationality: string;
    phone: string;
    email: string;
  };
  intro: string;
  employmentHistory: Array<{
    name: string;
    role: string;
    country: string;
    duration: string;
    jobDescription: Array<string>;
  }>;
};

export const resume: ResumeProp = {
  detail: {
    name: "Wee Hong KOH",
    role: "Software Engineer",
    nationality: "Singaporean",
    phone: "(+65) 8401-3319",
    email: "weehongayden@hotmail.com",
  },
  intro:
    "I am a software engineer with 7+ years of experience in web development and experienced in object-oriented programming, testing and debugging code. I am also equipped with the knowledge of CI/CD and software architecture design skillsets.",
  employmentHistory: [
    {
      name: "DBS Bank",
      role: "Software Engineer",
      country: "Singapore",
      duration: "2019 - Present",
      jobDescription: [
        "Developed an API using Spring Framework to generate a multilingual rich-text PDF that consolidates the user finance information from more than 10 API(s) concurrently.",
        "Developed an API to collect user e-signature before generating the user finance report.",
        "Developed a Client Connect portal in ReactJS which enables Relationship Managers to view/download client profiles at a glance without navigating through 10 different portals and various functions improving productivity and efficiency by 27%.",
        "Developed and maintained the ReactJS components that strictly follow the company standards that helped to boost the productivity across DBS Bank and were actively used by more 7 project teams/squads.",
      ],
    },
    {
      name: "IPI Singapore",
      role: "Software Engineer",
      country: "Singapore",
      duration: "May 2018 — Apr 2020",
      jobDescription: [
        "Developed tool in Golang to collect all the inquiries sent from the company portal and distribute them to the respective department automatically by saving about 2 hours per day from categorizing and distributing the inquiries",
        "Developed project management web application to track project status, generate a variety of reports, and automated delivery of invoices",
        "Managed external vendors and conducted code review and design to ensure projects met the company's requirement",
      ],
    },
    {
      name: "Blissbox Pte. Ltd.",
      role: "Software Engineer",
      country: "Singapore",
      duration: "May 2017 — Apr 2018",
      jobDescription: [
        "Designed and planned the AWS architecture for the e-commerce site by utilizing AWS native services and deploying the microservice to the cloud",
        "Developed e-commerce website in VueJs and Laravel, launched for the startup company which has about 300 users per day based on Google Analytics",
        "Managed and mentored the intern team to launch the mobile application of the ecommerce platform",
      ],
    },
    {
      name: "WizWerx Pte. Ltd.",
      role: "Software Engineer",
      country: "Singapore",
      duration: "Jul 2015 — Apr 2017",
      jobDescription: [
        "Managed project and conducted code review for both internal and external development team",
        "Managed and maintained the company server to inspect the health and capacity status, which hosts about 60 websites",
      ],
    },
  ],
};
