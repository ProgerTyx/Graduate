import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import PriceListSection from "./PriceListSection";
import WhyWeSection from "./WhyWeSection";
import GallerySection from "./GallerySection";
import TeamSection from "./TeamSection";
import ReviewsSection from "./ReviewsSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <a href="#main-section" className="ui-to-top">
          <i className="material-icons">expand_less</i>
        </a>
        <MainSection />
        <PriceListSection />
        <WhyWeSection />
        <GallerySection />
        <TeamSection />
        <ReviewsSection />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
