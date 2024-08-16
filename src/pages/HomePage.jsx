import React from 'react'
import { Features, Header, HeroSection, Methodologies } from "../components";

export const HomePage = () => {
	return (
    <>
      <Header />
      <main>
        <HeroSection />
				<Methodologies />
				<Features />
      </main>
    </>
  );
}
