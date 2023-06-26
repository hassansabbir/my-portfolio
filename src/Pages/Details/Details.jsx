import { useParams } from "react-router-dom";
import jsonData from "../../../public/projects.json";
import "./Details.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { Pagination, Navigation } from "swiper";

const Details = () => {
  const { id } = useParams();
  const project = jsonData.projects.find((project) => project.id === id);
  console.log(project);
  return (
    <div className="detailsPage md:p-80">
      <h2 className="text-5xl text-white my-10 text-center">{project.name}</h2>
      <div>
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
    </div>
  );
};

export default Details;
