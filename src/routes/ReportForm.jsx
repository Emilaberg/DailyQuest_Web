import { Form, redirect, useFetcher, useNavigate } from "react-router-dom";
import ApiService from "../hooks/apiService";
import { useState } from "react";

export async function action({ request, params }) {
  const apiCaller = ApiService();
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);

  let response = await apiCaller.createReport(updates);
  if (response) {
    alert("Report succesfully submitted");
  } else {
    alert("something went wrong submitting the form, try again");
  }

  return redirect("/frequently-asked-questions");
}

function ReportForm() {
  const [success, setSuccess] = useState();
  const navigate = useNavigate();
  return (
    <>
      <section className="relative min-h-screen">
        <div>
          <div
            className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-[#17191B] 
          "
          >
            <div>
              <h1 className="text-lightSlateGray text-3xl font-extrabold">
                Having problems? Let's Talk.
              </h1>
              <p className="text-sm text-gray-500 mt-4">
                Having some issues? Then reach out, we'd love to hear about it.
              </p>

              <div className="mt-12">
                <h2 className="text-lightSlateGray text-base font-bold">
                  Email
                </h2>
                <ul className="mt-4">
                  <li className="flex items-center">
                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        fill="#007bff"
                        viewBox="0 0 479.058 479.058"
                      >
                        <path
                          d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                          data-original="#000000"
                        />
                      </svg>
                    </div>
                    <a className="text-[#007bff] text-sm ml-4">
                      <small className="block">Mail</small>
                      <strong>issue@dailyquest.com</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <Form
              className="ml-auto space-y-4"
              method="post"
              id="report-form"
            >
              <input
                required
                type="text"
                placeholder="Name"
                name="first"
                className="w-full rounded-md py-3 px-4 bg-[#1E2022] text-lightSlateGray text-sm outline-blue-500 focus:bg-transparent"
              />
              <input
                required
                type="email"
                placeholder="Email"
                name="Email"
                className="w-full rounded-md py-3 px-4 bg-[#1E2022] text-lightSlateGray text-sm outline-blue-500 focus:bg-transparent"
              />
              <input
                required
                type="text"
                placeholder="Subject"
                name="Subject"
                className="w-full rounded-md py-3 px-4 bg-[#1E2022] text-lightSlateGray text-sm outline-blue-500 focus:bg-transparent"
              />
              <textarea
                required
                placeholder="Message"
                name="Message"
                rows={6}
                className="w-full rounded-md px-4 bg-[#1E2022] text-lightSlateGray text-sm pt-3 outline-blue-500 focus:bg-transparent"
              ></textarea>
              {success ? <div>Form submitted successfully</div> : null}
              <button
                type="submit"
                className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6 "
              >
                submit
              </button>

              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
                onClick={() => navigate(-1)}
              >
                cancel
              </button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ReportForm;
