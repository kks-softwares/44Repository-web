import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/DashbaordSidebarComponents/ADDJobpage/addpost.css";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Termandconstion from "./pages/Termandcondition/Termandc";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import SuccessStories from "./pages/SuccessStories/SuccessStories";
import Succeedstorydefination from "./pages/succeedstorydefination/Succeedstorydefination";
import Profile from "./pages/Profile/Profile";
import Catalog from "./pages/Catalogs/Catalog";
import Topbar from "./components/Topbar/Topbar";
import Navbar from "./components/Navbar/Navbar";
import Profilenav from "./components/Profilecomp/Profilenav";
import AddCatalog from "./pages/AddCatalogs/AddCatalog";
import EditCatalog from "./pages/AddCatalogs/EditCatalogue";
import AddPortfolio from "./pages/AddPortfolio/AddPortfolio";
import Addportfolioaddproject from "./components/AddPortfiliocomp/Addportfolioaddproject";
import Addportoliodetails from "./components/AddPortfiliocomp/Addportoliodetails";
import Addportfoiliopreview from "./components/AddPortfiliocomp/Addportfoiliopreview";
import EditPortfolio from "./pages/AddPortfolio/EditPortfolio";
import Editportfolioaddproject from "./components/EditPortfiliocomp copy/Editportfolioaddproject";
import Editportoliodetails from "./components/EditPortfiliocomp copy/Editportoliodetails";
import Editportfoiliopreview from "./components/EditPortfiliocomp copy/Editportfoiliopreview";
import Notification from "./pages/Notification/Notification";
import Dashbaord from "./pages/Dashbaord/Dashbaord";
import ProtectedRoute from "./ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userActions } from "./store/userSlice";
import ProtectedRoute2 from "./ProtectedRoute2";
import Footer from "./components/footer/Footer";
import Footer2 from "./components/footer/Footer2";
import AboutUS from "./pages/AboutUS/AboutUS";
import Benifits from "./pages/Bnifits/Benifits";
import Howwork from "./pages/Howwork/Howwork";
import ContactUS from "./pages/ContactUs/ContactUS";
import Services from "./pages/Services/Services";
import Pricing from "./pages/Price/Pricing";
import ExpertGuidence from "./pages/ExpertGuidence/ExpertGuidence";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import FAQ from "./pages/FAQ/FAQ";
import CreateWork from "./components/DashbaordSidebarComponents/CreateWork/CreateWork";
import AppliedJob from "./components/DashbaordSidebarComponents/Appliedjob/AppliedJob";
import Blogs from "./components/DashbaordSidebarComponents/Blog/Blogs";
import Addblog from "./components/DashbaordSidebarComponents/AddBlog/Addblog";
import SkillCenter from "./components/DashbaordSidebarComponents/Skill/SkillCenter";
import ShopRedeam from "./components/DashbaordSidebarComponents/Shop/ShopRedeam";
import Refrences from "./components/DashbaordSidebarComponents/Refrence/Refrences";
import FileManager from "./components/DashbaordSidebarComponents/FileManager/FileManager";
import Settings from "./components/DashbaordSidebarComponents/Setting/Settings";
import Faq from "./components/DashbaordSidebarComponents/Faq/faq";
import PostworkMAin from "./components/DashbaordSidebarComponents/PostWork/PostworkMAin";
import AddPost from "./components/DashbaordSidebarComponents/ADDJobpage/AddPost";
import ContractJobdetail from "./components/DashbaordSidebarComponents/FullContractJobdetail/ContractJobdetail";
import BlogDetail from "./pages/BlogDetails/BlogDetail";
import Blog from "./pages/Blogs/Blog";
import Events from "./pages/Events/Events";
import EventDetail from "./pages/EventDetails/EventDetail";
import Career from "./pages/Career/Career";
import CareerDetail from "./pages/CareerDetail/CareerDetail";
import Commuinity from "./pages/Commuinity/Commuinity";
import CommunityTypePage from "./pages/CommunityTypePage/CommunityTypePage";
import PortFolioDetail from "./pages/PortfolioDetail/PortFolioDetail";
import Addrefrence from "./components/DashbaordSidebarComponents/AddRefrences/Addrefrence";
import Chatting from "./components/DashbaordSidebarComponents/Chatting/Chatting";
import Jobdetail from "./components/DashbaordSidebarComponents/JobDetail/Jobdetail.jsx";
import Wallet from "./components/DashbaordSidebarComponents/Wallet/Wallet";
import EndContactdetailjob from "./components/DashbaordSidebarComponents/EndContactFulldetailjobs/EndContactdetailsjob";
import BlogDetail1 from "./components/DashbaordSidebarComponents/BlogDetail/BlogDetail1";
import Editblog from "./components/DashbaordSidebarComponents/EditBlog/Editblog";
import EditJob from "./components/DashbaordSidebarComponents/ADDJobpage/EditPost";
import AddAppliedWork from "./components/DashbaordSidebarComponents/AddApplyWork/AddAppliedWork";
import Jobdetail1 from "./components/DashbaordSidebarComponents/AppliedJobDetail/Jobdetail1";
import AddApplyworkdetail from "./components/DashbaordSidebarComponents/AddApplyWorkdestail.jsx/AddApplyworkdetail";
import PopularscateAndsubcate from "./pages/Category/PopularscateAndsubcate";
import axios from "axios";
import API_HOST from "./env";
import Profile2 from "./pages/Profile/Profile2";
import { Helmet } from "react-helmet";

