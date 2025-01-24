import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ isTopBar }) => {
  return (
    <div>
      <Header isTopBar={isTopBar} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
