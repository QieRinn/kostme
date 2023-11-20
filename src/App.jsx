import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <nav className=" flex justify-center h-[100px] ">
        <div className="w-[1240px] flex items-center justify-between">
            <div className="flex items-center w-[577px] justify-between">
                <img src="images/logo.png" alt="" width="186" height="42" />
                <div className="flex w-[340px] justify-between">
                    <p>Program</p>
                    <p>Mentor</p>
                    <p>Pricing</p>
                    <p>Business</p>
                </div>
            </div>
            <div className="w-[279px] flex justify-between">
                <button className="bg-purple-600 px-[36px] py-[10px] rounded-[47px]">
                    <p className="text-white">Masuk</p>
                </button>
            </div>
        </div>
    </nav>
    
    <div className="bgimg pt-36">
      <h1 className="font-bold text-white text-left text-xl">sdfsdfsdfsfd</h1>
      <h1 className="font-bold text-white text-left text-3xl mt-5"> dsafdsafdsafdsafdsaf </h1>
    </div>
    
     <div className="bg-cyan-700 h-10 pt-1">
     <h1 className="font-bold text-xl">HOME</h1>
     </div>
      
    </>
  )
}

export default App
