import React, { useState } from "react";
import SideBar from "../../SideBar";
import Navbar from "../Navbar";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtn,
  HeroItems,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Uganda</HeroH1>
          <HeroP>ready in 90 seconds</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
