import React, { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap';

const all_tech = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.Js",
  "Vue.Js",
  "Angular",
  "Node.Js",
  "Python",
  "Java",
  "Express.Js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Oracle",
  "IOS",
  "Android",
  "Kotlin",
  "Swift",
  "Uikit",
  "Flutter",
  "Android Studio",
  "React Native",
  "Swift Ui",
  "Java",
  "Unity",
  "Xcode",
  "Aws",
  "Azure",
  "Google Cloud Platform",
  "Godaddy",
  "Hostinger",
  "Hostgator",
];

const frontend = ["HTML", "CSS", "JavaScript", "React.Js", "Vue.Js", "Angular"];

const backend = [
  "Node.Js",
  "Python",
  "Java",
  "Express.Js",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Oracle",
];

const ios = ["IOS", "Swift", "Uikit", "Swift Ui", "Xcode"];

const android = [
  "Android",
  "Kotlin",
  "Flutter",
  "Android Studio",
  "React Native",
];

const cloud = ["Aws", "Azure", "Google Cloud Platform"];

const TechnologiesWeUse = () => {
      const [activeTab, setActiveTab] = useState("all");
      const handleTabChange = (tabKey) => {
        setActiveTab(tabKey);
      };
      const chunksConverter =(tech)=>{

          const chunks = [];
          for (let i = 0; i < tech.length; i += 5) {
            chunks.push(tech.slice(i, i + 5));
          }
          return chunks;
      }
  return (
    <div className="tab-content hidden container web-model">
      <Tabs
        style={{ border: "1px solid #E8CB80 !important" }}
        defaultActiveKey={activeTab}
        onSelect={handleTabChange}
      >
        <Tab
          style={{ border: "1px solid #E8CB80 !important" }}
          eventKey="all"
          title="All"
        >
          {chunksConverter(all_tech).map((chunk, index) => (
            <div className="health-boxes mx-auto mt-5" key={index}>
              {chunk.map((tech, idx) => (
                <div className="box" key={idx}>
                  {tech}
                </div>
              ))}
            </div>
          ))}
        </Tab>
        <Tab eventKey="Frontend" title="Frontend">
          {chunksConverter(frontend).map((chunk, index) => (
            <div className="health-boxes mx-auto mt-5" key={index}>
              {chunk.map((tech, idx) => (
                <div className="box" key={idx}>
                  {tech}
                </div>
              ))}
            </div>
          ))}
        </Tab>
        <Tab eventKey="Backend" title="Backend">
          {chunksConverter(backend).map((chunk, index) => (
            <div className="health-boxes mx-auto mt-5" key={index}>
              {chunk.map((tech, idx) => (
                <div className="box" key={idx}>
                  {tech}
                </div>
              ))}
            </div>
          ))}
        </Tab>
        <Tab eventKey="IOS" title="IOS">
          {chunksConverter(ios).map((chunk, index) => (
            <div className="health-boxes mx-auto mt-5" key={index}>
              {chunk.map((tech, idx) => (
                <div className="box" key={idx}>
                  {tech}
                </div>
              ))}
            </div>
          ))}
        </Tab>
        <Tab eventKey="Android" title="Android">
          {chunksConverter(android).map((chunk, index) => (
            <div className="health-boxes mx-auto mt-5" key={index}>
              {chunk.map((tech, idx) => (
                <div className="box" key={idx}>
                  {tech}
                </div>
              ))}
            </div>
          ))}
        </Tab>
        <Tab eventKey="Cloud" title="Cloud">
          {chunksConverter(cloud).map((chunk, index) => (
            <div className="health-boxes mx-auto mt-5" key={index}>
              {chunk.map((tech, idx) => (
                <div className="box" key={idx}>
                  {tech}
                </div>
              ))}
            </div>
          ))}
        </Tab>
      </Tabs>
    </div>
  );
}

export default TechnologiesWeUse