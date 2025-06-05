import React, { useState } from "react";
import img1 from "../../assets/About/procreator-ux-design-studio-VzJjPuk53sk-unsplash.png";
import "./Howitwork.css";
export default function Howitworkbanner() {
  const [postfindbuttontotggle, setPostfindbuttontotggle] = useState(true);
  return (
    <div>
      <div style={{ marginTop: "2vw" }} className="Aboutabout-container">
        <div className="abouttitileheading">How it Works</div>
        <div style={{ marginTop: "3vw", display: "flex" }}>
          <div style={{ width: "55%" }}>
            <div className="blackaboutaboutdata">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
              incidunt! Ipsum modi ea placeat maiores molestiae omnis? A totam
              accusamus similique optio nam quos doloremque quis debitis ipsa?
              Molestiae, qui! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Accusantium amet magnam mollitia eum pariatur, esse
              asperiores porro animi repellendus reiciendis fugiat recusandae
              ratione debitis obcaecati reprehenderit earum dicta. Animi,
              eligendi?{" "}
            </div>
            <div className="blackaboutaboutdata">
              One-stop solution to sort all your requirement ranging
              frome-commerce setup , Software Development ,Career Guidance,
              Banking, Insurance, Business to Local Services, quickly,
              Development ,Career Guidance, Banking, Insurance, Business to
              Local Services, quickly, professionally and conveniently.
            </div>
            <div className="buttons-habnner">
              <button
                className={postfindbuttontotggle ? "hb-button" : "hb-buttonx"}
                onClick={() => setPostfindbuttontotggle(true)}
              >
                Work Finder
              </button>
              <button
                style={{ position: "relative", right: "4vw" }}
                className={postfindbuttontotggle ? "hb-buttonx" : "hb-button"}
                onClick={() => setPostfindbuttontotggle(false)}
              >
                Work Posted
              </button>
            </div>
          </div>

          <div className="aboutaboutimg">
            <img style={{ height: "28vw" ,borderRadius:"0.61vw"}} src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
