import { Link } from "react-router-dom"
export default function Profile() {
  return (
    <div className="profile bg-slate-200">
      <div class="container mx-auto my-5">
        <div class="bg-white shadow-lg rounded-lg p-5 mt-32">
          <div class="flex items-center justify-center space-x-5">
            <img src="images/wan.jpg" alt="avatar" class="w-20 h-20 rounded-full "/>
            <div>
              <h1 class="text-2xl font-bold">Nama User</h1>
              <p class="text-gray-600">Alamat User</p>
            </div>
          </div>

          <div class="text-center mt-10">
            <h2 class="text-xl font-bold mb-3">Info Profile</h2>
          </div>

          <div class="mt-10 flex justify-center">
            <div className="">
              <div className="bg=slate-200 rounded-lg h-32 w-48 shadow-lg mb-10 ml-3 flex mr-10">
                <div className="mt-10 flex">
                  <img className="rounded-lg object-fill h-10 w-10 "
                    src="../images/phone.png"/>
                    <div className="">
                      <p> +62 0987 0987 0987</p>
                    </div>
                  </div>
              </div>
            </div>
            <div className="">
              <div className="bg=slate-200 rounded-lg h-32 w-48 shadow-lg mb-10 ml-3 flex ">
                <div className="mt-10 flex">
                  <img className="rounded-lg object-fill h-10 w-10 "
                    src="../images/phone.png"/>
                    <div className="">
                      <p> gajah@gmail.com</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>


          </div>

          

      </div>
    </div>

  )
}
{/* <div className="mb-5 mt-10 flex">
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
          </div> */}