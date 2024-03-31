import { useEffect } from "react";
import Arithmetic from "./components/arithmetic/Arithmetic";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";





function App() {



  return (
    <div className="">
        <Navbar/>
       <div className="flex  flex-row ">
           <div className="w-1/5">
              <Sidebar/>
           </div>
          <div className="w-4/5">
              <Arithmetic/>
          </div>
      
      </div>
     
    </div>
  );
}

export default App;
