import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Hero></Hero>
      </div>
    </div>
  );
}
