import SideBar from "../components/SideBar.jsx";

function AdminPage() {
  return (
    <>
      <div>
        <div className=" min-h-20">
          <h1 className="text-white">ADMINPAGE</h1>
        </div>
        <div className="flex h-screen">
          <SideBar />

          {/* Main Content Holder */}
          <div className="text-white flex-1 w-full bg-midnightBlue p-8 ml-10 mr-10 mt-10 mb-10">
            <div className="p-4 flex items-center justify-center">
              <h1>Dashboard Details</h1>
            </div>
            <div className="text-4xl flex items-center justify-center">
              <h1>Tracked Emails</h1>
            </div>
            <div>
              <div className="border-t-2 border-b-2 border-white flex items-center justify-center mt-3">
                <div className="flex items-center w-full h-10 rounded-lg bg-adminGray mt-3 mb-3">
                  <p>Name & Email</p>
                  <p>Role</p>
                  <p>Email Sent</p>
                  <p>Actions</p>
                </div>
              </div>
              <p>Remove Selected</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPage;
