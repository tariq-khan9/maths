import React from "react";

import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="  w-[250px]  h-full min-h-full bg-white pt-[90px] pl-6">
       <div className=" fixed w-[230px] h-full ">
          <div className="flex flex-col">
           <button className="px-[70px] p-2 rounded-md border font-thin text-[18px] border-1 border-slate-100 shadow-lg">Arithmetic</button>

           <button className="px-[70px] p-2 mt-4 rounded-md border font-thin text-[18px] border-1 border-slate-100 shadow-lg">Decimal</button>

           <button className="px-[60px] p-2 mt-4 rounded-md border font-thin text-[18px] border-1 border-slate-100 shadow-lg">Many more..</button>
           </div>
       </div>
        
    </div>
  );
}

export default Sidebar;
