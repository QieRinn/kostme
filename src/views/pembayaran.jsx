import { Link } from "react-router-dom";

export default function Pembayaran() {
  return (
    <div className="login bg-cyan-700 pt-20 pb-24  min-h-screen">
        <Link to="/detailkamaruser" className="">
            <img src="/images/Vector.png" className="object-fill mb-10 ml-20" />
        </Link>

        <div className="grid grid-cols-2 gap-5 text-white text-2xl">
            <div className="text-center">Mulai Kos<br />30 September 2023</div>
            <div className="text-center">Lama Kos<br />3 Bulan</div>
        </div>


      <div className=" rounded-lg w-100 bg-white px-24 py-10 my-10 mx-20">

        <div className="text-black">
            

            <table width="100%">
                <tbody>
                    <tr><td width="70%">Harga Kamar: 800.000 x 3 bulan</td><td>: 2.400.000</td></tr>
                    <tr><td>Biaya admin: 5.000</td><td>: 5.000</td></tr>
                    <tr><td>Jumlah Total</td><td>: 2.405.000</td></tr>
                </tbody>
            </table>
        </div>
        
      </div>

      <div className="w-100 text-white px-24">
        <div className="text-2xl">
            Pilih Metode Pembayaran
        </div>
      </div>

      <div className=" rounded-lg w-100 bg-white px-24 py-10 my-10 mx-20">

        <div className="text-black">
            
            <form>
            <table width="100%">
                <tbody>
                    <tr>
                        <td className="text-xl" width="50%">
                            Bank<br /><br />
                            <input type="radio" id="bri" name="bri" value="bri" /> 
                            <label for="bri">BRI</label><br />
                            
                            <input type="radio" id="bca" name="bca" value="bca" /> 
                            <label for="bca">BCA</label><br />
                        </td> 
                        <td className="text-xl" >
                            Dompet Digital<br /><br />
                            <input type="radio" id="gopay" name="gopay" value="gopay" /> 
                            <label for="gopay">Gopay</label><br />
                            
                            <input type="radio" id="dana" name="dana" value="dana" /> 
                            <label for="dana">Dana</label><br />
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <div className="text-center w-full mt-10">
                            <input
                                type="submit"
                                value="Lanjutkan"
                                formAction="/invoice"
                                className="bg-cyan-700 py-1 px-5 rounded-md text-white"
                            />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>
        </div>
        
      </div>

    </div>
  );
}
