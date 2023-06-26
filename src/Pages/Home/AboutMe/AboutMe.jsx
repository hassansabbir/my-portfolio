import "./AboutMe.css";
import profileImage from "../../../assets/IMG_4389-01.jpeg";

const AboutMe = () => {
  return (
    <div className="aboutMeSection p-5 md:p-40 bg-fixed bg-no-repeat md:flex  items-center gap-10 text-white">
      <div>
        <h2 className="text-5xl underline mb-10">About Me</h2>
        <div className="md:text-2xl space-y-5">
          <p>
            Hi, I'm Mahmud Hasan Sabbir, a passionate junior web developer
            dedicated to crafting engaging and user-friendly websites. With a
            strong foundation in front-end development, and MERN Stack
            Development. I bring creativity and functionality to every project.
            During my last course of web development, I discovered my love for
            web development. I've honed my skills in HTML, CSS, and JavaScript,
            MERN stack technologies and I'm constantly expanding my knowledge.
          </p>
          <p>
            Collaboration is key to my approach. I enjoy working closely with
            designers and stakeholders to transform their visions into
            functional websites. Together, we create user-friendly interfaces
            that leave a lasting impression. I'm committed to staying on top of
            industry trends and technologies. Currently, I'm exploring front-end
            frameworks like Next.js.{" "}
          </p>

          <p>
            I thrive on the challenges web development brings and am constantly
            seeking opportunities to learn and grow. Let's connect and discuss
            how I can contribute to your next project. Reach me at
            mahmoodsabbir3087@gmail.com or contact me.
          </p>
        </div>
      </div>
      <img
        className="w-[600px] h-[600px] rounded-3xl"
        src={profileImage}
        alt=""
      />
    </div>
  );
};

export default AboutMe;
