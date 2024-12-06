import { useState } from "react";
import {menuContext} from "./Context/menuContext";
// import './App.css'
import "./index.css";
import Card from "./components/Card/Card";
import Profile from "./components/Profile/Profile";
import profile from "../images/image-jeremy.png";

function App() {
  const [item, setItem] = useState("daily");

  return (
    <>
    <menuContext.Provider value ={{item, setItem}}>
      <div className="sm:flex justify-center my-20 sm:gap-[1.5%] h-[65vh] max-h-[500px] grid grid-cols-1 ap-[50%] sm:w-[100%] ">
        <div className="xl:w-[14%] sm:w-[20%] h-[100%] flex justify-center items-center w-[85%] flex-shrink-0 mx-auto sm:m-0">
          <Profile />
        </div>
        <div className="relative flex flex-col sm:gap-[52%] gap-[100px] sm:w-[50%] w-[85%] mx-auto sm:m-0">
        {/* <div className="relative flex flex-col gap-[55%] w-[45%]"> */}
          <div className="grid sm:grid-cols-3 min-w-[400px] grid-cols-1 gap-y-[100px] sm:min-h-0">
            <div className="sm:min-w-[100px] min-h-[100px] sm:min-h-0 mt-3 sm:my-0">
              <Card index={0} />
            </div>
            <div className="min-w-[100px] min-h-[100px] sm:min-h-0  mt-1 sm:my-0">
              <Card index={1} />
            </div>
            <div className="min-w-[100px] min-h-[100px] sm:min-h-0 mt-2 sm:mt-0">
              <Card index={2} />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 min-w-[400px] grid-cols-1 gap-y-[100px] sm:min-h-0">
            <div className="min-w-[100px] min-h-[100px] sm:min-h-0 mt-1 sm:my-0">
              <Card index={3} />
            </div>
            <div className="min-w-[100px] min-h-[100px] sm:min-h-0 mt-1 sm:my-0">
              <Card index={4} />
            </div>
            <div className="min-w-[100px] min-h-[100px] sm:min-h-0 mt-1 sm:my-0">
              <Card index={5} />
            </div>
          </div>

        </div>
      </div>
            </menuContext.Provider>
    </>
  );
}

export default App;
