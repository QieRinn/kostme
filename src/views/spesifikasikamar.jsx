import { Link } from "react-router-dom";
export default function SpesifikasiKamar() {
<<<<<<< HEAD
  return (
    <div className="spesifikasikamar bg-cyan-700 pt-20 pb-24 flex justify-center">
      <div className="w-96">
        <div>
          {/* <h1 className="text-white text-center text-3xl ">Daftar</h1>    */}
        </div>

        <div className="bg-slate-200 w-96 mt-5 rounded-md p-12">
          <form action="/">
            <label for="text" className=" text-sm font-medium text-gray-900">
              Spedsifikasi Kamar
            </label>
            <div className="relative mt-2 rounded-md flex justify-between">
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className=" text-sm font-medium text-gray-900"
              >
                {" "}
                Kasur{" "}
              </label>
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className=" text-sm font-medium  text-gray-900"
              >
                {" "}
                Jendela{" "}
              </label>
=======
    return (
        <div className="spesifikasikamar bg-cyan-700 pt-20 pb-48 flex justify-center">
            <div className="w-96">
                <div>
                    {/* <h1 className="text-white text-center text-3xl ">Daftar</h1>    */}
                </div>

                <div className="bg-slate-200 w-96 mt-20 rounded-md p-12 ">
                    <form action="/">

                        <label for="text" className=" text-sm font-medium text-gray-900">Spedsifikasi Kamar</label>
                            <div className="relative mt-2 rounded-md flex justify-between">
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className=" text-sm font-medium text-gray-900"> Kasur </label>
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className=" text-sm font-medium  text-gray-900"> Jendela   </label>
                            </div>

                        
                            <div className="relative mt-2 rounded-md  flex justify-between">
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> Bantal </label>
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> Meja   </label>
                            </div>

                            
                            <div className="relative mt-2 rounded-md  flex justify-between">
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> Guling </label>
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> Kursi   </label>
                            </div>

                            
                            <div className="relative mt-2 rounded-md  flex justify-between">
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> Ventilasi </label>
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> Kamar Mandi Dalam   </label>  
                            </div>

                            
                            <div className="relative mt-2 rounded-md  flex justify-between">
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> Lemari </label>
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> Kamar Mandi Luar    </label><br></br>
                            </div>

                        <br></br>
                        <div className=" w-full flex justify-between ">
                            <input type="submit" value="Kembali" formaction="/spesifikasikos" className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-start " />
                            <input type="submit" value="Lanjut" formaction="spesifikasimandi" className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-end " />
                        </div>

                        <br></br>
                        
                    </form>


                </div>
>>>>>>> ca42bc653702a9a3a8db088878c437d3594f525c
            </div>

            <div className="relative mt-2 rounded-md  flex justify-between">
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Bantal{" "}
              </label>
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Meja{" "}
              </label>
            </div>

            <div className="relative mt-2 rounded-md  flex justify-between">
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Guling{" "}
              </label>
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Kursi{" "}
              </label>
            </div>

            <div className="relative mt-2 rounded-md  flex justify-between">
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Ventilasi{" "}
              </label>
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Kamar Mandi Dalam{" "}
              </label>
            </div>

            <div className="relative mt-2 rounded-md  flex justify-between">
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Lemari{" "}
              </label>
              <input type="checkbox" name="ingatsaya" id="ingatsaya " />
              <label
                for="ingatsaya"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Kamar Mandi Luar{" "}
              </label>
              <br></br>
            </div>

            <br></br>
            <div className=" w-full flex justify-between ">
              <input
                type="submit"
                value="Kembali"
                formaction="/spesifikasikos"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-start "
              />
              <input
                type="submit"
                value="Lanjut"
                formaction="spesifikasimandi"
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
