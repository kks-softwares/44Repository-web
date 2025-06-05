import React, { useEffect, useState } from "react";
import "./profile.css";
import "./croper.css";
import "./background.css";
import img2 from "../../assets/Success stories Definition/checkmark (1).svg";
import img4 from "../../assets/My profile – 28/pexels-stefan-stefancik-91227.png";
import img from "../../assets/Success stories/alvaro-reyes-qWwpHwip31M-unsplash.png";
import imgedit from "../../assets/My profile – 28/Component 71 – 6.svg";
import { userActions } from "../../store/userSlice";
import axios from "axios";
import Cropper from "react-easy-crop";
import Slider from "@material-ui/core/Slider";
import API_HOST from "../../env";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import Modal1 from "@mui/material/Modal";
import Button from "@material-ui/core/Button";
import { getCroppedImg } from "../../utils/cropImage";
import ClearIcon from "@mui/icons-material/Clear";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  input: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "0.91vw",
    color: "#263238",
    border: "yellow !important",
    // padding: "1vw",
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: "95vh",
  overflow: "scroll",
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
  maxHeight: "95vh",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 1,
};

function MyVerticallyCenteredModal(props) {
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();
  const [image, setImage] = React.useState(
    URL.createObjectURL(props?.selectedFile)
  );
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);

  const [imgxxxxx, setimgxxxxx] = useState(null);

  const onSelectFilex = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
      const objectUrl = URL.createObjectURL(event.target.files[0]);

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };
  function srcToFile(src, fileName, mimeType) {
    return fetch(src)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], fileName, { type: mimeType });
      });
  }
  const onDownload = async () => {
    const canvas = await getCroppedImg(image, croppedArea);
    var dataURL = canvas.toDataURL();
    srcToFile(dataURL, "hello.png", "image/png").then(function (file) {
      setimgxxxxx(file);
      updateProfilePic(file);
      props.setSelectedFile(null);
    });
  };
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  async function fetchUserData(res) {
    window.localStorage.setItem(
      "user",
      JSON.stringify({ ...res.data.success.data })
    );

    dispatch(
      userActions.setUser({
        user: { ...res.data.success.data },
      })
    );
  }

  async function updateProfilePic(selectedFile) {
    try {
      const data1 = new FormData();

      data1.append("userId", user?.userId);
      data1.append("fileName", selectedFile);
      const res = await axios.post(`${API_HOST}/users/editUser`, data1, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      });
      await fetchUserData(res);
    } catch (err) {}
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        width: "40vw",
        margin: "0 30vw",

        borderRadius: "10px",
      }}
    >
      <Modal.Body style={{ margin: "0 auto" }}>
        <div className="containerppoppop">
          <div className="containerpopouo-heading">
            <div className="containerpopup-heading-hdsbd">
              {" "}
              Update profile picture
            </div>
            <div>
              <h4>
                <ClearIcon
                  onClick={props.onHide}
                  style={{ cursor: "pointer", float: "right" }}
                />
              </h4>
            </div>
          </div>

          <div className="container-cropper">
            {image ? (
              <>
                <div className="cropper">
                  <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </div>

                <div className="slider">
                  <Slider
                    min={1}
                    max={3}
                    step={0.01}
                    value={zoom}
                    onChange={(e, zoom) => setZoom(zoom)}
                  />
                </div>
              </>
            ) : (
              <>
                <div
                  style={{ border: "2px dashed #6b6b6b" }}
                  className="cropper"
                >
                  <div className="middlechoodeimagecrops">Choose an Image</div>
                </div>
              </>
            )}
          </div>
          <div
            style={{
              fontSize: "12px",
              width: "72%",
              display:'flex',
              justifyContent: 'flex-end'
            }}
          >
            Image should be less then 256 kb.
          </div>
          <div className="container-buttons">
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={onSelectFilex}
              style={{ display: "none" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={triggerFileSelectPopup}
              style={{
                marginRight: "10px",
                backgroundColor: "rgb(251, 119, 80)",
                color: "white",
              }}
            >
              Choose
            </Button>
            <Button
              onClick={onDownload}
              variant="contained"
              style={{ backgroundColor: "rgb(251, 119, 80)", color: "white" }}
            >
              UpDate
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModalm(props) {
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();
  const [image, setImage] = React.useState(
    URL.createObjectURL(props?.selectedFile)
  );
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);

  const [imgxxxxx, setimgxxxxx] = useState(null);

  const onSelectFilex = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
      const objectUrl = URL.createObjectURL(event.target.files[0]);

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };
  function srcToFile(src, fileName, mimeType) {
    return fetch(src)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], fileName, { type: mimeType });
      });
  }
  const onDownload = async () => {
    const canvas = await getCroppedImg(image, croppedArea);
    var dataURL = canvas.toDataURL();
    srcToFile(dataURL, "hello.png", "image/png").then(function (file) {
      setimgxxxxx(file);
      updateProfilePic(file);
      props.setSelectedFile(null);
    });
  };
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  async function fetchUserData(res) {
    window.localStorage.setItem(
      "user",
      JSON.stringify({ ...res.data.success.data })
    );

    dispatch(
      userActions.setUser({
        user: { ...res.data.success.data },
      })
    );
  }

  async function updateProfilePic(selectedFile) {
    try {
      const data1 = new FormData();

      data1.append("userId", user?.userId);
      data1.append("fileName", selectedFile);
      const res = await axios.post(`${API_HOST}/users/editUser`, data1, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      });
      await fetchUserData(res);
    } catch (err) {}
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        width: "100vw",

        borderRadius: "10px",
      }}
    >
      <Modal.Body style={{ margin: "0 auto", height: "122vw" }}>
        <div className="containerppoppopxm">
          <div className="containerpopouo-headingm">
            <div className="containerpopup-heading-hdsbdm">
              {" "}
              Update profile picture
            </div>
            <div>
              <h4>
                <ClearIcon
                  onClick={props.onHide}
                  style={{ cursor: "pointer", float: "right" }}
                />
              </h4>
            </div>
          </div>

          <div className="container-cropperxm">
            {image ? (
              <>
                <div className="cropperxm">
                  <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={1}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </div>

                <div className="sliderxm">
                  <Slider
                    min={1}
                    max={3}
                    step={0.01}
                    value={zoom}
                    onChange={(e, zoom) => setZoom(zoom)}
                  />
                </div>
              </>
            ) : (
              <>
                <div
                  style={{ border: "2px dashed #6b6b6b" }}
                  className="cropper"
                >
                  <div className="middlechoodeimagecrops">Choose an Image</div>
                </div>
              </>
            )}
          </div>
          <div
            style={{
              fontSize: "12px",
              width: "100%",
              margin:"1vw 0"
            }}
          >
            Image should be less then 256 kb.
          </div>
          <div className="container-buttonsxm">
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={onSelectFilex}
              style={{ display: "none" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={triggerFileSelectPopup}
              style={{
                marginRight: "10px",
                backgroundColor: "rgb(251, 119, 80)",
                color: "white",
              }}
            >
              Choose
            </Button>
            <Button
              onClick={onDownload}
              variant="contained"
              style={{ backgroundColor: "rgb(251, 119, 80)", color: "white" }}
            >
              UpDate
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModalx(props) {
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();
  const [image, setImage] = React.useState(
    URL.createObjectURL(props?.selectedFilex)
  );
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);

  const [imgxxxxx, setimgxxxxx] = useState(null);

  const onSelectFilex = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
      const objectUrl = URL.createObjectURL(event.target.files[0]);

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
 
    }
  };
  function srcToFile(src, fileName, mimeType) {
    return fetch(src)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], fileName, { type: mimeType });
      });
  }
  const onDownload = async () => {

    const canvas = await getCroppedImg(image, croppedArea);
    var dataURL = canvas.toDataURL();
    srcToFile(dataURL, "hello.png", "image/png").then(function (file) {
      setimgxxxxx(file);
    

      updateCoverPic(file);
      props.setSelectedFile(null);
    });
  };
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  async function fetchUserData(res) {
    window.localStorage.setItem(
      "user",
      JSON.stringify({ ...res.data.success.data })
    );

    dispatch(
      userActions.setUser({
        user: { ...res.data.success.data },
      })
    );
  }

  async function updateCoverPic(selectedFile) {
    try {
      const data = new FormData();

      data.append("userId", user?.userId);
      data.append("fileName", selectedFile);
      const res = await axios.post(`${API_HOST}/users/editCoverPic`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await fetchUserData(res);
    } catch (err) {}
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        width: "100vw",
        borderRadius: "10px",
        height: "100vh",
      }}
    >
      <Modal.Body style={{ margin: "0 auto", height: "50vw" }}>
        <div className="containerppoppopx">
          <div className="containerpopouo-heading">
            <div className="containerpopup-heading-hdsbd">
              {" "}
              Update Cover picture
            </div>
            <div>
              <h4>
                <ClearIcon
                  onClick={props.onHide}
                  style={{ cursor: "pointer", float: "right" }}
                />
              </h4>
            </div>
          </div>
          <div className="container-cropperx">
            {image ? (
              <>
                <div className="cropperx">
                  <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={5}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </div>

                <div className="sliderx">
                  <Slider
                    min={1}
                    max={3}
                    step={0.1}
                    value={zoom}
                    onChange={(e, zoom) => setZoom(zoom)}
                  />
                </div>
              </>
            ) : (
              <>
                <div
                  style={{ border: "2px dashed #6b6b6b" }}
                  className="cropperx"
                >
                  <div className="middlechoodeimagecrops">Choose an Image</div>
                </div>
              </>
            )}
          </div>
          <div
            style={{
              fontSize: "12px",
              width: "80%",
              display:'flex',
              justifyContent: 'flex-end'
            }}
          >
            Image Should be less then 700 kb.
          </div>
          <div className="container-buttonsx  dvpopupsetcimg">
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={onSelectFilex}
              style={{ display: "none" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={triggerFileSelectPopup}
              style={{
                marginRight: "10px",
                backgroundColor: "rgb(251, 119, 80)",
                color: "white",
              }}
            >
              Choose
            </Button>
            <Button
              onClick={onDownload}
              variant="contained"
              style={{ backgroundColor: "rgb(251, 119, 80)", color: "white" }}
            >
              UpDate
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function MyVerticallyCenteredModalxm(props) {
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };
  const inputRef = React.useRef();

  const triggerFileSelectPopup = () => inputRef.current.click();
  const [image, setImage] = React.useState(
    URL.createObjectURL(props?.selectedFilex)
  );
  const [croppedArea, setCroppedArea] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);

  const [imgxxxxx, setimgxxxxx] = useState(null);

  const onSelectFilex = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
      const objectUrl = URL.createObjectURL(event.target.files[0]);

      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
      
    }
  };
  function srcToFile(src, fileName, mimeType) {
    return fetch(src)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], fileName, { type: mimeType });
      });
  }
  const onDownload = async () => {
    
    const canvas = await getCroppedImg(image, croppedArea);
    var dataURL = canvas.toDataURL();
    srcToFile(dataURL, "hello.png", "image/png").then(function (file) {
      setimgxxxxx(file);
  

      updateCoverPic(file);
      props.setSelectedFile(null);
    });
  };
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  async function fetchUserData(res) {
    window.localStorage.setItem(
      "user",
      JSON.stringify({ ...res.data.success.data })
    );

    dispatch(
      userActions.setUser({
        user: { ...res.data.success.data },
      })
    );
  }

  async function updateCoverPic(selectedFile) {
    try {
      const data = new FormData();

      data.append("userId", user?.userId);
      data.append("fileName", selectedFile);
      const res = await axios.post(`${API_HOST}/users/editCoverPic`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await fetchUserData(res);
    } catch (err) {}
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        width: "100",

        borderRadius: "10px",
      }}
    >
      <Modal.Body style={{ margin: "0 auto", height: "120vw" }}>
        <div className="containerppoppopxm">
          <div className="containerpopouo-headingm">
            <div className="containerpopup-heading-hdsbdm">
              Update Cover picture
            </div>
            <div>
              <h4>
                <ClearIcon
                  onClick={props.onHide}
                  style={{ cursor: "pointer", float: "right" }}
                />
              </h4>
            </div>
          </div>
          <div className="container-cropperxm">
            {image ? (
              <>
                <div className="cropperxm">
                  <Cropper
                    image={image}
                    crop={crop}
                    zoom={zoom}
                    aspect={5}
                    onCropChange={setCrop}
                    onZoomChange={setZoom}
                    onCropComplete={onCropComplete}
                  />
                </div>

                <div className="sliderxm">
                  <Slider
                    min={1}
                    max={3}
                    step={0.1}
                    value={zoom}
                    onChange={(e, zoom) => setZoom(zoom)}
                  />
                </div>
              </>
            ) : (
              <>
                <div
                  style={{ border: "2px dashed #6b6b6b" }}
                  className="cropperx"
                >
                  <div className="middlechoodeimagecrops">Choose an Image</div>
                </div>
              </>
            )}
          </div>
          <div
            style={{
              fontSize: "12px",
              width: "100%",
            }}
          >
            Image should be less then 256 kb.
          </div>
          <div className="container-buttonsxm  ">
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              onChange={onSelectFilex}
              style={{ display: "none" }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={triggerFileSelectPopup}
              style={{
                marginRight: "10px",
                backgroundColor: "rgb(251, 119, 80)",
                color: "white",
              }}
            >
              Choose
            </Button>
            <Button
              onClick={onDownload}
              variant="contained"
              style={{ backgroundColor: "rgb(251, 119, 80)", color: "white" }}
            >
              UpDate
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default function ProfileBanner({ user, width }) {
  const dispatch = useDispatch();

  const classes = useStyles();

  const [selectedFile, setSelectedFile] = useState();
  const [selectedFile1, setSelectedFile1] = useState();

  const onSelectFile = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);

      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const onSelectFile1 = async (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile1(undefined);

      return;
    }

    setSelectedFile1(e.target.files[0]);
  };
  const [modalShow, setModalShow] = useState(true);
  const [modalShowx, setModalShowx] = useState(true);
  const [Name, setName] = useState("");

  useEffect(() => {
    // axios
    //   .get(`${API_HOST}/category/viewCategory`)
    //   .then((res) => {
    //     // setsettingCategory(res?.data?.success?.data?.docs);
    //     // setOpenxp(true);
    // 
    //   });

    setName(user?.fullName);
  }, [user]);

  // PROFILE NAME UPDATE FUNCT.
  const handleProfileName = () => {
    const formdata = new FormData();

    formdata.append("userId", user?.userId);
    formdata.append("fullName", Name);

    axios
      .post(`${API_HOST}/users/editUser`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
        },
      })
      .then((res) => {
        console.log(res.data.success.data);
        // navigate("/dashbaord/setting");
        window.localStorage.setItem(
          "user",
          JSON.stringify({ ...res.data.success.data })
        );

        dispatch(
          userActions.setUser({
            user: { ...res.data.success.data },
          })
        );
        setOpen3(false);
        // setTimeout(() => {
        //   // Most recent value
        //   setColor("#064c87");
        //   setbtnText("SAVE")
        // }, 1000);
      })
      .catch((err) => {
   
        // setSettingAccEmail(err.response.data.message)
        // setRestag(true);
      });
  };

  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  return (
    <div className="Profilebanner-container">
      <div className="coverPiccontainer">
        <div className="coverimgqgeprofile">
          <img src={user?.coverPic ? user?.coverPic : img} alt="" />
         
        </div>
        <div className="covereditimgqgeprofile">
          <label htmlFor="coverpic">
            <img
              src={imgedit}
              alt=""
              style={{
                fontSize: "1.82vw",
                cursor: "pointer",
                position: "relative",
                width: width > 700 ? "3vw" : "8vw",
              }}
            />
            <input
              type="file"
              name=""
              id="coverpic"
              hidden
              onChange={onSelectFile}
            />
          </label>
        </div>
      </div>
      {selectedFile ? (
        <>
          {width > 700 ? (
            <div className="dvpopupsetcimg">
              <MyVerticallyCenteredModalx
                show={modalShowx}
                onHide={() => setSelectedFile(null)}
                selectedFilex={selectedFile}
                setSelectedFile={setSelectedFile}
                className="dvpopupsetcimg"
              />
            </div>
          ) : (
            <div className="dvpopupsetcimg">
              <MyVerticallyCenteredModalxm
                show={modalShowx}
                onHide={() => setSelectedFile(null)}
                selectedFilex={selectedFile}
                setSelectedFile={setSelectedFile}
                className="dvpopupsetcimg"
              />
            </div>
          )}
        </>
      ) : (
        ""
      )}
      <div className="profilePiccontainer">
        <div className="image-profilepart">
          <img src={user?.media ? user?.media : img4} alt="" />
          <div className="profileeditimgqgeprofile">
            <label htmlFor="profilepic">
              <img
                src={imgedit}
                alt=""
                style={{
                  fontSize: "1.12vw",
                  cursor: "pointer",
                  width: width > 700 ? "3vw" : "8vw",
                  height: width > 700 ? "3vw" : "8vw",
                  objectFit: "contain",
                  background: "white",
                  borderRadius: "50%",
                  border: "1px solid blue",
                  position: "relative",
                  left: width > 700 ? "12vw" : "18vw",
                  bottom: width > 700 ? "6.5vw" : "10vw",
                }}
              />
              <input
                type="file"
                name=""
                id="profilepic"
                hidden
                onChange={onSelectFile1}
              />
            </label>
          </div>
        </div>
        {selectedFile1 ? (
          <>
            {width > 700 ? (
              <div className="dvpopupsetcimg">
         
                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setSelectedFile1(null)}
                  selectedFile={selectedFile1}
                  setSelectedFile={setSelectedFile1}
                  className="dvpopupsetcimg"
                />
              </div>
            ) : (
              <div className="dvpopupsetcimg">
         
                <MyVerticallyCenteredModalm
                  show={modalShow}
                  onHide={() => setSelectedFile1(null)}
                  selectedFile={selectedFile1}
                  setSelectedFile={setSelectedFile1}
                  className="dvpopupsetcimg"
                />
              </div>
            )}
          </>
        ) : (
          ""
        )}
        <div className="profilebannernameandpost">
          <div className="profilebannernameandpostname">
            {user?.fullName}
            <img
              src={imgedit}
              alt=""
              onClick={handleOpen3}
              style={{
                fontSize: "0.5vw",
                cursor: "pointer",
                position: "relative",
                width: width > 700 ? "3vw" : "8vw",
              }}
            />
          </div>
          <div className="profilebannernameandpostemail">
            <span>
              <img src={img2} alt="" />
            </span>
            {user?.userName}
          </div>
          <Modal1
            open={open3}
            onClose={handleClose3}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={width > 700 ? style : style1}>
              <div className="profiletitleandmenunav">
                <div className="profiledetailstitle">Edit Your Name Here</div>
                <div className="profiledetailnavmanu">
                  <div>
                    <CloseIcon
                      onClick={handleClose3}
                      style={{
                        fontSize: width > 700 ? "1.5vw" : "4vw",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </div>
              </div>
              <hr style={{ color: "#00000090" }} />
              <div
                style={{ left: "0vw", width: "100%" }}
                className="loginfield"
              >
                <div
                  style={{
                    left: "0vw",
                    width: "99%",
                    margin: "0vw 0.5vw 2vw 0vw",
                  }}
                  className="loginfield"
                >
                  <TextField
                    id="outlined-basic"
                    label="Fullname"
                    value={Name}
                    variant="outlined"
                    style={{ width: "100%" }}
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
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div
                style={{ marginTop: "0.31vw" }}
                className="handlemoreaboutskill"
              >
                <div
                  style={{
                    background: "white",
                    color: "black",
                    cursor: "pointer",
                  }}
                  className="handlecirclieaboutsave"
                  onClick={handleClose3}
                >
                  Cancel
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleProfileName();
                  }}
                  className="handlecirclieaboutsave"
                >
                  SAVE
                </div>
              </div>
            </Box>
          </Modal1>
        </div>
      </div>
    </div>
  );
}
