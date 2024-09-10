import { Outlet, useNavigate } from "react-router-dom";
import BannerComponent from "../components/BannerComponent";

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
        <BannerComponent
          title={"FAQ PAGE"}
          imageUrl={"src/assets/images/mystery-box-with-gifts-concept.jpg"}
          buttonText={"Report an issue"}
          to={"Report-issue"}
          attribute={"Image by freepik"}
        />

        <Outlet />
      </section>
    </>
  );
}

export default FaqPage;
