import black from "../assets/black.jpeg";

function NavBar() {
  return (
    <div className="   text-white  flex pr-4 bg-black">
      <div className=" p-4 text-white  h-20 w-full flex  items-center justify-center md:text-3xl">
        {/* <img src={ethereum} alt="blockhain" style={{ width: 40, height: 40 }} /> */}
        <h1 className=" text-3xl font-semibold px-2 ">Search Crypto Coins</h1>
        <img src={black} width={60} />
      </div>
    </div>
  );
}

export default NavBar;
