import { Link } from "react-router-dom";

export default function SpesifikasiKos() {
  return (
    <div className="spesifikasikos bg-cyan-700 pt-20 pb-24 flex justify-center min-h-screen">
      <div className="w-96">
        <div>
          {/* <h1 className="text-white text-center text-3xl ">Daftar</h1>    */}
        </div>

        <div className="bg-slate-200 w-96 mt-5 rounded-md p-12">
          <form action="/">
            <label htmlFor="text" className="text-xl p-2 font-serif text-gray-900  flex justify-center">
              Spesifikasi Kos
            </label>
            <br />
            <br />
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="standar" id="standar" />
                <label htmlFor="standar" className="text-sm font-medium text-gray-900 ml-2">
                  Standar
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="premium" id="premium" />
                <label htmlFor="premium" className="text-sm font-medium text-gray-900 ml-2 mr-12">
                  Premium
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="ukuran3x4" id="ukuran3x4" />
                <label htmlFor="ukuran3x4" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  3x4
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="termasukListrik" id="termasukListrik" />
                <label htmlFor="termasukListrik" className="block text-sm font-medium leading-6 text-gray-900 ml-2 mr-1">
                  Termasuk Listrik
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="ukuran4x3" id="ukuran4x3" />
                <label htmlFor="ukuran4x3" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  4x3
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="tempatParkir" id="tempatParkir" />
                <label htmlFor="tempatParkir" className="block text-sm font-medium leading-6 text-gray-900 ml-2 mr-5">
                  Tempat Parkir
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="ukuran4x4" id="ukuran4x4" />
                <label htmlFor="ukuran4x4" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  4x4
                </label>
              </div>
            </div>

            <br />
            <div className="w-full flex justify-between">
              <input
                type="submit"
                value="Kembali"
                formAction="/tipekos"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-start"
              />
              <input
                type="submit"
                value="Lanjut"
                formAction="spesifikasikamar"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-end"
              />
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
