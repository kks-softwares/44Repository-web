import React, { useEffect, useState } from "react";
import "./Addcatalog.css";
import "../../components/Profilecomp/profile.css";
import { makeStyles } from "@material-ui/core";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import img from "../../assets/Web 1280 – 14/Icon.svg";
import img1 from "../../assets/Web 1280 – 14/Group 9831.svg";
import img2 from "../../assets/Web 1280 – 14/Iconly-Light-outline-Close Square.svg";
import img3 from "../../assets/Web 1280 – 14/close_black_24dp.svg";
import img4 from "../../assets/Web 1280 – 14/Ellipse 1375.svg";

import img51 from "../../assets/Web 1280 – 14/Group 10219.svg";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "@mui/material/Fade";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import API_HOST from "../../env";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


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
export default function EditCatalog({ width }) {
  const { catalogueId } = useParams();
  const [cataloguedata, setcataloguedata] = useState();

  useEffect(() => {
    axios
      .get(`${API_HOST}/catalouge/viewCatalouge?catalogueId=${catalogueId}`)
      .then((res) => {
      
        setcataloguedata(res.data.success.data[0]);
        setCategogryid(res.data.success.data[0]?.category?._id);
        setDegreeset(res.data.success.data[0]?.category?.category);
        setSubCategogryid(res.data.success.data[0]?.subCategory?._id);
        setSubcategoryValue(res.data.success.data[0]?.subCategory?.subCategory);
        setTitle(res.data.success.data[0]?.title);
        setTitle(res.data.success.data[0]?.catalougeTitle);
        setDescription(res.data.success.data[0]?.description);
        setDescription1(res.data.success.data[0]?.descriptionForClientSide);
        setArrayoffiles(res.data.success.data[0]?.files);
        setDelieveryTime(res.data.success.data[0]?.deliveryDate);
        setBannerTitle(res.data.success.data[0]?.bannerTitle);
        setstudyset(res.data.success.data[0]?.onSiteLocation);
        setskillset(
          res.data?.success?.data[0]?.skill20
            ? [
                res.data?.success?.data[0]?.skill20,
                res.data?.success?.data[0]?.skill19,
                res.data?.success?.data[0]?.skill18,
                res.data?.success?.data[0]?.skill17,
                res.data?.success?.data[0]?.skill16,
                res.data?.success?.data[0]?.skill15,
                res.data?.success?.data[0]?.skill14,
                res.data?.success?.data[0]?.skill13,
                res.data?.success?.data[0]?.skill12,
                res.data?.success?.data[0]?.skill11,
                res.data?.success?.data[0]?.skill10,
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill19
            ? [
                res.data?.success?.data[0]?.skill19,
                res.data?.success?.data[0]?.skill18,
                res.data?.success?.data[0]?.skill17,
                res.data?.success?.data[0]?.skill16,
                res.data?.success?.data[0]?.skill15,
                res.data?.success?.data[0]?.skill14,
                res.data?.success?.data[0]?.skill13,
                res.data?.success?.data[0]?.skill12,
                res.data?.success?.data[0]?.skill11,
                res.data?.success?.data[0]?.skill10,
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill18
            ? [
                res.data?.success?.data[0]?.skill18,
                res.data?.success?.data[0]?.skill17,
                res.data?.success?.data[0]?.skill16,
                res.data?.success?.data[0]?.skill15,
                res.data?.success?.data[0]?.skill14,
                res.data?.success?.data[0]?.skill13,
                res.data?.success?.data[0]?.skill12,
                res.data?.success?.data[0]?.skill11,
                res.data?.success?.data[0]?.skill10,
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill17
            ? [
                res.data?.success?.data[0]?.skill17,
                res.data?.success?.data[0]?.skill16,
                res.data?.success?.data[0]?.skill15,
                res.data?.success?.data[0]?.skill14,
                res.data?.success?.data[0]?.skill13,
                res.data?.success?.data[0]?.skill12,
                res.data?.success?.data[0]?.skill11,
                res.data?.success?.data[0]?.skill10,
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill16
            ? [
                res.data?.success?.data[0]?.skill16,
                res.data?.success?.data[0]?.skill15,
                res.data?.success?.data[0]?.skill14,
                res.data?.success?.data[0]?.skill13,
                res.data?.success?.data[0]?.skill12,
                res.data?.success?.data[0]?.skill11,
                res.data?.success?.data[0]?.skill10,
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill15
            ? [
                res.data?.success?.data[0]?.skill15,
                res.data?.success?.data[0]?.skill14,
                res.data?.success?.data[0]?.skill13,
                res.data?.success?.data[0]?.skill12,
                res.data?.success?.data[0]?.skill11,
                res.data?.success?.data[0]?.skill10,
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill14
            ? [
                res.data?.success?.data[0]?.skill14,
                res.data?.success?.data[0]?.skill13,
                res.data?.success?.data[0]?.skill12,
                res.data?.success?.data[0]?.skill11,
                res.data?.success?.data[0]?.skill10,
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill13
            ? [
                res.data?.success?.data[0]?.skill13,
                res.data?.success?.data[0]?.skill12,
                res.data?.success?.data[0]?.skill11,
                res.data?.success?.data[0]?.skill10,
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill12
            ? [
                res.data?.success?.data[0]?.skill12,
                res.data?.success?.data[0]?.skill11,
                res.data?.success?.data[0]?.skill10,
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill11
            ? [
                res.data?.success?.data[0]?.skill11,
                res.data?.success?.data[0]?.skill10,
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill10
            ? [
                res.data?.success?.data[0]?.skill10,
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill9
            ? [
                res.data?.success?.data[0]?.skill9,
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill8
            ? [
                res.data?.success?.data[0]?.skill8,
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill7
            ? [
                res.data?.success?.data[0]?.skill7,
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill6
            ? [
                res.data?.success?.data[0]?.skill6,
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill5
            ? [
                res.data?.success?.data[0]?.skill5,
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill4
            ? [
                res.data?.success?.data[0]?.skill4,
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill3
            ? [
                res.data?.success?.data[0]?.skill3,
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill2
            ? [
                res.data?.success?.data[0]?.skill2,
                res.data?.success?.data[0]?.skill1,
              ]
            : res.data?.success?.data[0]?.skill1
            ? [res.data?.success?.data[0]?.skill1]
            : []
        );
        if (res.data.success.data[0]?.Q1) {
          setArrayofservicesFAQ([
            {
              quetion: "Enter Quetion",
              answer: "Enter Answer",
            },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
        }
        if (res.data.success.data[0]?.serviceName1) {
          setArrayofservices([
            {
              name: "Starter",
              price: "10",
              days: "3",
              id: 1,
            },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
        }
        if (res.data.success.data[0]?.Q2) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
        }
        if (res.data.success.data[0]?.serviceName2) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
        }
        if (res.data.success.data[0]?.Q3) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
        }
        if (res.data.success.data[0]?.serviceName3) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
        }
        if (res.data.success.data[0]?.Q4) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
        }
        if (res.data.success.data[0]?.serviceName4) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
          setService4name(res.data.success.data[0]?.serviceName4);
          setService4namep(res.data.success.data[0]?.servicePrice4);
          setService4named(res.data.success.data[0]?.serviceDays4);
          setService4nameWInc(res.data.success.data[0]?.whatInclude4);
        }
        if (res.data.success.data[0]?.Q5) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
        }
        if (res.data.success.data[0]?.serviceName5) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
          setService4name(res.data.success.data[0]?.serviceName4);
          setService4namep(res.data.success.data[0]?.servicePrice4);
          setService4named(res.data.success.data[0]?.serviceDays4);
          setService4nameWInc(res.data.success.data[0]?.whatInclude4);
          setService5name(res.data.success.data[0]?.serviceName5);
          setService5namep(res.data.success.data[0]?.servicePrice5);
          setService5named(res.data.success.data[0]?.serviceDays5);
          setService5nameWInc(res.data.success.data[0]?.whatInclude5);
        }
        if (res.data.success.data[0]?.Q6) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
        }
        if (res.data.success.data[0]?.serviceName6) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
          setService4name(res.data.success.data[0]?.serviceName4);
          setService4namep(res.data.success.data[0]?.servicePrice4);
          setService4named(res.data.success.data[0]?.serviceDays4);
          setService4nameWInc(res.data.success.data[0]?.whatInclude4);
          setService5name(res.data.success.data[0]?.serviceName5);
          setService5namep(res.data.success.data[0]?.servicePrice5);
          setService5named(res.data.success.data[0]?.serviceDays5);
          setService5nameWInc(res.data.success.data[0]?.whatInclude5);
          setService6name(res.data.success.data[0]?.serviceName6);
          setService6namep(res.data.success.data[0]?.servicePrice6);
          setService6named(res.data.success.data[0]?.serviceDays6);
          setService6nameWInc(res.data.success.data[0]?.whatInclude6);
          setService7name(res.data.success.data[0]?.serviceName7);
          setService7namep(res.data.success.data[0]?.servicePrice7);
          setService7named(res.data.success.data[0]?.serviceDays7);
          setService7nameWInc(res.data.success.data[0]?.whatInclude7);
        }
        if (res.data.success.data[0]?.Q7) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
        }
        if (res.data.success.data[0]?.serviceName7) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
          setService4name(res.data.success.data[0]?.serviceName4);
          setService4namep(res.data.success.data[0]?.servicePrice4);
          setService4named(res.data.success.data[0]?.serviceDays4);
          setService4nameWInc(res.data.success.data[0]?.whatInclude4);
          setService5name(res.data.success.data[0]?.serviceName5);
          setService5namep(res.data.success.data[0]?.servicePrice5);
          setService5named(res.data.success.data[0]?.serviceDays5);
          setService5nameWInc(res.data.success.data[0]?.whatInclude5);
          setService6name(res.data.success.data[0]?.serviceName6);
          setService6namep(res.data.success.data[0]?.servicePrice6);
          setService6named(res.data.success.data[0]?.serviceDays6);
          setService6nameWInc(res.data.success.data[0]?.whatInclude6);
          setService7name(res.data.success.data[0]?.serviceName7);
          setService7namep(res.data.success.data[0]?.servicePrice7);
          setService7named(res.data.success.data[0]?.serviceDays7);
          setService7nameWInc(res.data.success.data[0]?.whatInclude7);
        }
        if (res.data.success.data[0]?.Q8) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
        }
        if (res.data.success.data[0]?.serviceName8) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
          setService4name(res.data.success.data[0]?.serviceName4);
          setService4namep(res.data.success.data[0]?.servicePrice4);
          setService4named(res.data.success.data[0]?.serviceDays4);
          setService4nameWInc(res.data.success.data[0]?.whatInclude4);
          setService5name(res.data.success.data[0]?.serviceName5);
          setService5namep(res.data.success.data[0]?.servicePrice5);
          setService5named(res.data.success.data[0]?.serviceDays5);
          setService5nameWInc(res.data.success.data[0]?.whatInclude5);
          setService6name(res.data.success.data[0]?.serviceName6);
          setService6namep(res.data.success.data[0]?.servicePrice6);
          setService6named(res.data.success.data[0]?.serviceDays6);
          setService6nameWInc(res.data.success.data[0]?.whatInclude6);
          setService7name(res.data.success.data[0]?.serviceName7);
          setService7namep(res.data.success.data[0]?.servicePrice7);
          setService7named(res.data.success.data[0]?.serviceDays7);
          setService7nameWInc(res.data.success.data[0]?.whatInclude7);
          setService8name(res.data.success.data[0]?.serviceName8);
          setService8namep(res.data.success.data[0]?.servicePrice8);
          setService8named(res.data.success.data[0]?.serviceDays8);
          setService8nameWInc(res.data.success.data[0]?.whatInclude8);
        }
        if (res.data.success.data[0]?.Q9) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
        }
        if (res.data.success.data[0]?.serviceName9) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
          setService4name(res.data.success.data[0]?.serviceName4);
          setService4namep(res.data.success.data[0]?.servicePrice4);
          setService4named(res.data.success.data[0]?.serviceDays4);
          setService4nameWInc(res.data.success.data[0]?.whatInclude4);
          setService5name(res.data.success.data[0]?.serviceName5);
          setService5namep(res.data.success.data[0]?.servicePrice5);
          setService5named(res.data.success.data[0]?.serviceDays5);
          setService5nameWInc(res.data.success.data[0]?.whatInclude5);
          setService6name(res.data.success.data[0]?.serviceName6);
          setService6namep(res.data.success.data[0]?.servicePrice6);
          setService6named(res.data.success.data[0]?.serviceDays6);
          setService6nameWInc(res.data.success.data[0]?.whatInclude6);
          setService7name(res.data.success.data[0]?.serviceName7);
          setService7namep(res.data.success.data[0]?.servicePrice7);
          setService7named(res.data.success.data[0]?.serviceDays7);
          setService7nameWInc(res.data.success.data[0]?.whatInclude7);
          setService8name(res.data.success.data[0]?.serviceName8);
          setService8namep(res.data.success.data[0]?.servicePrice8);
          setService8named(res.data.success.data[0]?.serviceDays8);
          setService8nameWInc(res.data.success.data[0]?.whatInclude8);
          setService9name(res.data.success.data[0]?.serviceName9);
          setService9namep(res.data.success.data[0]?.servicePrice9);
          setService9named(res.data.success.data[0]?.serviceDays9);
          setService9nameWInc(res.data.success.data[0]?.whatInclude9);
        }
        if (res.data.success.data[0]?.Q10) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
          setService10Question(res.data.success.data[0]?.Q10);
          setService10Answer(res.data.success.data[0]?.A10);
        }
        if (res.data.success.data[0]?.serviceName10) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
          setService4name(res.data.success.data[0]?.serviceName4);
          setService4namep(res.data.success.data[0]?.servicePrice4);
          setService4named(res.data.success.data[0]?.serviceDays4);
          setService4nameWInc(res.data.success.data[0]?.whatInclude4);
          setService5name(res.data.success.data[0]?.serviceName5);
          setService5namep(res.data.success.data[0]?.servicePrice5);
          setService5named(res.data.success.data[0]?.serviceDays5);
          setService5nameWInc(res.data.success.data[0]?.whatInclude5);
          setService6name(res.data.success.data[0]?.serviceName6);
          setService6namep(res.data.success.data[0]?.servicePrice6);
          setService6named(res.data.success.data[0]?.serviceDays6);
          setService6nameWInc(res.data.success.data[0]?.whatInclude6);
          setService7name(res.data.success.data[0]?.serviceName7);
          setService7namep(res.data.success.data[0]?.servicePrice7);
          setService7named(res.data.success.data[0]?.serviceDays7);
          setService7nameWInc(res.data.success.data[0]?.whatInclude7);
          setService8name(res.data.success.data[0]?.serviceName8);
          setService8namep(res.data.success.data[0]?.servicePrice8);
          setService8named(res.data.success.data[0]?.serviceDays8);
          setService8nameWInc(res.data.success.data[0]?.whatInclude8);
          setService9name(res.data.success.data[0]?.serviceName9);
          setService9namep(res.data.success.data[0]?.servicePrice9);
          setService9named(res.data.success.data[0]?.serviceDays9);
          setService9nameWInc(res.data.success.data[0]?.whatInclude9);
          setService10name(res.data.success.data[0]?.serviceName10);
          setService10namep(res.data.success.data[0]?.servicePrice10);
          setService10named(res.data.success.data[0]?.serviceDays10);
          setService10nameWInc(res.data.success.data[0]?.whatInclude10);
        }
        if (res.data.success.data[0]?.Q11) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
          setService10Question(res.data.success.data[0]?.Q10);
          setService10Answer(res.data.success.data[0]?.A10);
          setService11Question(res.data.success.data[0]?.Q11);
          setService11Answer(res.data.success.data[0]?.A11);
        }
        if (res.data.success.data[0]?.serviceName11) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
          setService4name(res.data.success.data[0]?.serviceName4);
          setService4namep(res.data.success.data[0]?.servicePrice4);
          setService4named(res.data.success.data[0]?.serviceDays4);
          setService4nameWInc(res.data.success.data[0]?.whatInclude4);
          setService5name(res.data.success.data[0]?.serviceName5);
          setService5namep(res.data.success.data[0]?.servicePrice5);
          setService5named(res.data.success.data[0]?.serviceDays5);
          setService5nameWInc(res.data.success.data[0]?.whatInclude5);
          setService6name(res.data.success.data[0]?.serviceName6);
          setService6namep(res.data.success.data[0]?.servicePrice6);
          setService6named(res.data.success.data[0]?.serviceDays6);
          setService6nameWInc(res.data.success.data[0]?.whatInclude6);
          setService7name(res.data.success.data[0]?.serviceName7);
          setService7namep(res.data.success.data[0]?.servicePrice7);
          setService7named(res.data.success.data[0]?.serviceDays7);
          setService7nameWInc(res.data.success.data[0]?.whatInclude7);
          setService8name(res.data.success.data[0]?.serviceName8);
          setService8namep(res.data.success.data[0]?.servicePrice8);
          setService8named(res.data.success.data[0]?.serviceDays8);
          setService8nameWInc(res.data.success.data[0]?.whatInclude8);
          setService9name(res.data.success.data[0]?.serviceName9);
          setService9namep(res.data.success.data[0]?.servicePrice9);
          setService9named(res.data.success.data[0]?.serviceDays9);
          setService9nameWInc(res.data.success.data[0]?.whatInclude9);
          setService10name(res.data.success.data[0]?.serviceName10);
          setService10namep(res.data.success.data[0]?.servicePrice10);
          setService10named(res.data.success.data[0]?.serviceDays10);
          setService10nameWInc(res.data.success.data[0]?.whatInclude10);
          setService11name(res.data.success.data[0]?.serviceName11);
          setService11namep(res.data.success.data[0]?.servicePrice11);
          setService11named(res.data.success.data[0]?.serviceDays11);
          setService11nameWInc(res.data.success.data[0]?.whatInclude11);
        }
        if (res.data.success.data[0]?.Q12) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
          setService10Question(res.data.success.data[0]?.Q10);
          setService10Answer(res.data.success.data[0]?.A10);
          setService11Question(res.data.success.data[0]?.Q11);
          setService11Answer(res.data.success.data[0]?.A11);
          setService12Question(res.data.success.data[0]?.Q12);
          setService12Answer(res.data.success.data[0]?.A12);
        }
        if (res.data.success.data[0]?.serviceName12) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
          setService4name(res.data.success.data[0]?.serviceName4);
          setService4namep(res.data.success.data[0]?.servicePrice4);
          setService4named(res.data.success.data[0]?.serviceDays4);
          setService4nameWInc(res.data.success.data[0]?.whatInclude4);
          setService5name(res.data.success.data[0]?.serviceName5);
          setService5namep(res.data.success.data[0]?.servicePrice5);
          setService5named(res.data.success.data[0]?.serviceDays5);
          setService5nameWInc(res.data.success.data[0]?.whatInclude5);
          setService6name(res.data.success.data[0]?.serviceName6);
          setService6namep(res.data.success.data[0]?.servicePrice6);
          setService6named(res.data.success.data[0]?.serviceDays6);
          setService6nameWInc(res.data.success.data[0]?.whatInclude6);
          setService7name(res.data.success.data[0]?.serviceName7);
          setService7namep(res.data.success.data[0]?.servicePrice7);
          setService7named(res.data.success.data[0]?.serviceDays7);
          setService7nameWInc(res.data.success.data[0]?.whatInclude7);
          setService8name(res.data.success.data[0]?.serviceName8);
          setService8namep(res.data.success.data[0]?.servicePrice8);
          setService8named(res.data.success.data[0]?.serviceDays8);
          setService8nameWInc(res.data.success.data[0]?.whatInclude8);
          setService9name(res.data.success.data[0]?.serviceName9);
          setService9namep(res.data.success.data[0]?.servicePrice9);
          setService9named(res.data.success.data[0]?.serviceDays9);
          setService9nameWInc(res.data.success.data[0]?.whatInclude9);
          setService10name(res.data.success.data[0]?.serviceName10);
          setService10namep(res.data.success.data[0]?.servicePrice10);
          setService10named(res.data.success.data[0]?.serviceDays10);
          setService10nameWInc(res.data.success.data[0]?.whatInclude10);
          setService11name(res.data.success.data[0]?.serviceName11);
          setService11namep(res.data.success.data[0]?.servicePrice11);
          setService11named(res.data.success.data[0]?.serviceDays11);
          setService11nameWInc(res.data.success.data[0]?.whatInclude11);
          setService12name(res.data.success.data[0]?.serviceName12);
          setService12namep(res.data.success.data[0]?.servicePrice12);
          setService12named(res.data.success.data[0]?.serviceDays12);
          setService12nameWInc(res.data.success.data[0]?.whatInclude12);
        }
        if (res.data.success.data[0]?.Q13) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
          setService10Question(res.data.success.data[0]?.Q10);
          setService10Answer(res.data.success.data[0]?.A10);
          setService11Question(res.data.success.data[0]?.Q11);
          setService11Answer(res.data.success.data[0]?.A11);
          setService12Question(res.data.success.data[0]?.Q12);
          setService12Answer(res.data.success.data[0]?.A12);
          setService13Question(res.data.success.data[0]?.Q13);
          setService13Answer(res.data.success.data[0]?.A13);
        }
        if (res.data.success.data[0]?.serviceName12) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
          setService4name(res.data.success.data[0]?.serviceName4);
          setService4namep(res.data.success.data[0]?.servicePrice4);
          setService4named(res.data.success.data[0]?.serviceDays4);
          setService4nameWInc(res.data.success.data[0]?.whatInclude4);
          setService5name(res.data.success.data[0]?.serviceName5);
          setService5namep(res.data.success.data[0]?.servicePrice5);
          setService5named(res.data.success.data[0]?.serviceDays5);
          setService5nameWInc(res.data.success.data[0]?.whatInclude5);
          setService6name(res.data.success.data[0]?.serviceName6);
          setService6namep(res.data.success.data[0]?.servicePrice6);
          setService6named(res.data.success.data[0]?.serviceDays6);
          setService6nameWInc(res.data.success.data[0]?.whatInclude6);
          setService7name(res.data.success.data[0]?.serviceName7);
          setService7namep(res.data.success.data[0]?.servicePrice7);
          setService7named(res.data.success.data[0]?.serviceDays7);
          setService7nameWInc(res.data.success.data[0]?.whatInclude7);
          setService8name(res.data.success.data[0]?.serviceName8);
          setService8namep(res.data.success.data[0]?.servicePrice8);
          setService8named(res.data.success.data[0]?.serviceDays8);
          setService8nameWInc(res.data.success.data[0]?.whatInclude8);
          setService9name(res.data.success.data[0]?.serviceName9);
          setService9namep(res.data.success.data[0]?.servicePrice9);
          setService9named(res.data.success.data[0]?.serviceDays9);
          setService9nameWInc(res.data.success.data[0]?.whatInclude9);
          setService10name(res.data.success.data[0]?.serviceName10);
          setService10namep(res.data.success.data[0]?.servicePrice10);
          setService10named(res.data.success.data[0]?.serviceDays10);
          setService10nameWInc(res.data.success.data[0]?.whatInclude10);
          setService11name(res.data.success.data[0]?.serviceName11);
          setService11namep(res.data.success.data[0]?.servicePrice11);
          setService11named(res.data.success.data[0]?.serviceDays11);
          setService11nameWInc(res.data.success.data[0]?.whatInclude11);
          setService12name(res.data.success.data[0]?.serviceName12);
          setService12namep(res.data.success.data[0]?.servicePrice12);
          setService12named(res.data.success.data[0]?.serviceDays12);
          setService12nameWInc(res.data.success.data[0]?.whatInclude12);
          setService13name(res.data.success.data[0]?.serviceName13);
          setService13namep(res.data.success.data[0]?.servicePrice13);
          setService13named(res.data.success.data[0]?.serviceDays13);
          setService13nameWInc(res.data.success.data[0]?.whatInclude13);
        }
        if (res.data.success.data[0]?.Q14) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
          setService10Question(res.data.success.data[0]?.Q10);
          setService10Answer(res.data.success.data[0]?.A10);
          setService11Question(res.data.success.data[0]?.Q11);
          setService11Answer(res.data.success.data[0]?.A11);
          setService12Question(res.data.success.data[0]?.Q12);
          setService12Answer(res.data.success.data[0]?.A12);
          setService13Question(res.data.success.data[0]?.Q13);
          setService13Answer(res.data.success.data[0]?.A13);
          setService14Question(res.data.success.data[0]?.Q14);
          setService14Answer(res.data.success.data[0]?.A14);
        }
        if (res.data.success.data[0]?.serviceName14) {
          setArrayofservices([
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
            { name: "Starter", price: "10", days: "3", id: 1 },
          ]);
          setService1name(res.data.success.data[0]?.serviceName1);
          setService1namep(res.data.success.data[0]?.servicePrice1);
          setService1named(res.data.success.data[0]?.serviceDays1);
          setService1nameWInc(res.data.success.data[0]?.whatInclude1);
          setService2name(res.data.success.data[0]?.serviceName2);
          setService2namep(res.data.success.data[0]?.servicePrice2);
          setService2named(res.data.success.data[0]?.serviceDays2);
          setService2nameWInc(res.data.success.data[0]?.whatInclude2);
          setService3name(res.data.success.data[0]?.serviceName3);
          setService3namep(res.data.success.data[0]?.servicePrice3);
          setService3named(res.data.success.data[0]?.serviceDays3);
          setService3nameWInc(res.data.success.data[0]?.whatInclude3);
          setService4name(res.data.success.data[0]?.serviceName4);
          setService4namep(res.data.success.data[0]?.servicePrice4);
          setService4named(res.data.success.data[0]?.serviceDays4);
          setService4nameWInc(res.data.success.data[0]?.whatInclude4);
          setService5name(res.data.success.data[0]?.serviceName5);
          setService5namep(res.data.success.data[0]?.servicePrice5);
          setService5named(res.data.success.data[0]?.serviceDays5);
          setService5nameWInc(res.data.success.data[0]?.whatInclude5);
          setService6name(res.data.success.data[0]?.serviceName6);
          setService6namep(res.data.success.data[0]?.servicePrice6);
          setService6named(res.data.success.data[0]?.serviceDays6);
          setService6nameWInc(res.data.success.data[0]?.whatInclude6);
          setService7name(res.data.success.data[0]?.serviceName7);
          setService7namep(res.data.success.data[0]?.servicePrice7);
          setService7named(res.data.success.data[0]?.serviceDays7);
          setService7nameWInc(res.data.success.data[0]?.whatInclude7);
          setService8name(res.data.success.data[0]?.serviceName8);
          setService8namep(res.data.success.data[0]?.servicePrice8);
          setService8named(res.data.success.data[0]?.serviceDays8);
          setService8nameWInc(res.data.success.data[0]?.whatInclude8);
          setService9name(res.data.success.data[0]?.serviceName9);
          setService9namep(res.data.success.data[0]?.servicePrice9);
          setService9named(res.data.success.data[0]?.serviceDays9);
          setService9nameWInc(res.data.success.data[0]?.whatInclude9);
          setService10name(res.data.success.data[0]?.serviceName10);
          setService10namep(res.data.success.data[0]?.servicePrice10);
          setService10named(res.data.success.data[0]?.serviceDays10);
          setService10nameWInc(res.data.success.data[0]?.whatInclude10);
          setService11name(res.data.success.data[0]?.serviceName11);
          setService11namep(res.data.success.data[0]?.servicePrice11);
          setService11named(res.data.success.data[0]?.serviceDays11);
          setService11nameWInc(res.data.success.data[0]?.whatInclude11);
          setService12name(res.data.success.data[0]?.serviceName12);
          setService12namep(res.data.success.data[0]?.servicePrice12);
          setService12named(res.data.success.data[0]?.serviceDays12);
          setService12nameWInc(res.data.success.data[0]?.whatInclude12);
          setService13name(res.data.success.data[0]?.serviceName13);
          setService13namep(res.data.success.data[0]?.servicePrice13);
          setService13named(res.data.success.data[0]?.serviceDays13);
          setService13nameWInc(res.data.success.data[0]?.whatInclude13);
          setService14name(res.data.success.data[0]?.serviceName14);
          setService14namep(res.data.success.data[0]?.servicePrice14);
          setService14named(res.data.success.data[0]?.serviceDays14);
          setService14nameWInc(res.data.success.data[0]?.whatInclude14);
        }
        if (res.data.success.data[0]?.Q15) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
          setService10Question(res.data.success.data[0]?.Q10);
          setService10Answer(res.data.success.data[0]?.A10);
          setService11Question(res.data.success.data[0]?.Q11);
          setService11Answer(res.data.success.data[0]?.A11);
          setService12Question(res.data.success.data[0]?.Q12);
          setService12Answer(res.data.success.data[0]?.A12);
          setService13Question(res.data.success.data[0]?.Q13);
          setService13Answer(res.data.success.data[0]?.A13);
          setService14Question(res.data.success.data[0]?.Q14);
          setService14Answer(res.data.success.data[0]?.A14);
          setService15Question(res.data.success.data[0]?.Q15);
          setService15Answer(res.data.success.data[0]?.A15);
        }
        if (res.data.success.data[0]?.Q16) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
          setService10Question(res.data.success.data[0]?.Q10);
          setService10Answer(res.data.success.data[0]?.A10);
          setService11Question(res.data.success.data[0]?.Q11);
          setService11Answer(res.data.success.data[0]?.A11);
          setService12Question(res.data.success.data[0]?.Q12);
          setService12Answer(res.data.success.data[0]?.A12);
          setService13Question(res.data.success.data[0]?.Q13);
          setService13Answer(res.data.success.data[0]?.A13);
          setService14Question(res.data.success.data[0]?.Q14);
          setService14Answer(res.data.success.data[0]?.A14);
          setService15Question(res.data.success.data[0]?.Q15);
          setService15Answer(res.data.success.data[0]?.A15);
          setService16Question(res.data.success.data[0]?.Q16);
          setService16Answer(res.data.success.data[0]?.A16);
        }
        if (res.data.success.data[0]?.Q17) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
          setService10Question(res.data.success.data[0]?.Q10);
          setService10Answer(res.data.success.data[0]?.A10);
          setService11Question(res.data.success.data[0]?.Q11);
          setService11Answer(res.data.success.data[0]?.A11);
          setService12Question(res.data.success.data[0]?.Q12);
          setService12Answer(res.data.success.data[0]?.A12);
          setService13Question(res.data.success.data[0]?.Q13);
          setService13Answer(res.data.success.data[0]?.A13);
          setService14Question(res.data.success.data[0]?.Q14);
          setService14Answer(res.data.success.data[0]?.A14);
          setService15Question(res.data.success.data[0]?.Q15);
          setService15Answer(res.data.success.data[0]?.A15);
          setService16Question(res.data.success.data[0]?.Q16);
          setService16Answer(res.data.success.data[0]?.A16);
          setService17Question(res.data.success.data[0]?.Q17);
          setService17Answer(res.data.success.data[0]?.A17);
        }
        if (res.data.success.data[0]?.Q18) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
          setService10Question(res.data.success.data[0]?.Q10);
          setService10Answer(res.data.success.data[0]?.A10);
          setService11Question(res.data.success.data[0]?.Q11);
          setService11Answer(res.data.success.data[0]?.A11);
          setService12Question(res.data.success.data[0]?.Q12);
          setService12Answer(res.data.success.data[0]?.A12);
          setService13Question(res.data.success.data[0]?.Q13);
          setService13Answer(res.data.success.data[0]?.A13);
          setService14Question(res.data.success.data[0]?.Q14);
          setService14Answer(res.data.success.data[0]?.A14);
          setService15Question(res.data.success.data[0]?.Q15);
          setService15Answer(res.data.success.data[0]?.A15);
          setService16Question(res.data.success.data[0]?.Q16);
          setService16Answer(res.data.success.data[0]?.A16);
          setService17Question(res.data.success.data[0]?.Q17);
          setService17Answer(res.data.success.data[0]?.A17);
          setService18Question(res.data.success.data[0]?.Q18);
          setService18Answer(res.data.success.data[0]?.A18);
        }
        if (res.data.success.data[0]?.Q19) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
          setService10Question(res.data.success.data[0]?.Q10);
          setService10Answer(res.data.success.data[0]?.A10);
          setService11Question(res.data.success.data[0]?.Q11);
          setService11Answer(res.data.success.data[0]?.A11);
          setService12Question(res.data.success.data[0]?.Q12);
          setService12Answer(res.data.success.data[0]?.A12);
          setService13Question(res.data.success.data[0]?.Q13);
          setService13Answer(res.data.success.data[0]?.A13);
          setService14Question(res.data.success.data[0]?.Q14);
          setService14Answer(res.data.success.data[0]?.A14);
          setService15Question(res.data.success.data[0]?.Q15);
          setService15Answer(res.data.success.data[0]?.A15);
          setService16Question(res.data.success.data[0]?.Q16);
          setService16Answer(res.data.success.data[0]?.A16);
          setService17Question(res.data.success.data[0]?.Q17);
          setService17Answer(res.data.success.data[0]?.A17);
          setService18Question(res.data.success.data[0]?.Q18);
          setService18Answer(res.data.success.data[0]?.A18);
          setService19Question(res.data.success.data[0]?.Q19);
          setService19Answer(res.data.success.data[0]?.A19);
        }
        if (res.data.success.data[0]?.Q20) {
          setArrayofservicesFAQ([
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
            { quetion: "Enter Quetion", answer: "Enter Answer" },
          ]);
          setService1Question(res.data.success.data[0]?.Q1);
          setService1Answer(res.data.success.data[0]?.A1);
          setService2Question(res.data.success.data[0]?.Q2);
          setService2Answer(res.data.success.data[0]?.A2);
          setService3Question(res.data.success.data[0]?.Q3);
          setService3Answer(res.data.success.data[0]?.A3);
          setService4Question(res.data.success.data[0]?.Q4);
          setService4Answer(res.data.success.data[0]?.A4);
          setService5Question(res.data.success.data[0]?.Q5);
          setService5Answer(res.data.success.data[0]?.A5);
          setService6Question(res.data.success.data[0]?.Q6);
          setService6Answer(res.data.success.data[0]?.A6);
          setService7Question(res.data.success.data[0]?.Q7);
          setService7Answer(res.data.success.data[0]?.A7);
          setService8Question(res.data.success.data[0]?.Q8);
          setService8Answer(res.data.success.data[0]?.A8);
          setService9Question(res.data.success.data[0]?.Q9);
          setService9Answer(res.data.success.data[0]?.A9);
          setService10Question(res.data.success.data[0]?.Q10);
          setService10Answer(res.data.success.data[0]?.A10);
          setService11Question(res.data.success.data[0]?.Q11);
          setService11Answer(res.data.success.data[0]?.A11);
          setService12Question(res.data.success.data[0]?.Q12);
          setService12Answer(res.data.success.data[0]?.A12);
          setService13Question(res.data.success.data[0]?.Q13);
          setService13Answer(res.data.success.data[0]?.A13);
          setService14Question(res.data.success.data[0]?.Q14);
          setService14Answer(res.data.success.data[0]?.A14);
          setService15Question(res.data.success.data[0]?.Q15);
          setService15Answer(res.data.success.data[0]?.A15);
          setService16Question(res.data.success.data[0]?.Q16);
          setService16Answer(res.data.success.data[0]?.A16);
          setService17Question(res.data.success.data[0]?.Q17);
          setService17Answer(res.data.success.data[0]?.A17);
          setService18Question(res.data.success.data[0]?.Q18);
          setService18Answer(res.data.success.data[0]?.A18);
          setService19Question(res.data.success.data[0]?.Q19);
          setService19Answer(res.data.success.data[0]?.A19);
          setService20Question(res.data.success.data[0]?.Q20);
          setService20Answer(res.data.success.data[0]?.A20);
        }
      });
  }, [catalogueId]);

  const classes = useStyles();
 
 


  const [arrayoffiles, setArrayoffiles] = useState([]);

  const [arrayofservices, setArrayofservices] = useState([
    { name: "Starter", price: "10", days: "3", id: 1 },
  ]);
  const [arrayofservicesFAQ, setArrayofservicesFAQ] = useState([
    { quetion: "Enter Quetion", answer: "Enter Answer", id: 1 },
  ]);
  const [cateaddcheckbox1, setCateaddcheckbox1] = useState(true);
  const [cateaddcheckbox2, setCateaddcheckbox2] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);

 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [delieveryTime, setDelieveryTime] = useState("");
  const [BannerTitle, setBannerTitle] = useState("");

  const [service1name, setService1name] = useState("");
  const [service2name, setService2name] = useState("");
  const [service3name, setService3name] = useState("");
  const [service4name, setService4name] = useState("");
  const [service5name, setService5name] = useState("");
  const [service6name, setService6name] = useState("");
  const [service7name, setService7name] = useState("");
  const [service8name, setService8name] = useState("");
  const [service9name, setService9name] = useState("");
  const [service10name, setService10name] = useState("");
  const [service11name, setService11name] = useState("");
  const [service12name, setService12name] = useState("");
  const [service13name, setService13name] = useState("");
  const [service14name, setService14name] = useState("");

  const [service1namep, setService1namep] = useState("");
  const [service2namep, setService2namep] = useState("");
  const [service3namep, setService3namep] = useState("");
  const [service4namep, setService4namep] = useState("");
  const [service5namep, setService5namep] = useState("");
  const [service6namep, setService6namep] = useState("");
  const [service7namep, setService7namep] = useState("");
  const [service8namep, setService8namep] = useState("");
  const [service9namep, setService9namep] = useState("");
  const [service10namep, setService10namep] = useState("");
  const [service11namep, setService11namep] = useState("");
  const [service12namep, setService12namep] = useState("");
  const [service13namep, setService13namep] = useState("");
  const [service14namep, setService14namep] = useState("");

  const [service1named, setService1named] = useState("");
  const [service2named, setService2named] = useState("");
  const [service3named, setService3named] = useState("");
  const [service4named, setService4named] = useState("");
  const [service5named, setService5named] = useState("");
  const [service6named, setService6named] = useState("");
  const [service7named, setService7named] = useState("");
  const [service8named, setService8named] = useState("");
  const [service9named, setService9named] = useState("");
  const [service10named, setService10named] = useState("");
  const [service11named, setService11named] = useState("");
  const [service12named, setService12named] = useState("");
  const [service13named, setService13named] = useState("");
  const [service14named, setService14named] = useState("");

  const [service1nameWInc, setService1nameWInc] = useState("");
  const [service2nameWInc, setService2nameWInc] = useState("");
  const [service3nameWInc, setService3nameWInc] = useState("");
  const [service4nameWInc, setService4nameWInc] = useState("");
  const [service5nameWInc, setService5nameWInc] = useState("");
  const [service6nameWInc, setService6nameWInc] = useState("");
  const [service7nameWInc, setService7nameWInc] = useState("");
  const [service8nameWInc, setService8nameWInc] = useState("");
  const [service9nameWInc, setService9nameWInc] = useState("");
  const [service10nameWInc, setService10nameWInc] = useState("");
  const [service11nameWInc, setService11nameWInc] = useState("");
  const [service12nameWInc, setService12nameWInc] = useState("");
  const [service13nameWInc, setService13nameWInc] = useState("");
  const [service14nameWInc, setService14nameWInc] = useState("");

  const [service1Question, setService1Question] = useState("");
  const [service2Question, setService2Question] = useState("");
  const [service3Question, setService3Question] = useState("");
  const [service4Question, setService4Question] = useState("");
  const [service5Question, setService5Question] = useState("");
  const [service6Question, setService6Question] = useState("");
  const [service7Question, setService7Question] = useState("");
  const [service8Question, setService8Question] = useState("");
  const [service9Question, setService9Question] = useState("");
  const [service10Question, setService10Question] = useState("");
  const [service11Question, setService11Question] = useState("");
  const [service12Question, setService12Question] = useState("");
  const [service13Question, setService13Question] = useState("");
  const [service14Question, setService14Question] = useState("");
  const [service15Question, setService15Question] = useState("");
  const [service16Question, setService16Question] = useState("");
  const [service17Question, setService17Question] = useState("");
  const [service18Question, setService18Question] = useState("");
  const [service19Question, setService19Question] = useState("");
  const [service20Question, setService20Question] = useState("");

  const [service1Answer, setService1Answer] = useState("");
  const [service2Answer, setService2Answer] = useState("");
  const [service3Answer, setService3Answer] = useState("");
  const [service4Answer, setService4Answer] = useState("");
  const [service5Answer, setService5Answer] = useState("");
  const [service6Answer, setService6Answer] = useState("");
  const [service7Answer, setService7Answer] = useState("");
  const [service8Answer, setService8Answer] = useState("");
  const [service9Answer, setService9Answer] = useState("");
  const [service10Answer, setService10Answer] = useState("");
  const [service11Answer, setService11Answer] = useState("");
  const [service12Answer, setService12Answer] = useState("");
  const [service13Answer, setService13Answer] = useState("");
  const [service14Answer, setService14Answer] = useState("");
  const [service15Answer, setService15Answer] = useState("");
  const [service16Answer, setService16Answer] = useState("");
  const [service17Answer, setService17Answer] = useState("");
  const [service18Answer, setService18Answer] = useState("");
  const [service19Answer, setService19Answer] = useState("");
  const [service20Answer, setService20Answer] = useState("");

  const [description1, setDescription1] = useState("");
  const navigate = useNavigate();
  const handlesavededitcatalogue = () => {
    const formdata = new FormData();

    if (arrayofservices.length === 0) {
      setRestag(true);
      return;
    }
   
      formdata.append("Q1", service1Question);
      formdata.append("A1", service1Answer);
      formdata.append("Q2", service2Question);
      formdata.append("A2", service2Answer);
      formdata.append("Q3", service3Question);
      formdata.append("A3", service3Answer);
      formdata.append("Q4", service4Question);
      formdata.append("A4", service4Answer);
      formdata.append("Q5", service5Question);
      formdata.append("A5", service5Answer);
      formdata.append("Q6", service6Question);
      formdata.append("A6", service6Answer);
      formdata.append("Q7", service7Question);
      formdata.append("A7", service7Answer);
      formdata.append("Q8", service8Question);
      formdata.append("A8", service8Answer);
      formdata.append("Q9", service9Question);
      formdata.append("A9", service9Answer);
      formdata.append("Q10", service10Question);
      formdata.append("A10", service10Answer);
      formdata.append("Q11", service11Question);
      formdata.append("A11", service11Answer);
      formdata.append("Q12", service12Question);
      formdata.append("A12", service12Answer);
      formdata.append("Q13", service13Question);
      formdata.append("A13", service13Answer);
      formdata.append("Q14", service14Question);
      formdata.append("A14", service14Answer);
      formdata.append("Q15", service15Question);
      formdata.append("A15", service15Answer);
      formdata.append("Q16", service16Question);
      formdata.append("A16", service16Answer);
      formdata.append("Q17", service17Question);
      formdata.append("A17", service17Answer);
      formdata.append("Q18", service18Question);
      formdata.append("A18", service18Answer);
      formdata.append("Q19", service19Question);
      formdata.append("A19", service19Answer);
      formdata.append("Q20", service20Question);
      formdata.append("A20", service20Answer);
    
   
      formdata.append("serviceName1", service1name);
      formdata.append("servicePrice1", service1namep);
      formdata.append("serviceDays1", service1named);
      formdata.append("whatInclude1", service1nameWInc);
      formdata.append("serviceName2", service2name);
      formdata.append("servicePrice2", service2namep);
      formdata.append("serviceDays2", service2named);
      formdata.append("whatInclude2", service2nameWInc);
      formdata.append("serviceName3", service3name);
      formdata.append("servicePrice3", service3namep);
      formdata.append("serviceDays3", service3named);
      formdata.append("whatInclude3", service3nameWInc);
      formdata.append("serviceName4", service4name);
      formdata.append("servicePrice4", service4namep);
      formdata.append("serviceDays4", service4named);
      formdata.append("whatInclude4", service4nameWInc);
      formdata.append("serviceName5", service5name);
      formdata.append("servicePrice5", service5namep);
      formdata.append("serviceDays5", service5named);
      formdata.append("whatInclude5", service5nameWInc);
      formdata.append("serviceName6", service6name);
      formdata.append("servicePrice6", service6namep);
      formdata.append("serviceDays6", service6named);
      formdata.append("whatInclude6", service6nameWInc);
      formdata.append("serviceName7", service7name);
      formdata.append("servicePrice7", service7namep);
      formdata.append("serviceDays7", service7named);
      formdata.append("whatInclude7", service7nameWInc);
      formdata.append("serviceName8", service8name);
      formdata.append("servicePrice8", service8namep);
      formdata.append("serviceDays8", service8named);
      formdata.append("whatInclude8", service8nameWInc);
      formdata.append("serviceName9", service9name);
      formdata.append("servicePrice9", service9namep);
      formdata.append("serviceDays9", service9named);
      formdata.append("whatInclude9", service9nameWInc);
      formdata.append("serviceName10", service10name);
      formdata.append("servicePrice10", service10namep);
      formdata.append("serviceDays10", service10named);
      formdata.append("whatInclude10", service10nameWInc);
      formdata.append("serviceName11", service11name);
      formdata.append("servicePrice11", service11namep);
      formdata.append("serviceDays11", service11named);
      formdata.append("whatInclude11", service11nameWInc);
      formdata.append("serviceName12", service12name);
      formdata.append("servicePrice12", service12namep);
      formdata.append("serviceDays12", service12named);
      formdata.append("whatInclude12", service12nameWInc);
      formdata.append("serviceName13", service13name);
      formdata.append("servicePrice13", service13namep);
      formdata.append("serviceDays13", service13named);
      formdata.append("whatInclude13", service13nameWInc);
      formdata.append("serviceName14", service14name);
      formdata.append("servicePrice14", service14namep);
      formdata.append("serviceDays14", service14named);
      formdata.append("whatInclude14", service14nameWInc);
    

    formdata.append("catalogueId", catalogueId);
    formdata.append("description", description);
    formdata.append("descriptionForClientSide", description1);
    formdata.append("category", categogryid);
    formdata.append("subCategory", subCategogryid);
    formdata.append("title", title);
    formdata.append("bannerTitle", BannerTitle);
    formdata.append("deliveryDate", delieveryTime);
    formdata.append("remotejob", cateaddcheckbox1);
    formdata.append("onSiteLocation", studyset);

    skillset?.length > 0 &&
      skillset?.map((data, index) => {
        formdata.append(`skill${index + 1}`, data);
      });

    axios
      .post(`${API_HOST}/catalouge/editCatalouge`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
    
        navigate("/profile");
      })
      .catch((err) => {
        setRestag(true);
      });
  };

  const [restag, setRestag] = useState(false);
  //// Category & Sub-Category API And Functions /////////
  const [arrayoflongdegree, setArrayoflongdegree] = useState();
  const [degreeset, setDegreeset] = useState("");
  const [anchorElx2, setAnchorElx2] = useState(null);
  const [categogryid, setCategogryid] = useState();
  const [searchCategorysearch, setSearchCategorysearch] = useState("");
  const [searchSubCategorysearch, setSearchSubCategorysearch] = useState("");

  const [allsubcategory, setAllsubcategory] = useState("");
  const [subcategoryValue, setSubcategoryValue] = useState("");
  const [subCategogryid, setSubCategogryid] = useState();
  const [anchorElx3, setAnchorElx3] = useState(null);
  const [cateerror2, setcateError2] = useState("");
  const [anchorElx4, setAnchorElx4] = useState(null);
  const [studyset, setstudyset] = useState("");
  const [locationname, setLocationname] = useState("");
  const [arrayoflongstudy, setArrayoflongstudy] = useState([]);

  const [allcategory, setAllcategory] = useState([0]);
  const [istdropdown, setIstdropdown] = useState(false);
  const [subcateid, setsubcateid] = useState("");
  const [skillset, setskillset] = useState([]);
  const [setSelectedCategory1, setSetSelectedCategory1] = useState("");

  const [openx, setOpenx] = React.useState(false);
  const handleOpenx = () => setOpenx(true);
  const handleClosex = () => setOpenx(false);

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/location/viewLocation?pageSize=100&pageNumber=1&search=${locationname}`
      )
      .then((res) => {
        setArrayoflongstudy(res?.data?.success?.data);
      });
  }, [locationname]);

  // const handleSearchCategory = (e) => {
  //   if (categogryid && subcateid) {
  //     axios
  //       .get(
  //         `${API_HOST}/theSkill/viewSkill?pageSize=8&pageNumber=1&skill=${e.target.value}&categoryId=${categogryid}&subCategoryId=${subcateid}`
  //       )
  //       .then((res) => {
  //         setAllcategory(res?.data?.success?.data);
  //         setOpenx(true);
  //         if (res?.data?.success?.data?.length > 0) {
  //           setIstdropdown(true);
  //         }
  //       });
  //   }
  // }

  const handleSearchCategorySkills = (e) => {
    if (categogryid && subCategogryid) {
      axios
        .get(
          `${API_HOST}/theSkill/viewSkill?pageSize=80&pageNumber=1&skill=${e.target.value}&categoryId=${categogryid}&subCategoryId=${subCategogryid}`
        )
        .then((res) => {
          setAllcategory(res?.data?.success?.data);
          setOpenx(true);
          if (res?.data?.success?.data?.length > 0) {
            setIstdropdown(true);
          }
        });
    }
  };

  const openx2 = Boolean(anchorElx2);
  const idx2 = openx2 ? "simple-popover" : undefined;

  const openx3 = Boolean(anchorElx3);
  const idx3 = openx3 ? "simple-popover" : undefined;

  const openx4 = Boolean(anchorElx4);
  const idx4 = openx4 ? "simple-popover" : undefined;

  const handleClickx2 = (event) => {
    setAnchorElx2(event.currentTarget);
  };

  const handleClickx3 = (event) => {
    setAnchorElx3(event.currentTarget);
  };

  const handleClosex2 = () => {
    setAnchorElx2(null);
  };

  const handleClosex3 = () => {
    setAnchorElx3(null);
  };

  const handleClickx4 = (event) => {
    setAnchorElx4(event.currentTarget);
  };
  const handleClosex4 = () => {
    setAnchorElx4(null);
  };

  useEffect(() => {
    axios
      .get(
        `${API_HOST}/theCategory/viewCategory?pageSize=50&pageNumber=1&category=${searchCategorysearch}`
      )
      .then((res) => {
        setArrayoflongdegree(res?.data?.success?.data);
      });
  }, [searchCategorysearch]);

  useEffect(() => {
    if (categogryid) {
      axios
        .get(
          `${API_HOST}/subCategory/viewSubCategory?pageSize=6&pageNumber=1&subCategory=${searchSubCategorysearch}&categoryId=${categogryid}`
        )
        .then((res) => {
          setAllsubcategory(res?.data?.success?.data);
        });
    }
  }, [searchSubCategorysearch, categogryid]);

  const [cateerror, setcateError] = useState("");
  return (
    <div style={{ background: "#F9F9F9", width: "100vw", padding: "1vw" }}>
      <button
        style={{
          cursor: "pointer",
          zIndex: "100",
          padding: width > 700 ? "0.5vw 0.7vw" : "1vw",
          backgroundColor: "white",
          color: "#000",
          borderRadius: "0.3vw",
          border: "1px solid #d7d7d7",
          marginLeft: width > 700 ? "14vw" : "2vw",
          marginTop: width <= 700 && "1vw",
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosNewIcon />
      </button>
      <div className="addCatalogcontainer">
        <div className="profiletitleandmenunav">
          <div
            style={{
              fontSize: width > 700 ? "1.7vw" : "4vw",
              fontWeight: "400",
            }}
            className="profiledetailstitle"
          >
            Edit Catalogue
          </div>
          <div className="profiledetailnavmanu">
            <div></div>
          </div>
        </div>
        <hr
          style={{ color: "#00000090", margin: width > 700 ? "1vw" : "2vw" }}
        />
        <div style={{ marginBottom: "0.5vw" }} className="jobpodtedfieldtitile">
          Catalogue Category
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: width <= 700 && "column",
          }}
        >
          <div
            style={{
              left: "0vw",
              width: width > 700 ? "48%" : "99%",
              marginLeft: "0%",
            }}
            className="loginfield"
            onClick={handleClickx2}
          >
            <TextField
              id="outlined-basic"
              label="Category *"
              variant="outlined"
              value={degreeset}
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
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            {width > 700 && (
              <span style={{ width: "0.1vw" }}>
                <KeyboardArrowDownOutlined
                  style={{
                    fontSize: "1.5vw",
                    position: "relative",
                    right: "2vw",
                    top: "1vw",
                  }}
                />
              </span>
            )}
          </div>
          <Popover
            id={idx2}
            open={openx2}
            anchorEl={anchorElx2}
            onClose={handleClosex2}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div
              style={{
                maxHeight: width > 700 ? "18vw" : "40vw",
                overflow: "scroll",
                width: width > 700 ? "36vw" : "90vw",
              }}
            >
              <Typography
                sx={{
                  p: 1,
                  pl: 1,
                  ml: 1,
                  pr: 0,
                  width: width > 700 ? "35vw" : "87vw",
                  position: "fixed",
                  background: "white",
                  zIndex: "10",
                }}
              >
                <input
                  placeholder="search here .."
                  onChange={(e) => {
                    setSearchCategorysearch(e.target.value);
                  }}
                  style={{
                    width: "97%",
                    border: "1.5px solid #00000050",
                    outline: "none",
                    height: "2.5",
                    borderRadius: "0.21vw",
                  }}
                />
              </Typography>
              <Typography
                sx={{
                  p: 2.5,
                  pl: 1,
                  ml: 1,
                  width: "100%",
                  cursor: "pointer",
                }}
              ></Typography>

              {arrayoflongdegree?.length > 0 &&
                arrayoflongdegree.map((data, index) => {
                  return (
                    <Typography
                      sx={{
                        p: 0.51,
                        pl: 1,
                        ml: 1,
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setCategogryid(data?._id);
                        setDegreeset(data?.category);
                        handleClosex2();
                        setcateError();
                      }}
                    >
                      {data?.category}
                    </Typography>
                  );
                })}
            </div>
          </Popover>
                  <div
            style={{
              left: "0vw",
              width: width > 700 ? "48%" : "99%",
              marginLeft: "0%",
            }}
            className="loginfield"
            onClick={handleClickx3}
          >
            <TextField
              id="outlined-basic"
              label="Sub Category *"
              variant="outlined"
              disabled
              value={subcategoryValue}
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
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            {width > 700 && (
              <span style={{ width: "0.1vw" }}>
                <KeyboardArrowDownOutlined
                  style={{
                    fontSize: "1.5vw",
                    position: "relative",
                    right: "2vw",
                    top: "1vw",
                  }}
                />
              </span>
            )}
          </div>
          <Popover
            id={idx3}
            open={openx3}
            anchorEl={anchorElx3}
            onClose={handleClosex3}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <div
              style={{
                maxHeight: width > 700 ? "18vw" : "40vw",
                overflow: "scroll",
                width: width > 700 ? "36vw" : "90vw",
              }}
            >
              <Typography
                sx={{
                  p: 1,
                  pl: 1,
                  ml: 1,
                  pr: 0,
                  width: width > 700 ? "35vw" : "87vw",
                  position: "fixed",
                  background: "white",
                  zIndex: "10",
                }}
              >
                <input
                  placeholder="search here .."
                  onChange={(e) => {
                    setSearchSubCategorysearch(e.target.value);
                  }}
                  style={{
                    width: "97%",
                    border: "1.5px solid #00000050",
                    outline: "none",
                    height: "2.5",
                    borderRadius: "0.21vw",
                  }}
                />
              </Typography>
              <Typography
                sx={{
                  p: 2.5,
                  pl: 1,
                  ml: 1,
                  width: "100%",
                  cursor: "pointer",
                }}
              ></Typography>

              {allsubcategory?.length > 0 &&
                allsubcategory.map((data, index) => {
                  return (
                    <Typography
                      sx={{
                        p: 0.51,
                        pl: 1,
                        ml: 1,
                        width: "100%",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setSubCategogryid(data?._id);
                        setSubcategoryValue(data?.subCategory);
                        handleClosex3();
                        setcateError2();
                      }}
                    >
                      {data?.subCategory}
                    </Typography>
                  );
                })}
            </div>
          </Popover>
         
        </div>
        <div
          style={{ left: "0vw", width: "99%", margin: "2vw 0.5vw 2vw 0vw" }}
          className="loginfield"
        >
          <TextField
            id="outlined-basic"
            label="Title"
            value={title}
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
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div
          style={{
            left: "0vw",
            width: "99%",
            margin: width > 700 ? "2vw 0.5vw 2vw 0vw" : "4vw 0vw",
          }}
          className="loginfield"
        >
          <TextField
            id="outlined-basic"
            label="Description (Optional)"
            variant="outlined"
            value={description}
            placeholder="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:"
            multiline
            rows="6"
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
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <div className="inputfilebox">
          <div>
            <label htmlFor="inputctaelogfile">
              <div className="inputicon">
                <img src={img} alt="" />
              </div>
              <div className="inputcateaddformfile">
                Drag and Drop ,Browse to upload
              </div>
              <input
                type="file"
                id="inputctaelogfile"
                onChange={(e) => {
                  const formdata = new FormData();
                  formdata.append("fileName", e.target.files[0]);
                  formdata.append("catalogueId", catalogueId);
                  axios
                    .post(`${API_HOST}/catalouge/updateFiles`, formdata, {
                      headers: {
                        "Content-Type": "multipart/form-data",
                      },
                    })
                    .then((res) => {
                      setArrayoffiles(res.data.success.data?.files);
                    })
                    .catch((err) => {
                      setRestag(true);
                    });
                }}
                hidden
              />
            </label>
          </div>
        </div>

        <div className="inputfilesshowncatebox">
          {arrayoffiles?.length > 0 &&
            arrayoffiles?.map((file) => {
              return (
                <div className="inputfilesshowncatboxsingle">
                  <div className="inputfilesshowncatboxsingleimg">
                    <img
                      src={img1}
                      style={{ width: width > 700 ? "" : "4.5vw" }}
                      alt=""
                    />
                  </div>
                  <div className="fileselctednamecate">
                    {file?.file.slice(0, 50)}
                  </div>
                  <div className="inputfilesshowncatboxsingleimg">
                    <img
                      onClick={() => {
                        axios
                          .post(`${API_HOST}/catalouge/removeFiles`, {
                            catalogueId: catalogueId,
                            _id: file._id,
                          })
                          .then((res) => {
                            axios
                              .get(
                                `${API_HOST}/catalouge/viewCatalouge?catalogueId=${catalogueId}`
                              )
                              .then((res) => {
                                setArrayoffiles(
                                  res.data.success.data[0]?.files
                                );
                              });
                          })
                          .catch((err) => {
                            setRestag(true);
                          });
                      }}
                      style={{
                        width: width > 700 ? "1.5vw" : "4.5vw",
                        marginLeft: "1vw",
                      }}
                      src={img2}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
        </div>

        <div
          style={{
            left: "0vw",
            width: "99%",
            margin: width > 700 ? "0vw 0.5vw 2vw 0vw" : "4vw 0",
          }}
          className="loginfield"
        >
          <TextField
            id="outlined-basic"
            label="Banner Title"
            variant="outlined"
            value={BannerTitle}
            placeholder="Ex- 2-3 days"
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
            onChange={(e) => {
              setBannerTitle(e.target.value);
            }}
            inputProps={{ className: classes.input }}
          />
        </div>
        <div
          style={{
            marginBottom: "0.5vw",
            marginTop: "1.3vw",
            fontSize: width > 700 ? "1.2vw" : "3.5vw",
          }}
          className="jobpodtedfieldtitile"
        >
          Skills
        </div>
        <div
          style={{
            marginRight: "1vw",
            height: "fit-content",
            minHeight: width > 700 ? "" : "10vw",
            padding: "0.3vw",
          }}
          className="boxofskillsp mb-4"
          onClick={() => {
            setIstdropdown(false);
          }}
        >
          <div className="savedskillpopupcardp">
            {skillset?.slice(0, 10)?.map((skill, index) => {
              return (
                <div
                  style={{
                    borderRadius: "1vw",
                    padding: width > 700 ? "0.5vw 1vw" : "1vw 2vw",
                    margin: width > 700 ? "0.31vw 0.5vw" : "1vw",
                    height: width > 700 ? "2.1vw" : "7vw",
                    fontSize: width > 700 ? "0.9vw" : "2.7vw",
                  }}
                  className="savedskillwrapsinglep"
                >
                  {skill}
                  <div
                    onClick={() => {
                      setskillset([
                        ...skillset.slice(0, index),
                        ...skillset.slice(index + 1, skillset.length),
                      ]);
                    }}
                  >
                    <CloseIcon
                      style={{
                        fontSize: width > 700 ? "1.4vw" : "4vw",
                        marginLeft: width > 700 ? "0.61vw" : "1vw",
                        cursor: "pointer",
                      }}
                    />
                  </div>{" "}
                </div>
              );
            })}
            <div style={{ height: "3vw" }}>
              {skillset?.length < 10 ? (
                <input
                  style={{
                    border: "none",
                    outline: "none",
                    background: "white",
                    height: width > 700 ? "3vw" : "8vw",
                    padding: width > 700 ? "0.5vw" : "1vw",
                    width: "fit-content",
                    minWidth: "5vw",
                    fontSize: width > 700 ? "1.1vw" : "3vw",
                  }}
                  type="text"
                  placeholder="type here...."
                  value={setSelectedCategory1}
                  onChange={(e) => {
                    handleSearchCategorySkills(e);
                    setSetSelectedCategory1(e.target.value);
                  }}
                  // onKeyPress={(e) => {
                  //   if (e.key === "Enter") {
                  //     e.preventDefault();
                  //     if (skillset.indexOf(setSelectedCategory1) < 0) {
                  //       setskillset(
                  //         [...skillset, setSelectedCategory1].slice(0, 10)
                  //       );
                  //     }
                  //   }
                  //  setSetSelectedCategory1("")
                  // }}
                />
              ) : (
                ""
              )}
              {istdropdown ? (
                <Fade timeout={100}>
                  <div
                    onMouseLeave={() => setIstdropdown(false)}
                    className="dropdownboxhoverdefault"
                    style={{
                      left: "1vw",
                      width: "fit-content",
                      opacity: "1",
                      visibility: "visible",
                      zIndex: "300",
                    }}
                  >
                    {allcategory?.length > 0 &&
                      allcategory?.slice(0, 8)?.map((data) => {
                        return (
                          <Typography
                            sx={{
                              p: 2,
                              pb: 0.5,
                              pt: 1,
                              fontSize: "1vw",
                              fontWeight: "500",
                              fontFamily: "poppins",
                              cursor: "pointer",
                            }}
                            // onClick={() => {
                            //   if (skillset.indexOf(data?.skill) < 0) {
                            //     setskillset(
                            //       [...skillset, data?.skill].slice(0, 10)
                            //     );
                            //   }
                            //   setIstdropdown(false);
                            //   setSetSelectedCategory1("");
                            // }}
                            onClick={() => {
                              if (skillset.indexOf(data?.skill) < 0) {
                                setskillset(
                                  [...skillset, data?.skill].slice(0, 10)
                                );
                                // handlePostJOb(data?.skill);
                              }
                              setIstdropdown(false);
                              setSetSelectedCategory1("");
                            }}
                          >
                            {data?.skill}
                          </Typography>
                        );
                      })}
                  </div>
                </Fade>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div
          style={{ left: "0vw", width: "99%", margin: "2vw 0.5vw 2vw 0vw" }}
          className="loginfield"
        >
          <TextField
            id="outlined-basic"
            label="Delivery Time"
            variant="outlined"
            value={delieveryTime}
            placeholder="Ex- 2-3 days"
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
            onChange={(e) => {
              setDelieveryTime(e.target.value);
            }}
            inputProps={{ className: classes.input }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "2vw",
          }}
        >
          <div
            style={{ marginBottom: "0.5vw" }}
            className="jobpodtedfieldtitile"
          >
            Services
          </div>
          <div
            style={{ width: width > 700 ? "" : "15%" }}
            className="servicesmenuname4box"
          >
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => {
                const index = arrayofservices.length-1;
                index + 1 === 1
                ? setService1nameWInc("")
                : index + 1 === 2
                ? setService2nameWInc("")
                : index + 1 === 3
                ? setService3nameWInc("")
                : index + 1 === 4
                ? setService4nameWInc("")
                : index + 1 === 5
                ? setService5nameWInc("")
                : index + 1 === 6
                ? setService6nameWInc("")
                : index + 1 === 7
                ? setService7nameWInc("")
                : index + 1 === 8
                ? setService8nameWInc("")
                : index + 1 === 9
                ? setService9nameWInc("")
                : index + 1 === 10
                ? setService10nameWInc("")
                : index + 1 === 11
                ? setService11nameWInc("")
                : index + 1 === 12
                ? setService12nameWInc("")
                : index + 1 === 13
                ? setService13nameWInc("")
                : setService14nameWInc("");
  
              index + 1 === 1
                ? setService1named("")
                : index + 1 === 2
                ? setService2named("")
                : index + 1 === 3
                ? setService3named("")
                : index + 1 === 4
                ? setService4named("")
                : index + 1 === 5
                ? setService5named("")
                : index + 1 === 6
                ? setService6named("")
                : index + 1 === 7
                ? setService7named("")
                : index + 1 === 8
                ? setService8named("")
                : index + 1 === 9
                ? setService9named("")
                : index + 1 === 10
                ? setService10named("")
                : index + 1 === 11
                ? setService11named("")
                : index + 1 === 12
                ? setService12named("")
                : index + 1 === 13
                ? setService13named("")
                : setService14named("");
              index + 1 === 1
                ? setService1namep("")
                : index + 1 === 2
                ? setService2namep("")
                : index + 1 === 3
                ? setService3namep("")
                : index + 1 === 4
                ? setService4namep("")
                : index + 1 === 5
                ? setService5namep("")
                : index + 1 === 6
                ? setService6namep("")
                : index + 1 === 7
                ? setService7namep("")
                : index + 1 === 8
                ? setService8namep("")
                : index + 1 === 9
                ? setService9namep("")
                : index + 1 === 10
                ? setService10namep("")
                : index + 1 === 11
                ? setService11namep("")
                : index + 1 === 12
                ? setService12namep("")
                : index + 1 === 13
                ? setService13namep("")
                : setService14namep("");
  
              index + 1 === 1
                ? setService1name("")
                : index + 1 === 2
                ? setService2name("")
                : index + 1 === 3
                ? setService3name("")
                : index + 1 === 4
                ? setService4name("")
                : index + 1 === 5
                ? setService5name("")
                : index + 1 === 6
                ? setService6name("")
                : index + 1 === 7
                ? setService7name("")
                : index + 1 === 8
                ? setService8name("")
                : index + 1 === 9
                ? setService9name("")
                : index + 1 === 10
                ? setService10name("")
                : index + 1 === 11
                ? setService11name("")
                : index + 1 === 12
                ? setService12name("")
                : index + 1 === 13
                ? setService13name("")
                : setService14name("");
                setArrayofservices([
                  ...arrayofservices.slice(0, arrayofservices.length - 1),
                ]);
              }}
            >
              Remove
            </span>
          </div>
        </div>

        <div
          className="servicesmenudiv"
          style={{ fontWeight: "500", marginBottom: "-1vw" }}
        >
          <div className="servicesmenuname1">Name</div>
          <div className="servicesmenuname2">Price</div>
          <div className="servicesmenuname3">Days</div>
          <div className="servicesmenuname4"></div>
        </div>
        {arrayofservices?.map((data, index) => {
          return (
            <>
              <div
                style={{ marginTop: "2vw", flexWrap: "wrap" }}
                className="servicesmenudiv"
              >
                <div className="servicesmenuname1box">
                  <input
                    type="text"
                    value={
                      index + 1 === 1
                        ? service1name
                        : index + 1 === 2
                        ? service2name
                        : index + 1 === 3
                        ? service3name
                        : index + 1 === 4
                        ? service4name
                        : index + 1 === 5
                        ? service5name
                        : index + 1 === 6
                        ? service6name
                        : index + 1 === 7
                        ? service7name
                        : index + 1 === 8
                        ? service8name
                        : index + 1 === 9
                        ? service9name
                        : index + 1 === 10
                        ? service10name
                        : index + 1 === 11
                        ? service11name
                        : index + 1 === 12
                        ? service12name
                        : index + 1 === 13
                        ? service13name
                        : service14name
                    }
                    onChange={(e) => {
                      index + 1 === 1
                        ? setService1name(e.target.value)
                        : index + 1 === 2
                        ? setService2name(e.target.value)
                        : index + 1 === 3
                        ? setService3name(e.target.value)
                        : index + 1 === 4
                        ? setService4name(e.target.value)
                        : index + 1 === 5
                        ? setService5name(e.target.value)
                        : index + 1 === 6
                        ? setService6name(e.target.value)
                        : index + 1 === 7
                        ? setService7name(e.target.value)
                        : index + 1 === 8
                        ? setService8name(e.target.value)
                        : index + 1 === 9
                        ? setService9name(e.target.value)
                        : index + 1 === 10
                        ? setService10name(e.target.value)
                        : index + 1 === 11
                        ? setService11name(e.target.value)
                        : index + 1 === 12
                        ? setService12name(e.target.value)
                        : index + 1 === 13
                        ? setService13name(e.target.value)
                        : setService14name(e.target.value);
                    }}
                  />
                </div>
                <div className="servicesmenuname2box">
                  $
                  <input
                    type="number"
                    value={
                      index + 1 === 1
                        ? service1namep
                        : index + 1 === 2
                        ? service2namep
                        : index + 1 === 3
                        ? service3namep
                        : index + 1 === 4
                        ? service4namep
                        : index + 1 === 5
                        ? service5namep
                        : index + 1 === 6
                        ? service6namep
                        : index + 1 === 7
                        ? service7namep
                        : index + 1 === 8
                        ? service8namep
                        : index + 1 === 9
                        ? service9namep
                        : index + 1 === 10
                        ? service10namep
                        : index + 1 === 11
                        ? service11namep
                        : index + 1 === 12
                        ? service12namep
                        : index + 1 === 13
                        ? service13namep
                        : service14namep
                    }
                    onChange={(e) => {
                      index + 1 === 1
                        ? setService1namep(e.target.value)
                        : index + 1 === 2
                        ? setService2namep(e.target.value)
                        : index + 1 === 3
                        ? setService3namep(e.target.value)
                        : index + 1 === 4
                        ? setService4namep(e.target.value)
                        : index + 1 === 5
                        ? setService5namep(e.target.value)
                        : index + 1 === 6
                        ? setService6namep(e.target.value)
                        : index + 1 === 7
                        ? setService7namep(e.target.value)
                        : index + 1 === 8
                        ? setService8namep(e.target.value)
                        : index + 1 === 9
                        ? setService9namep(e.target.value)
                        : index + 1 === 10
                        ? setService10namep(e.target.value)
                        : index + 1 === 11
                        ? setService11namep(e.target.value)
                        : index + 1 === 12
                        ? setService12namep(e.target.value)
                        : index + 1 === 13
                        ? setService13namep(e.target.value)
                        : setService14namep(e.target.value);
                    }}
                  />
                </div>
                <div className="servicesmenuname3box">
                  <input
                    type="number"
                    placeholder="3-days"
                    value={
                      index + 1 === 1
                        ? service1named
                        : index + 1 === 2
                        ? service2named
                        : index + 1 === 3
                        ? service3named
                        : index + 1 === 4
                        ? service4named
                        : index + 1 === 5
                        ? service5named
                        : index + 1 === 6
                        ? service6named
                        : index + 1 === 7
                        ? service7named
                        : index + 1 === 8
                        ? service8named
                        : index + 1 === 9
                        ? service9named
                        : index + 1 === 10
                        ? service10named
                        : index + 1 === 11
                        ? service11named
                        : index + 1 === 12
                        ? service12named
                        : index + 1 === 13
                        ? service13named
                        : service14named
                    }
                    onChange={(e) => {
                      index + 1 === 1
                        ? setService1named(e.target.value)
                        : index + 1 === 2
                        ? setService2named(e.target.value)
                        : index + 1 === 3
                        ? setService3named(e.target.value)
                        : index + 1 === 4
                        ? setService4named(e.target.value)
                        : index + 1 === 5
                        ? setService5named(e.target.value)
                        : index + 1 === 6
                        ? setService6named(e.target.value)
                        : index + 1 === 7
                        ? setService7named(e.target.value)
                        : index + 1 === 8
                        ? setService8named(e.target.value)
                        : index + 1 === 9
                        ? setService9named(e.target.value)
                        : index + 1 === 10
                        ? setService10named(e.target.value)
                        : index + 1 === 11
                        ? setService11named(e.target.value)
                        : index + 1 === 12
                        ? setService12named(e.target.value)
                        : index + 1 === 13
                        ? setService13named(e.target.value)
                        : setService14named(e.target.value);
                    }}
                  />
                </div>
                <div className="servicesmenuname4box">
                  {/* <img
                  onClick={() => {
                    setArrayofservices([
                      ...arrayofservices.slice(0, index),
                      ...arrayofservices.slice(
                        index + 1,
                        arrayofservices.length
                      ),
                    ]);
                  }}
                  src={img3}
                  alt=""
                /> */}
                </div>
                <div
                  style={{
                    width: "98%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="servicesmenuname1boxWInc mt-2">
                    <input
                      type="text"
                      placeholder="What's Include"
                      value={
                        index + 1 === 1
                          ? service1nameWInc
                          : index + 1 === 2
                          ? service2nameWInc
                          : index + 1 === 3
                          ? service3nameWInc
                          : index + 1 === 4
                          ? service4nameWInc
                          : index + 1 === 5
                          ? service5nameWInc
                          : index + 1 === 6
                          ? service6nameWInc
                          : index + 1 === 7
                          ? service7nameWInc
                          : index + 1 === 8
                          ? service8nameWInc
                          : index + 1 === 9
                          ? service9nameWInc
                          : index + 1 === 10
                          ? service10nameWInc
                          : index + 1 === 11
                          ? service11nameWInc
                          : index + 1 === 12
                          ? service12nameWInc
                          : index + 1 === 13
                          ? service13nameWInc
                          : service14nameWInc
                      }
                      onChange={(e) => {
                        index + 1 === 1
                          ? setService1nameWInc(e.target.value)
                          : index + 1 === 2
                          ? setService2nameWInc(e.target.value)
                          : index + 1 === 3
                          ? setService3nameWInc(e.target.value)
                          : index + 1 === 4
                          ? setService4nameWInc(e.target.value)
                          : index + 1 === 5
                          ? setService5nameWInc(e.target.value)
                          : index + 1 === 6
                          ? setService6nameWInc(e.target.value)
                          : index + 1 === 7
                          ? setService7nameWInc(e.target.value)
                          : index + 1 === 8
                          ? setService8nameWInc(e.target.value)
                          : index + 1 === 9
                          ? setService9nameWInc(e.target.value)
                          : index + 1 === 10
                          ? setService10nameWInc(e.target.value)
                          : index + 1 === 11
                          ? setService11nameWInc(e.target.value)
                          : index + 1 === 12
                          ? setService12nameWInc(e.target.value)
                          : index + 1 === 13
                          ? setService13nameWInc(e.target.value)
                          : setService14nameWInc(e.target.value);
                      }}
                    />
                  </div>
                  <div className="servicesmenuname4box">
                  <img
                      onClick={() => {
                        index + 1 === 1
                          ? setService1nameWInc("")
                          : index + 1 === 2
                          ? setService2nameWInc("")
                          : index + 1 === 3
                          ? setService3nameWInc("")
                          : index + 1 === 4
                          ? setService4nameWInc("")
                          : index + 1 === 5
                          ? setService5nameWInc("")
                          : index + 1 === 6
                          ? setService6nameWInc("")
                          : index + 1 === 7
                          ? setService7nameWInc("")
                          : index + 1 === 8
                          ? setService8nameWInc("")
                          : index + 1 === 9
                          ? setService9nameWInc("")
                          : index + 1 === 10
                          ? setService10nameWInc("")
                          : index + 1 === 11
                          ? setService11nameWInc("")
                          : index + 1 === 12
                          ? setService12nameWInc("")
                          : index + 1 === 13
                          ? setService13nameWInc("")
                          : setService14nameWInc("");

                        index + 1 === 1
                          ? setService1named("")
                          : index + 1 === 2
                          ? setService2named("")
                          : index + 1 === 3
                          ? setService3named("")
                          : index + 1 === 4
                          ? setService4named("")
                          : index + 1 === 5
                          ? setService5named("")
                          : index + 1 === 6
                          ? setService6named("")
                          : index + 1 === 7
                          ? setService7named("")
                          : index + 1 === 8
                          ? setService8named("")
                          : index + 1 === 9
                          ? setService9named("")
                          : index + 1 === 10
                          ? setService10named("")
                          : index + 1 === 11
                          ? setService11named("")
                          : index + 1 === 12
                          ? setService12named("")
                          : index + 1 === 13
                          ? setService13named("")
                          : setService14named("");
                        index + 1 === 1
                          ? setService1namep("")
                          : index + 1 === 2
                          ? setService2namep("")
                          : index + 1 === 3
                          ? setService3namep("")
                          : index + 1 === 4
                          ? setService4namep("")
                          : index + 1 === 5
                          ? setService5namep("")
                          : index + 1 === 6
                          ? setService6namep("")
                          : index + 1 === 7
                          ? setService7namep("")
                          : index + 1 === 8
                          ? setService8namep("")
                          : index + 1 === 9
                          ? setService9namep("")
                          : index + 1 === 10
                          ? setService10namep("")
                          : index + 1 === 11
                          ? setService11namep("")
                          : index + 1 === 12
                          ? setService12namep("")
                          : index + 1 === 13
                          ? setService13namep("")
                          : setService14namep("");

                        index + 1 === 1
                          ? setService1name("")
                          : index + 1 === 2
                          ? setService2name("")
                          : index + 1 === 3
                          ? setService3name("")
                          : index + 1 === 4
                          ? setService4name("")
                          : index + 1 === 5
                          ? setService5name("")
                          : index + 1 === 6
                          ? setService6name("")
                          : index + 1 === 7
                          ? setService7name("")
                          : index + 1 === 8
                          ? setService8name("")
                          : index + 1 === 9
                          ? setService9name("")
                          : index + 1 === 10
                          ? setService10name("")
                          : index + 1 === 11
                          ? setService11name("")
                          : index + 1 === 12
                          ? setService12name("")
                          : index + 1 === 13
                          ? setService13name("")
                          : setService14name("");
                      }}
                      src={img3}
                      style={{ cursor: "pointer" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="servicesmenudiv">
                <div className="servicesmenuname1 mt-3"></div>
              </div>
            </>
          );
        })}
        
        <div
          className="addmoreservicecatalog"
          onClick={() => {
            const index = arrayofservices.length;
            index + 1 === 1
              ? setService1nameWInc("")
              : index + 1 === 2
              ? setService2nameWInc("")
              : index + 1 === 3
              ? setService3nameWInc("")
              : index + 1 === 4
              ? setService4nameWInc("")
              : index + 1 === 5
              ? setService5nameWInc("")
              : index + 1 === 6
              ? setService6nameWInc("")
              : index + 1 === 7
              ? setService7nameWInc("")
              : index + 1 === 8
              ? setService8nameWInc("")
              : index + 1 === 9
              ? setService9nameWInc("")
              : index + 1 === 10
              ? setService10nameWInc("")
              : index + 1 === 11
              ? setService11nameWInc("")
              : index + 1 === 12
              ? setService12nameWInc("")
              : index + 1 === 13
              ? setService13nameWInc("")
              : setService14nameWInc("");

            index + 1 === 1
              ? setService1named("")
              : index + 1 === 2
              ? setService2named("")
              : index + 1 === 3
              ? setService3named("")
              : index + 1 === 4
              ? setService4named("")
              : index + 1 === 5
              ? setService5named("")
              : index + 1 === 6
              ? setService6named("")
              : index + 1 === 7
              ? setService7named("")
              : index + 1 === 8
              ? setService8named("")
              : index + 1 === 9
              ? setService9named("")
              : index + 1 === 10
              ? setService10named("")
              : index + 1 === 11
              ? setService11named("")
              : index + 1 === 12
              ? setService12named("")
              : index + 1 === 13
              ? setService13named("")
              : setService14named("");
            index + 1 === 1
              ? setService1namep("")
              : index + 1 === 2
              ? setService2namep("")
              : index + 1 === 3
              ? setService3namep("")
              : index + 1 === 4
              ? setService4namep("")
              : index + 1 === 5
              ? setService5namep("")
              : index + 1 === 6
              ? setService6namep("")
              : index + 1 === 7
              ? setService7namep("")
              : index + 1 === 8
              ? setService8namep("")
              : index + 1 === 9
              ? setService9namep("")
              : index + 1 === 10
              ? setService10namep("")
              : index + 1 === 11
              ? setService11namep("")
              : index + 1 === 12
              ? setService12namep("")
              : index + 1 === 13
              ? setService13namep("")
              : setService14namep("");

            index + 1 === 1
              ? setService1name("")
              : index + 1 === 2
              ? setService2name("")
              : index + 1 === 3
              ? setService3name("")
              : index + 1 === 4
              ? setService4name("")
              : index + 1 === 5
              ? setService5name("")
              : index + 1 === 6
              ? setService6name("")
              : index + 1 === 7
              ? setService7name("")
              : index + 1 === 8
              ? setService8name("")
              : index + 1 === 9
              ? setService9name("")
              : index + 1 === 10
              ? setService10name("")
              : index + 1 === 11
              ? setService11name("")
              : index + 1 === 12
              ? setService12name("")
              : index + 1 === 13
              ? setService13name("")
              : setService14name("");
            setArrayofservices([
              ...arrayofservices,
              { name: "", price: "", days: "" },
            ]);
          }}
        >
          <span>
            <AddIcon style={{ fontSize: width > 700 ? "1.3vw" : "4vw" }} />
          </span>{" "}
          Add More Services
        </div>
      
        {/*------------- Location Code Starts ---------------- */}
        <div
          style={{ display: "flex", alignItems: "center", fontWeight: "500" }}
        >
          <div
            onClick={() => setCateaddcheckbox1(true)}
            className="checkboxfromcate"
            style={{ marginRight: "2vw" }}
          >
            <div>
              {cateaddcheckbox1 ? <img src={img51} /> : <img src={img4} />}{" "}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "500",
              }}
            >
              On Site
            </div>
          </div>
          <div
            onClick={() => {
              setCateaddcheckbox1(false);
            }}
            className="checkboxfromcate"
          >
            <div>
              {cateaddcheckbox1 ? <img src={img4} /> : <img src={img51} />}{" "}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: "500",
              }}
            >
              Remote
            </div>
          </div>
        </div>
        {cateaddcheckbox1 ? (
          <div>
            <div
              style={{
                left: "0vw",
                width: width > 700 ? "41vw" : "99%",
                marginLeft: "0",
              }}
              className="loginfield"
              onClick={handleClickx4}
            >
              <TextField
                id="outlined-basic"
                label="Location"
                variant="outlined"
                value={studyset}
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
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              {width > 700 && (
                <span style={{ width: "0.1vw" }}>
                  <KeyboardArrowDownOutlined
                    style={{
                      fontSize: "1.5vw",
                      position: "relative",
                      right: "2vw",
                      top: "1vw",
                    }}
                  />
                </span>
              )}
            </div>
            <Popover
              id={idx4}
              open={openx4}
              anchorEl={anchorElx4}
              onClose={handleClosex4}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <div
                style={{
                  maxHeight: width > 700 ? "18vw" : "40vw",
                  overflow: "scroll",
                  width: width > 700 ? "" : "88vw",
                }}
              >
                <Typography
                  sx={{
                    p: 1,
                    pl: 1,
                    ml: 1,
                    width: width > 700 ? "40vw" : "85vw",
                    position: "fixed",
                    background: "white",
                    zIndex: "10",
                  }}
                >
                  <input
                    onChange={(e) => {
                      setLocationname(e.target.value);
                    }}
                    style={{
                      width: "95%",
                      border: "1.5px solid #00000050",
                      outline: "none",
                      height: "2.5",
                      borderRadius: "0.21vw",
                    }}
                  />
                </Typography>
                <Typography
                  sx={{
                    p: 2.5,
                    pl: 1,
                    ml: 1,
                    width: width > 700 ? "40vw" : "86vw",
                    cursor: "pointer",
                  }}
                ></Typography>

                {arrayoflongstudy.map((data, index) => {
                  return (
                    <Typography
                      sx={{
                        p: 0.51,
                        pl: 1,
                        ml: 1,
                        width: width > 700 ? "32.5vw" : "88vw",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setstudyset(
                          data?.area + ", " + data?.city + ", " + data?.state
                        );
                        handleClosex4();
                      }}
                    >
                      {data?.area + ", " + data?.city + ", " + data?.state}
                    </Typography>
                  );
                })}
              </div>
            </Popover>
          </div>
        ) : (
          ""
        )}
       
       <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{ marginBottom: "0.5vw" }}
            className="jobpodtedfieldtitile"
          >
            FAQ
          </div>
          <div
            style={{ width: width > 700 ? "" : "15%" }}
            className="servicesmenuname4box"
          >
            <span
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => {
                const index = arrayofservicesFAQ.length-1;
                index + 1 === 1
                  ? setService1Question("")
                  : index + 1 === 2
                  ? setService2Question("")
                  : index + 1 === 3
                  ? setService3Question("")
                  : index + 1 === 4
                  ? setService4Question("")
                  : index + 1 === 5
                  ? setService5Question("")
                  : index + 1 === 6
                  ? setService6Question("")
                  : index + 1 === 7
                  ? setService7Question("")
                  : index + 1 === 8
                  ? setService8Question("")
                  : index + 1 === 9
                  ? setService9Question("")
                  : index + 1 === 10
                  ? setService10Question("")
                  : index + 1 === 11
                  ? setService11Question("")
                  : index + 1 === 12
                  ? setService12Question("")
                  : index + 1 === 13
                  ? setService13Question("")
                  : index + 1 === 14
                  ? setService14Question("")
                  : index + 1 === 15
                  ? setService15Question("")
                  : index + 1 === 16
                  ? setService16Question("")
                  : index + 1 === 17
                  ? setService17Question("")
                  : index + 1 === 18
                  ? setService18Question("")
                  : index + 1 === 19
                  ? setService19Question("")
                  : setService20Question("");
                index + 1 === 1
                  ? setService1Answer("")
                  : index + 1 === 2
                  ? setService2Answer("")
                  : index + 1 === 3
                  ? setService3Answer("")
                  : index + 1 === 4
                  ? setService4Answer("")
                  : index + 1 === 5
                  ? setService5Answer("")
                  : index + 1 === 6
                  ? setService6Answer("")
                  : index + 1 === 7
                  ? setService7Answer("")
                  : index + 1 === 8
                  ? setService8Answer("")
                  : index + 1 === 9
                  ? setService9Answer("")
                  : index + 1 === 10
                  ? setService10Answer("")
                  : index + 1 === 11
                  ? setService11Answer("")
                  : index + 1 === 12
                  ? setService12Answer("")
                  : index + 1 === 13
                  ? setService13Answer("")
                  : index + 1 === 14
                  ? setService14Answer("")
                  : index + 1 === 15
                  ? setService15Answer("")
                  : index + 1 === 16
                  ? setService16Answer("")
                  : index + 1 === 17
                  ? setService17Answer("")
                  : index + 1 === 18
                  ? setService18Answer("")
                  : index + 1 === 19
                  ? setService19Answer("")
                  : setService20Answer("");
                setArrayofservicesFAQ([
                  ...arrayofservicesFAQ.slice(0, arrayofservicesFAQ.length - 1),
                ]);
              }}
            >
              Remove
            </span>
          </div>
        </div>
        {arrayofservicesFAQ?.map((data, index) => {
          return (
            <div style={{ marginTop: "1vw" }} className="servicesmenudivfaq">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{ width: width > 700 ? "" : "80%" }}
                  className="mb-2"
                >
                  Question
                </div>
             
              </div>
              <div className="servicesmenuname1boxfaq">
                <input
                  type="text"
                  value={
                    index + 1 === 1
                      ? service1Question
                      : index + 1 === 2
                      ? service2Question
                      : index + 1 === 3
                      ? service3Question
                      : index + 1 === 4
                      ? service4Question
                      : index + 1 === 5
                      ? service5Question
                      : index + 1 === 6
                      ? service6Question
                      : index + 1 === 7
                      ? service7Question
                      : index + 1 === 8
                      ? service8Question
                      : index + 1 === 9
                      ? service9Question
                      : index + 1 === 10
                      ? service10Question
                      : index + 1 === 11
                      ? service11Question
                      : index + 1 === 12
                      ? service12Question
                      : index + 1 === 13
                      ? service13Question
                      : index + 1 === 14
                      ? service14Question
                      : index + 1 === 15
                      ? service15Question
                      : index + 1 === 16
                      ? service16Question
                      : index + 1 === 17
                      ? service17Question
                      : index + 1 === 18
                      ? service18Question
                      : index + 1 === 19
                      ? service19Question
                      : service20Question
                  }
                  onChange={(e) => {
                    index + 1 === 1
                      ? setService1Question(e.target.value)
                      : index + 1 === 2
                      ? setService2Question(e.target.value)
                      : index + 1 === 3
                      ? setService3Question(e.target.value)
                      : index + 1 === 4
                      ? setService4Question(e.target.value)
                      : index + 1 === 5
                      ? setService5Question(e.target.value)
                      : index + 1 === 6
                      ? setService6Question(e.target.value)
                      : index + 1 === 7
                      ? setService7Question(e.target.value)
                      : index + 1 === 8
                      ? setService8Question(e.target.value)
                      : index + 1 === 9
                      ? setService9Question(e.target.value)
                      : index + 1 === 10
                      ? setService10Question(e.target.value)
                      : index + 1 === 11
                      ? setService11Question(e.target.value)
                      : index + 1 === 12
                      ? setService12Question(e.target.value)
                      : index + 1 === 13
                      ? setService13Question(e.target.value)
                      : index + 1 === 14
                      ? setService14Question(e.target.value)
                      : index + 1 === 15
                      ? setService15Question(e.target.value)
                      : index + 1 === 16
                      ? setService16Question(e.target.value)
                      : index + 1 === 17
                      ? setService17Question(e.target.value)
                      : index + 1 === 18
                      ? setService18Question(e.target.value)
                      : index + 1 === 19
                      ? setService19Question(e.target.value)
                      : setService20Question(e.target.value);
                  }}
                />
              </div>
              <div style={{ width: "100%" }} className="mt-2 mb-2">Answer</div>
              <div className="servicesmenuname2boxfaq">
                <input
                  type="text"
                  value={
                    index + 1 === 1
                      ? service1Answer
                      : index + 1 === 2
                      ? service2Answer
                      : index + 1 === 3
                      ? service3Answer
                      : index + 1 === 4
                      ? service4Answer
                      : index + 1 === 5
                      ? service5Answer
                      : index + 1 === 6
                      ? service6Answer
                      : index + 1 === 7
                      ? service7Answer
                      : index + 1 === 8
                      ? service8Answer
                      : index + 1 === 9
                      ? service9Answer
                      : index + 1 === 10
                      ? service10Answer
                      : index + 1 === 11
                      ? service11Answer
                      : index + 1 === 12
                      ? service12Answer
                      : index + 1 === 13
                      ? service13Answer
                      : index + 1 === 14
                      ? service14Answer
                      : index + 1 === 15
                      ? service15Answer
                      : index + 1 === 16
                      ? service16Answer
                      : index + 1 === 17
                      ? service17Answer
                      : index + 1 === 18
                      ? service18Answer
                      : index + 1 === 19
                      ? service19Answer
                      : service20Answer
                  }
                  onChange={(e) => {
                    index + 1 === 1
                      ? setService1Answer(e.target.value)
                      : index + 1 === 2
                      ? setService2Answer(e.target.value)
                      : index + 1 === 3
                      ? setService3Answer(e.target.value)
                      : index + 1 === 4
                      ? setService4Answer(e.target.value)
                      : index + 1 === 5
                      ? setService5Answer(e.target.value)
                      : index + 1 === 6
                      ? setService6Answer(e.target.value)
                      : index + 1 === 7
                      ? setService7Answer(e.target.value)
                      : index + 1 === 8
                      ? setService8Answer(e.target.value)
                      : index + 1 === 9
                      ? setService9Answer(e.target.value)
                      : index + 1 === 10
                      ? setService10Answer(e.target.value)
                      : index + 1 === 11
                      ? setService11Answer(e.target.value)
                      : index + 1 === 12
                      ? setService12Answer(e.target.value)
                      : index + 1 === 13
                      ? setService13Answer(e.target.value)
                      : index + 1 === 14
                      ? setService14Answer(e.target.value)
                      : index + 1 === 15
                      ? setService15Answer(e.target.value)
                      : index + 1 === 16
                      ? setService16Answer(e.target.value)
                      : index + 1 === 17
                      ? setService17Answer(e.target.value)
                      : index + 1 === 18
                      ? setService18Answer(e.target.value)
                      : index + 1 === 19
                      ? setService19Answer(e.target.value)
                      : setService20Answer(e.target.value);
                  }}
                />
              </div>
             
            </div>
          );
        })}
      <div
          className="addmoreservicecatalog"
          onClick={() => {
            const index = arrayofservicesFAQ.length;
            index + 1 === 1
              ? setService1Question("")
              : index + 1 === 2
              ? setService2Question("")
              : index + 1 === 3
              ? setService3Question("")
              : index + 1 === 4
              ? setService4Question("")
              : index + 1 === 5
              ? setService5Question("")
              : index + 1 === 6
              ? setService6Question("")
              : index + 1 === 7
              ? setService7Question("")
              : index + 1 === 8
              ? setService8Question("")
              : index + 1 === 9
              ? setService9Question("")
              : index + 1 === 10
              ? setService10Question("")
              : index + 1 === 11
              ? setService11Question("")
              : index + 1 === 12
              ? setService12Question("")
              : index + 1 === 13
              ? setService13Question("")
              : index + 1 === 14
              ? setService14Question("")
              : index + 1 === 15
              ? setService15Question("")
              : index + 1 === 16
              ? setService16Question("")
              : index + 1 === 17
              ? setService17Question("")
              : index + 1 === 18
              ? setService18Question("")
              : index + 1 === 19
              ? setService19Question("")
              : setService20Question("");
            index + 1 === 1
              ? setService1Answer("")
              : index + 1 === 2
              ? setService2Answer("")
              : index + 1 === 3
              ? setService3Answer("")
              : index + 1 === 4
              ? setService4Answer("")
              : index + 1 === 5
              ? setService5Answer("")
              : index + 1 === 6
              ? setService6Answer("")
              : index + 1 === 7
              ? setService7Answer("")
              : index + 1 === 8
              ? setService8Answer("")
              : index + 1 === 9
              ? setService9Answer("")
              : index + 1 === 10
              ? setService10Answer("")
              : index + 1 === 11
              ? setService11Answer("")
              : index + 1 === 12
              ? setService12Answer("")
              : index + 1 === 13
              ? setService13Answer("")
              : index + 1 === 14
              ? setService14Answer("")
              : index + 1 === 15
              ? setService15Answer("")
              : index + 1 === 16
              ? setService16Answer("")
              : index + 1 === 17
              ? setService17Answer("")
              : index + 1 === 18
              ? setService18Answer("")
              : index + 1 === 19
              ? setService19Answer("")
              : setService20Answer("");
            setArrayofservicesFAQ([
              ...arrayofservicesFAQ,
              { quetion: "", answer: "" },
            ]);
          }}
        >
          <span>
            <AddIcon style={{ fontSize: width > 700 ? "1.3vw" : "4vw" }} />
          </span>{" "}
          Add FAQ
        </div>
        

        {/* <div style={{ marginBottom: "0.5vw" }} className="jobpodtedfieldtitile">
          Are you Planning to work with Client Location?
        </div> */}
        {/* 
        <div
          onClick={() => setCateaddcheckbox1(true)}
          className="checkboxfromcate"
        >
          <div>
            {cateaddcheckbox1 ? <img src={img5} /> : <img src={img4} />}{" "}
          </div>
          <div>REMOTE</div>
        </div> */}
        {/* <div className="checkboxfromcate">
          <div
            onClick={() => {
              setCateaddcheckbox1(false);
              setLocation("remote");
            }}
          >
            {cateaddcheckbox1 ? <img src={img4} /> : <img src={img5} />}{" "}
          </div>

          <div onClick={() => setCateaddcheckbox1(false)}>
            ONSITE-IN <span> New Delhi </span>
          </div>
          <div style={{ marginLeft: "1vw" }}>Change</div>
        </div> */}
        {/* <div className="cateaddlastcheck">
          <div style={{ width: "4vw" }}>
            <img
              onClick={() => setCateaddcheckbox2(!cateaddcheckbox2)}
              style={{ width: "1.5vw", margin: "0.31vw", cursor: "pointer" }}
              src={cateaddcheckbox2 ? img6 : img4}
              alt=""
            />
          </div>
          <div>
            By accessing this Website, you agree to be bound by these Website
            Terms and Conditions of Use (“T&C”), all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this Website
          </div>
        </div> */}
        <hr style={{ color: "#00000090" }} />
        <div
          style={{
            fontSize: "0.9vw",
            color: "red",
            fontWeight: "400",
            fontFamily: "Poppins",
          }}
          className="rederror"
        >
          {restag ? "* Fill all the fields" : ""}
        </div>
        <div style={{ marginTop: "0.31vw" }} className="handlemoreaboutskill">
          <div
            style={{
              background: "white",
              color: "black",
              cursor: "pointer",
            }}
            className="handlecirclieaboutsave"
          >
            Cancel
          </div>

          <div
            style={{ cursor: "pointer" }}
            className="handlecirclieaboutsave"
            disabled={cateaddcheckbox2 ? false : true}
            onClick={() => {
              handlesavededitcatalogue();
            }}
          >
            Publish
          </div>
        </div>
      </div>
    </div>
  );
}
