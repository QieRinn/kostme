import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Routes from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className=" flex justify-center h-[100px] ">
        <div className="w-[1240px] flex items-center justify-between">
          <div className="flex items-center w-[577px] justify-between">
            <img src="images/logo.png" alt="" width="186" height="42" />
            <div className="flex w-[340px] justify-between">
              <p>
                <Link to="/" className="">
                  Beranda
                </Link>
              </p>
              <p>Mentor</p>
              <p>Pricing</p>
              <p>Business</p>
            </div>
          </div>
          <div className="w-[279px] flex justify-between">
            <button className="bg-purple-600 px-[36px] py-[10px] rounded-[47px]">
              <p className="text-white">
                <Link to="/login" className="">Masuk</Link>
              </p>
            </button>
          </div>
        </div>
      </nav>
      <section>
        <div>
          {/* <p>Lorem, ipsum dolor.</p> */}
        </div>
      </section>

      <Routes />
    </>
  );
}

export default App;
