import React, { useEffect, useState } from "react";
import "./ContactUS.css";
import img1 from "../../assets/Contact us/Iconly-Light-Call.svg";
import img2 from "../../assets/Contact us/Iconly-Light-Edit.svg";
import img3 from "../../assets/Contact us/Iconly-Light-Info Circle.svg";
import img4 from "../../assets/Contact us/Iconly-Light-Message.svg";
import img5 from "../../assets/Contact us/Iconly-Light-Profile.svg";
import axios from "axios";
import API_HOST from "../../env";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid white",
  boxShadow: 24,
  p: 4,
};
export default function ContactUS({ width }) {
  const [togglebaraddress, setTogglebaraddress] = useState(2);
  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePostContactUs = () => {
    if (Object.getOwnPropertyNames(validate(formValues)).length !== 0) {
      setFormErrors(validate(formValues));
      return false;
    }
    if (Object.getOwnPropertyNames(validate(formValues)).length === 0) {
      setFormErrors(validate(formValues));
    }

    const formdata = new FormData();

    formdata.append("firstName", formValues.firstName);
    formdata.append("lastName", formValues.lastName);
    formdata.append("emailId", formValues.emailId);
    formdata.append("mobileNo", formValues.mobileNo);
    formdata.append("queries", formValues.queries);
    formdata.append("shortDescription", formValues.shortDescription);

    axios
      .post(`${API_HOST}/contactUs/addContact`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setFormValues({
          firstName: "",
          lastName: "",
          emailId: "",
          mobileNo: "",
          queries: "",
          shortDescription: "",
        });
        handleOpen3()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* VALIDATION FUNCTIONALITY */
  const initialValues = {
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNo: "",
    queries: "",
    shortDescription: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChangeHomeFormVal = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // var regularExpressionPassword = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    const specialCharacter = /.*[\W_]/;
    const mobRegex = /^\d{10}$/;

    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.queries) {
      errors.queries = "Queries should not be empty";
    }
    if (!values.shortDescription) {
      errors.shortDescription = "Short Description is required!";
    }
    if (!values.emailId) {
      errors.emailId = "Email is required!";
    } else if (!regex.test(values.emailId)) {
      errors.emailId = "The email address is improperly formatted!";
    }
    if (!values.mobileNo) {
      errors.mobileNo = "Mobile No is required!";
    } else if (!mobRegex.test(values.mobileNo)) {
      errors.mobileNo = "Please put 10  digit mobile number!";
    }

    return errors;
  };
  return (
    <div>
      <div
        style={{
          margin: "0vw 0vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          height: width > 700 ? "25vw" : "60vw",
        }}
        className="homebluebox"
      >
        <div className="homeblueboxtitle">We 'd Love to from you</div>
        <div className="homeblueboxsubtitle">
          Have questions about our products, features, trails, or pricing? Need
          a demo? Our teams will help you.
        </div>

        <a href="mailto:hello@44resources.com">
          <button style={{ border: "none" }} className="homeworktop-button">
            Mail us
          </button>
        </a>
      </div>

      <div className="conactusform">
        <div style={{ margin: "1vw 1vw 2vw" }} className="abouttitileheading">
          Contact us
        </div>
        <div
          style={{
            display: width > 700 ? "flex" : "block",
            justifyContent: "space-between",
          }}
          className="nameboxflex"
        >
          <div
            style={{ width: width > 700 ? "47%" : "100%" }}
            className="nameinput"
          >
            <img src={img5} alt="" />

            <input
              placeholder="First Name"
              type="text"
              // onChange={(e) => {setFirstName(e.target.value)}}
              name="firstName"
              value={formValues.firstName}
              onChange={handleChangeHomeFormVal}
            />
          </div>
          <div
            style={{ width: width > 700 ? "47%" : "100%" }}
            className="nameinput"
          >
            {" "}
            {width <= 700 && <img src={img5} alt="" />}
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              value={formValues.lastName}
              // onChange={(e) => {setLastName(e.target.value)}}
              onChange={handleChangeHomeFormVal}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0vw 0vw 1vw 0vw",
          }}
        >
          <span style={{ color: "red", fontSize: "1vw" }}>
            {formErrors.firstName}
          </span>
          <span style={{ color: "red", fontSize: "1vw" }}>
            {formErrors.lastName}
          </span>
        </div>
        <div className="nameinput">
          <img src={img4} alt="" />

          <input
            placeholder="Email"
            type="text"
            name="emailId"
            value={formValues.emailId}
            // onChange={(e) => {setEmailId(e.target.value)}}
            onChange={handleChangeHomeFormVal}
          />
        </div>
        <span style={{ color: "red", fontSize: "1vw" }}>
          {formErrors.emailId}
        </span>
        <div className="nameinput">
          <img src={img1} alt="" />

          <input
            placeholder="Mobile Number"
            type="number"
            name="mobileNo"
            value={formValues.mobileNo}
            // onChange={(e) => {setMobileNo(e.target.value)}}
            onChange={handleChangeHomeFormVal}
          />
        </div>
        <span style={{ color: "red", fontSize: "1vw" }}>
          {formErrors.mobileNo}
        </span>
        <div className="nameinput">
          <img src={img3} alt="" />

          <input
            placeholder="Queries"
            type="text"
            name="queries"
            value={formValues.queries}
            // onChange={(e) => {setQueries(e.target.value)}}
            onChange={handleChangeHomeFormVal}
          />
        </div>
        <span style={{ color: "red", fontSize: "1vw" }}>
          {formErrors.queries}
        </span>
        <div
          style={{
            height: width > 700 ? "12vw" : "40vw",
            alignItems: "flex-start",
          }}
          className="nameinput"
        >
          <img
            style={{ position: "relative", bottom: "0.5vw" }}
            src={img2}
            alt=""
          />
          <textarea
            rows="7"
            placeholder="Short Description"
            type="text"
            name="shortDescription"
            value={formValues.shortDescription}
            // onChange={(e) => {setShortDescription(e.target.value)}}
            onChange={handleChangeHomeFormVal}
          />
        </div>
        <span style={{ color: "red", fontSize: "1vw" }}>
          {formErrors.shortDescription}
        </span>
        <div>
          <button
            style={{ margin: "auto" }}
            className={"hb-button"}
            onClick={handlePostContactUs}
          >
            Submit
          </button>
        </div>
      </div>

      <div className="Addresscontactustitle">Office Address</div>

      <div className="officetoogleadrress">
        <div
          onClick={() => setTogglebaraddress(2)}
          className="officeaddressName"
        >
          Haryana{" "}
        </div>
      </div>

      <div className="addressImg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.004935850149!2d77.30520551455535!3d28.449267599103717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc71fc142ab5%3A0x5d45f4d6373c8fe1!2s44%20Resources!5e0!3m2!1sen!2sin!4v1659347186668!5m2!1sen!2sin"
          title="myFrame"
          style={{ border: "0", width: "100%", height: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div></div>
      <Modal
          open={open3}
          onClose={handleClose3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="profiletitleandmenunav">
              <div className="profiledetailstitle"> Query Submit  </div>
              <div className="profiledetailnavmanu">
                <div>
                  <CloseIcon
                    onClick={handleClose3}
                    style={{ fontSize: "1.5vw", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <hr style={{ color: "#00000090" }} />

            <div style={{ left: "0vw", width: "100%" }} className="loginfield">
               Your  Query is submitted successfully , our team working on that . Your Query will resolve soon .. 
            </div>

          
        </Box>
        </Modal>
    
    </div>
  );
}
