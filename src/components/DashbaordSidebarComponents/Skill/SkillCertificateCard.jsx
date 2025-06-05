import React from "react";
import img4 from "../../../assets/experts/Iconly-Light-Chart.svg";
import img2 from "../../../assets/experts/Iconly-Light-Time Circle.svg";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import img23 from '../../../assets/Dashboard/Skill center – 2/wepik--2022426-10102.png'
import Modal from '@mui/material/Modal';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
 
  };
  
export default function SkillCertificateCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <div
      style={{ width: "25vw", height: "10vw", margin: "1.1vw", padding: "1vw" }}
      className="expertcard-container"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        className="timeaanftagexpertcourse"
      >
        <div>#113432</div>
        <div>
          <img
            style={{ width: "1vw", objectFit: "contain", margin: "0 0.51vw" }}
            src={img2}
            alt=""
          />
          Issued On 12/03/22
        </div>
      </div>
      <div style={{ fontSize: "1vw" }} className="getexpertcoursetitle">
        UX/UI design Wireframe Certification
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom:"0vw"
        }}
        className="timeaanftagexpertcourse"
      >
        <div className="specialtagexpertcouse">
          <img
            style={{
              width: "1.1vw",
              objectFit: "contain",
              marginRight: "0.3vw",
            }}
            src={img4}
            alt=""
          />
          24 Modules
        </div>
        <div style={{ position: "relative", bottom: "0.3vw" }}>
          <img
            style={{ width: "1vw", objectFit: "contain", margin: "0 0.5vw" }}
            src={img2}
            alt=""
          />
          30 hours
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
    
       
        }}
        className="timeaanftagexpertcourse"
      >
        <div style={{ fontSize: "1vw",      color:"black", }} className="getexpertcoursetitle">
          Completed
        </div>
        <div onClick={handleOpen} style={{ fontSize: "1vw", cursor:"pointer", }} className="getexpertcoursetitle">
        View Certificate
        </div>

      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <div className="imgbocofcerti">
                <img src={img23} alt="" /> 
           </div>
        </Box>
      </Modal>
    </div>
  );
}
