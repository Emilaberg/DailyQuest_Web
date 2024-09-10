import { Outlet, useNavigate } from "react-router-dom";

function FaqPage() {
  const Navigate = useNavigate();
  function showDetails(event) {
    const accordion = event.currentTarget;
    const content = accordion.lastChild;
    if (content.className.includes("opacity-0")) {
      let classname = content.className;
      classname = classname.replace(
        "opacity-0 max-h-0",
        "opacity-100 max-h-20"
      );
      content.className = classname;
    } else if (content.className.includes("opacity-100")) {
      let classname = content.className;
      classname = classname.replace(
        "opacity-100 max-h-20",
        "opacity-0 max-h-0"
      );
      content.className = classname;
    }
  }
  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center bg-[url(../src/assets/backgrounds/landing_page_blob.svg)] bg-no-repeat bg-center bg-cover ">
        {/* image section */}
        <section className="relative flex justify-center items-center w-full h-[384px] bg-[url(../src/assets/images/mystery-box-with-gifts-concept.jpg)] bg-cover bg-center mb-32">
          <div className="flex flex-col items-center">
            <h1 className="z-20 font-bold text-center text-lightSlateGray text-8xl mb-10">
              FAQ PAGE
            </h1>
            <button
              onClick={() => Navigate("Report-issue")}
              className="bg-primaryblue px-3 py-1 rounded-lg text-white w-fit hover:bg-midnightBlue_V2 transition-colors ease-in duration-200"
            >
              Report an issue
            </button>
          </div>

          {/* <div className="absolute bg-black w-full h-fit opacity-20"></div> */}
          <a
            className="absolute bottom-0 right-2 font-bold"
            href="https://www.freepik.com/free-photo/mystery-box-with-gifts-concept_36298590.htm#fromView=search&page=1&position=47&uuid=7ecc0dff-c825-44da-b766-f5a85ea8b206"
          >
            Image by freepik
          </a>
        </section>

        <Outlet />
      </section>
    </>
  );
}

export default FaqPage;
