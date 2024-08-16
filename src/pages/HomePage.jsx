import React from "react";
import {
  Features,
  Header,
  HeroSection,
  Methodologies,
  Subjects,
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
      </main>
    </>
  );
};
