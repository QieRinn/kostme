import { Link } from "react-router-dom";
export default function Detailkamar() {
  return (

    <div className="detailkamar">

        <div className="bg-cyan-700 h-10 pt-1">
            <h1 className="font-bold text-xl"> Home </h1>
        </div>

        <div className="grid grid-cols-2 mt-10 px-20">
            <div>
                <img className="object-fill h-96 w-full" src="/images/kamar.jpg"/>
            </div>
            <div>
                <img className="object-fill h-48 w-full" src="/images/kamar.jpg"/>
                <img className="object-fill h-48 w-full" src="/images/kamar.jpg"/>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
            <div>sdfdsf</div>
            <div>sdfsdf</div>
        </div>

        

    </div>

    );
}