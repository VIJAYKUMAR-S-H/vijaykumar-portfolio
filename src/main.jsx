import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const projects = [
  {
    number: "01",
    title: "StudyMate AI Extension",
    tag: "1st Place · Inno Hack Summit",
    description: "An AI-powered browser extension for students, combining practical career tools with LLM-based assistance.",
    points: ["ATS-friendly resume builder", "Interview-prep assistant", "Smart right-click saving", "AI chatbot with OpenRouter"],
    stack: "React · Node.js · OpenRouter API · LLMs",
    demo: ""
  },
  {
    number: "02",
    title: "AgroMarket",
    tag: "Full-Stack Marketplace",
    description: "A farmer-to-buyer marketplace with a complete commerce workflow and a React frontend connected to backend APIs.",
    points: ["Authentication and products", "Cart, wishlist and orders", "Razorpay payments and reviews", "Dockerized and Postman-tested APIs"],
    stack: "React · Redux · TypeScript · Node.js · Express · MongoDB · Docker",
    demo: ""
  },
  {
    number: "03",
    title: "Reverse Reasoning AI",
    tag: "AI Code-to-Intent Tool",
    description: "An AI-powered developer tool that explains code intent, complexity and implementation through an IDE-style interface.",
    points: ["React + Monaco Editor", "FastAPI + MongoDB + JWT", "Python, C and Java sandbox execution", "Big-O heuristics with LLM fallback"],
    stack: "React · Monaco Editor · FastAPI · MongoDB · Docker · LLM",
    demo: ""
  },
  {
    number: "04",
    title: "Manufacturing Parts-Per-Hour Prediction",
    tag: "Machine Learning",
    description: "A machine-learning pipeline for predicting manufacturing throughput and serving the selected model through FastAPI.",
    points: ["Linear, Ridge, Lasso and ElasticNet", "GridSearchCV model selection", "FastAPI deployment endpoint", "Docker + pytest validation"],
    stack: "Python · scikit-learn · FastAPI · Docker · pytest",
    demo: ""
  }
];

const skills = [
  ["Programming", "JavaScript · TypeScript · Python · Java · SQL"],
  ["Frontend", "React.js · Redux · Vite · HTML · CSS · Monaco Editor"],
  ["Backend", "Node.js · Express.js · FastAPI · REST APIs · JWT"],
  ["Database", "MongoDB · Mongoose · MySQL"],
  ["AI / ML", "LLM Integration · OpenRouter · GPT-4o-mini · scikit-learn"],
  ["Tools", "Git · GitHub · Docker · Postman · pytest · CI/CD"]
];

