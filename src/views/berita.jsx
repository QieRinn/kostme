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
                        <Link to="/homeuser" className="">
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
                    
                    <div className="w-full gap-4 flex">
                        <div className="w-full bg-slate-200 rounded-md text-black p-5 mt-5">
                            Test
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                            Test
                        </div>
                    </div>
                    <div className="w-full gap-4 flex">
                        <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                            Test
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                            Test
                        </div>
                    </div>


                    <div className="text-2xl mt-20">Berita</div>
                    <div className="text-xl">Tips & Tricks</div>

                    <div className="w-full gap-4 flex">
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar.jpg"
                        />
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar.jpg"
                        />
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar.jpg"
                        />
                        </div>
                    </div>
                    <div className="w-full gap-4 flex">
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar.jpg"
                        />
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar.jpg"
                        />
                        </div>
                        <div className="w-full bg-slate-200 rounded-md text-black mt-5">
                        <img
                        className="rounded-lg object-fill h-32 w-full"
                        src="images/kamar.jpg"
                        />
                        </div>
                    </div>
                </div>


                <div className="text-white">
                    <div className="text-2xl">Berita</div>
                    <div className="text-xl">Tips & Tricks</div>

                    <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                        Test
                    </div>
                    <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                        Test
                    </div>
                    <div className="w-full bg-slate-200 rounded-md text-black p-10 mt-5">
                        Test
                    </div>
                </div>
            </div>

            
            

        </div>
     )
        
}