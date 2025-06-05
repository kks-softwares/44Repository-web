import React, { useEffect } from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import img2 from "../../../assets/file.svg";
import img3 from "../../../assets/close.svg";
import axios from "axios";
import API_HOST from "../../../env";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.91vw",

    color: "#263238",
    border: "yellow !important",
  },
}));

export default function BankEdit({
  setbankformDetails,
  setSelectedBankdetailedit,
  width,
  setArrayofbankdetail,
  selectedBankdetailedit,
}) {
  const classes = useStyles();

  const [jobTitle, setJobTitle] = useState("");
  const [jobaccountno, setJobaccountno] = useState("");
  const [jobaccountnoc, setJobaccountnoc] = useState("");
  const [ifccode, setIfccode] = useState("");
  const [file, setFile] = useState();
  const [degreeset, setDegreeset] = useState("");
  const [callagename, setCallagename] = useState("");
  const [bankerror, setBankerror] = useState("");
  const [bankbrancherror, setBankbrancherror] = useState("");
  const [bankholdernameerror, setBankholdernameerror] = useState("");
  const [bankaccountnoerror, setBankaccountnoerror] = useState("");
  const [bankifcerror, setBankifcerror] = useState("");
  const [bankimageerror, setBankimageerror] = useState("");
  const { user } = useSelector((state) => state.user);
  const handleSumbitbank = () => {
    if (
      !callagename ||
      !jobTitle ||
      !degreeset ||
      !jobaccountno ||
      !jobaccountnoc ||
      (!file && !selectedBankdetailedit?.files[0]?.file) ||
      !ifccode
    ) {
      if (!callagename) {
        setBankbrancherror("Branch name is required!");
      }
      if (!degreeset) {
        setBankerror("Bank name is required!");
      }
      if (!jobTitle) {
        setBankholdernameerror("Account holder name is required!");
      }
      if (!jobaccountno) {
        setBankaccountnoerror("Account no is required!");
      }
      if (!jobaccountnoc) {
        setBankaccountnoerror("Account no is required!");
      }
      if (!ifccode) {
        setBankifcerror("Ifsc code is required!");
      }
      if (!file && !selectedBankdetailedit?.files[0]?.file) {
        setBankimageerror("Passbook image is required!");
      }
      return false;
    } else if (jobaccountno !== jobaccountnoc) {
      setBankaccountnoerror("Confirm  Account no is will  be same!");
    } else {
      const formdata = new FormData();
      formdata.append("bankName", degreeset);
      formdata.append("accountHolderName", jobTitle);
      formdata.append("accountNumber", jobaccountno);
      formdata.append("confirmAccountNumber", jobaccountnoc);
      formdata.append("ifscCode", ifccode);
      formdata.append("primaryAcc", false);
      formdata.append("branchName", callagename);
      formdata.append("accountId", selectedBankdetailedit?.accountId);

      axios
        .post(`${API_HOST}/users/editAccount`, formdata, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("token")),
          },
        })
        .then((res) => {
          if (file) {
            axios
              .post(`${API_HOST}/users/removeAcc_files`, {
                _id: selectedBankdetailedit?.files[0]?._id,
                accountId: selectedBankdetailedit?.accountId,
              })
              .then(() => {
                const formdata = new FormData();
                formdata.append("accountId", selectedBankdetailedit?.accountId);
                formdata.append("fileName", file);
                axios
                  .post(`${API_HOST}/users/updateAcc_files`, formdata, {
                    headers: {
                      "Content-Type": "multipart/form-data",
                      Authorization:
                        "Bearer " + JSON.parse(localStorage.getItem("token")),
                    },
                  })
                  .then(() => {
                    axios
                      .get(
                        `${API_HOST}/users/viewACCount?pageSize=1000&pageNumber=1&userName=${user?.userName}`
                      )
                      .then((res) => {
                        setArrayofbankdetail(res.data?.success?.data);
                        setbankformDetails(false);
                        setSelectedBankdetailedit(false);
                        setCallagename("");
                        setJobTitle("");
                        setJobaccountno("");
                        setDegreeset("");
                        setIfccode("");
                        setJobaccountnoc("");
                        setFile("");
                      });
                  });
              });
          } else {
            axios
              .get(
                `${API_HOST}/users/viewACCount?pageSize=1000&pageNumber=1&userName=${user?.userName}`
              )
              .then((res) => {
                setArrayofbankdetail(res.data?.success?.data);
                setbankformDetails(false);
                setSelectedBankdetailedit(false);
                setCallagename("");
                setJobTitle("");
                setJobaccountno("");
                setDegreeset("");
                setIfccode("");
                setJobaccountnoc("");
                setFile("");
              });
          }
        });
    }
  };

  useEffect(() => {
    setCallagename(selectedBankdetailedit?.branchName);
    setJobTitle(selectedBankdetailedit?.accountHolderName);
    setJobaccountno(selectedBankdetailedit?.accountNumber);
    setDegreeset(selectedBankdetailedit?.bankName);
    setIfccode(selectedBankdetailedit?.ifscCode);
    setJobaccountnoc(selectedBankdetailedit?.accountNumber);
    setFile();
  }, [selectedBankdetailedit]);

  return (
    <div
      style={{
        width: width > 700 ? "70vw" : "90vw",
        margin: "auto",
        height: "fit-content",
        marginTop: "2vw",
      }}
      className="home-postjob-container"
    >
      <div
        style={{
          overflowX: "hidden",
          paddingLeft: "4vw",
          width: width > 700 ? "70vw" : "90vw",
          paddingTop: "2vw",
        }}
        className="homepostjob-right"
      >
        <div className="jobpostedformheading">Edit Bank Details</div>

        <div>
          <div style={{ left: "0vw", width: "100%" }} className="loginfield">
            <TextField
              id="outlined-basic"
              label="Search Bank"
              variant="outlined"
              value={degreeset}
              style={{ width: width > 700 ? "94%" : "100%" }}
              InputLabelProps={{
                style: {
                    fontSize: width > 700 ? "1vw" : "3vw",
                  fontFamily: "Poppins",
                  fontStyle: "500",
                  fontWeight: "500",
                  color: "black",
                },
              }}
              inputProps={{ className: classes.input }}
              onChange={(e) => {
                setDegreeset(e.target.value);
              }}
            />
          </div>
          <p
            style={{
              color: "red",
              fontSize: width > 700 ? "0.9vw" : "2.7vw",
            }}
          >
            {bankerror}
          </p>{" "}
          <div style={{ left: "0vw", width: "100%" }} className="loginfield">
            <TextField
              id="outlined-basic"
              label="Search Branch"
              value={callagename}
              variant="outlined"
              style={{ width: width > 700 ? "94%" : "100%" }}
              InputLabelProps={{
                style: {
                    fontSize: width > 700 ? "1vw" : "3vw",
                  fontFamily: "Poppins",
                  fontStyle: "500",
                  fontWeight: "500",
                  color: "black",
                },
              }}
              inputProps={{ className: classes.input }}
              onChange={(e) => {
                if (e.target.value === "") {
                  setCallagename(e.target.value);
                  setBankbrancherror("");
                } else {
                  setCallagename(e.target.value);
                  setBankbrancherror("");
                  //   setAnchorElx3c(e.currentTarget);
                }
              }}
            />
          </div>
          <p
            style={{
              color: "red",
              fontSize: width > 700 ? "0.9vw" : "2.7vw",
            }}
          >
            {bankbrancherror}
          </p>{" "}
          <div className="jobpodtedfieldtitile">Account Holder Name</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => {
                setJobTitle(e.target.value);
                setBankholdernameerror("");
              }}
            />
           { width > 700 &&<CloseIcon
              style={{
                position: "relative",
                right: "2vw",
                top: "1.1vw",
                fontSize: "1.5vw",
                cursor: "pointer",
              }}
              onClick={() => {
                setJobTitle("");
              }}
            />}
          </div>
          <p
            style={{
              color: "red",
              fontSize: width > 700 ? "0.9vw" : "2.7vw",
            }}
          >
            {bankholdernameerror}
          </p>{" "}
          <div className="jobpodtedfieldtitile">Account Number</div>
          <div className="jobpostfieldinputbox">
            <input
              type="number"
              value={jobaccountno}
              onChange={(e) => {
                setJobaccountno(e.target.value);
                setBankaccountnoerror("");
              }}
            />
            {width > 700 &&<CloseIcon
              style={{
                position: "relative",
                right: "2vw",
                top: "1.1vw",
                fontSize: "1.5vw",
                cursor: "pointer",
              }}
              onClick={() => {
                setJobaccountno("");
              }}
            />}
          </div>
          <div className="jobpodtedfieldtitile">Confirm Account Number</div>
          <div className="jobpostfieldinputbox">
            <input
              type="number"
              value={jobaccountnoc}
              onChange={(e) => {
                setJobaccountnoc(e.target.value);
                setBankaccountnoerror("");
              }}
            />
            {width > 700 &&<CloseIcon
              style={{
                position: "relative",
                right: "2vw",
                top: "1.1vw",
                fontSize: "1.5vw",
                cursor: "pointer",
              }}
              onClick={() => {
                setJobaccountnoc("");
              }}
            />}
          </div>
          <p
            style={{
              color: "red",
              fontSize: width > 700 ? "0.9vw" : "2.7vw",
            }}
          >
            {bankaccountnoerror}
          </p>{" "}
          <div className="jobpodtedfieldtitile">Ifsc Code</div>
          <div className="jobpostfieldinputbox">
            <input
              type="text"
              value={ifccode}
              onChange={(e) => {
                setIfccode(e.target.value.toUpperCase());
                setBankifcerror("");
              }}
            />
            { width > 700 &&<CloseIcon
              style={{
                position: "relative",
                right: "2vw",
                top: "1.1vw",
                fontSize: "1.5vw",
                cursor: "pointer",
              }}
              onClick={() => {
                setIfccode("");
              }}
            />}
          </div>
          <p
            style={{
              color: "red",
              fontSize: width > 700 ? "0.9vw" : "2.7vw",
            }}
          >
            {bankifcerror}
          </p>{" "}
          <div className="jobpodtedfieldtitile">Pass Book Document</div>
          <div
            style={{
              width: "92%",
              position: "relative",
              right: "2vw",
              bottom: "1vw",
            }}
            className="fileinputbox"
          >
            <label htmlFor="fileupload">
              <div>
                <FileUploadIcon
                  style={{
                    fontSize: width > 700?"3vw":"6vw",
                    color: "#8f92a173",
                    cursor: "pointer",
                  }}
                />
              </div>
              <input
                type="file"
                name="fileupload"
                id="fileupload"
                hidden
                onChange={(e) => {
                  setFile(e.target.files[0]);
                  setBankimageerror("");
                }}
              />
              <div className="min-maxhomejob" style={{ textAlign: "center" }}>
                Drag and Drop or Browse to upload
              </div>
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              fontSize: width > 700 ? "0.9vw" : "2.7vw",
              paddingRight: "2vw",
              textAlign: "right",
            }}
          >
            Please upload file having extensions .jpeg/ .jpg/ .png only.
            <br />
            Image should be less then 512 kb.
          </div>
          {file ? (
            <div style={{ width: width > 700 ? "100%":"90%" }} className="selectedhjobfile">
              <div>
                <img src={img2} alt="" />
              </div>
              <div className="">{file?.name}</div>
              <div>
                <img
                  style={{
                    marginLeft: "1vw",
                    width: width > 700 ? "1.2vw":"4vw",
                    cursor: "pointer",
                  }}
                  src={img3}
                  onClick={() => setFile()}
                  alt=""
                />
              </div>
            </div>
          ) : (
            <div style={{ width: "100%" }} className="selectedhjobfile">
              <div>
                <img src={img2} alt="" />
              </div>
              <div className="">{selectedBankdetailedit?.files[0]?.file.split("%24")[1]}</div>
            </div>
          )}
          <p
            style={{
              color: "red",
              fontSize: width > 700 ? "0.9vw" : "2.7vw",
            }}
          >
            {bankimageerror}
          </p>{" "}
          <div style={{ marginBottom: "4vw" }} className="homejobbuttons">
            <button
              style={{ background: "white" }}
              onClick={() => {
                setbankformDetails(false);
                setSelectedBankdetailedit(false);
              }}
            >
              Cancel
            </button>
            <button
              style={{ background: "white" }}
              onClick={() => {
                setFile();
                setJobTitle("");
              }}
            >
              Reset
            </button>
            <button
              style={{ color: "white" }}
              onClick={() => {
                handleSumbitbank();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
