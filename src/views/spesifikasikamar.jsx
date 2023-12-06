import { Link } from "react-router-dom";

export default function SpesifikasiKamar() {
  return (
    <div className="spesifikasikamar bg-cyan-700 pt-20 pb-24 flex justify-center min-h-screen">
      <div className="w-96">
        <div>
          {/* <h1 className="text-white text-center text-3xl ">Daftar</h1>    */}
        </div>

        <div className="bg-slate-200 w-96 mt-5 rounded-md p-12">
          <form action="/">
            <label htmlFor="text" className="text-xl font-serif text-gray-900 flex justify-center">
              Spesifikasi Kamar
            </label>
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="kasur" id="kasur" />
                <label htmlFor="kasur" className="text-sm font-medium text-gray-900 ml-2">
                  Kasur
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="jendela" id="jendela" />
                <label htmlFor="jendela" className="text-sm font-medium text-gray-900 ml-2 mr-3">
                  Jendela
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="bantal" id="bantal" />
                <label htmlFor="bantal" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Bantal
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="meja" id="meja" />
                <label htmlFor="meja" className="block text-sm font-medium leading-6 text-gray-900 ml-2 mr-7">
                  Meja
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="guling" id="guling" />
                <label htmlFor="guling" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Guling
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="kursi" id="kursi" />
                <label htmlFor="kursi" className="block text-sm font-medium leading-6 text-gray-900 ml-2 mr-7">
                  Kursi
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="kamarMandiDalam" id="kamarMandiDalam" />
                <label htmlFor="kamarMandiDalam" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Kamar Mandi Dalam
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="ventilasi" id="ventilasi" />
                <label htmlFor="ventilasi" className="block text-sm font-medium leading-6 text-gray-900 ml-2 mr-2">
                  Ventilasi
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="kamarMandiLuar" id="kamarMandiLuar" />
                <label htmlFor="kamarMandiLuar" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Kamar Mandi Luar
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="lemari" id="lemari" />
                <label htmlFor="lemari" className="block text-sm font-medium leading-6 text-gray-900 ml-2 mr-4" >
                  Lemari
                </label>
              </div>
            </div>

            <br />
            <div className="w-full flex justify-between">
              <input
                type="submit"
                value="Kembali"
                formAction="/spesifikasikos"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-start"
              />
              <input
                type="submit"
                value="Lanjut"
                formAction="spesifikasimandi"
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
