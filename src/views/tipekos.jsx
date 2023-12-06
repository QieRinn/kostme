import { Link } from "react-router-dom";
export default function DaftarKos() {
  return (
    <div className="daftarkos bg-cyan-700 pt-20 pb-24 flex justify-center min-h-screen">
      <div className="w-96">
        <div>
          {/* <h1 className="text-white text-center text-3xl ">Daftar</h1>    */}
        </div>

        <div className="bg-slate-200 w-96 mt-5 rounded-md p-12 ">
          <form action="/">
            <label for="text" className=" text-sm font-medium text-gray-900">
              Tipe kos
            </label>
            <div className="relative mt-2 rounded-md flex justify-between">
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className=" text-sm font-medium text-gray-900"
              >
                {" "}
                Standar{" "}
              </label>
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className=" text-sm font-medium  text-gray-900"
              >
                {" "}
                Premium{" "}
              </label>
              <br></br>
            </div>

            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Jumlah Kamar
            </label>
            <div className="relative mt-2 rounded-md  flex justify-between">
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                5{" "}
              </label>
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                10{" "}
              </label>
              <br></br>
            </div>

            <label
              for="alamar"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Alamat{" "}
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="alamat"
                id="alamat"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Masukkan Alamat Kos"
              />
            </div>

            <br></br>
            <div className=" w-full flex justify-between ">
              <input
                type="submit"
                value="Kembali"
                formaction="/daftarkos"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-start "
              />
              <input
                type="submit"
                value="Lanjut"
                formaction="/spesifikasikos"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-end "
              />
            </div>

            <br></br>
          </form>
        </div>
      </div>
    </div>
  );
}
