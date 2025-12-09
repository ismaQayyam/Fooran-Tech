import React, { useState, useEffect } from "react";
import Loader from "../../src/Components/Loader";

import Topbar from "../Components/Layout/Topbar";
import TalkUsModel from "../Components/TalkUsModel"; // Correct import
import Carsole from "../Components/Home/Carsole";
import CarsolCard from "../Components/Home/CarsolCard";
import ChooseUs from "../Components/Home/ChooseUs";
import WeShine from "../Components/Home/WeShine";
import Help from "../Components/Home/Help";
import Story from "../Components/Home/Story";
import LifeInFooran from "../Components/Home/LifeInFooran";
import JoinUs from "../Components/Home/JoinUs";

import Bottom from "../Components/Home/Bottom";
import Footer from "../Components/Layout/Footer";
import Banner from "../Components/Layout/Banner";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isTalkModalOpen, setIsTalkModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <Topbar onTalkClick={() => setIsTalkModalOpen(true)} />

      <TalkUsModel
        isOpen={isTalkModalOpen}
        onClose={() => setIsTalkModalOpen(false)}
      />

      <Carsole />
      <CarsolCard />
      <ChooseUs />
      <WeShine />
      <Help />
      <Story />
      <LifeInFooran />
      <JoinUs />
     
      <Bottom />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
