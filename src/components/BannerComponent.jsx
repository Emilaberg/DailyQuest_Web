import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BannerComponent({ title, imageUrl, buttonText, to, attribute }) {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  let styles = isValid
    ? `relative flex justify-center items-center w-full h-[384px] bg-cover bg-center mb-32 bg-[url(${imageUrl})]`
    : "relative flex justify-center items-center w-full h-[384px] bg-cover bg-center mb-32 bg-[url(../src/assets/images/mystery-box-with-gifts-concept.jpg)]";

  useEffect(() => {
    if (imageUrl == undefined) {
      setIsValid(false);
    } else {
      fetch(imageUrl).then((res) => {
        setIsValid(res.status === 200);
      });
    }
  }, []);
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${
            imageUrl
              ? imageUrl
              : "../src/assets/images/mystery-box-with-gifts-concept.jpg"
          })`,
        }}
        className={
          "relative flex justify-center items-center w-full h-[384px] bg-cover bg-center mb-32 "
        }
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className=" relative flex flex-col items-center z-10">
          <h1 className="font-bold text-center text-lightSlateGray text-8xl mb-10 uppercase">
            {title}
          </h1>
          {buttonText ? (
            <button
              onClick={() => navigate(to)}
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
