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
      

      {/* <div>
        <img src="images/logo.png" alt="" width="186" height="42" />
      </div> */}
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
