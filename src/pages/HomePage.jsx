import React from 'react'
import { Header, HeroSection, Methodologies } from "../components";

export const HomePage = () => {
	return (
    <>
      <Header />
      <main>
        <HeroSection />
				<Methodologies />
      </main>
    </>
  );
}
