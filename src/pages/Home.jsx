import React, { useEffect } from "react";

import Homeaboutwork from "../components/Home/homeAboutWork/Homeaboutwork";
import HomeBanner from "../components/Home/Homebanner/HomeBanner";
import HomeBenifit from "../components/Home/homebennifit/HomeBenifit";
import Homeblog from "../components/Home/homeblog/Homeblog";
import Homecategories from "../components/Home/Homecategories/Homecategories";
import Homedownload from "../components/Home/HomeDownload/Homedownload";
import Homesevices from "../components/Home/Homeservices/Homesevices";
import Hometrust from "../components/Home/hometrust/Hometrust";
import Hometext from "../components/Home/hometstimonial/Hometext";

import "./Home.css";
export default function Home({width}) {
    useEffect(() => {
        window.scrollTo(0, 0, { behavior: "smooth" });
      },[]);
    
    
  return (
    <div>
      <HomeBanner width={width}/>
      <Homecategories width={width}/>
      <Homesevices width={width}/>
      <HomeBenifit width={width}/>
      <Homeaboutwork width={width}/>
      <Hometext width={width}/>
      <Hometrust width={width}/>
      <Homeblog width={width}/>
      <Homedownload width={width}/>
     
    </div>
  );
}
