import { Link, useParams } from "react-router-dom";
import jsonData from "../../../public/projects.json";
import "./Details.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination, Navigation } from "swiper";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";

const Details = () => {
  const { id } = useParams();
  const project = jsonData.projects.find((project) => project.id === id);
  console.log(project);
  return (
    <div className="detailsPage p-5 md:p-40">
      <Link to="/">
        <button className="btn btn-outline mt-10 bg-gray-900 text-white border-gray-800">
          Go Back
        </button>
      </Link>
      <h2 className="text-5xl text-white my-10 text-center">{project.name}</h2>
      <div className="md:px-96">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {project.photos.map((pht, index) => (
            <SwiperSlide className="h-[600px] w-[800px]" key={index}>
              <img className="h-[600px] w-[800px]" src={pht} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-white my-10 w-11/12 md:flex gap-10">
        <div className="w-11/12">
          <h2 className="text-4xl underline my-5 ">Description:</h2>
          <p>{project.descriptions[1]}</p>
        </div>
        <div>
          <h2 className="text-4xl underline w-1/12 my-5">Technologies:</h2>
          <p>
            <ul className="space-x-3 space-y-3">
              {project.technologies.map((tech, index) => (
                <button
                  className="btn btn-outline bg-gray-900 text-white border-gray-800"
                  key={index}
                >
                  {tech}
                </button>
              ))}
            </ul>
          </p>
        </div>
      </div>
      <div className="md:flex justify-center gap-10">
        <a href={project.liveLink}>
          <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
            <FaExternalLinkAlt /> View Live Website
          </button>
        </a>
        <a href={project.githubClientLink}>
          <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
            <FaGithubAlt /> Github Client Repository
          </button>
        </a>
        <a href={project.githubServerLink}>
          <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
            <FaGithubAlt /> Github Server Repository
          </button>
        </a>
      </div>
    </div>
  );
};

export default Details;
