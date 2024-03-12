import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
function Sidebar(props) {
  return (
    <div className=" sticky-top w-[250px] top-0 h-full min-h-full bg-gray-200 pt-3">
       <div className="h-[800px]">
           Sidebar
       </div>
        
    </div>
  );
}

export default Sidebar;
