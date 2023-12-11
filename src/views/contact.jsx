import { Link } from "react-router-dom"
export default function Contact() {

    return (
        <div className="kontak bg-cyan-700  ">
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
                    <p>Mitra</p>
                    <p>Berita</p>
                    
                    <p>
                        <Link to="/kontak" className="">
                        Berita
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
            
            

            <div className="grid grid-cols-2 gap-4">
                <div className="">
                    <img className="object-fill w-full" src="../images/man.png" />
                </div>  

                <div className="w-full pt-3 pb-3">
                    <div className=" w-full  rounded-md p-12 ">
                        <h1 className="font-bold text-white mt-6 text-3xl ">Kontak Form</h1>   
                        <br />
                        
                        <form action="/">

                            <label for="email" className="block text-sm font-medium leading-6 text-white">Email</label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Masukkan Email" />
                            </div>
                            
                            <label for="nama" className="block text-sm font-medium leading-6 text-white">Nama</label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="nama" id="nama" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Masukkan nama" />
                            </div>

                            <label for="nama" className="block text-sm font-medium leading-6 text-white">Phone</label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input type="text" name="nama" id="nama" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Masukkan Nomot Telepon" />
                            </div>

                            <label for="nama" className="block text-sm font-medium leading-6 text-white">Pesan</label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <textarea type="textarea" name="nama" id="nama" rows="5" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Masukkan Pesan" />
                            </div>

                            <div className="text-center w-full mt-5">
                                <input type="submit" value="send" className="bg-slate-200 py-1 px-5 rounded-md" />
                            </div>

                            

                            

                        </form>


                    </div>
                </div>
            </div>

        </div>
     )
        
}