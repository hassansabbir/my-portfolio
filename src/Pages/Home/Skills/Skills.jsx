import "./Skills.css";

import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import bootstrap from "../../../assets/bootstrap.png";
import tailwind from "../../../assets/tailwind.png";
import javascript from "../../../assets/javascript.png";
import react from "../../../assets/react.png";
import nodejs from "../../../assets/nodejs.png";
import expressjs from "../../../assets/expressjs.png";
import firebase from "../../../assets/firebase.png";
import mongodb from "../../../assets/mongodb.png";
import vscode from "../../../assets/vscode.png";
import figma from "../../../assets/figma.png";
import git from "../../../assets/git.png";
import netlify from "../../../assets/netlify.png";
import vercel from "../../../assets/vercel.png";

const Skills = () => {
  return (
    <div className="skillsSection bg-fixed bg-no-repeat p-40">
      <h2 className="text-5xl text-center text-white">My Skills</h2>
      <p className="text-white text-2xl text-center my-10">
        I have a good foundation and expatriate skills in MERN Stack and
        front-end languages and their frameworks. I am a quick learner and can
        adapt to any circumstance with a cool-minded. As a lifelong learner, I
        always try to keep updated with new technologies and express them in my
        work. Beyond technical skills, I am a dedicated team player with
        excellent communication skills. I am eager to contribute my
        collaborative skills to the accomplished team at your company. I thrive
        in collaborative environments and actively seek feedback to improve my
        work. All my skills are given bellow-
      </p>
      <div className="grid grid-cols-6 mt-20 gap-10">
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={html} alt="" />
          <h2 className="text-4xl ">HTML</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={css} alt="" />
          <h2 className="text-4xl ">CSS</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={bootstrap} alt="" />
          <h2 className="text-4xl ">Bootstrap</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={tailwind} alt="" />
          <h2 className="text-4xl ">Tailwind</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={javascript} alt="" />
          <h2 className="text-4xl ">JavaScript</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={react} alt="" />
          <h2 className="text-4xl ">React</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={firebase} alt="" />
          <h2 className="text-4xl ">Firebase</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={nodejs} alt="" />
          <h2 className="text-4xl ">NodeJs</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={expressjs} alt="" />
          <h2 className="text-4xl ">Express Js</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={mongodb} alt="" />
          <h2 className="text-4xl ">MongoDb</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={vscode} alt="" />
          <h2 className="text-4xl ">Vs Code</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={figma} alt="" />
          <h2 className="text-4xl ">Figma</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={netlify} alt="" />
          <h2 className="text-4xl ">Netlify</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={git} alt="" />
          <h2 className="text-4xl ">Git</h2>
        </div>
        <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
          <img className="w-60 h-56" src={vercel} alt="" />
          <h2 className="text-4xl ">Vercel</h2>
        </div>
      </div>
    </div>
  );
};

export default Skills;
