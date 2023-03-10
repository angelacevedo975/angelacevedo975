import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
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
          marginTop: "50px",
        }}
      >
        <WhoIAm></WhoIAm>
      </div>
    </div>
  );
}
