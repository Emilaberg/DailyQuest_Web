import Welcome from "../components/Welcome";
import ButtonsRow from "../components/ButtonsRow";
import CookieConsent from "../components/CookieConsent";
function HomePage() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <Welcome />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <ButtonsRow />
      </div>

      <CookieConsent />
    </>
  );
}

export default HomePage;
