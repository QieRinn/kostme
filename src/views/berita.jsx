import { Link } from "react-router-dom"
export default function Berita() {

    return (
        <div className="berita bg-cyan-700  pb-20">
            <nav className=" bg-slate-100 flex justify-center h-[100px] ">
                <div className="w-[1240px] flex items-center justify-between">
                <div className="flex items-center w-[577px] justify-between">
                    <img src="images/logo.png" alt="" width="186" height="42" />
                    <div className="flex w-[340px] justify-between">
                    
                    <p>
                        <Link to="/" className="">
                        Beranda
                        </Link>
                    </p>

                    <p>
                        <Link to="/daftarmitra" className="">
                        Mitra
                        </Link>
                    </p>

                    <p>
                        <Link to="/berita" className="">
                        Berita
                        </Link>
                    </p>
                    <p>
                        <Link to="/contact" className="">
                        Kontak
                        </Link>
                    </p>
                    
                    </div>
                </div>
                <div className="w-[279px] flex justify-between">
                    <button className="bg-purple-600 px-[36px] py-[10px] rounded-[47px]">
                    <p className="text-white">
                        <Link to="/login" className="">Masuk</Link>
                    </p>
                    </button>
                </div>
                </div>
            </nav>
            
            <div className="grid grid-cols-3 gap-4 mx-20 my-10">
                <div className="col-span-2 text-white">
                    <div className="text-2xl">Berita</div>
                    <div className="text-xl">Tips & Tricks</div>
                    
                    <div className="w-full gap-4 flex font-black">
                        <div className="w-full bg-slate-200 rounded-md text-black p-5 mt-5">
                            Bagaimana tips memilih kos?
                            {/* <br />
                            <br />
                            <p>Selengkapnya </p>  */}
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                            hal apa saja yang perlu dipertimbangkan untuk mencari kos?
                        </div>
                    </div>
                    <div className="w-full gap-4 flex font-black">
                        <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                            Bagaimana cara mengelola kos?
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                            bagaimana tips menentukan harga sewa kos?
                        </div>
                    </div>


                    <div className="text-2xl mt-20">Berita</div>
                    <div className="text-xl">Tips & Tricks</div>

                    <div className="w-full gap-4 flex">
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar promo 3.jpeg"
                        />
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar promo 2.jpeg"
                        />
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar2.jpg"
                        />
                        </div>
                    </div>
                    <div className="w-full gap-4 flex">
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar3.jpg"
                        />
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar4.jpg"
                        />
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar promo 1.jpeg"
                        />
                        </div>
                    </div>
                </div>


                <div className="text-white">
                    <div className="text-2xl">Berita</div>
                    <div className="text-xl">Update Kos </div>

                    <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                       <p className="font-black">Fitur Mitra Laundry</p> <br />
                    Fitur mitra laundry ini berguna untuk memberitahukan bahwa mereka yang berada di tempat baru,  m
                    ereka dapat menghetahui dengan membuka website ini dan akan di tampilkan pada bagian halamn utama 
                    sebagai custome
                    </div>
                    <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                        <p className="font-black">Fitur Mitra Kantin</p> <br />
                    Fitur mitra kantin ini berguna untuk memberitahukan bahwa mereka yang berada di tempat baru,  
                    mereka dapat menghetahui dengan membuka website 
                    ini dan akan di tampilkan pada bagian halamn utama sebagai custome
                    </div>
                    <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                       <p className="font-black">Fitur Mitra Fotokopi</p>  <br />
                    Adapaun juga fitur mitra fotokopi ini  juga berguna untuk memberitahukan pengguna website ini diamana tempat 
                    fotokopi yang berguna untuk mahasiswa untuk mencetak laporan maupun skirpsi,  mereka dapat
                    menghetahui dengan membuka website ini dan akan di tampilkan pada bagian halaman utama sebagai customer
                    </div>
                </div>
            </div>

            
            

        </div>
     )
        
}