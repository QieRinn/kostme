//import react router dom
import { Routes, Route } from "react-router-dom";

//import view homepage
import Home from '../views/home.jsx';

//import view posts index
import Cari from '../views/cari.jsx';

import Login from '../views/login.jsx';
import LoginMitra from '../views/loginmitra.jsx';
import DaftarMitra from '../views/daftarmitra.jsx';
import DaftarKos from '../views/daftarkos.jsx';
import TipeKos from '../views/tipekos.jsx';
import SpesifikasiKos from '../views/spesifikasikos.jsx';
import SpesifikasiKamar from '../views/spesifikasikamar.jsx';
import SpesifikasiMandi from '../views/spesifikasimandi.jsx';

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
            <Route path="/daftarkos" element={<DaftarKos/>} />
            <Route path="/tipekos" element={<TipeKos/>} />
            <Route path="/spesifikasikos" element={<SpesifikasiKos/>} />
            <Route path="/spesifikasikamar" element={<SpesifikasiKamar/>} />
            <Route path="/spesifikasimandi" element={<SpesifikasiMandi/>} />


        </Routes>
    )
}
export default RoutesIndex