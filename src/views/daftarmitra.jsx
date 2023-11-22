import { Link } from "react-router-dom"
export default function DaftarMitra() {
    return (
        <div className="daftarmitra bg-cyan-700 pt-20 pb-24 flex justify-center">
            <div className="w-96">
                <div>
                    <h1 className="text-white text-center text-3xl ">Daftar</h1>   
                </div>

                <div className="bg-slate-200 w-96 mt-5 rounded-md p-12 ">
                    <form action="/">

                        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Nama Lengkap</label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input type="text" name="nama" id="nama" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Masukkan Nama Lengkap" />
                        </div>

                        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Nomor Handphone</label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input type="text" name="angka" pattern="[0-9]" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nomor Handphone Aktif" />
                        </div>

                        <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input type="text" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Masukkan Email" />
                        </div>
                        
                        <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Kata Sandi</label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input type="password" name="password" id="password" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Minimal 8 Karakter" />
                        </div>

                        <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Ulangi Kata Sandi</label>
                        <div className="relative mt-2 rounded-md shadow-sm">
                            <input type="password" name="password" id="password" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Masukkan Kemnali Kata Sandi" />
                        </div>

                        <div className="relative mt-2 rounded-md shadow-sm text-xs">
                            <input type="checkbox" name="ingatsaya" id="ingatsaya" />
                            <label for="ingatsaya"> Saya telah membaca dan menyetujui ketentuan layanan dan kebijakan kami</label><br></br>
                        </div>
                        <br></br>
                        <div className="text-center w-full">
                            <input type="submit" value="Masuk" className="bg-cyan-700 py-1 px-5 rounded-md text-white" />
                        </div>

                        <br></br>

                        <div>
                            <p className=" text-xs text-center ">Sudah punya akun KostMe?<Link to="/loginmitra" className="no-underline hover:underline text-cyan-600">Masuk Disini</Link> </p> 
                        </div>
                        

                    </form>


                </div>
            </div>

        </div>
     )

}