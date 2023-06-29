import "./Banner.css";
import { TypeAnimation } from "react-type-animation";
import {
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import useScreen from "../../../hooks/useScreenSize";

const Banner = () => {
  const screenSize = useScreen();
  console.log(screenSize);

  return (
    <div className="fullBanner bg-fixed bg-no-repeat flex justify-center items-center text-white">
      <div className="items-center">
        <h2 className="text-5xl text-center mb-5">Hello!👋</h2>
        <h2 className="text-3xl md:text-5xl text-center">
          I'm Mahmud Hasan Sabbir
        </h2>
        <TypeAnimation
          sequence={[
            "Junior MERN Stack Developer",
            1000,
            "Junior Front-end developer",
            2000,
          ]}
          speed={50}
          style={{
            fontSize: screenSize > 600 ? "3rem" : "1.5rem",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
          repeat={Infinity}
          key={screenSize}
        />
        <div className="flex justify-center gap-5 mt-5">
          <a href="https://www.linkedin.com/in/mahmud-hasan-sabbir/">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaLinkedinIn className="w-8 h-8" />
            </button>
          </a>
          <a href="https://github.com/hassansabbir">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaGithub className="w-8 h-8" />
            </button>
          </a>
          <a href="https://web.facebook.com/mahmood.sabbir.9/">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              {" "}
              <FaFacebookF className="w-8 h-8" />
            </button>
          </a>
          <a href="https://twitter.com/MahmudHasan3087">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaTwitter className="w-8 h-8" />
            </button>
          </a>
          <a href="https://www.instagram.com/hassan_sabbir_87/">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaInstagram className="w-8 h-8" />
            </button>
          </a>
        </div>
        <div className="flex gap-5 justify-center mt-6">
          <a href="https://drive.google.com/file/d/1NPtGyGesluJkujdtGkhOzdBcliFZ66dI/view">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800 flex">
              Download CV <FaDownload />
            </button>
          </a>
          <a href="#contact">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800 flex">
              Contact Me <FaPhone />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
