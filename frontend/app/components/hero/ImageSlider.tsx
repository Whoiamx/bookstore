import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "/bannerhero2.jpg",
    "/bannerhero1.jpg",
    "/banner5.jpg",
    "/banner4.jpg",
    "/banner3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="flex items-center justify-center gap-4 w-full max-w-screen-xl mx-auto mb-8">
      <button
        onClick={prevSlide}
        className="text-4xl text-gray-600 hover:text-black transition"
      >
        ⬅
      </button>

      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="w-full max-w-[1200px] h-[400px] sm:h-[500px] md:h-[550px] object-cover rounded-xl shadow-lg"
      />

      <button
        onClick={nextSlide}
        className="text-4xl text-gray-600 hover:text-black transition"
      >
        ➡
      </button>
    </div>
  );
};

export default ImageSlider;
