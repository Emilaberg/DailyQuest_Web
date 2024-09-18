import { Outlet, useNavigate } from "react-router-dom";
import BannerComponent from "../components/BannerComponent";
import HelpingHand from "../components/HelpingHand";

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
      <section className="w-full min-h-screen flex flex-col items-center bg-gradient-to-br from-0 from-[#05060B] to-100 to-[#11284B] pb-72 pt-[100px]">
        {/* image section */}
        <BannerComponent
          title={"FAQ PAGE"}
          imageUrl={"../src/assets/images/mystery-box-with-gifts-concept.jpg"}
          buttonText={"Report an issue"}
          to={"Report-issue"}
          attribute={"Image by freepik"}
        />

        <Outlet />

        <section className="w-2/3 mt-20">
          <HelpingHand />
        </section>
      </section>
    </>
  );
}

export default FaqPage;
