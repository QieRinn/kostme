//import react router dom
import { Routes, Route } from "react-router-dom";

//import view homepage

import Home from "../views/home.jsx";
import HomeAdmin from "../views/admin/homeadmin.jsx";
import DashboardPartner from "../views/admin/dashboardpartner.jsx";
import HomeUser from "../views/homeuser.jsx";
import KosPartner from '../views/admin/kospartner.jsx';
import LaundryPartner from '../views/admin/laundrypartner.jsx';
import KantinPartner from '../views/admin/kantinpartner.jsx';
import DaftarKantin from '../views/admin/daftarkantin.jsx';
import DaftarLaundry from '../views/admin/daftarlaundry.jsx';
import TambahPenghuniKos from '../views/admin/tambahpenghunikos.jsx';




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
import PeraturanLanjut from '../views/peraturanlanjut.jsx';

function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />
      <Route path="/admin/homeadmin" element={<HomeAdmin />} />
      <Route path="/admin/dashboardpartner" element={<DashboardPartner />} />
      <Route path="/homeuser" element={<HomeUser />} />
      <Route path="/admin/kospartner" element={<KosPartner />} />
      <Route path="/admin/kantinpartner" element={<KantinPartner />} />
      <Route path="/admin/laundrypartner" element={<LaundryPartner />} />
      <Route path="/admin/daftarkantin" element={<DaftarKantin />} />
      <Route path="/admin/daftarlaundry" element={<DaftarLaundry />} />
      <Route path="/admin/tambahpenghunikos" element={<TambahPenghuniKos />} />



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
            <Route path="/peraturanlanjut" element={<PeraturanLanjut/>} />








        </Routes>
    )
}
export default RoutesIndex;
