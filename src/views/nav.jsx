export default function Nav() {
  return (
    <nav className=" flex justify-center h-[100px] ">
      <div className="w-[1240px] flex items-center justify-between">
        <div className="flex items-center w-[577px] justify-between">
          <img src="images/logo.png" alt="" width="186" height="42" />
          <div className="flex w-[340px] justify-between">
            <p>
              <Link to="/" className="">
                Beranda
              </Link>
            </p>
            <p>Mitra</p>
            <p>Berita</p>
            <p>Kontak</p>
          </div>
        </div>
        <div className="w-[279px] flex justify-between">
          <button className="bg-purple-600 px-[36px] py-[10px] rounded-[47px]">
            <p className="text-white">
              <Link to="/login" className="">
                Masuk
              </Link>
            </p>
          </button>
        </div>
      </div>
    </nav>
  );
}
