import React, { useEffect, useState } from "react";
import CateGoryBanner from "../../components/Category/CateGoryBanner";
import Howitworkready from "../../components/Howworksit/Howitworkready";
import ServiceBanner from "../../components/Services/ServiceBanner";
import Servicesbannner2 from "../../components/Services/Servicesbannner2";
import ServicesCaseStusy from "../../components/Services/ServicesCaseStusy";
import Servicesservics from "../../components/Services/servicesservics";
import ServicesTextiMonial from "../../components/Services/ServicesTextiMonial";
import Serviceswhatdo from "../../components/Services/Serviceswhatdo";
import SettingFaq from "../../components/Services/SettingFaq";
import axios from "axios";
import API_HOST from "../../env";
export default function Services({ width }) {
  useEffect(() => {
    window.scrollTo(0, 700, { behavior: "smooth" });
  });

  return (
    <div>
      <ServiceBanner width={width} />

      <Serviceswhatdo width={width} />
      <Servicesservics width={width} />
      {/* <Servicesbannner2 width={width} /> */}
      {/* <ServicesCaseStusy width={width} /> */}
      {/* <Howitworkready width={width} /> */}
      {/* <ServicesTextiMonial/> */}
      {/* <SettingFaq/> */}
    </div>
  );
}
