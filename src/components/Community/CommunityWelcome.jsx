import React from "react";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import SearchIcon from "@mui/icons-material/Search";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import img from "../../assets/Success stories/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.png";
import { useNavigate } from "react-router";
import img1 from '../../assets/Community/category.svg'
import img2 from '../../assets/Community/client.svg'
import img3 from '../../assets/Community/freelancer.svg'
import img4 from '../../assets/Community/rocket.svg'
import img5 from '../../assets/Community/support-team.svg'
export default function CommunityWelcome() {
  const navigate = useNavigate();
  return (
    <div style={{ width: "100vw", padding: "1vw 4vw" }}>
      <div className="titlewelcomec">Welcome to the 44 Resources Community</div>

      <div className="searchCommunitybar">
        <div
          style={{ width: "40vw", margin: "auto" }}
          className="SearchBoxCareer"
        >
          <SearchIcon style={{ fontSize: "1.7vw", margin: "0.6vw" }} />
          <input type="text" placeholder="Search relevant Categories" />
        </div>
      </div>
      <div className="flexoftotoalCommunity">
        <div className="totalComnituydata">
          <span>7077</span> Topic
        </div>
        <div className="totalComnituydata">
          <span>18,963</span> Topic
        </div>
        <div className="totalComnituydata">
          <span>18,963</span> Topic
        </div>
      </div>
      <div className="flexofcardstypeCommunity">
        <div
          onClick={() => {
            navigate("/commuinity/New to 44 resource");
          }}
          className="boxoftypecategory"
        >
          <div className="boccomuntyimg">
            <img src={img4} alt="" style={{width: "7.5vw",objectFit:"contain" }} />
          </div>
          <div className="boxtitlecommunty">New to 44 resource</div>
          <div className="subtitileboxcommmnity">
            Best Practices , tips, and Advice From Your Peers
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/commuinity/Freelaunchers");
          }}
          className="boxoftypecategory"
        >
          <div className="boccomuntyimg">
          <img src={img3} alt="" style={{width: "7.2vw",objectFit:"contain" }} />
          </div>
          <div className="boxtitlecommunty">Freelaunchers</div>
          <div className="subtitileboxcommmnity">
            Best Practices , tips, and Advice From Your Peers
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/commuinity/Clients");
          }}
          className="boxoftypecategory"
        >
          <div className="boccomuntyimg">
          <img src={img2} alt="" style={{width: "7.5vw",objectFit:"contain" }} />
          </div>
          <div className="boxtitlecommunty">Clients</div>
          <div className="subtitileboxcommmnity">
            Best Practices , tips, and Advice From Your Peers
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/commuinity/Categories");
          }}
          className="boxoftypecategory"
        >
          <div className="boccomuntyimg">
          <img src={img1} alt="" style={{width: "7vw",objectFit:"contain" }} />
          </div>
          <div className="boxtitlecommunty">Categories</div>
          <div className="subtitileboxcommmnity">
            Best Practices , tips, and Advice From Your Peers
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/commuinity/Support");
          }}
          className="boxoftypecategory"
        >
          <div className="boccomuntyimg">
          <img src={img5} alt="" style={{width: "9vw",objectFit:"contain" }} />
          </div>
          <div className="boxtitlecommunty">Support</div>
          <div className="subtitileboxcommmnity">
            Best Practices , tips, and Advice From Your Peers
          </div>
        </div>
      </div>

      <div style={{ textAlign: "left" }} className="titlewelcomec">
        Current Trending
      </div>
      <div className="currentCommuntyboxscrool">
        <div className="boxofCurrentcommntuy">
          <div style={{ height: "14vw" }}>
            <img src={img} alt="" />
          </div>
          <div className="titleofCurrentCommuntybox">
            A Comprehensive Social Media strategy for your business.
          </div>
        </div>
        <div className="boxofCurrentcommntuy">
          <div style={{ height: "14vw" }}>
            <img src={img} alt="" />
          </div>
          <div className="titleofCurrentCommuntybox">
            A Comprehensive Social Media strategy for your business.
          </div>
        </div>
        <div className="boxofCurrentcommntuy">
          <div style={{ height: "14vw" }}>
            <img src={img} alt="" />
          </div>
          <div className="titleofCurrentCommuntybox">
            A Comprehensive Social Media strategy for your business.
          </div>
        </div>
        <div className="boxofCurrentcommntuy">
          <div style={{ height: "14vw" }}>
            <img src={img} alt="" />
          </div>
          <div className="titleofCurrentCommuntybox">
            A Comprehensive Social Media strategy for your business.
          </div>
        </div>
        <div className="boxofCurrentcommntuy">
          <div style={{ height: "14vw" }}>
            <img src={img} alt="" />
          </div>
          <div className="titleofCurrentCommuntybox">
            A Comprehensive Social Media strategy for your business.
          </div>
        </div>
      </div>
      <div style={{ textAlign: "left" }} className="titlewelcomec">
        Community Activity{" "}
      </div>

      <div style={{}}>
        <div className="BoxofactivityCommunity">
          <div className="imgboxofActibicom">
            <img src={img} alt="" />
          </div>
          <div className="titleofdataActivuyComnuty">
            <div className="titleofdataActivuyComnuty1">
              Due to technical difficulties we are unable to process your
              request. Please try again later.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Please I made a withdrawal on Monday 16th May using the direct to
              ACH US bank method and I've gotten the payment confirmation email
              but I'm yet to get any notice maybe the money has been processed
              or not and I'm yet to see the money deposited inside the account.
              Kindly help me do something about it. I opened a support ticket
              but it was closed without a reply or providing solution. I do not
              know the cause of that too.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Done by <span>Mathews H</span>{" "}
            </div>

            <div className="flexoflikeandComment">
              <div>
                <ThumbUpOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>

              <div></div>
              <div>
                {" "}
                <CommentOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>
            </div>
          </div>
        </div>
        <div className="BoxofactivityCommunity">
          <div className="imgboxofActibicom">
            <img src={img} alt="" />
          </div>
          <div className="titleofdataActivuyComnuty">
            <div className="titleofdataActivuyComnuty1">
              Due to technical difficulties we are unable to process your
              request. Please try again later.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Please I made a withdrawal on Monday 16th May using the direct to
              ACH US bank method and I've gotten the payment confirmation email
              but I'm yet to get any notice maybe the money has been processed
              or not and I'm yet to see the money deposited inside the account.
              Kindly help me do something about it. I opened a support ticket
              but it was closed without a reply or providing solution. I do not
              know the cause of that too.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Done by <span>Mathews H</span>{" "}
            </div>

            <div className="flexoflikeandComment">
              <div>
                <ThumbUpOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>

              <div></div>
              <div>
                {" "}
                <CommentOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>
            </div>
          </div>
        </div>
        <div className="BoxofactivityCommunity">
          <div className="imgboxofActibicom">
            <img src={img} alt="" />
          </div>
          <div className="titleofdataActivuyComnuty">
            <div className="titleofdataActivuyComnuty1">
              Due to technical difficulties we are unable to process your
              request. Please try again later.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Please I made a withdrawal on Monday 16th May using the direct to
              ACH US bank method and I've gotten the payment confirmation email
              but I'm yet to get any notice maybe the money has been processed
              or not and I'm yet to see the money deposited inside the account.
              Kindly help me do something about it. I opened a support ticket
              but it was closed without a reply or providing solution. I do not
              know the cause of that too.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Done by <span>Mathews H</span>{" "}
            </div>

            <div className="flexoflikeandComment">
              <div>
                <ThumbUpOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>

              <div></div>
              <div>
                {" "}
                <CommentOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>
            </div>
          </div>
        </div>
        <div className="BoxofactivityCommunity">
          <div className="imgboxofActibicom">
            <img src={img} alt="" />
          </div>
          <div className="titleofdataActivuyComnuty">
            <div className="titleofdataActivuyComnuty1">
              Due to technical difficulties we are unable to process your
              request. Please try again later.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Please I made a withdrawal on Monday 16th May using the direct to
              ACH US bank method and I've gotten the payment confirmation email
              but I'm yet to get any notice maybe the money has been processed
              or not and I'm yet to see the money deposited inside the account.
              Kindly help me do something about it. I opened a support ticket
              but it was closed without a reply or providing solution. I do not
              know the cause of that too.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Done by <span>Mathews H</span>{" "}
            </div>

            <div className="flexoflikeandComment">
              <div>
                <ThumbUpOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>

              <div></div>
              <div>
                {" "}
                <CommentOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>
            </div>
          </div>
        </div>
        <div className="BoxofactivityCommunity">
          <div className="imgboxofActibicom">
            <img src={img} alt="" />
          </div>
          <div className="titleofdataActivuyComnuty">
            <div className="titleofdataActivuyComnuty1">
              Due to technical difficulties we are unable to process your
              request. Please try again later.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Please I made a withdrawal on Monday 16th May using the direct to
              ACH US bank method and I've gotten the payment confirmation email
              but I'm yet to get any notice maybe the money has been processed
              or not and I'm yet to see the money deposited inside the account.
              Kindly help me do something about it. I opened a support ticket
              but it was closed without a reply or providing solution. I do not
              know the cause of that too.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Done by <span>Mathews H</span>{" "}
            </div>

            <div className="flexoflikeandComment">
              <div>
                <ThumbUpOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>

              <div></div>
              <div>
                {" "}
                <CommentOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>
            </div>
          </div>
        </div>
        <div className="BoxofactivityCommunity">
          <div className="imgboxofActibicom">
            <img src={img} alt="" />
          </div>
          <div className="titleofdataActivuyComnuty">
            <div className="titleofdataActivuyComnuty1">
              Due to technical difficulties we are unable to process your
              request. Please try again later.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Please I made a withdrawal on Monday 16th May using the direct to
              ACH US bank method and I've gotten the payment confirmation email
              but I'm yet to get any notice maybe the money has been processed
              or not and I'm yet to see the money deposited inside the account.
              Kindly help me do something about it. I opened a support ticket
              but it was closed without a reply or providing solution. I do not
              know the cause of that too.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Done by <span>Mathews H</span>{" "}
            </div>

            <div className="flexoflikeandComment">
              <div>
                <ThumbUpOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>

              <div></div>
              <div>
                {" "}
                <CommentOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>
            </div>
          </div>
        </div>
        <div className="BoxofactivityCommunity">
          <div className="imgboxofActibicom">
            <img src={img} alt="" />
          </div>
          <div className="titleofdataActivuyComnuty">
            <div className="titleofdataActivuyComnuty1">
              Due to technical difficulties we are unable to process your
              request. Please try again later.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Please I made a withdrawal on Monday 16th May using the direct to
              ACH US bank method and I've gotten the payment confirmation email
              but I'm yet to get any notice maybe the money has been processed
              or not and I'm yet to see the money deposited inside the account.
              Kindly help me do something about it. I opened a support ticket
              but it was closed without a reply or providing solution. I do not
              know the cause of that too.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Done by <span>Mathews H</span>{" "}
            </div>

            <div className="flexoflikeandComment">
              <div>
                <ThumbUpOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>

              <div></div>
              <div>
                {" "}
                <CommentOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>
            </div>
          </div>
        </div>
        <div className="BoxofactivityCommunity">
          <div className="imgboxofActibicom">
            <img src={img} alt="" />
          </div>
          <div className="titleofdataActivuyComnuty">
            <div className="titleofdataActivuyComnuty1">
              Due to technical difficulties we are unable to process your
              request. Please try again later.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Please I made a withdrawal on Monday 16th May using the direct to
              ACH US bank method and I've gotten the payment confirmation email
              but I'm yet to get any notice maybe the money has been processed
              or not and I'm yet to see the money deposited inside the account.
              Kindly help me do something about it. I opened a support ticket
              but it was closed without a reply or providing solution. I do not
              know the cause of that too.
            </div>
            <div className="commentofdataActivuyComnuty1">
              Done by <span>Mathews H</span>{" "}
            </div>

            <div className="flexoflikeandComment">
              <div>
                <ThumbUpOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>

              <div></div>
              <div>
                {" "}
                <CommentOutlinedIcon style={{ fontSize: "1.5vw" }} />
              </div>
              <div>1923</div>
            </div>
          </div>
        </div>

        <div className="ViewMorebutton">View More</div>
      </div>
    </div>
  );
}
