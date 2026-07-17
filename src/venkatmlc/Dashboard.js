import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import '../style/Navbar.css';
import '../style/Dashboard.css';
function Layout() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;