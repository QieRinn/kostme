//import react router dom
import { Routes, Route } from "react-router-dom";

//import view homepage

import Home from "../views/home.jsx";
//admin
import HomeAdmin from "../views/admin/homeadmin.jsx";
import DashboardPartner from "../views/admin/dashboardpartner.jsx";
import HomeUser from "../views/user/homeuser.jsx";
import KosPartner from '../views/admin/kospartner.jsx';
import LaundryPartner from '../views/admin/laundrypartner.jsx';
import KantinPartner from '../views/admin/kantinpartner.jsx';
import DaftarKantin from '../views/admin/daftarkantin.jsx';
import DaftarLaundry from '../views/admin/daftarlaundry.jsx';
import TambahPenghuniKos from '../views/admin/tambahpenghunikos.jsx';






//import view posts index
import Cari from "../views/cari.jsx";

import Login from '../views/login.jsx';
import LoginMitra from '../views/admin/loginmitra.jsx';
import LoginPencariKost from '../views/user/loginpencarikost.jsx';
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
import DetailKamar from '../views/detailkamar.jsx';
import Berita from '../views/berita.jsx';
import Pembayaran from '../views/pembayaran.jsx';
import Invoice from '../views/invoice.jsx';
//profile
import Profile from '../views/profile.jsx';
import EditProfile from '../views/editprofile.jsx';
// user
import BeritaUser from '../views/user/beritauser.jsx';
import ContactUser from '../views/user/contactuser.jsx';
import DetailKamarUser from '../views/user/detailkamaruser.jsx';
import PembayaranUser from '../views/user/pembayaranuser.jsx';
import InvoiceUser from '../views/user/invoiceuser.jsx';

function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />
      <Route path="/admin/homeadmin" element={<HomeAdmin />} />
      <Route path="/admin/dashboardpartner" element={<DashboardPartner />} />
      
      <Route path="/admin/kospartner" element={<KosPartner />} />
      <Route path="/admin/kantinpartner" element={<KantinPartner />} />
      <Route path="/admin/laundrypartner" element={<LaundryPartner />} />
      <Route path="/admin/daftarkantin" element={<DaftarKantin />} />
      <Route path="/admin/daftarlaundry" element={<DaftarLaundry />} />
      <Route path="/admin/tambahpenghunikos" element={<TambahPenghuniKos />} />

      {/* user */}
      <Route path="/user/homeuser" element={<HomeUser />} />
      <Route path="/user/berita" element={<BeritaUser />} />
      <Route path="/user/contact" element={<ContactUser />} />
      <Route path="/user/detailkamaruser" element={<DetailKamarUser />} />
      <Route path="/user/pembayaranuser" element={<PembayaranUser />} />
      <Route path="/user/invoiceuser" element={<InvoiceUser />} />

      {/* route "/posts" */}
      <Route path="/cari" element={<Cari />} />

            {/* login */}
            <Route path="/login" element={<Login />} />
            <Route path="/admin/loginmitra" element={<LoginMitra />} />
            <Route path="/user/loginpencarikost" element={<LoginPencariKost/>} />


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
            <Route path="/detailkamar" element={<DetailKamar/>} />
            <Route path="/detailkamaruser" element={<DetailKamarUser/>} />
            <Route path="/berita" element={<Berita/>} />
            <Route path="/pembayaran" element={<Pembayaran/>} />
            <Route path="/invoice" element={<Invoice/>} />
            {/* profile */}
            <Route path="/profile" element={<Profile/>} />
            <Route path="/editprofile" element={<EditProfile/>} />
           
           








        </Routes>
    )
}
export default RoutesIndex;
