"use client";

import { Footer } from "../footer/Footer";
import { BannerImages } from "./BannerImages";
import { CardsContainer } from "./CardsContainer";
import ImageSlider from "./ImageSlider";
import InfoCards from "./InfoCards";
import { Promos } from "./Promos";

export const Hero = () => {
  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <ImageSlider />

        <div className="my-12">
          <Promos />
        </div>

        <div className="my-12">
          <CardsContainer titulo="Recomendados" />
        </div>

        <div className="my-12">
          <InfoCards />
        </div>
        <div className="my-12">
          <BannerImages />
        </div>
        <div className="my-12">
          <CardsContainer titulo="Novedades" />
        </div>
      </div>
      <Footer />
    </>
  );
};
