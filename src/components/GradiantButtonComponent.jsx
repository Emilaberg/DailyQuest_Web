function GradiantButton({ buttonText }) {
  return (
    <div className="flex justify-center items-center text-white text-[12px] h-[44px] w-[100px] text-center rounded-[12px] bg-gradient-border cursor-pointer md:h-[70px] md:w-[240px]">
      <div className="flex items-center justify-center h-[39px] w-[95px] bg-midnightBlue rounded-[10px] pl-1 pr-1 hover:bg-transparent transition-all ease-in duration-150 md:h-[65px] md:w-[235px] ">
        <h3 className="text-center text-[10px] font-semibold md:text-[20px]">
          {buttonText}
        </h3>
      </div>
    </div>
  );
}

export default GradiantButton;
