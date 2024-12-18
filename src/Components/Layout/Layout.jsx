import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ isTopBar, variant }) => {
  return (
    <div>
      {!isTopBar && <Header isTopBar={isTopBar} variant={variant} />}
      <Outlet />
      {!isTopBar && <Footer />}
    </div>
  );
};

export default Layout;
