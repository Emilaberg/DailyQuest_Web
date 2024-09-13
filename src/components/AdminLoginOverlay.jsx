function AdminLoginOverlay() {
  function login() {
    return;
  }
  return (
    <div className="w-1/2 min-h-screen flex justify-center items-center bg-black bg-opacity-80">
      <div className="text-adminLightSlateGray w-1/3 flex flex-col items-center gap-20 bg-midnightBlue rounded-xl shadow-around shadow-white ">
        <div className="w-1/2 my-10">
          <img
            src="..\src\assets\images\Webicon.png"
            alt="webicon"
            className="w-full"
          />
          <h1 className="text-center text-4xl">Admin login</h1>
        </div>
        <div className="flex flex-col gap-4 items-center w-full mb-20">
          <label className="font-semibold text-xl">Admin passkey</label>
          <input
            type="text"
            className="w-1/3 bg-midnightBlue border-solid border border-lightSlateGray rounded-2xl px-3 placeholder-lightSlateGray placeholder"
            placeholder="Passkey login"
          />
          <button
            className="border border-solid border-lightSlateGray rounded-xl px-5 py-1 font-semibold hover:bg-primaryblue hover:border-primaryblue transition-all ease-in duration-200"
            onClick={login}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginOverlay;
