import React, { useLayoutEffect } from "react";

import Askquestion from "../../components/FAQ/Askquestion";
import Askquestionm from "../../components/FAQ/Askquestionm";
import "./Faq.css";

export default function FAQ() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  });
  return (
    <div>
      <div
        style={{
          padding: "1.6vw 7.5vw",
          background: "#F7F9FB",
        }}
        className="mobfaqbox"
      >
       
        <div className="askqestionpaged">
          <Askquestion />
        </div>
        <div className="askqestionpagem">
          <Askquestionm />
        </div>
      </div>
    </div>
  );
}
