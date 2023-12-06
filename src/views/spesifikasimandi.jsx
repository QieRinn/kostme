import { Link } from "react-router-dom";

export default function SpesifikasiMandi() {
  return (
    <div className="spesifikasimandi bg-cyan-700 pt-20 pb-24 flex justify-center min-h-screen">
      <div className="w-96">
        <div>
          {/* <h1 className="text-white text-center text-3xl ">Daftar</h1>    */}
        </div>
        <div className="bg-slate-200 w-96 mt-5 rounded-md p-12">
          <form action="/">
            <label htmlFor="text" className="text-xl font-serif text-gray-900 mb-7 flex justify-center ">
              Spesifikasi Kamar Mandi
            </label>
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="ember" id="ember" />
                <label htmlFor="ember" className="text-sm font-medium text-gray-900 ml-2">
                  Ember
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="cermin" id="cermin" />
                <label htmlFor="cermin" className="text-sm font-medium text-gray-900 ml-2 mr-2">
                  Cermin
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="gayung" id="gayung" />
                <label htmlFor="gayung" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                 gantungan Handuk
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="wastafel" id="wastafel" />
                <label htmlFor="wastafel" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Wastafel
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="klosetDuduk" id="klosetDuduk" />
                <label htmlFor="klosetDuduk" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Kloset Duduk
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="gantunganHanduk" id="gantunganHanduk" />
                <label htmlFor="gantunganHanduk" className="block text-sm font-medium leading-6 text-gray-900 ml-2 mr-2">
                  Gayung
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="klosetJongkok" id="klosetJongkok" />
                <label htmlFor="klosetJongkok" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Kloset Jongkok
                </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" name="shower" id="shower" />
                <label htmlFor="shower" className="block text-sm font-medium leading-6 text-gray-900 ml-2 mr-2">
                  Shower
                </label>
              </div>
            </div>

            <br />
            <div className="w-full flex justify-between">
              <input
                type="submit"
                value="Kembali"
                formAction="/spesifikasikamar"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-start"
              />
              <input
                type="submit"
                value="Lanjut "
                formAction="/peraturan"
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
