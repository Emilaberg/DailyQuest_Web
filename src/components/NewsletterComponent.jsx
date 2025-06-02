// Imports
import ReactDom from "react-dom";
import { useState, useEffect } from "react";

function Newsletter({ open, onClose }) {
  // States
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    // Prevents reloading of the page
    e.preventDefault();
    // Resetting states
    setError(null);
    setLoading(true);
    setSuccess(null);

    const dateLastSent = new Date().toISOString(); // Changes date to ISO format (2024-09-06T14:48:00.000Z)

    // API call
    try {
      const response = await fetch("https://localhost:7174/api/Email/wombat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, dateLastSent }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      setSuccess("Success");
      console.log("Subscription successful");
    } catch (error) {
      setError(error.message);
      console.error("Error", error);
    } finally {
      setLoading(false);
      setEmail("");
    }
  };

  // Use-effects
  useEffect(() => {
    if (!open) {
      setSuccess(null);
    }
  }, [open]);

  if (!open) return null;
  // Elements
  return ReactDom.createPortal(
    <>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/70 z-1000">
        <div className="fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 p-[50px] z-1000">
          <div className=" relative text-adminLightSlateGray w-full flex items-center justify-center  bg-midnightBlue rounded-xl shadow-around shadow-white ">
            <div className="">
              <button
                onClick={onClose}
                className=" absolute top-2 right-2 pr-1 text-white text-md text-center border-b-2 border-transparent hover:border-b-2 hover:border-lightSlateGray hover:cursor-pointer"
              >
                {" "}
                X{" "}
              </button>
            </div>

            <div className="">
              <div className="w-full my-10 flex flex-col items-center">
                <img
                  src="..\src\assets\images\Webicon.png"
                  alt="webicon"
                  className="w-2/3"
                />
              </div>
              <div className="flex flex-col gap-6 items-center w-full mb-20">
                <label className="font-semibold text-3xl mb-3">Subscribe</label>
                <form
                  onSubmit={handleSubmit}
                  className="flex items-center flex-col"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="h-10 text-xl bg-midnightBlue border-solid border border-lightSlateGray rounded-xl px-3 placeholder-lightSlateGray/40 placeholder focus:outline-none"
                  />
                  {/* If there is an error */}
                  {error && <p className="text-red-500">{error}</p>}
                  {/* If its a success */}
                  {success && <p className="text-green-500 mt-2">{success}</p>}
                  <button
                    type="submit"
                    className="mt-4 border border-solid border-lightSlateGray rounded-xl px-5 py-1 font-semibold hover:bg-primaryblue hover:border-primaryblue transition-all ease-in duration-200"
                  >
                    {loading ? "Submitting" : "Submit"}
                  </button>
                </form>
                {/* {" "}
                <label className="font-semibold text-3xl mb-3">Subscribe</label>
                <input
                  type="text"
                  className="w-[75%] h-10 text-xl bg-midnightBlue border-solid border border-lightSlateGray rounded-xl px-3 placeholder-lightSlateGray placeholder"
                  placeholder="Email"
                />
                <button className="mt-4 border border-solid border-lightSlateGray rounded-xl px-5 py-1 font-semibold hover:bg-primaryblue hover:border-primaryblue transition-all ease-in duration-200">
                  Submit
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Newsletter;
