"use client";
import { CardsContainer } from "./CardsContainer";
import ImageSlider from "./ImageSlider";
import InfoCards from "./InfoCards";

export const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <ImageSlider />
      <CardsContainer titulo="Recomendados" />
      <InfoCards />
      <CardsContainer titulo="Novedades" />
    </div>
  );
};
