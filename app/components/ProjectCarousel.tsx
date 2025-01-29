"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for the props
interface ProjectCarouselProps {
  images: string[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images }) => {
  if (images.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 bg-gray-200 rounded-lg">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable arrows
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Slide every 3 seconds
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative flex justify-center">
            <img
              src={image}
              alt={`Project Screenshot ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </Slider>

      {/* Custom Arrows (Optional) */}
      <style jsx global>{`
        .slick-prev,
        .slick-next {
          width: 40px;
          height: 40px;
          z-index: 10;
        }
        .slick-prev {
          left: -50px;
        }
        .slick-next {
          right: -50px;
        }
        .slick-prev:before,
        .slick-next:before {
          font-size: 30px;
          color: #1e40af;
        }
      `}</style>
    </div>
  );
};

export default ProjectCarousel;
