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
    <div
      id="skills"
      className="skillsSection bg-fixed bg-no-repeat p-5 md:p-40"
    >
      <h2 className="text-5xl text-center text-white">My Skills</h2>
      <div className="md:flex w-full items-center gap-20">
        <p className="text-white md:text-2xl md:w-1/2 text-center my-10">
          I have a good foundation and expatriate skills in MERN Stack and
          front-end languages and their frameworks. I am a quick learner and can
          adapt to any circumstance with a cool-minded. As a lifelong learner, I
          always try to keep updated with new technologies and express them in
          my work. Beyond technical skills, I am a dedicated team player with
          excellent communication skills. I am eager to contribute my
          collaborative skills to the accomplished team at your company. I
          thrive in collaborative environments and actively seek feedback to
          improve my work. All my skills are given bellow-
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 mt-20 md:w-1/2 md:gap-10">
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={html} alt="" />
            <h2 className="text-xl ">HTML</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={css} alt="" />
            <h2 className="text-xl ">CSS</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={bootstrap} alt="" />
            <h2 className="text-xl ">Bootstrap</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={tailwind} alt="" />
            <h2 className="text-xl ">Tailwind</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={javascript} alt="" />
            <h2 className="text-xl ">JavaScript</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={react} alt="" />
            <h2 className="text-xl ">React</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={firebase} alt="" />
            <h2 className="text-xl ">Firebase</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={nodejs} alt="" />
            <h2 className="text-xl ">NodeJs</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={expressjs} alt="" />
            <h2 className="text-xl ">Express Js</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={mongodb} alt="" />
            <h2 className="text-xl ">MongoDb</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={vscode} alt="" />
            <h2 className="text-xl ">Vs Code</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={figma} alt="" />
            <h2 className="text-xl ">Figma</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={netlify} alt="" />
            <h2 className="text-xl ">Netlify</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={git} alt="" />
            <h2 className="text-xl ">Git</h2>
          </div>
          <div className="flex flex-col rounded-3xl items-center my-10 py-10 bg-white">
            <img className="w-28 h-20" src={vercel} alt="" />
            <h2 className="text-xl ">Vercel</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
