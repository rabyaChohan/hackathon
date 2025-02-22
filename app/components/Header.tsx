

const Header = () => {
  return (
    <div className="w-full bg-[#F0F2F3] pt-4 pb-4 h-[84px]">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center px-4 sm:px-6">
        <div className="flex items-center space-x-3 ml-3 sm:ml-7 lg:ml-12">
          {" "}
         
          <h2 className="text-[20px] sm:text-[24px] font-Clash Display">Avion</h2>
        </div>

        {/* <div className="flex items-center justify-end">
          <Link href="/cart">
            <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md mr-3 sm:mr-10">
              <FaShoppingCart className="text-xl" />
              <span className="hidden sm:inline">Cart</span>
              <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-sm rounded-full">
                2
              </div>
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
