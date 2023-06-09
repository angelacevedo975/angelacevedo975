import React from "react";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Projects } from "../components/Projects";
import Skills from "../components/Skills";
import WhoIAm from "../components/WhoIAm";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Hero></Hero>
      </div>
      <div
        style={{
          backgroundColor: "#262626",
          margin: "0",
        }}
      >
        <WhoIAm></WhoIAm>
      </div>
      <div
        style={{
          paddingTop: "50px",
          backgroundColor: "#262626",
          margin: "0",
        }}
      >
        <Skills></Skills>
      </div>
      <div
        style={{
          paddingTop: "50px",
          backgroundColor: "#262626",
        }}
      >
        <Certifications></Certifications>
      </div>
      <div
        style={{
          paddingTop: "50px",
          backgroundColor: "#262626",
        }}
      >
        <Experience></Experience>
      </div>
      <div
        style={{
          paddingTop: "50px",
          backgroundColor: "#262626",
        }}
      >
        <Footer></Footer>
      </div>
    </div>
  );
}
