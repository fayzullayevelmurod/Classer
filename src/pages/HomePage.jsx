import React from "react";
import {
  Features,
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
      </main>
    </>
  );
};
