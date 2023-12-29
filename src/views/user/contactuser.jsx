import { Link } from "react-router-dom"
export default function ContactUser() {

    return (
        <div className="kontak bg-cyan-700  ">
            <nav className=" bg-slate-100 flex justify-center h-[100px] ">
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
                    <p>
                        <Link to="/user/contact" className="">
                        Kontak
                        </Link>
                    </p>
                    
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