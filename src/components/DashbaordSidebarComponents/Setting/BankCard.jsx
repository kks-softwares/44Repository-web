import React from "react";
import img51 from "../../../assets/Web 1280 – 14/Group 10219.svg";
import img from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Edit.svg";
import img1 from "../../../assets/Dashboard/Skill center – 2/Iconly-Light-outline-Delete.svg";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";
import API_HOST from "../../../env";
import { useSelector } from "react-redux";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const style1 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export default function BankCard({
  setSelectedBankdetailedit,
  setbankformDetails,
  data,
  setArrayofbankdetail,
  width,
  primaryAccount,
  setPrimaryAccount,
}) {
  const [open1, setOpen1] = React.useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const { user } = useSelector((state) => state.user);
  const setprimaryacc = () => {
    if (primaryAccount) {
      axios
        .post(`${API_HOST}/users/remakePrimary`, {
          accountId: data?._id,

          primaryId: primaryAccount?.primaryId,
        })
        .then((res) => {
          axios
            .get(
              `${API_HOST}/users/viewPrimary?pageSize=1000&pageNumber=1&userName=${user?.userName}`
            )
            .then((res) => {
              setPrimaryAccount(...res.data?.success?.data);
            });
        });
    } else {
      axios
        .post(`${API_HOST}/users/makePrimary`, {
          accountId: data?._id,
          userName: user?.userName,
          user_id: user?._id,
        })
        .then((res) => {
          axios
            .get(
              `${API_HOST}/users/viewPrimary?pageSize=1000&pageNumber=1&userName=${user?.userName}`
            )
            .then((res) => {
              setPrimaryAccount(...res.data?.success?.data);
            });
        });
    }
  };

  const handleDelete = () => {
    axios
      .post(`${API_HOST}/users/deleteAcc`, {
        accountId: data?.accountId,
      })
      .then((res) => {
        axios
          .get(
            `${API_HOST}/users/viewACCount?pageSize=1000&pageNumber=1&userName=${user?.userName}`
          )
          .then((res) => {
            setArrayofbankdetail(res.data?.success?.data);
            handleClose1();
          });
      });
  };

  return (
    <div className="bankcardContainer">
      <div style={{ marginBottom: "1vw" }} className="titleboxflexofbank">
        <div
          onClick={() => {
            setprimaryacc();
          }}
        >
          <span>
            <img
              src={img51}
              style={{
                width: width > 700 ? "1.1vw" : "3.3vw",
                objectFit: "contain",
                margin: "0 1vw",
                filter:
                  data?.accountId === primaryAccount?.accountId?.accountId
                    ? ""
                    : "grayscale(1)",
              }}
              alt=""
            />
          </span>
          {data?.accountId === primaryAccount?.accountId?.accountId
            ? ""
            : "Set as"}{" "}
          Primary Account
        </div>
        <div>
          <span
            onClick={() => {
              setbankformDetails(true);
              setSelectedBankdetailedit(data);
            }}
          >
            <img
              style={{
                width: width > 700 ? "1.82vw" : "4vw",
                objectFit: "contain",
                margin: "0 1vw",
              }}
              src={img}
              alt=""
            />
          </span>
          <span
            onClick={() => {
              handleOpen1(true);
            }}
          >
            <img
              style={{
                width: width > 700 ? "1.82vw" : "4vw",
                objectFit: "contain",
                margin: "0 1vw",
              }}
              src={img1}
              alt=""
            />
          </span>
        </div>
      </div>

      <div className="flexofbankdetails">
        <div className="titleboxflexofbank">Bank Name</div>
        <div style={{ fontWeight: "400" }} className="titleboxflexofbank">
          {data?.bankName}
        </div>
      </div>

      <div className="flexofbankdetails">
        <div className="titleboxflexofbank">Account Number</div>
        <div style={{ fontWeight: "400" }} className="titleboxflexofbank">
          {data?.accountNumber.toString().slice(0, 2)}********
          {data?.accountNumber
            .toString()
            .slice(
              data?.accountNumber.toString().length - 2,
              data?.accountNumber.toString().length
            )}
        </div>
      </div>

      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={width > 700 ? style : style1}>
          <div className="profiletitleandmenunav">
            <div className="profiledetailstitle"> Delete Bank Detail</div>
            <div className="profiledetailnavmanu">
              <div>
                <CloseIcon
                  onClick={handleClose1}
                  style={{ fontSize: width > 700 ? "1.5vw" : "4vw" }}
                />
              </div>
            </div>
          </div>
          <hr style={{ color: "#00000090" }} />
          <div
            style={{
              color: "gray",
              fontSize: width > 700 ? "1vw" : "3vw",
              fontWeight: "300",
            }}
            className="profiledetailstitle"
          >
            The action will delete "{data?.accountNumber} " From all of your
            Bank accounts.{" "}
          </div>
          <div
            style={{
              color: "gray",
              fontSize: width > 700 ? "1vw" : "3vw",
              fontWeight: "400",
              marginBottom: "5vw",
            }}
            className="profiledetailstitle"
          >
            Are you sure you want to delete this Bank Detail?
          </div>
          <hr style={{ color: "#00000090" }} />
          <div style={{ marginTop: "0.31vw" }} className="handlemoreaboutskill">
            <div
              style={{
                background: "white",
                color: "black",
                cursor: "pointer",
              }}
              className="handlecirclieaboutsave"
              onClick={handleClose1}
            >
              Cancel
            </div>
            <div
              style={{ cursor: "pointer" }}
              className="handlecirclieaboutsave"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
