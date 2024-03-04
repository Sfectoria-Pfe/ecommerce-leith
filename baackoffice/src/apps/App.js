import "../App.css";
import Navbar from "../layouts/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../layouts/Sidebar";
import Footer from "../layouts/Footer";
import Dashboard from "../pages/Dashboard";
import { useState } from "react";
import { Outlet } from "react-router-dom";
function App() {
  const [siedebar, setSiedebar] = useState(false);
  return (
    <div className="App">
      <Sidebar siedebar={siedebar} setSiedebar={setSiedebar} />

      <div style={{ transition: '550ms' ,paddingLeft: siedebar ? 320 : 20, paddingTop: 120 , paddingRight: 20}}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
