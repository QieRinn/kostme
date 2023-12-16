import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function LoginMitra() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const testAuthData = {
    username: 'luthfi@gmail.com',
    password: 'test',
  }; 
  const authenticateUser = (username, password) => {
    if (username === testAuthData.username && password === testAuthData.password) { 
      const userData = {
        username,
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
    const isAuthenticated = authenticateUser(username, password);
    if (isAuthenticated) {
      navigate('/admin/homeadmin');
    } else {
      // Show error message or perform other actions for failed authentication
      alert('Username atau Password salah.');
    }
  };

  return (
    <div className="loginmitra bg-cyan-700 pt-20 pb-24 flex justify-center min-h-screen">
      <div className="w-96">
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
