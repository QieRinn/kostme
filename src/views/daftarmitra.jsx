import { Link } from "react-router-dom";
import { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';

//import api
import api from "../api";

export default function DaftarMitra() {
  const navigate = useNavigate();
  const [nama, setNama] = useState('');
  const [hp, setHP] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const simpanData = (e) => {
    e.preventDefault();

    api.get("tambahadmin/"+email+"/"+password+"/"+nama+"/"+hp).then((response) => {
      //assign response data to state "posts"
      alert(response.data.message);
      navigate('/admin/loginmitra');
    }, (error) => {
      alert(error);
    });

    

  };
  
  return (
    <div className="daftarmitra bg-cyan-700 pt-20 pb-24 flex justify-center">
      <div className="w-96">
        <div>
          <h1 className="text-white text-center text-3xl ">Daftar</h1>
        </div>

        <div className="bg-slate-200 w-96 mt-5 rounded-md p-12 ">
        <form onSubmit={simpanData}>
            <label
              for="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nama Lengkap
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="nama"
                id="nama"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Masukkan Nama Lengkap"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nomor Handphone
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="angka"
                // pattern="[0-9]"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Nomor Handphone Aktif"
                value={hp}
                onChange={(e) => setHP(e.target.value)}
              />
            </div>

            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <label
              for="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Kata Sandi
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Minimal 8 Karakter"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <label
              for="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Ulangi Kata Sandi
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="password"
                id="password"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Masukkan Kembali Kata Sandi"
              />
            </div>

            <div className="relative mt-2 rounded-md shadow-sm text-xs">
              <input type="checkbox" name="ingatsaya" id="ingatsaya" />
              <label for="ingatsaya">
                {" "}
                Saya telah membaca dan menyetujui ketentuan layanan dan
                kebijakan kami
              </label>
              <br></br>
            </div>
            <br></br>
            <div className="text-center w-full">
              <input
                type="submit"
                value="Simpan"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white"
              />
            </div>

            <br></br>

            <div>
              <p className=" text-xs text-center ">
                Sudah punya akun KostMe?
                <Link
                  to="/admin/loginmitra"
                  className="no-underline hover:underline text-cyan-600"
                >
                  Masuk Disini
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
