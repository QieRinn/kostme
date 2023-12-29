import { Link } from "react-router-dom";

export default function Invoice() {
  return (
    <div className="login bg-cyan-700 pt-20 pb-24  min-h-screen">
         <Link to="/user/pembayaranuser" className="">
            <img src="../images/Vector.png" className="object-fill mb-10 ml-20" />
        </Link>


      <div className=" rounded-lg w-100 bg-white px-24 py-10 my-10 mx-20">

        <div className="text-black">
            <div className="mb-5"><img src="../images/logo.png" alt="" width="120" height="42" /></div>
            <div>Invoice #11</div>
            <div className="mb-5">Tanggal: 20 Desember 2023</div>

            <div>Nama Customer : mluthfi</div>

            <table className="border border-collapse" width="100%">
                <thead>
                    <tr>
                        <th className="bg-slate-200 text-left p-3">Item</th>
                        <th className="bg-slate-200 text-left p-3">Jumlah</th>
                        <th className="bg-slate-200 text-left p-3">Harga</th>
                        <th className="bg-slate-200 text-left p-3">Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border">
                        <td className="p-3">Kamar Kost</td>
                        <td className="p-3">3 bulan</td>
                        <td className="p-3">800.000</td>
                        <td className="p-3">2.400.000</td>
                    </tr>
                    <tr className="border">
                        <td className="p-3">Biaya Admin</td>
                        <td className="p-3"></td>
                        <td className="p-3">5.000</td>
                        <td className="p-3">5.000</td>
                    </tr>
                    <tr className="border">
                        <td></td>
                        <td></td>
                        <td className="p-3"><b>Total</b></td>
                        <td className="p-3"><b>2.405.000</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
      </div>

      
        
      

    </div>
  );
}
