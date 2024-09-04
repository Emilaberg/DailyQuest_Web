import { redirect } from "react-router-dom";

export async function loader() {
  return redirect("/");
}
