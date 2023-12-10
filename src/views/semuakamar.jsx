import { Link } from "react-router-dom";
export default function Homeuser() {
    return (
        <div className="homeuser">

            <nav className=" flex justify-center h-[100px] ">
                    <div className="w-[1240px] flex items-center justify-between">
                    <div className="flex items-center w-[577px] justify-between">
                        <img src="images/logo.png" alt="" width="186" height="42" />
                        <div className="flex w-[340px] justify-between">
                        <p>
                            <Link to="/" className="">
                            Beranda
                            </Link>
                        </p>
                        <p>Mitra</p>
                        <p>Berita</p>
                        <Link to="/kontak" className="">
                            Kontak
                            </Link>
                        </div>
                    </div>
                    <div className="w-[279px] flex justify-between">
                        <button className="bg-purple-600 px-[36px] py-[10px] rounded-[47px]">
                        <p className="text-white">
                            <Link to="/login" className="">
                            Masuk
                            </Link>
                        </p>
                        </button>
                    </div>
                    </div>
                </nav>

            {/* <div className=""> 
                <img src="images/kamar.png" className="object-fill h-48 w-96" />    
            </div> */}

            <div className="bg-slate-100pt-20 pb-10 pl-10 pr-10">
                <div>
                    <h1 className="text-xl mt-5">Kos Standar</h1>
                    <h1 className="font-bold text-3xl mb-5">Kamar Terbaru</h1>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                    <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                    <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                    <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                    <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                    <div className="rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                </div>

            
            </div>


            <div className="bg-cyan-700 text-black pt-20 pb-10 pl-10 pr-10">
            <div>
                    <h1 className="text-xl mt-5">Kos Standar</h1>
                    <h1 className="font-bold text-3xl mb-5">Kamar Promosi</h1>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <div className=" bg-slate-100 rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                    <div className="bg-slate-100 rounded-lg h-80 w-96 shadow-lg mb-10">
                        <img className="rounded-lg object-fill h-48 w-96" src="images/kamar.jpg" />
                        <div className="p-5">
                            <p>Kostme 1 Depok</p>
                            <p>800.000</p>
                            <p>Jl. Jambu II. RT.005 RW.002 Depok Jawa Barat</p>
                            <hr />
                            <p>Pak Ikhmar</p>
                        </div>
                    </div>
                </div>

                
                

            </div>
                

        
        </div >
    )

}