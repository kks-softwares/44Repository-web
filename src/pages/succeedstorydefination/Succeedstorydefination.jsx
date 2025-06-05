import React, { useLayoutEffect } from "react";
import Footer from "../../components/footer/Footer";
import Footer2 from "../../components/footer/Footer2";

import Succedsdefinationbanner from "../../components/Succedsdefination/Succedsdefinationbanner";
import Successstorybottom from "../../components/Succedsdefination/successstorybottom";

import "./Succeedstoryd.css";
export default function Succeedstorydefination() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  });
  return (
    <>
      <Succedsdefinationbanner />
      <Successstorybottom />
     
    </>
  );
}
