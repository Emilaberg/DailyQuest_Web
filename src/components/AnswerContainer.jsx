function AnswerContainer() {
  return (
    <div className="w-full md:w-4/6 lg:w-3/5 xl:w-[45%]">
      <div className="grid grid-cols-2 gap-3 px-5 md:px-0 font-semibold text-lg   xl:text-2xl capitalize  text-white mt-5">
        <div className="py-3 xl:py-5 rounded-2xl text-center bg-slateBlue cursor-pointer hover:bg-primaryblue hover:-translate-y-1 transition-all ease-in duration-200">
          lanky kong
        </div>
        <div className="py-3 xl:py-5 rounded-2xl text-center bg-slateBlue cursor-pointer hover:bg-primaryblue hover:-translate-y-1 transition-all ease-in duration-200">
          zelda
        </div>
        <div className="py-3 xl:py-5 rounded-2xl text-center bg-slateBlue cursor-pointer hover:bg-primaryblue hover:-translate-y-1 transition-all ease-in duration-200">
          link
        </div>
        <div className="py-3 xl:py-5 rounded-2xl text-center bg-slateBlue cursor-pointer hover:bg-primaryblue hover:-translate-y-1 transition-all ease-in duration-200">
          nashor
        </div>
      </div>
    </div>
  );
}

export default AnswerContainer;
