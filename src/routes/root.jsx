import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
