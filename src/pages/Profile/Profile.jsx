import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import ProfileBadges from "../../components/Profilecomp/ProfileBadges";
import ProfileBanner from "../../components/Profilecomp/ProfileBanner";
import ProfileCatalogs from "../../components/Profilecomp/ProfileCatalogs";
import ProfileCertificate from "../../components/Profilecomp/ProfileCertificate";
import ProfileEducation from "../../components/Profilecomp/ProfileEducation";
import ProfileOther from "../../components/Profilecomp/ProfileOther";
import Profileportfolio from "../../components/Profilecomp/Profileportfolio";
import ProfileSkills from "../../components/Profilecomp/ProfileSkills";
import Profileuserdetails from "../../components/Profilecomp/Profileuserdetails";
import ProfileWorkexperince from "../../components/Profilecomp/ProfileWorkexperince";
import Profileworkhistroy from "../../components/Profilecomp/Profileworkhistroy";

export default function Profile({width}) {
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);
  const { user, loggedInStatus } = useSelector((state) => state.user);
  
  return (
    <>
      <div>
        <ProfileBanner user={user} width={width}/>
        <ProfileBadges user={user} width={width}/>
        <Profileuserdetails user={user} width={width}/>
        <Profileworkhistroy user={user} width={width}/>
        <ProfileCatalogs user={user} width={width}/>
        <Profileportfolio user={user} width={width}/>
        <ProfileSkills user={user} width={width}/>
        <ProfileCertificate user={user} width={width}/>
        <ProfileWorkexperince user={user} width={width}/>
        <ProfileEducation user={user} width={width}/>
        <ProfileOther user={user} width={width}/>
      </div>
    </>
  );
}
