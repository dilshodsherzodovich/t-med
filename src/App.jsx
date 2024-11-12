import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MainHome from "./Pages/HomePage/MainHome";
import HomeV2 from "./Pages/HomePage/HomeV2";
import HomeV3 from "./Pages/HomePage/HomeV3";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ServicePage from "./Pages/Service/ServicePage";
import ServiceDetails from "./Pages/Service/ServiceDetails";
import BlogsPage from "./Pages/BlogsPage/BlogsPage";
import BlogsDetails from "./Pages/BlogsPage/BlogsDetails";
import DoctorsPage from "./Pages/Pages/DoctorsPage";
import DoctorsDetailsPage from "./Pages/Pages/DoctorsDetailsPage";
import TimeTablePage from "./Pages/Pages/TimeTablePage";
import PortfolioPage from "./Pages/Pages/PortfolioPage";
import ErrorPage from "./Pages/Pages/ErrorPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import Management from "./Pages/Management";
import Appointments from "./Pages/Pages/Appointments";
import ScrollUpButton from "./Components/ScrollUpButton";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import Administration from "./Pages/Administration";
import Docs from "./Pages/Docs";

function App() {
  Aos.init({
    duration: 1500,
    delay: 0.25,
    disable: "mobile",
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
          <Route path="/administration" element={<Administration />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/blog" element={<BlogsPage />} />
          <Route path="/blog/:blogId" element={<BlogsDetails />} />
          <Route path="/doctors/:doctorId" element={<DoctorsDetailsPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <ScrollUpButton />
    </>
  );
}

export default App;
