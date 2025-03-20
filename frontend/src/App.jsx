import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import User from "./components/User";

const App = () => {
  const userRef = useRef(null);
  const servicesRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <Navbar userRef={userRef} servicesRef={servicesRef} pricingRef={pricingRef} contactRef={contactRef} />
      
        <Hero />
      <div ref={servicesRef}>
        <Service />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <div ref={userRef}>
        <User />
      </div>
        <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
