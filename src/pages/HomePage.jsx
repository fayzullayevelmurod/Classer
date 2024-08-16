import React from "react";
import {
  FAQ,
  Features,
  Footer,
  Header,
  HeroSection,
  Methodologies,
  Subjects,
  Teachers,
} from "../components";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Methodologies />
        <Features />
        <Subjects />
        <Teachers />
        <FAQ />
      </main>

      <Footer />
    </>
  );
};
