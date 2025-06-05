import React from "react";
import EventDetailData from "../../components/EventDetail/EventDetailData";
import EvnetsBanner from "../../components/Events/EvnetsBanner";
import EventDetailsabout from "./EventDetailsabout";

export default function EventDetail() {
  return (
    <div>
      <EvnetsBanner />
      <EventDetailData/>
      <EventDetailsabout />
    </div>
  );
}
