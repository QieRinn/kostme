//import react router dom
import { Routes, Route } from "react-router-dom";

//import view homepage
import Home from '../views/home.jsx';

//import view posts index
import Cari from '../views/cari.jsx';

import Login from '../views/login.jsx';
import LoginMitra from '../views/loginmitra.jsx';
import DaftarMitra from '../views/daftarmitra.jsx';

function RoutesIndex() {
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Home />} />

            {/* route "/posts" */}
            <Route path="/cari" element={<Cari />} />

            <Route path="/login" element={<Login />} />
            <Route path="/loginmitra" element={<LoginMitra />} />
            <Route path="/daftarmitra" element={<DaftarMitra />} />


        </Routes>
    )
}
export default RoutesIndex