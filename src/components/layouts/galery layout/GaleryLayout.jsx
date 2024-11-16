import React, { useEffect } from "react";
import brideImg from "../../../assets/images/bride2.png";
import one from "../../../assets/images/1.png";
import two from "../../../assets/images/2.png";
import three from "../../../assets/images/3.png";
import four from "../../../assets/images/4.png";
import five from "../../../assets/images/5.png";
import six from "../../../assets/images/6.png";
import seven from "../../../assets/images/7.png";
import eight from "../../../assets/images/8.png";
import nine from "../../../assets/images/9.png";
import ten from "../../../assets/images/10.png";
import eleven from "../../../assets/images/11.png";
import tweleve from "../../../assets/images/12.png";
import videoPwd from "../../../assets/videos/vidPWD.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

// Array of gallery images
const galleryImages = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  tweleve,
];

const GalleryItem = ({ src, index }) => (
  <div
    key={index}
    className="relative overflow-hidden rounded-md"
    style={{
      gridRowEnd: `span ${Math.ceil(Math.random() * 2)}`,
    }}
  >
    <div className="w-full h-full group" data-aos="fade-up">
      <img
        src={src}
        alt={`Gallery item ${index + 1}`}
        className="w-full h-full object-cover scale-125 group-hover:scale-100 transition duration-500"
      />
    </div>
  </div>
);

export default function GaleryLayout() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${brideImg})` }}
    >
      <div className="p-10 w-full">
        <h1
          className="font-EBGaramond font-normal text-4xl text-center text-secondary mb-5"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          GALERY
        </h1>
        <div>
          {/* Video Player */}
          <video
            data-aos="fade-up"
            data-aos-duration="500"
            src={videoPwd}
            controls
            className="w-full mb-10 rounded-md"
          ></video>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 gap-2">
            {galleryImages.map((image, index) => (
              <GalleryItem key={index} src={image} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