function App() {
  const [menu, setMenu] = React.useState(false);
  const [project, setProject] = React.useState(null);
  const [showResume, setShowResume] = React.useState(false);

  const nav = ["About", "Skills", "Projects", "Experience", "Achievements", "Contact"];

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">VH<span>.</span></a>
        <button className="menuButton" onClick={() => setMenu(!menu)}>{menu ? "Close" : "Menu"}</button>
        <nav className={menu ? "nav open" : "nav"}>
          {nav.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenu(false)}>{item}</a>
          ))}
        </nav>
        <button className="topButton" onClick={() => setShowResume(true)}>View Resume</button>
      </header>

      <main>
        <section id="home" className="hero wrap">
          <div>
            <p className="eyebrow">INFORMATION SCIENCE & ENGINEERING · 2027</p>
            <h1>I build <span>full-stack</span><br />products with AI.</h1>
            <p className="intro">I'm Vijaykumar Hadimani, an Information Science undergraduate who builds practical web applications, backend systems and AI-powered features.</p>
            <div className="heroActions">
              <a className="button solid" href="#projects">See my work →</a>
              <button className="button" onClick={() => setShowResume(true)}>View Resume</button>
            </div>
            <div className="facts">
              <div><b>8.3</b><small>CGPA / 10</small></div>
              <div><b>100+</b><small>LeetCode</small></div>
              <div><b>1st</b><small>Hackathon</small></div>
            </div>
          </div>

          <div className="heroImage">
            <div className="imageBack"></div>
            <img src="/profile.png" alt="Vijaykumar Hadimani" />
            <div className="imageNote"><span></span> Open to opportunities</div>
          </div>
        </section>

        <div className="strip"><div className="wrap stripInner"><span>FULL STACK</span><b>·</b><span>BACKEND</span><b>·</b><span>AI INTEGRATION</span><b>·</b><span>PROBLEM SOLVING</span><b>·</b><span>BUILD · LEARN · SHIP</span></div></div>

        <section id="about" className="section wrap twoColumn">
          <div><p className="label">01 / ABOUT</p><h2>Student on paper.<br /><span>Builder in practice.</span></h2></div>
          <div className="copy">
            <p>I'm pursuing B.E. in Information Science and Engineering at Shridevi Institute of Engineering and Technology, graduating in 2027.</p>
            <p>My approach is simple: understand the problem, build the frontend, connect the backend and database, then add AI only when it improves the product.</p>
            <p>I am looking for Full Stack Developer, Software Engineer and AI-integrated product opportunities.</p>
            <div className="details">
              <div><small>EDUCATION</small><b>B.E. Information Science & Engineering</b></div>
              <div><small>GRADUATION</small><b>2027</b></div>
              <div><small>COLLEGE</small><b>SIET, Tumkur</b></div>
              <div><small>12th GRADE</small><b>87.66%</b></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section wrap">
          <p className="label">02 / TOOLKIT</p>
          <div className="headingRow"><h2>Technologies I <span>work with.</span></h2><p>I learn by building and choose tools based on the problem.</p></div>
          <div className="skillGrid">
            {skills.map(([title, items]) => <div className="skill" key={title}><small>{title}</small><p>{items}</p></div>)}
          </div>
        </section>

        <section id="projects" className="section wrap">
          <p className="label">03 / SELECTED WORK</p>
          <div className="headingRow"><h2>Projects that show <span>how I think.</span></h2><p>Real projects across full-stack development, AI and machine learning.</p></div>
          <div className="projects">
            {projects.map((item) => (
              <article className="project" key={item.title}>
                <div className="projectMeta"><span>{item.number}</span><b>{item.tag}</b></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <div className="projectBottom">
                  <small>{item.stack}</small>
                  <div className="projectLinks">
                    <button onClick={() => setProject(item)}>Case Study</button>
                    <a className={item.demo ? "live" : "disabled"} href={item.demo || undefined} target="_blank" rel="noreferrer">Live Demo ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="linkNote">Live Demo buttons are ready for your real deployed URLs — I have not invented links where a URL was not provided.</p>
        </section>

        <section id="experience" className="section wrap">
          <p className="label">04 / EXPERIENCE</p>
          <div className="timeline">
            <div className="timelineItem"><small>MAY — JUN 2024</small><div><h3>AI & Data Analytics Intern</h3><b>MEVI Technologies</b><p>Completed a 4-week internship working with a Zomato hotel/restaurant management dataset using pandas, NumPy, Matplotlib and scikit-learn for preprocessing, analysis and visualization.</p></div></div>
            <div className="timelineItem"><small>2023 — 2027</small><div><h3>B.E. Information Science & Engineering</h3><b>Shridevi Institute of Engineering and Technology</b><p>Building foundations across programming, data structures, databases, networks, web development, AI and software engineering.</p></div></div>
          </div>
        </section>

        <section id="achievements" className="section wrap">
          <p className="label">05 / PROOF OF WORK</p>
          <div className="proofGrid">
            <div className="proofText">
              <p className="winner">1ST PLACE · INNO HACK SUMMIT</p>
              <h2>A project I can <span>prove.</span></h2>
              <p>StudyMate AI won 1st place at the state-level Inno Hack Summit. Instead of only listing the achievement, this portfolio shows the actual event moment as proof.</p>
              <div className="achievementStats"><div><b>1st</b><small>Place</small></div><div><b>24h</b><small>Hackathon</small></div><div><b>AI</b><small>StudyMate</small></div></div>
            </div>
            <figure className="proofImage"><img src="/hackathon-proof.jpg" alt="StudyMate AI hackathon winning moment" /><figcaption>Inno Hack Summit · State-Level Hackathon · StudyMate AI</figcaption></figure>
          </div>
          <div className="achievementList"><div><b>100+</b><span>LeetCode problems solved</span></div><div><b>3rd Prize</b><span>Project presentation event</span></div><div><b>Coordinator</b><span>Infonet Club technical activities</span></div></div>
          <div className="certificates"><span>HackerRank · Problem Solving</span><span>HackerRank · Python</span><span>Machine Learning · PrepInsta</span><span>Data Science · PrepInsta</span><span>Data Analytics using Python · PrepInsta</span><span>DSA · PrepInsta</span><span>AI / Data Science · Infosys Springboard</span></div>
        </section>

        <section id="contact" className="contact wrap">
          <p className="label">06 / CONTACT</p>
          <h2>Have an opportunity?<br /><span>Let's talk.</span></h2>
          <p>I'm open to internships, graduate roles and conversations around full-stack development, backend engineering and practical AI.</p>
          <div className="contactRows">
            <a href="mailto:vijaykumarhadimani77@gmail.com"><small>EMAIL</small><b>vijaykumarhadimani77@gmail.com</b><span>↗</span></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><small>LINKEDIN</small><b>Connect with me</b><span>↗</span></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer"><small>GITHUB</small><b>See my code</b><span>↗</span></a>
          </div>
        </section>
      </main>

      <footer className="wrap"><span>© 2026 Vijaykumar Hadimani</span><span>Built with React + simple CSS</span><a href="#home">Back to top ↑</a></footer>

      {project && <div className="overlay" onClick={() => setProject(null)}><div className="modal" onClick={(e) => e.stopPropagation()}><button className="close" onClick={() => setProject(null)}>×</button><small>CASE STUDY · {project.number}</small><h2>{project.title}</h2><p>{project.description}</p><h4>What I built</h4><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul><h4>Tech stack</h4><p>{project.stack}</p><div className="simpleNote">The case study is intentionally simple and readable — no complicated visualizations or heavy libraries.</div></div></div>}

      {showResume && <div className="overlay" onClick={() => setShowResume(false)}><div className="resumeModal" onClick={(e) => e.stopPropagation()}><div className="resumeHeader"><b>Resume</b><button className="close" onClick={() => setShowResume(false)}>×</button></div><img src="/resume-preview.png" alt="Vijaykumar Hadimani resume" /></div></div>}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
