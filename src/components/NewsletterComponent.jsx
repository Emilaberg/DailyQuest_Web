import ReactDom from "react-dom";

function Newsletter({ open, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/70 z-1000">
        <div className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-[50px] z-1000">
          <div className=" relative text-adminLightSlateGray w-full flex items-center justify-center  bg-midnightBlue rounded-xl shadow-around shadow-white ">
            <div className="">
              <button
                onClick={onClose}
                className=" absolute top-2 right-2 pr-1 text-white text-md text-center border-b-2 border-transparent hover:border-b-2 hover:border-lightSlateGray hover:cursor-pointer"
              >
                {" "}
                X{" "}
              </button>
            </div>

            <div className="">
              <div className="w-full my-10 flex flex-col items-center">
                <img
                  src="..\src\assets\images\Webicon.png"
                  alt="webicon"
                  className="w-2/3"
                />
              </div>
              <div className="flex flex-col gap-6 items-center w-full mb-20">
                {" "}
                <label className="font-semibold text-3xl mb-3">Subscribe</label>
                <input
                  type="text"
                  className="w-[75%] h-10 text-xl bg-midnightBlue border-solid border border-lightSlateGray rounded-xl px-3 placeholder-lightSlateGray placeholder"
                  placeholder="Email"
                />
                <button className="mt-4 border border-solid border-lightSlateGray rounded-xl px-5 py-1 font-semibold hover:bg-primaryblue hover:border-primaryblue transition-all ease-in duration-200">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Newsletter;
