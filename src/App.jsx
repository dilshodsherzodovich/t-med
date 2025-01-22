import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MainHome from "./Pages/HomePage/MainHome";
import HomeV2 from "./Pages/HomePage/HomeV2";
import HomeV3 from "./Pages/HomePage/HomeV3";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ServicePage from "./Pages/Service/ServicePage";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import BlogsDetails from "./Pages/BlogsPage/BlogsDetails";
import DoctorsDetailsPage from "./Pages/Pages/DoctorsDetailsPage";
import ErrorPage from "./Pages/Pages/ErrorPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Management from "./Pages/Management";
import ScrollUpButton from "./Components/ScrollUpButton";
import { useEffect } from "react";
import Docs from "./Pages/Docs";
import Departments from "./Pages/Departments";
import Institutions from "./Pages/Institutions";
import InstitutionDetail from "./Pages/InstitutionDetail/InstitutionDetail";
import Virtour from "./Pages/Virtour";
import Map from "./Pages/Map";
import DepartmentsList from "./Pages/DepartmenList";
import LiveStream from "./Pages/LiveStream";
import Gallery from "./Pages/Gallery";
import Aos from "aos";
import "aos/dist/aos.css";
import "./init";
import CooperationPage from "./Pages/Cooperation";
import CareerPosts from "./Pages/CareerPosts";
import CreativeClientPreferenceQuiz from "./Pages/CreativeClientPreferenceQuiz";

function App() {
  Aos.init({
    duration: 1500,
    delay: 0.25,
  });
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout isTopBar={true} />}>
          <Route index element={<MainHome />} />
          <Route path="/home-v2" element={<HomeV2 />} />
        </Route>
        <Route path="/" element={<Layout variant="cs_type_1" />}>
          <Route path="/home-v3" element={<HomeV3 />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/management" element={<Management />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/:blogId" element={<BlogsDetails />} />
          <Route path="/doctors/:doctorId" element={<DoctorsDetailsPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/departments" element={<DepartmentsList />} />
          <Route path="/departments/:id" element={<Departments />} />
          <Route path="/institutions/" element={<Institutions />} />
          <Route path="/institutions/:id" element={<InstitutionDetail />} />
          <Route path="/livestream" element={<LiveStream />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cooperation" element={<CooperationPage />} />
          <Route path="/events" element={<CareerPosts />} />
          <Route path="/careers/:id" element={<CareerPosts />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="/gmap" element={<Map />} />
        <Route path="/review" element={<CreativeClientPreferenceQuiz />} />
        <Route path="/virtour" element={<Virtour />} />
      </Routes>
      <ScrollUpButton />
    </>
  );
}

export default App;
