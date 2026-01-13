import React from "react";
import Layout from "../../components/Layouts/Layout";
import Hero from "../../components/Layouts/Hero";
import Service from "../../components/Layouts/Service";
import BannerSection from "../../components/Layouts/BannerSection";
import defaultImage from "../../assets/blog2.jpg";
import secondImage from "../../assets/blog4.jpeg";
import AboutUs from "../../components/Layouts/AboutUs";
import Blogs from "../../components/Layouts/Blogs";
import WhyChooseUs from "../../components/Layouts/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <BannerSection img={defaultImage} />
      <BannerSection reverse={true} img={secondImage} />
      <AboutUs />
      <Blogs />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
