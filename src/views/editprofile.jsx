import { Link } from "react-router-dom"
export default function EditProfile() {
  return (
    <div className="editprofile">

<div class="bg-gray-100">
    <div class="container mx-auto my-5">
        <div class="bg-white shadow-lg rounded-lg p-5">
           
            <div class="flex items-center space-x-5">
                <img src="https://source.unsplash.com/random/80x80" alt="avatar" class="w-20 h-20 rounded-full"/>
                <div>
                    <h1 class="text-2xl font-bold">Nama User</h1>
                    <p class="text-gray-600">Alamat User</p>
                </div>
            </div>

            
            <form>
                <div class="mt-5">
                    <h2 class="text-xl font-bold mb-3">Edit Profile</h2>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="nama">
                            Nama
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama" type="text" placeholder="Nama"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="alamat">
                            Alamat
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="alamat" type="text" placeholder="Alamat"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                            Nomor Telepon
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Nomor Telepon"/>
                    </div>

                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                        Simpan
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>

         {/* <div className="grid grid-cols-2 mt-10 px-20">
          <img class=" h-60 rounded-full border-2 border-red-600 " src="../images/wan.jpg" alt=""/>
              <div className="  ">
                Muharrir Rajuddin
              </div>

              <div className="">
                +62 859 3333 0921
              </div>

               <div className="">
                Keluar
              </div>
          

        <div className="mb-5 mt-10 flex">
          <img class=" h-10 " src="../images/phone.png" alt=""/>
              <div className="">
                +62 859 3333 0921
              </div>

              <img class=" h-10 " src="../images/logout.png" alt=""/>
              <div className="">
                Keluar
              </div>
          </div>

          <div className="">
          <img class=" h-10 " src="../images/logout.png" alt=""/>
              <div className="ml-5 mt-1">
                Keluar
              </div>
          </div>
    </div> */}
  </div>

  )
}