import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-gray-950 text-white ">
      <div>
        <div className="flex justify-center gap-5">
          <a href="https://www.linkedin.com/in/mahmud-hasan-sabbir/">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaLinkedinIn className="w-5 h-5" />
            </button>
          </a>
          <a href="https://github.com/hassansabbir">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaGithub className="w-5 h-5" />
            </button>
          </a>
          <a href="https://web.facebook.com/mahmood.sabbir.9/">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              {" "}
              <FaFacebookF className="w-5 h-5" />
            </button>
          </a>
          <a href="https://twitter.com/MahmudHasan3087">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaTwitter className="w-5 h-5" />
            </button>
          </a>
          <a href="https://www.instagram.com/hassan_sabbir_87/">
            <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
              <FaInstagram className="w-5 h-5" />
            </button>
          </a>
        </div>
        <p>Copyright © 2023 - All right reserved by Mahmud Hasan Sabbir</p>
      </div>
    </footer>
  );
};

export default Footer;
