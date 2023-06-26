import { Link } from "react-router-dom";
import "./Banner.css";
import {
  FaDownload,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div className="fullBanner bg-fixed bg-no-repeat flex justify-center items-center text-white">
      <div className="items-center">
        <h2 className="text-5xl text-center mb-5">Hello!👋</h2>
        <h2 className="text-5xl text-center">I am Mahmud Hasan Sabbir</h2>

        <div className="flex justify-center gap-5 mt-5">
          <Link>
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaLinkedinIn className="w-8 h-8" />
            </button>
          </Link>
          <Link>
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaGithub className="w-8 h-8" />
            </button>
          </Link>
          <Link>
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              {" "}
              <FaFacebookF className="w-8 h-8" />
            </button>
          </Link>
          <Link>
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaTwitter className="w-8 h-8" />
            </button>
          </Link>
          <Link>
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaInstagram className="w-8 h-8" />
            </button>
          </Link>
        </div>
        <div className="flex gap-5 justify-center mt-6">
          <a href="https://drive.google.com/file/d/1NPtGyGesluJkujdtGkhOzdBcliFZ66dI/view">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800 flex">
              Download CV <FaDownload />
            </button>
          </a>
          <button className="btn btn-outline bg-gray-900 text-white border-gray-800 flex">
            Contact Me <FaPhone />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
