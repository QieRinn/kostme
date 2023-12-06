import { Link } from "react-router-dom";
export default function SpesidikasiMandi() {
  return (
    <div className="spesifikasimandi bg-cyan-700 pt-20 pb-24 flex justify-center">
      <div className="w-96">
        <div>
          {/* <h1 className="text-white text-center text-3xl ">Daftar</h1>    */}
        </div>

        <div className="bg-slate-200 w-96 mt-5 rounded-md p-12 ">
          <form action="/">
            <label for="text" className=" text-sm font-medium text-gray-900">
              Spesifikasi Kamar Mandi
            </label>
            <div className="relative mt-2 rounded-md flex justify-between">
              <input type="checkbox" name="ember" id="ember " />
              <label
                for="ingatsaya"
                className=" text-sm font-medium text-gray-900"
              >
                {" "}
                Ember{" "}
              </label>
              <input type="checkbox" name="cermin" id="cermin " />
              <label
                for="ingatsaya"
                className=" text-sm font-medium  text-gray-900"
              >
                {" "}
                Cermin{" "}
              </label>
              <br></br>
            </div>

            <div className="relative mt-2 rounded-md  flex justify-between">
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Gayung{" "}
              </label>
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Wastafel{" "}
              </label>
              <br></br>
            </div>

            <div className="relative mt-2 rounded-md  flex justify-between">
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Kloset Duduk{" "}
              </label>
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Gantungan Handuk{" "}
              </label>
              <br></br>
            </div>

            <div className="relative mt-2 rounded-md  flex justify-between">
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Kloset Jongkok{" "}
              </label>
              <input type="checkbox" name="ingatsaya" id="ingatsaya" />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Shower{" "}
              </label>
              <br></br>
            </div>

            <br></br>
            <div className=" w-full flex justify-between ">
              <input
                type="submit"
                value="Kembali"
                formaction="/spesifikasikamar"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-start "
              />
              <input
                type="submit"
                value="Lanjut "
                formaction="/peraturan"
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
