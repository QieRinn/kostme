import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login bg-cyan-700 pt-20 pb-24 flex justify-center min-h-screen">
      <div className=" rounded-lg w-100 bg-white p-24">
        <div>
          <h1 className="font-bold text-black text-left text-3xl ">
            {" "}
            Masuk ke KostMe{" "}
          </h1>
          <h1 className=" text-black text-left text-xl mt-5">
            Saya ingin masuk sebagai
          </h1>
        </div>

        <div className="bg-slate-200 mt-5 w-64 h-10 rounded-md flex items-center mb-6">
        <img src={"./images/Host 1.png"} alt="KostMe Logo" className="mr-4"  style={{ width: "40px", marginLeft: "10px" }}  />
          <p className="leading-10 ml-4">
            <Link to="/user/loginpencarikost" className="">
              Pencari Kost
            </Link>
          </p>
        </div>

        <div className="bg-slate-200 mt-5 w-64 h-10 rounded-md flex items-center mb-6">
        <img src={"./images/Host.png"} alt="KostMe Logo" className="mr-4"  style={{ width: "40px", marginLeft: "10px" }}  />
          <p className="leading-10 ml-4">
            <Link to="/admin/loginmitra" className="">
              Mitra
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
