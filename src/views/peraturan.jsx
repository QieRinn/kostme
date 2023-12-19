import { Link } from "react-router-dom";

export default function Peraturan() {
  return (
    <div className="peraturan bg-cyan-700 pt-20 pb-24 flex justify-center min-h-screen">
      <div className="w-100">
        <div className="bg-slate-200 w-100 mt-10 rounded-md p-12 ">
          <form action="/">
            <label htmlFor="text" className="text-xl font-serif text-gray-900 mb-7 flex justify-center ">
              Peraturan Kos
            </label>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="ember" id="ember" />
                <label htmlFor="ember" className="text-sm font-medium text-gray-900 ml-2">
                  Akses 24 Jam
                </label>
              </div>
              <div className="flex items-center mr-12">
                <input type="checkbox" name="cermin" id="cermin" />
                <label htmlFor="cermin" className="text-sm font-medium text-gray-900 ml-2 mr-2">
                  Boleh Pasutri
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="gayung" id="gayung" />
                <label htmlFor="gayung" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Boleh Bawa Bayi
                </label>
              </div>
              <div className="flex items-center mr-12">
                <input type="checkbox" name="wastafel" id="wastafel" />
                <label htmlFor="wastafel" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Maks 1 Orang
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input type="checkbox" name="klosetDuduk" id="klosetDuduk" />
                <label htmlFor="klosetDuduk" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Dilarang Bawa Bayi
                </label>
              </div>
              <div className="flex items-center mr-12">
                <input type="checkbox" name="gantunganHanduk" id="gantunganHanduk" />
                <label htmlFor="gantunganHanduk" className="block text-sm font-medium leading-6 text-gray-900 ml-2 mr-2">
                  Maks 2 Orang
                </label>
              </div>
            </div>

            <div className="flex justify-between mt-2 mb-2">
              <div className="flex items-center">
                <input type="checkbox" name="klosetJongkok" id="klosetJongkok" />
                <label htmlFor="klosetJongkok" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Lawan Jenis Dilarang Masuk
                </label>
              </div>
              <div className="flex items-center ml-12">
                <input type="checkbox" name="shower" id="shower" />
                <label htmlFor="shower" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                  Dilarang Ramai Diatas Jam 12
                </label>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" name="shower" id="shower" />
              <label htmlFor="shower" className="block text-sm font-medium leading-6 text-gray-900 ml-2 mr-2">
                Orang Lain Boleh Berkunjung
              </label>
            </div>

            <br />

            <div className="w-full flex justify-between">
              <input
                type="submit"
                value="Kembali"
                formAction="/spesifikasimandi"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-start"
              />
              <input
                type="submit"
                value="Lanjut "
                formAction="/detailkamar"
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
