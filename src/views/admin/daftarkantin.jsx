import { Link } from "react-router-dom";
export default function DaftarKantin() {
  return (
    <div className="daftarkantin bg-cyan-700 pt-20 pb-24 flex justify-center">
      <div className="w-96">
        <div>
          {/* <h1 className="text-white text-center text-3xl ">Daftar</h1>    */}
        </div>

        <div className="bg-slate-200 w-96 mt-5 rounded-md p-12 ">
          <form action="/">
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nama Kantin
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="nama"
                id="nama"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Masukkan Nama Lengkap"
              />
            </div>

            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Alamat
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="nama"
                id="nama"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Nomor Handphone Aktif"
              />
            </div>

            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Deskripsi
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <textarea
                type="text"
                name="nama"
                id="nama"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Nomor Handphone Aktif"
              />
            </div>

            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900 mt-2"
            >
              Gambar Kantin
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="nama"
                id="nama"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Tambahkan Foto / Video"
              />
              <input
                type="file"
                name="tambahkan foto"
                id="tambahkan foto"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <br></br>
            <div className=" w-full flex justify-between ">
              <input
                formAction="/admin/daftarkantin"
                type="submit"
                value="Kembali"
                formaction=""
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-start "
              />
              <input
                type="submit"
                value="Lanjut"
                formaction="/admin/dashboardpartner"
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
