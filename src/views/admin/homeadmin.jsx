import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";


export default function HomeAdmin() {
  const isAuthenticated = !!Cookies.get('auth');

  const navigate = useNavigate();

  const handleLogout = () => { 
    Cookies.remove('auth');
    navigate('/admin/loginmitra'); 
  };

  if (!isAuthenticated) {
    navigate('/admin/loginmitra'); 
    return null; // Return null to prevent rendering anything else
  }
  else
  {


  return (
    <div className="homeadmin">

      <nav className="fixed top-0 left-0 right-0 flex justify-center h-[100px] bg-white z-50">
        <div className="w-[1240px] flex items-center justify-between mr-16">
          <div className="flex items-center w-[577px] justify-between">
            <img src="../images/logo.png" alt="" width="186" height="42" />
            <div className="flex w-[340px] justify-between ">
              <p>
                <Link to="/" className="">
                  Beranda
                </Link>
              </p>
              <p>Mitra</p>
              <p>Berita</p>
              <Link to="/contact" className="">
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

          {/* <div className="w-[279px] flex justify-between">
            <button className="bg-purple-600 px-[36px] py-[10px] rounded-[47px]">
              <p className="text-white">
                <Link to="/login" className="">
                  Masuk
                </Link>
              </p>
            </button>
          </div> */}
        </div>
      </nav>
      
      <div className="bgimg pt-36">
        <h1 className="font-bold text-white text-left text-xl mt-5 ml-8">
          bingung cara cari kos impian
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
          <h1 className="text-xl mt-5 ml-5">Kos Standar</h1>
          <h1 className="font-bold text-3xl mb-5 ml-5">Kamar Terbaru</h1>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10 ml-3">
            {/* {
            posts.length > 0
            ?posts.map((post, index) => (

              <div className="rounded-lg h-80 shadow-lg mb-10">
                <img className="rounded-lg object-fill h-48 w-full" src="images/kamar.jpg" />
                <div className="p-5">
                  <p>{post.kamar}</p>
                  <p>{post.harga}</p>
                  <p>{post.alamat}</p>
                  <hr />
                  <p>{post.pemilik}</p>
                  </div>
                  </div>
              ))
              : <div>Data tidak tersedia </div>
            } */}
                  
            <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/kamar.jpg"
            />
            <div className="p-5">
              <p>Kostme 1 Depok</p>
              <p>800.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Pak Ikhmar</p>
            </div>
            </div>
          </div>
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/kamar.jpg"
            />
            <div className="p-5">
              <p>Kostme 1 Depok</p>
              <p>800.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Pak Ikhmar</p>
            </div>
          </div>
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/kamar.jpg"
            />
            <div className="p-5">
              <p>Kostme 1 Depok</p>
              <p>800.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Pak Ikhmar</p>
            </div>
          </div>
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10 ml-3">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/kamar.jpg"
            />
            <div className="p-5">
              <p>Kostme 1 Depok</p>
              <p>800.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Pak Ikhmar</p>
            </div>
          </div>
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/kamar.jpg"
            />
            <div className="p-5">
              <p>Kostme 1 Depok</p>
              <p>800.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Pak Ikhmar</p>
            </div>
          </div>
          <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
            <img
              className="rounded-lg object-fill h-48 w-96"
              src="../images/kamar.jpg"
            />
            <div className="p-5">
              <p>Kostme 1 Depok</p>
              <p>800.000</p>
              <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
              <hr />
              <p>Pak Ikhmar</p>
            </div>
          </div> 

        </div> 

        <a
          href="/semuakamar"
          className="text-white bg-cyan-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ml-8"
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
          <div className="mt-10">
            <p className="font-bold text-base ">
              Keloala Kos anda dengan mudah dan dapat di pantau{" "}
            </p>
            <br />
            <br />
            <div className="flex justify-center">
              <a
                href="/admin/dashboardpartner"
                className="text-black bg-white hover:bg-cyan-500 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Dashboard Kelola
              </a>
            </div>
          </div>
          <div></div>
          <div>
            <img className="object-fill w-70 h-64" src="../images/kamar.jpg" />
          </div>
        </div>

        {/* <div className="mt-10 bgimg h-96"> </div> */}
        <br />
      </div>

      {/* <div className="bg-slate-100"> */}
      <div className="text-center">
        <h1 className="text-xl mt-5 font-bold">Mitra kami</h1>
        <h1 className="text-lg mb-5">
          beberpa pemilik kos yang sudeh bergabung dengan kami
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <div className="rounded-lg shadow-lg mb-10 ml-3">
          <img
            className="rounded-lg object-fill h-48 w-full"
            src="../images/kamar.jpg"
          />
          <div className="p-5">
            <p>Pak Ikhmar</p>
            <p>Depok</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Amet et facilisis faucibus
              elementum auctor accumsan vulputate. Nibh scelerisque vehicula
              ornare.
            </p>
            <hr />
            <p>Pak Ikhmar</p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg mb-10">
          <img
            className="rounded-lg object-fill h-48 w-full"
            src="../images/kamar.jpg"
          />
          <div className="p-5">
            <p>Pak Ikhmar</p>
            <p>Depok</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Amet et facilisis faucibus
              elementum auctor accumsa.{" "}
            </p>
            <hr />
            <p>Pak Ikhmar</p>
          </div>
        </div>
        <div className="rounded-lg shadow-lg mb-10">
          <img
            className="rounded-lg object-fill h-48 w-full"
            src="../images/kamar.jpg"
          />
          <div className="p-5">
            <p>Pak Ikhmar</p>
            <p>Depok</p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Amet et facilisis faucibus
              elementum auctor accumsa.
            </p>
            <hr />
            <p>Pak Ikhmar</p>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="bg-cyan-700">
        <div className="grid grid-cols-4 gap-8 pt-10 pb-10">
          <div className="text-center text-white">
            <span className="text-3xl">15</span> <br />
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
            <span className="text-3xl">5</span> <br />
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
  }
}

