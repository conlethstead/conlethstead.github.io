import "../styles/Skills.css";
import { SkillCard } from "../components/SkillCard";
import cplusplusImage from "../images/icons8-c++-48.png";
import javaImage from "../images/js-brands-solid.svg";
import kotlinImage from "../images/icons8-kotlin.svg";
import reactImage from "../images/react-brands-solid.svg";

export const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <p>Here are some of my skills, I am always working to grow the list!</p>

      <div className="languages">
        <SkillCard
          skill={{
            name: "C++",
            image: cplusplusImage,
            description:
              "I have over 3 years of programming experience in C++ through academic projects. These projects include ... This extensive knowledge has helped me learn new languages quickly.",
          }}
        />
        <SkillCard
          skill={{
            name: "Javascript, HTML, CSS",
            image: javaImage,
            description:
              "I have been using Javascript, HTML, and CSS for 3 years to create interactive and styled web pages for both academic projects and professional work. I leverage these technologies to build responsive user interfaces, implement dynamic content, and create visually appealing designs.",
          }}
        />
        <SkillCard
          skill={{
            name: "Kotlin",
            image: kotlinImage,
            description:
              "I have been using Kotlin in conjuction with Spring Boot for 2 years to implement efficient backend services including RESTfulAPIs and database repositories.",
          }}
        />
        <SkillCard
          skill={{
            name: "React",
            image: reactImage,
            description: "I have 3 years of experience leveraging React components and hooks to develop responsive web applications in academic projects and in professional work.",
          }}
          />
          {/* <SkillCard
            skill={{
              name: "Swift",
              description: "I have been using Swift for 2 years.",
            }}
          /> */}
          {/* <SkillCard
            skill={{
              name: "Java",
              description: "I have been using Java for 5 years.",
            }}
          /> */}
      </div>
    </div>
  );
};
