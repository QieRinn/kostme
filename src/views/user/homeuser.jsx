import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";

export default function Homeuser() {

  const isAuthenticated = !!Cookies.get('authuser');

  const navigate = useNavigate();

  const handleLogout = () => { 
    Cookies.remove('authuser');
    navigate('/user/loginpencarikost'); 
  };

  // if (!isAuthenticated) {
  //   navigate('/user/loginpencarikost'); 
  //   return null; // Return null to prevent rendering anything else
  // }
  // else
  // {

  return (
    <div className="homeuser">
    <nav className="fixed top-0 left-0 right-0 flex justify-center h-[100px] bg-white z-50">
        <div className="w-[1240px] flex items-center justify-between">
        <div className="flex items-center w-[577px] justify-between">
          <img src="../images/logo.png" alt="" width="186" height="42" />
          <div className="flex w-[340px] justify-between">
            <p>
                <Link to="/user/homeuser" className="">
                Beranda
                </Link>
            </p>
            <p>
                <Link to="/daftarmitra" className="">
                Mitra
                </Link>
            </p>
            <p>
                <Link to="/user/berita" className="">
                Berita
                </Link>
            </p>
            
                <Link to="/user/contact" className="">
                Kontak
                </Link>
                <button onClick={handleLogout}>Logout</button>
            
          </div>
        </div>
        <div className=""> 
          <Link to="/profile">
            <img class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" 
            src="../images/wan.jpg" alt="Bordered avatar"/>
          </Link>
          </div>
      </div>
    </nav>

      <div className="bgimg pt-36">
        <h1 className="font-bold text-white text-left text-xl mt-5 ml-8">
          Bingung cara cari kos impian
        </h1>
        <h1 className="font-bold text-white text-left text-3xl mt-5 ml-8 drop-shadow-lg">
          {" "}
          CARI KAMAR KOS IDAMANMU DI PLATFORM KAMI{" "}
        </h1>
      </div>

      <div className="bg-cyan-700 h-10 pt-1">
        <h1 className="font-bold text-xl"></h1>
      </div>

      {/* <div className=""> 
                <img src="images/kamar.png" className="object-fill h-48 w-96" />    
            </div> */}

      <div className="bg-slate-100">
        <div>
          <h1 className="text-xl mt-5 ml-7">Kos Standar</h1>
          <h1 className="font-bold text-3xl mb-5 ml-7">Kamar Terbaru</h1>
        </div>

        <div className="grid grid-cols-3 gap-4">
        <Link to="/user/detailkamaruser" className="">
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10 ml-3">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/kamar4.jpg"
            />
            <div className="p-5">
              <p>Kostme 1 Depok</p>
              <p>800.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Pak Ikhmar</p>
            </div>
          </div>
          </Link>
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/gambar kost 2.JPG"
            />
            <div className="p-5">
              <p>Kostme 2 Depok</p>
              <p>1.000.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Pak Ikhmar</p>
            </div>
          </div>
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/gambar kost 3.JPG"
            />
            <div className="p-5">
              <p>Kos Pelangi</p>
              <p>800.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Bu Amelia</p>
            </div>
          </div>
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10 ml-3">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/gambar kost 4.JPG"
            />
            <div className="p-5">
              <p>Kos Pelangi</p>
              <p>850.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Bu Amelia</p>
            </div>
          </div>
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/kamar3.jpg"
            />
            <div className="p-5">
              <p>Kos The Raid</p>
              <p>800.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Pak Ronald</p>
            </div>
          </div>
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/kamar2.jpg"
            />
            <div className="p-5">
              <p>Kos The Raid</p>
              <p>900.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Pak Ronald</p>
            </div>
          </div>
        </div>

        <a
          href="/semuakamar"
          className="text-white bg-cyan-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-7"
        >
          Lihat semua kamar
        </a>
        <br />
        <br />
        <br />
      </div>

      <div className="py-10 pl-10">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h1 className="font-bold text-xl">Mengapa memilih platform kami</h1>
            <p>
              lihat video presentasi untuk mengetahui lebih lanjut tentang kami
            </p>

            <div className="mb-5 mt-10 flex">
              <div className="h-20 w-20 bg-cyan-700"></div>
              <div className="ml-5 mt-1">
                Memberikan informasi tentang kos-kosan yang tersedia secara
                akurat
              </div>
            </div>
            <div className="mb-5 mt-10 flex">
              <div className="h-20 w-20 bg-cyan-700"></div>
              <div className="ml-5 mt-1">
                Memberikan informasi tentang kos-kosan yang tersedia secara
                akurat
              </div>
            </div>
            <div className="mb-5 mt-10 flex">
              <div className="h-20 w-20 bg-cyan-700"></div>
              <div className="ml-5 mt-1">
                Memberikan informasi tentang kos-kosan yang tersedia secara
                akurat
              </div>
            </div>
          </div>
          <div className="mt-10 bgimg h-96">
            <div className="text-white w-80 bg-cyan-700 p-5 mt-24 absolute right-0">
              <p>
                Situs web ini sepenuhnya responsif sehingga pengunjung dapat
                melihat konten ini dari perangkat pilihan mereka
              </p>
              <br />
              <span>SMART</span>
              <br />
              <span>CEO KostMe</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-cyan-700 text-white pt-20 pb-10 pl-10 pr-10">
        <div className="grid grid-cols-3 gap-4  ">
          <div className="col-span-2 mt-10">
            <p className="font-bold text-base ">
              Bergabunglah dengan mitra kami dan dapatkan berbagai penawaran
              yang kami berikan{" "}
            </p>

            <p> Beberapa kelebihan bergabung denga mitra kami: </p>
            <br />

            <ul className="list-disc ml-5">
              <li> Fitur potongan harga iklan untuk mitra baru</li>
              <li> Fitur dasboard kelola kos </li>
              <li>Fitur pendaftaran kos yang mudah</li>
            </ul>
          </div>
          <div>
            <img className="object-fill w-70 h-64" src="../images/kamar2.jpg" />
          </div>
        </div>

        {/* <div className="mt-10 bgimg h-96"> </div> */}
        <br />
        <div className="flex justify-center">
          <a
            href="/semuakamar"
            className="text-black bg-white hover:bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Lihat semua kamar
          </a>
        </div>
      </div>

      {/* <div className="bg-slate-100"> */}
      <div className="text-center">
        <h1 className="text-xl mt-5 font-bold">Mitra kami</h1>
        <h1 className="text-lg mb-5">
          beberapa pemilik kos yang sudah bergabung dengan kami
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="rounded-lg shadow-lg mb-10 ml-3">
          <img
            className="rounded-lg object-fill h-50 w-full"
            src="../images/mitra 1.jpeg"
          />
          <div className="p-5">
            <p>Pak Ikhmar</p>
            <p>Depok</p>
            <p>
              {" "}
              Selamat datang di Kosan Pak Ikhmar, Tempat di mana kenyamanan dan
              keamanan menjadi prioritas utama.
            </p>
            <hr />
            <p>Pak Ikhmar</p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg mb-10">
          <img
            className="rounded-lg object-fill h-50 w-full"
            src="../images/mitra 2.jpeg"
          />
          <div className="p-5">
            <p>Bu Amelia</p>
            <p>Depok</p>
            <p>
              Nikmati keuntungan tinggal di kosan kami yang berlokasi strategis,
              dekat dengan pusat kota dan akses mudah ke transportasi umum.{" "}
            </p>
            <hr />
            <p>Bu Amelia</p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg mb-10">
          <img
            className="rounded-lg object-fill h-50 w-full"
            src="../images/mitra 3.jpeg"
          />
          <div className="p-5">
            <p>Pak Ronald</p>
            <p>Depok</p>
            <p>
              Kosan kami selalu bersih dan terawat dengan baik. Fasilitas
              lengkap untuk memenuhi kebutuhan harian Anda.
            </p>
            <hr />
            <p>Pak Ronald</p>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="bg-cyan-700">
        <div className="grid grid-cols-4 gap-8 pt-10 pb-10">
          <div className="text-center text-white">
            <span className="text-3xl">100</span> <br />
            <span>Total dari mitra kami</span>
          </div>
          <div className="text-center text-white">
            <span className="text-3xl">100+</span> <br />
            <span>Total dari pengguna platform kami</span>
          </div>
          <div className="text-center text-white">
            <span className="text-3xl">35</span> <br />
            <span>Pengguna baru setiap bulan</span>
          </div>
          <div className="text-center text-white">
            <span className="text-3xl">25</span> <br />
            <span>Kamar baru setiap minggu</span>
          </div>
        </div>
      </div>

      <div className="bg-cyan-700 rounded-lg mt-20 ml-20 mr-20 mb-20 pl-10 pr-10">
        <div className="grid grid-cols-4 gap-8 pt-10 pb-10 text-white">
          <div className="col-span-2">
            <span>Buletin</span>
            <br />
            <span>
              Berlangganan untuk mendapatkan buletin dan mendapatkan berita dan
              informasi terbaru
            </span>
          </div>
          <div className="text-center m-auto">Masukkan Email Anda</div>
          <div className="text-center m-auto">Langganan</div>
        </div>
      </div>

      <div className="col-span-3"></div>
    </div>
  );
  // }
}
