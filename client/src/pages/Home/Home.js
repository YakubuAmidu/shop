import React from "react";

import Slider from "../../components/Slider/Slider";
import Announcement from "../../components/Announcement/Announcement";
import Categories from "../../components/Categories/Categories";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="Slider">
      <Announcement />
      <Slider />
      <Categories />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
