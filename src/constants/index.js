import project1 from "/UAP.png";
import project2 from "/C2Cupdated.png";
import project3 from "/ucsc.png";
import project4 from "/Baskin.png";

export const HERO_CONTENT = `I am a recent graduate from the University of California, Santa Cruz. With 3 years of hands-on experience, I have cultivated my skills in full stack development working with technologies like React, Laravel, Vue.js, Javascript, and MySQL. I also have several years of experience working with hardware using verilog, C/C++, and Rust. My goal is to leverage my skills in order to push for innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a versatile and dedicated programmer with a passion for creating efficient and user-friendly web applications. With 3 years of experience, I have worked with a wide variety of technologies and hardware, including Raspberry Pi, ESP32C3, Basys3 FPGA, and PIC32 microcontroller. My expertise spans both software and hardware, enabling me to bridge the gap between front-end and back-end development and embedded systems. Beyond programming, I was the captain of my collegiate Valorant team, where I honed my leadership, strategic thinking, and teamwork skills. This experience taught me the importance of communication and adaptability, qualities that I bring to my professional work. Additionally, I have a passion for running and staying physically active, which helps me maintain a balanced and disciplined lifestyle. This combination of mental and physical pursuits ensures that I stay focused, energized, and ready to take on new challenges.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Group Tutor/Reader",
    company: "UCSC Baskin School of Engineering",
    logo: project4,
    description: `Conducted weekly sessions for a cohort of 20 students, offering in-depth project debugging and assignment guidance. Assessed and graded weekly assignments and projects for 50+ students, contributing to an increase in overall class performance and academic retention`,
    technologies: ["Javascript", "Gdevelop", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "UCSC Academic Planner",
    image: project1,
    description:
      "A fully functional web application to help computer science students at UCSC to plan their academic journey.",
    technologies: ["Laravel", "PHP", "Javascript", "Vue.js", "Mysql", "Tailwind CSS"],
  },
  {
    title: "Canvas to Calendar",
    image: project2,
    description:
      "A google chrome extension to aide with assignment tracking and planning with features such as task creation, website tweaks, and user authentication.",
    technologies: ["Javascript", "HTML", "CSS"],
  },
  {
    title: "Multi-Threaded HTTP Server",
    image: project3,
    description:
      "A server designed to handle ongoing HTTP GET and PUT requests, featuring an audit log that ensures atomicity and linear consistency, and providing responses to clients through POSIX system calls.",
    technologies: ["C"],
  },
];

export const CONTACT = {
  phoneNo: "760-500-3815 ",
  email: "lucas.michellys@gmail.com",
};
