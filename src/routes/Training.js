import React from "react";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import TrainingSection from "../components/Training";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage headings="Training" text="Pre-flight & In-flight Training" />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;
