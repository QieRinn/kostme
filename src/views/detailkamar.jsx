import { Link } from "react-router-dom";
export default function Detailkamar() {
  return (

    <div className="detailkamar">

        <div className="bg-cyan-700 h-10 pt-1">
            <h1 className="font-bold text-xl">
            <Link to="/homeuser" className="">
            Beranda
            </Link>
        </h1>
        </div>

        <div className="grid grid-cols-2 mt-10 px-20">
            <div>
                <img className="object-fill h-96 w-full" src="/images/foto1.png"/>
            </div>
            <div>
                <img className="object-fill h-48 w-full" src="/images/foto2.png"/>
                <img className="object-fill h-48 w-full" src="/images/foto3.png"/>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-4 ml-12 mt-12">
            <div>
            <h1 className="font-bold text-xl mb-3">Kos Muamalah Pak Ikhwan</h1>
            <p>
            Jl. Jimun Raya 28,Abadijaya, Kec. Sukmajaya, Kota Depok, Jawa Barat 16417 
            </p>
            </div>
            
            {/*<div>sdfsdf</div>*/}

        </div>

        <div className="grid grid-cols-3 gap-4 ml-12 mt-12">
            <div>
            <h1 className="font-bold text-xl mb-3">Spesifikasi Kos</h1>
            <p>3 X 4</p>
            <p> Area parkir</p>
            <p> Termasuk Listrik</p>
            </div>
        </div>

        <div className="flex grid-cols-3 gap-4 ml-12 mt-12">
            <div>
            <h1 className="font-bold text-xl mb-3">Spesifikasi Kamar</h1>
            <div className="grid grid-cols-3 gap-4 ">
            <p>Bantal           </p>
            <p>Guling           </p>
            <p>Kursi            </p>
            <p>Almari           </p>
            <p>Kamar Mandi Luar </p>
            <p>Ventilasi        </p>
            <p>Kasur            </p>
            <p>Meja             </p>
            <p>Jendela          </p>
            </div>
            </div>
        </div>

        <div className="flex grid-cols-3 gap-4 ml-12 mt-12">
            <div>
            <h1 className="font-bold text-xl mb-3">Spesifikasi Kamar Mandi</h1>
            <div className="grid grid-cols-3 gap-4 ">
            <p>Ember            </p>
            <p>Gayung           </p>
            <p>Closet Jongkok   </p>
            <p>Wastafel         </p>
            <p>Cermin           </p>
            </div>
            </div>
        </div>

        <div className="flex grid-cols-3 gap-4 ml-12 mt-12">
            <div>
            <h1 className="font-bold text-xl mb-3">Peraturan Kamar</h1>
            <div className="grid grid-cols-3 gap-4 ">
            <p>Orang lain boleh berkunjung                  </p>
            <p>Akes 24 jam                                  </p>
            <p>Lawan Jenis dilarang masuk                   </p>
            <p>Maks 1 orang                                 </p>
            <p>Dilarang ramai  di atas jam 10 malam         </p>
            </div>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4 ml-12 mt-5">
            <div>
            <h1 className="font-bold text-xl mt-5 mb-3">Deskripsi Kos</h1>
            <p> Apabila Anda membutuhkan bantuan, Anda dapat menghubungi 
            penjaga yang bertugas dari pukul 07.00-19.00 WIB. </p>

            <div>
            <h1 className=" grid grid-cols-3 gap-9 mt-5 mb-3"></h1>
            <p> Informasi fasilitas:Daya listrik : 13000 VA (Token) </p>
            <p>Sumber air : PDAM                                    </p>
            <p>Wifi : Myhome up to 50 Mbps                          </p>
            <p>Kapasitas parkir : 7 motor, 1 mobil, dan 3 sepeda    </p>

            <div>
            <h1 className=" grid grid-cols-3 gap-9 mt-5 mb-3"></h1>
            <p> Biaya tambahan:Bisa BERDUA +500 Ribu (teman membawa kasur sendiri)                       </p>
            <p>Tamu menginap +100 Ribu/hariParkir mobil +35 Ribu                                         </p>
            <p>Setiap alatelektronik yang dibawa akan dikenakan charge Rp10.000/item-                    </p>
            <p>Kost ini berlokasi 100 meter dari jalan raya dengan akses yang dapat dilalui oleh mobil,  </p>
            <p>berlokasi 12 menit dari Universitas Katolik Indonesia Atma Jaya,                          </p>
            <p>11 menit dari SCBD, 12 menit dari Mega Kuningan, dan 11 menit dari Pacific Place Mall.    </p>
            </div>
            </div>
            </div>
        </div>


    <div className="grid grid-cols-3 gap-4 ml-12 mt-5">
        <div>
        <h1 className="font-bold text-2xl justify-center mb-3">Cek kembali sebelum selesai</h1>
        </div>
    </div>

    <br />
            <div className="w-full flex justify-between mt-4 mb-4">
              <input
                type="submit"
                value="Kembali"
                formAction="/peraturan"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-start ml-5"
              />
              <input
                type="submit"
                value="Lanjut "
                formAction="/homeuser"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-end mr-3"
              />
            </div>
            <br />

     



        

        

    </div>

    );
}