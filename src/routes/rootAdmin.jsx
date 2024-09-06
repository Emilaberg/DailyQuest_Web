import { Outlet, ScrollRestoration, redirect } from "react-router-dom";
import Footer from "../components/Footer";
import AdminNavbar from "../components/adminNavbar";

export function loader({ request }) {
  const url = new URL(request.url);
  let authenticated = true;
  if (!authenticated) {
    if (url.pathname !== "/admin/login") {
      return redirect("/admin/login");
    }
  }
  return null;
}

export default function RootAdmin() {
  return (
    <>
      <ScrollRestoration />
      <AdminNavbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
