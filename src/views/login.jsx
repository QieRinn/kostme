import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="login   flex justify-center">
            <div className="w-100 bg-cyan-700 p-24">
                <div>
                    <h1 className="font-bold text-white text-left text-3xl "> dsafdsafdsafdsafdsaf </h1>
                    <h1 className="font-bold text-white text-left text-xl mt-5">sdfsdfsdfsfd</h1>   
                </div>

                <div className="bg-slate-200 mt-5 w-64 h-10 rounded-md">
                    <p className="leading-10"><Link to="/loginpencarikost" className="">Pencari Kost</Link></p>
                </div>

                <div className="bg-slate-200 mt-3 w-64 h-10 rounded-md">
                    <p className="leading-10"><Link to="/loginmitra" className="">Mitra</Link></p>
                </div>
            </div>

        </div>
     )

}