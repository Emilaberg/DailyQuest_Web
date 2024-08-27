function Footer() {
  return (
    <footer className="absolute flex items-center justify-between bottom-0 py-3 w-full h-60 bg-gradient-to-r from-[#0C101F] from-0% to-[#980CDA] to-100% ">
      <img
        className="h-full"
        src="src\assets\images\Left-image.svg"
        alt=""
      />
      {/* center content */}
      <div className="flex flex-col h-full justify-evenly pt-8">
        <div className="text-center">
          <h2 className="capitalize text-[25px] font-semibold text-white">
            Subscribe to our newsletter
          </h2>
          <button className="uppercase text-white border-oceanBlue border-solid border-2 rounded-lg px-3 py-2">
            lets do this
          </button>
        </div>
        <div className="text-center mt-auto">
          <div>DailyQuest @ 2024</div>
          <div className="flex justify-center text-white">
            <span>admin</span>
            <img
              className="ml-2"
              src="src\assets\icons\admin_login.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        className="h-full"
        src="src\assets\images\Right-image.svg"
        alt=""
      />
    </footer>
  );
}

export default Footer;
