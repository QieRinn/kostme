export default function Home() {
    return (
        <div className="home">
            <div className="bgimg pt-36">
                <h1 className="font-bold text-black text-left text-xl mt-5 ml-8">bingung cara cari kos impian</h1>
                <h1 className="font-bold text-black text-left text-3xl mt-5 ml-8 drop-shadow-lg"> CARI KAMAR KOS IDAMANMU DI PLATFORM KAMI </h1>
            </div>
    
            <div className="bg-cyan-700 h-10 pt-1">
                <h1 className="font-bold text-xl"></h1>
            </div>

            {/* <div className=""> 
                <img src="images/kamar.png" className="object-fill h-48 w-96" />    
            </div> */}

            <div className="bg-slate-100">
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

                <a href="/semuakamar" className="text-white bg-cyan-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Lihat semua kamar</a>
                <br />
                <br />
                <br />
            </div>

            

            <div className="py-10 pl-10">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h1 className="font-bold text-xl">Mengapa memilih platform kami</h1>
                        <p>lihat video presentasi untuk mengetahui lebih lanjut tentang kami</p>

                        <div className="mb-5 mt-10 flex">
                            <div className="h-20 w-20 bg-cyan-700">
                            </div>
                            <div className="ml-5 mt-1">
                            Memberikan informasi tentang kos-kosan yang tersedia secara akurat
                            </div>
                        </div> 
                        <div className="mb-5 mt-10 flex">
                            <div className="h-20 w-20 bg-cyan-700">
                            </div>
                            <div className="ml-5 mt-1">
                            Memberikan informasi tentang kos-kosan yang tersedia secara akurat
                            </div>
                        </div> 
                        <div className="mb-5 mt-10 flex">
                            <div className="h-20 w-20 bg-cyan-700">
                            </div>
                            <div className="ml-5 mt-1">
                            Memberikan informasi tentang kos-kosan yang tersedia secara akurat
                            </div>
                        </div> 
                        
                        
                    </div>
                    <div className="mt-10 bgimg h-96">
                        <div className="text-white w-80 bg-cyan-700 p-5 mt-24 absolute right-0">
                            <p>Situs web ini sepenuhnya responsif sehingga pengunjung dapat melihat konten ini dari perangkat pilihan mereka</p>
                            <br />
                            <span>SMART</span><br />
                            <span>CEO KostMe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )

}