import Navbar from "../components/Navbar";

//hämta data
//loaders (om det används) måste returnera något. om det inte ska returnera något, returnera null
export async function loader() {
  return null;
}

//hantera form actions
//actions (om det används) måste returnera något. om det inte ska returnera något, returnera null
export async function action() {
  return null;
}

export default function ErrorPage() {
  return (
    <>
      <div className="min-h-screen">
        <h1 className="text-white">ERRORPAGE</h1>
      </div>
    </>
  );
}
