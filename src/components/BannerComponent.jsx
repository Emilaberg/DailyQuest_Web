function BannerComponent({ title, imageUrl, buttonText, to, attribute }) {
  //src/assets/images/mystery-box-with-gifts-concept.jpg
  return (
    <>
      <section
        className={`relative flex justify-center items-center w-full h-[384px] bg-[url(../${imageUrl})] bg-cover bg-center mb-32`}
      >
        <div className="flex flex-col items-center">
          <h1 className="z-20 font-bold text-center text-lightSlateGray text-8xl mb-10">
            {title}
          </h1>
          {buttonText ? (
            <button
              onClick={() => Navigate(to)}
              className="bg-primaryblue px-3 py-1 rounded-lg text-white w-fit hover:bg-midnightBlue_V2 transition-colors ease-in duration-200"
            >
              {buttonText}
            </button>
          ) : null}
        </div>

        {/* <div className="absolute bg-black w-full h-fit opacity-20"></div> */}

        {attribute ? (
          <a
            className="absolute bottom-0 right-2 font-bold"
            href="https://www.freepik.com/free-photo/mystery-box-with-gifts-concept_36298590.htm#fromView=search&page=1&position=47&uuid=7ecc0dff-c825-44da-b766-f5a85ea8b206"
          >
            {attribute}
          </a>
        ) : null}
      </section>
    </>
  );
}

export default BannerComponent;
