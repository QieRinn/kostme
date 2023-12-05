import { Link } from "react-router-dom"
export default function SpesifikasiKos() {
    return (
        <div className="spesifikasikos bg-cyan-700 pt-20 pb-48 flex justify-center">
            <div className="w-96">
                <div>
                    {/* <h1 className="text-white text-center text-3xl ">Daftar</h1>    */}
                </div>

                <div className="bg-slate-200 w-96 mt-20 rounded-md p-12 ">
                    <form action="/">

                        <label for="text" className=" text-sm p-24 font-medium text-gray-900">Spesifikasi Kos</label> <br></br><br></br>
                            <div className="relative mt-2 rounded-md flex justify-between">
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className=" text-sm font-medium text-gray-900 "> Standar </label>
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className=" text-sm font-medium  text-gray-900"> Premium   </label>
                            </div>

                            <div className="relative mt-2 rounded-md  flex justify-between">
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> 3x4 </label> 
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> Termasuk Listrik  </label>
                            </div>

                            <div className="relative mt-2 rounded-md  flex justify-between  ">
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> 3x5 </label>
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900     "> Tidak Termasuk Listrik  </label>
                            </div>

                            <div className="relative mt-2 rounded-md  flex justify-between">
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> 4x3 </label>
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> Tempat Parkir  </label>
                            </div>

                            
                            <div className="relative mt-2 rounded-md  flex justify-between">
                                <input type="checkbox" name="ingatsaya" id="ingatsaya "  />
                                <label for="ingatsaya" className="block text-sm font-medium leading-6 text-gray-900"> 4x4 </label>
                            </div>
                        <br></br>
                        <div className=" w-full flex justify-between ">
                            <input type="submit" value="Kembali" formaction="/tipekos" className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-start " />
                            <input type="submit" value="Lanjut" formaction="spesifikasikamar" className="bg-cyan-700 py-1 px-5 rounded-md text-white flex justify-end " />
                        </div>

                        <br></br>
                        
                    </form>


                </div>
            </div>

        </div>
     )

}