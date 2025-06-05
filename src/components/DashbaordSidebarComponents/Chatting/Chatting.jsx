import React, { useEffect, useRef, useState } from "react";
import "./chatting.css";
import img3x from "../../../assets/Dashboard/send_black_24dp.svg";
import CancelTwoToneIcon from "@mui/icons-material/CancelTwoTone";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import { AttachFileRounded, EmojiEmotionsRounded } from "@mui/icons-material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import img from "../../../assets/My profile – 28/austin-distel-tLZhFRLj6nY-unsplash.png";
import { useSelector } from "react-redux";
export default function Chatting() {
  const { user, loggedInStatus } = useSelector((state) => state.user);
  const inputRef = useRef();
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState("");
  const [file, setFile] = useState();
  const { messangers } = useSelector((state) => state.filters);
  const [chatMessage, setchatMessage] = useState("");
  const [setemojiview, setSetemojiview] = useState(false);
  const [chosenEmoji, setChosenEmoji] = useState(null);
  useEffect(() => {
    const el = document.querySelector(".chat-withchat-box");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messangers]);

  useEffect(() => {
    const el = document.querySelector(".chat-withchat-box");
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, []);
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject.emoji);
    setchatMessage(chatMessage + emojiObject.emoji);
    setMessage(chatMessage + emojiObject.emoji);
  };
  return (
    <div style={{ display: "flex" }} className="BrowseWorkMain-cntainer">
      <div className="chatTogglebox">
        <div className="datebox">TODAY</div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
        <div className="currentchatNamebox">
          <div className="nameimg">
            <img src={img} alt="" />
          </div>
          <div className="nametag">
            <div className="nameandtimemessage">
              <div className="titilemeaagename">Vikkranth</div>
              <div className="timemessagename">12:00 PM</div>
            </div>
            <div className="firstmessagemessahename">
              What is your current bid value?
            </div>
          </div>
        </div>
      </div>
      <div className="chatboxmessage">
        <div className="clientboctopmessage">
            <div className="imageofclientmessage">
                <img src={img} alt="" />
            </div>
            <div>
                <div className="nameofmessageclient">
                Revanth Singh
                </div>
                <div className="checkonlineclietmessage">
                  <span><FiberManualRecordIcon style={{margin:"0 0.61vw",fontSize:"1.3vw",color:"greenyellow"}}/></span>   Online
                </div>
            </div>
        </div>

        <div className="chatcontaract">
          <div
            style={{ width: "54.5vw", padding: "0vw" ,height:"35vw" }}
            className="chatboxescontact"
          >
            <div style={{maxHeight:"31.5rem",hieght:"34rem"}} id="messageBodyx" className="chatfielsarea chat-withchat-box">
              <div className="leftdata2c">
                <div className="leftdatac">Hi Revanth</div>
              </div>
              <div className="rightdata2c">
                <div className="rightdatac">Hi Revanth</div>
              </div>
              <div className="leftdata2c">
                <div className="leftdatac">
                  <img src={user?.media} alt="" />
                </div>
              </div>
              <div className="rightdata2c">
                <div className="rightdatac">
                  <img src={user?.media} alt="" />
                </div>
              </div>
            </div>
            <div className="chatsendfielsarea">
              <div className="fileandemojiandsendbox">
                <div style={{ display: "flex" }}>
                  <span>
                    <label style={{ cursor: "pointer" }}>
                      <AttachFileRounded />
                      <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                        hidden
                      />
                    </label>
                  </span>
                  <span>
                    <EmojiEmotionsRounded onClick={() => setToggle(!toggle)} />
                  </span>
                </div>
                {toggle ? (
                  <div style={{ hieght: "1vw" }}>
                    <div
                      style={{
                        position: "relative",
                        right: "5vw",
                        bottom: "22rem",
                        width: "0.001vw",
                        height: "0.001vw",
                      }}
                    >
                      <Picker
                        onEmojiClick={onEmojiClick}
                        skinTone={SKIN_TONE_MEDIUM_DARK}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="text-input" style={{ display: "flex" }}>
                <input
                  type="text"
                  value={file ? file.name : message}
                  placeholder={"Type message .."}
                  ref={inputRef}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
                {file ? (
                  <span>
                    <CancelTwoToneIcon
                      onClick={() => {
                        setFile(null);
                      }}
                      style={{ fontSize: "1.5vw", cursor: "pointer" }}
                    />
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className="fileandemojiandsendbox">
                <div>
                  <img
                    src={img3x}
                    variant="contained"
                    style={{
                      maxHieght: "2vw !important",
                      width: "2.53vw",
                      objectFit: "contain",
                    }}
                    className="sendbuttonx"
                    alt=""
                    //   onClick={handlesendMessage}
                  />
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
