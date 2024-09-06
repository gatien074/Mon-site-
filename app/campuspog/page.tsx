"use client";
import React from "react";
import Formp from '../components/formpog'
import Gallery from '../components/imgpog';
import Infop from '../components/infopog';
import Prem from '../components/secpog';
import Main from '../components/Main'
import Footer from "../components/Footer";

const HomePage = () => (
  <main className="bg-white text-black py-8">
    <div className="container mx-auto">
    <Main />
      <Prem />
      <Gallery />
      <Infop />
      <Formp />
      <Footer/>
    </div>
  </main>

);

export default HomePage;
