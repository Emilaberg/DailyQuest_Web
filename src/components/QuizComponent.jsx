function QuizComponent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-1/2 mt-20">
        <img
          className="w-full"
          src="src\assets\images\zeldaChillin.png"
          alt=""
        />
        {/* buttons container */}
        <div className="py-7 px-3 w-full flex justify-between items-center bg-slateBlue text-lightSlateGray">
          <div className="flex h-full">
            <img
              src="src\assets\icons\arrow_left.svg"
              alt=""
            />
            <span className="font-semibold text-lg ml-2">previous</span>
          </div>
          <div className="text-2xl">
            <span>What is the name of this handsome boy</span>
          </div>
          <div className="flex h-full">
            <span className="font-semibold text-lg mr-2">Next</span>
            <img
              className="rotate-180"
              src="src\assets\icons\arrow_left.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* answer alternativs */}
      <div className="w-1/2">
        <div className="grid grid-cols-2 font-semibold text-xl capitalize  text-white mt-5">
          <div className="m-2 px-9 py-5 rounded-md  bg-slateBlue">
            lanky kong
          </div>
          <div className="m-2 px-9 py-5 rounded-md  bg-slateBlue">zelda</div>
          <div className="m-2 px-9 py-5 rounded-md  bg-primaryblue">link</div>
          <div className="m-2 px-9 py-5 rounded-md  bg-slateBlue">nashor</div>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
