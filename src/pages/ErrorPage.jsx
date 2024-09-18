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
      <div className="min-h-screen bg-gradient-to-br from-0 from-[#05060B] to-100 to-[#11284B] pt-[100px]">
        <h1 className="text-white">
          Sadly it seems like our server is down at the moment, please check
          back later...
        </h1>
      </div>
    </>
  );
}
