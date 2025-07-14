import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="coder.jpg" alt="Coder-image" />;
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML + CSS" emoji="💪" background="#1ab07cff" />
      <Skill skill="JavaScript" emoji="⚡" background="yellow" />
      <Skill skill="React" emoji="⚛️" background="Skyblue" />
      <Skill skill="TypeScript" emoji="💪" background="orange" />
      <Skill skill="Git and Github" emoji="🟢" background="red" />
    </div>
  );
}

function Skill(props) {
  const style = { backgroundColor: props.background };
  return (
    <div className="skill" style={style}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Kazi Irfanul Islam</h1>
      <article>
        I operate in the world of React, building scalable and responsive web
        applications. My focus is on writing performant back-end logic and
        dynamic front-end experiences that are both powerful and easy to use.
      </article>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
