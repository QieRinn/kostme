import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useState, useEffect  } from 'react';
import { useNavigate } from 'react-router-dom';

//import api
import api from "../../api";

export default function LoginMitra() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /*
  //ini state
  const [users, setUsers] = useState([]);
  //define method
  const fetchDataUsers = async () => {
    //fetch data from API with Axios
    await api.get("/adminbyemail/"+email).then((response) => {
      //assign response data to state "posts"
      setUsers(response.data.data);
    });
  };  //run hook useEffect

  //useEffect(() => {
    //call method "fetchDataPosts"
    //fetchDataUsers();
  //}, []);
  */

  // const testAuthData = {
  //   username: 'luthfi@gmail.com',
  //   password: 'test',
  // }; 

  const authenticateUser = (emailuser, passworduser) => {
    if (email === emailuser && password === passworduser) { 
      const userData = {
        email,
        password,
      };
      const expirationTime = new Date(new Date().getTime() + 60000);
      Cookies.set('auth', JSON.stringify(userData), { expires: expirationTime });
      return true;
    }
    return false;
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    //fetchDataUsers();

    api.get("/adminbyemail/"+email).then((response) => {

      const isAuthenticated = authenticateUser(response.data.data.email, response.data.data.password);

      if (isAuthenticated) {
        navigate('/admin/homeadmin');
      } else {
        // Show error message or perform other actions for failed authentication
        alert('Email atau Password salah.');
      }
    });
    
  };

  return (
    <div className="loginmitra bg-cyan-700 pt-20 pb-24 flex justify-center min-h-screen">
      <div className="w-96">
      <Link to="/" className="">
            <img src="../images/Vector.png" className="object-fill mt-1 ml-2" />
            </Link> 
        <div>
          <h1 className="text-white text-center text-3xl ">Masuk</h1>
        </div>

        <div className="bg-slate-200 w-96 mt-5 rounded-md p-12 ">
          <form onSubmit={handleLogin}>
            <label
              for="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Masukkan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <label
              for="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                id="password"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="relative mt-2 rounded-md shadow-sm">
              <input type="checkbox" name="ingatsaya" id="ingatsaya" />
              <label for="ingatsaya"> Ingatkan Saya</label>
              <br></br>
            </div>
            <div className="text-center w-full">
              {/* <input
                formAction="/admin/homeadmin"
                type="submit"
                value="Masuk"
                className="bg-cyan-700 py-1 px-5 rounded-md text-white mt-4"
              /> */}
              <button  className="bg-cyan-700 py-1 px-5 rounded-md text-white mt-4" type="submit">Login</button>
            </div>

            <br></br>
            <div>
              <p className=" text-xs text-center ">
                Belum punya akun KostMe?
                <Link
                  to="/daftarmitra"
                  className="no-underline hover:underline text-cyan-600"
                >
                  Daftar Sekarang
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