function LayoutsWithNavbar({ width }) {
  return (
    <>
      <Topbar width={width} />
      <Navbar width={width} />
      <Outlet />
      <Footer width={width} />
      <Footer2 width={width} />
    </>
  );
}
function LayoutsWithNavbar2({ user, width }) {
  return (
    <>
      <Topbar width={width} />
      <Profilenav user={user} width={width} />
      <Outlet />
      <div>
        <Footer width={width} />
        <Footer2 width={width} />
      </div>
    </>
  );
}

function App() {
  const dispatch = useDispatch();
  const { user, loggedInStatus } = useSelector((state) => state.user);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      axios
        .get(`${API_HOST}/users/viewUser?userName=${user?.userName}`)
        .then((res) => {
          dispatch(
            userActions.setUser({
              user: { ...res.data.success.data },
            })
          );
        });
    }
  }, [loggedInStatus]);

  const [width, setWidth] = useState(window.innerWidth);

  //FUNCTIONS
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="App">
      <Router>
        <Helmet>
          <title>44 Resources</title>
          <meta
            name="description"
            content="Get info for all Blogs of 44 resources"
          />
          <meta name="keywords" content="44 Resourses ranks as the best EXPERTISE, SKILL, & SOLUTION! || SERVICES AT YOUR FINGERTIP || WE PROVIDE COMPETENT SERVICES WHILE SAVING VALUABLE TIME" />
        </Helmet>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute
                auth={localStorage.getItem("user") ? false : false}
              >
                <LayoutsWithNavbar width={width} />
              </ProtectedRoute>
            }
          >
            <Route path="/" element={<Home width={width} />} />
            <Route
              path="/termsandconditions"
              element={<Termandconstion width={width} />}
            />
            <Route
              path="/privacypolicy"
              element={<PrivacyPolicy width={width} />}
            />
            <Route path="/aboutus" element={<AboutUS width={width} />} />
            <Route path="/benifits" element={<Benifits width={width} />} />
            <Route path="/howitwork" element={<Howwork width={width} />} />
            <Route path="/contactus" element={<ContactUS width={width} />} />
            <Route path="/faq" element={<FAQ width={width} />} />
            <Route path="/services" element={<Services width={width} />} />
            <Route path="/pricing" element={<Pricing width={width} />} />

            <Route
              path="/popularCategories"
              element={<PopularscateAndsubcate width={width} />}
            />

            <Route
              path="/catalogue/:catId"
              element={<Catalog width={width} />}
            />
            <Route path="/skills" element={<ExpertGuidence width={width} />} />
            <Route
              path="/courseDetail"
              element={<CourseDetail width={width} />}
            />
            <Route
              path="/success_stories"
              element={<SuccessStories width={width} />}
            />
            <Route path="/blogs/" element={<Blog width={width} />} />
            <Route
              path="/blogs/:postid"
              element={<BlogDetail width={width} />}
            />

            <Route path="/events" element={<Events width={width} />} />
            <Route
              path="/eventDetail"
              element={<EventDetail width={width} />}
            />
            <Route path="/Career" element={<Career width={width} />} />
            <Route
              path="/careerdetail"
              element={<CareerDetail width={width} />}
            />
            <Route path="/commuinity" element={<Commuinity width={width} />} />
            <Route
              path="/commuinity/:type"
              element={<CommunityTypePage width={width} />}
            />
            <Route
              path="/success_stories_defination"
              element={<Succeedstorydefination width={width} />}
            />
          </Route>
          <Route
            path="/"
            element={
              <ProtectedRoute2
                auth={localStorage.getItem("user") ? true : false}
              >
                <LayoutsWithNavbar2 user={user} width={width} />
              </ProtectedRoute2>
            }
          >
            <Route path="/profile" element={<Profile width={width} />} />
            <Route path="/profile/:userName" element={<Profile2 width={width} />} />

            <Route
              path="/portfolio/:portId"
              element={<PortFolioDetail width={width} />}
            />
            <Route
              path="/notification"
              element={<Notification width={width} />}
            />
            <Route
              path="/addcatalogue"
              element={<AddCatalog width={width} />}
            />
            <Route
              path="/updatecatalogue/:catalogueId"
              element={<EditCatalog width={width} />}
            />
            <Route
              path="/addportfolio"
              element={<AddPortfolio width={width} />}
            >
              <Route
                path="/addportfolio"
                element={<Addportfolioaddproject width={width} />}
              />
              <Route
                path="/addportfolio/project"
                element={<Addportfolioaddproject width={width} />}
              />
              <Route
                path="/addportfolio/details"
                element={<Addportoliodetails width={width} />}
              />
              <Route
                path="/addportfolio/preview"
                element={<Addportfoiliopreview width={width} />}
              />
            </Route>
            <Route
              path="/updateportfolio/:id"
              element={<EditPortfolio width={width} />}
            >
              <Route
                path="/updateportfolio/:id"
                element={<Editportfolioaddproject width={width} />}
              />
              <Route
                path="/updateportfolio/:id/project"
                element={<Editportfolioaddproject width={width} />}
              />
              <Route
                path="/updateportfolio/:id/details"
                element={<Editportoliodetails width={width} />}
              />
              <Route
                path="/updateportfolio/:id/preview"
                element={<Editportfoiliopreview width={width} />}
              />
            </Route>
          </Route>
          <Route
            path="/dashbaord"
            element={
              <ProtectedRoute2
                auth={localStorage.getItem("user") ? true : false}
              >
                <Dashbaord width={width} />
              </ProtectedRoute2>
            }
          >
            <Route path="/dashbaord" element={<PostworkMAin width={width} />} />

            <Route
              path="/dashbaord/postwork"
              element={<PostworkMAin width={width} />}
            />
            <Route
              path="/dashbaord/createWork"
              element={<CreateWork width={width} />}
            />
            <Route
              path="/dashbaord/applyWork"
              element={<AppliedJob width={width} />}
            />
            <Route path="/dashbaord/blog" element={<Blogs width={width} />} />
            <Route
              path="/dashbaord/messages"
              element={<Chatting width={width} />}
            />
            <Route
              path="/dashbaord/addblog"
              element={<Addblog width={width} />}
            />
            <Route
              path="/dashbaord/skill/:type"
              element={<SkillCenter width={width} />}
            />
            <Route
              path="/dashbaord/editBlog/:Id"
              element={<Editblog width={width} />}
            />
            <Route
              path="/dashbaord/blog/:Id"
              element={<BlogDetail1 width={width} />}
            />
            <Route
              path="/dashbaord/shop"
              element={<ShopRedeam width={width} />}
            />
            <Route
              path="/dashbaord/refrences"
              element={<Refrences width={width} />}
            />
            <Route
              path="/dashbaord/addrefrences"
              element={<Addrefrence width={width} />}
            />
            <Route
              path="/dashbaord/filemanager"
              element={<FileManager width={width} />}
            />
            <Route
              path="/dashbaord/setting"
              element={<Settings width={width} />}
            />

            <Route path="/dashbaord/faq" element={<Faq width={width} />} />
            <Route
              path="/dashbaord/wallet"
              element={<Wallet width={width} />}
            />
            <Route
              path="/dashbaord/addcreatework"
              element={<AddPost width={width} />}
            />
            <Route
              path="/dashbaord/addApplyWork"
              element={<AddAppliedWork width={width} />}
            />
            <Route
              path="/dashbaord/editcreatework/:id"
              element={<EditJob width={width} />}
            />
            <Route
              path="/dashbaord/jobdetail/:id"
              element={<Jobdetail width={width} />}
            />
            <Route
              path="/dashbaord/applieddetail/:id"
              element={<Jobdetail1 width={width} />}
            />
            <Route
              path="/dashbaord/addapplieddeatil/:id"
              element={<AddApplyworkdetail width={width} />}
            />

            <Route
              path="/dashbaord/contractJob/:bidingId"
              element={<ContractJobdetail width={width} />}
            />
            <Route
              path="/dashbaord/completedJob/:bidingId"
              element={<EndContactdetailjob width={width} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
