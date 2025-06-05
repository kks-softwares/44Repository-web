import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

import ProfileBadges from "../../components/Profile2comp/ProfileBadges";
import ProfileBanner from "../../components/Profile2comp/ProfileBanner";
import ProfileCatalogs from "../../components/Profile2comp/ProfileCatalogs";
import ProfileCertificate from "../../components/Profile2comp/ProfileCertificate";
import ProfileEducation from "../../components/Profile2comp/ProfileEducation";
import ProfileOther from "../../components/Profile2comp/ProfileOther";
import Profileportfolio from "../../components/Profile2comp/Profileportfolio";
import ProfileSkills from "../../components/Profile2comp/ProfileSkills";
import Profileuserdetails from "../../components/Profile2comp/Profileuserdetails";
import ProfileWorkexperince from "../../components/Profile2comp/ProfileWorkexperince";
import Profileworkhistroy from "../../components/Profile2comp/Profileworkhistroy";
import API_HOST from "../../env";

export default function Profile2({ width }) {
  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);
  const { userName } = useParams();

  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`${API_HOST}/users/viewUser?userName=${userName}`).then((res) => {
      setUser(res.data.success.data);
    });
  }, [userName]);

  return (
    <>
      <div>
        <ProfileBanner user={user} width={width} />
        <ProfileBadges user={user} width={width} />
        <Profileuserdetails user={user} width={width} />
        <Profileworkhistroy user={user} width={width} />
        <ProfileCatalogs user={user} width={width} />
        <Profileportfolio user={user} width={width} />
        <ProfileSkills user={user} width={width} />
        <ProfileCertificate user={user} width={width} />
        <ProfileWorkexperince user={user} width={width} />
        <ProfileEducation user={user} width={width} />
        <ProfileOther user={user} width={width} />
      </div>
    </>
  );
}
