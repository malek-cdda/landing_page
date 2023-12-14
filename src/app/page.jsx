import Footer from "@/components/Footer/Footer";
import Layoutes from "@/components/Layoutes";
import Modal from "@/components/Modal/Modal";
import Navbar from "@/components/Navbar/Navbar";
import CardCarousel from "@/components/SingleCarousel/CardCarousel";
import Team from "@/components/Team/Team";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* <Navbar />
      <Team />
      <Footer></Footer> */}
      {/* <Modal /> */}
      <Layoutes />
      <CardCarousel />
    </div>
  );
};

export default Home;
