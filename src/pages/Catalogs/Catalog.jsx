import axios from "axios";
import React, { useLayoutEffect, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Catalogbanner from "../../components/Catalogue/Catalogbanner";
import Catelogsuggest from "../../components/Catalogue/Catelogsuggest";
import Footer from "../../components/footer/Footer";
import Footer2 from "../../components/footer/Footer2";
import API_HOST from "../../env";

export default function Catalog({width}) {
  const navigate = useNavigate();
  const { catId } = useParams();
  const [data, setData] = useState();
  const { user, loggedInStatus } = useSelector((state) => state.user);

  useEffect(() => {
    axios
      .get(`${API_HOST}/catalouge/viewCatalouge?catalogueId=${catId}`)
      .then((res) => {
        console.log("catId",res);
        setData(res?.data?.success?.data[0]);
      });
  }, [catId]);
  
  // console.log("data",data);

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);
  return (
    <div>
      <Catalogbanner data={data} width={width}/>
      {/* <Catelogsuggest /> */}
     
    </div>
  );
}
