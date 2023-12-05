import { Link } from "react-router-dom";

export default function Login() {
<<<<<<< HEAD
  return (
    <div className="login bg-cyan-700 pt-20 pb-24 flex justify-center">
      <div className="w-100 bg-cyan-700 p-24">
        <div>
          <h1 className="font-bold text-white text-left text-3xl ">
            {" "}
            Masuk ke KostMe{" "}
          </h1>
          <h1 className=" text-white text-left text-xl mt-5">
            saya ingin masuk sebagai
          </h1>
=======
    return (
        <div className="login bg-cyan-700 pt-20 pb-20">
            <div className="mb-48">
                <div className="text-center ">
                        <h1 className="font-bold text-black  text-3xl "> Masuk ke KostMe </h1>
                        <h1 className=" text-black  text-xl">saya ingin masuk sebagai</h1>   
                </div>

                <div className="flex justify-center mt-16 ">    
                    <div className="bg-slate-200 w-96 rounded-md p-12 ">

                        <div className="bg-cyan-700 mt-5 w-64 h-10 rounded-md">
                            <p className="leading-10"><Link to="/loginpencarikost" className="">Pencari Kost</Link></p>
                        </div>

                        <div className="bg-cyan-700 mt-3 w-64 h-10 rounded-md">
                            <p className="leading-10"><Link to="/loginmitra" className="">Mitra</Link></p>
                    </div>
                </div>
            </div>

            </div>

>>>>>>> ca42bc653702a9a3a8db088878c437d3594f525c
        </div>

        <div className="bg-slate-200 mt-5 w-64 h-10 rounded-md">
          <p className="leading-10">
            <Link to="/loginpencarikost" className="">
              Pencari Kost
            </Link>
          </p>
        </div>

        <div className="bg-slate-200 mt-3 w-64 h-10 rounded-md">
          <p className="leading-10">
            <Link to="/loginmitra" className="">
              Mitra
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
