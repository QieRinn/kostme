//import react router dom
import { Routes, Route } from "react-router-dom";

//import view homepage

import Home from "../views/home.jsx";
import HomeAdmin from "../views/admin/homeadmin.jsx";
import DashboardPartner from "../views/admin/dashboardpartner.jsx";
import HomeUser from "../views/homeuser.jsx";
import KosPartner from "../views/admin/kosPartner.jsx";

//import view posts index
import Cari from "../views/cari.jsx";

import Login from '../views/login.jsx';
import LoginMitra from '../views/loginmitra.jsx';
import LoginPencariKost from '../views/loginpencarikost.jsx';
import DaftarMitra from '../views/daftarmitra.jsx';
import DaftarPenyewaKost from '../views/daftarpenyewakost.jsx';
import DaftarKos from '../views/daftarkos.jsx';
import TipeKos from '../views/tipekos.jsx';
import SpesifikasiKos from '../views/spesifikasikos.jsx';
import SpesifikasiKamar from '../views/spesifikasikamar.jsx';
import SpesifikasiMandi from '../views/spesifikasimandi.jsx';
import Contact from '../views/contact.jsx';
import Peraturan from '../views/peraturan.jsx';
import SemuaKamar from '../views/semuakamar.jsx';



function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />
      <Route path="/admin/homeadmin" element={<HomeAdmin />} />
      <Route path="/admin/dashboardpartner" element={<DashboardPartner />} />
      <Route path="/homeuser" element={<HomeUser />} />
      <Route path="/admin/kosPartner" element={<KosPartner />} />

      {/* route "/posts" */}
      <Route path="/cari" element={<Cari />} />

            <Route path="/login" element={<Login />} />
            <Route path="/loginmitra" element={<LoginMitra />} />
            <Route path="/loginpencarikost" element={<LoginPencariKost/>} />
            <Route path="/daftarmitra" element={<DaftarMitra />} />
            <Route path="/daftarpenyewakost" element={<DaftarPenyewaKost/>} />
            <Route path="/daftarkos" element={<DaftarKos/>} />
            <Route path="/tipekos" element={<TipeKos/>} />
            <Route path="/spesifikasikos" element={<SpesifikasiKos/>} />
            <Route path="/spesifikasikamar" element={<SpesifikasiKamar/>} />
            <Route path="/spesifikasimandi" element={<SpesifikasiMandi/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/peraturan" element={<Peraturan/>} />
            <Route path="/semuakamar" element={<SemuaKamar/>} />






        </Routes>
    )
}
export default RoutesIndex;
