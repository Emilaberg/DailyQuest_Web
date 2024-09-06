import mail from "../assets/icons/mail.svg";

export default function AdminStatistics() {
  return (
    <div className="text-white flex-1 w-full bg-midnightBlue p-8">
      {/* Cards */}
      <div className="p-4 mt-10 ml-2 -mr-20 flex flex-wrap items-center justify-center text-white">
        <div className="p-4 mx-4 h-48 bg-adminGray rounded-lg flex-grow flex-shrink-0">
          <div className="flex items-center">
            <p className="mb-auto">Daily Users</p>
            <img src={mail} alt="UserLogo" className="w-12 h-12 ml-auto" />
          </div>
          <div className="font-bold text-5xl">
            <h1>12</h1>
          </div>
          <div className="text-sm mt-10">
            <p>Current daily average: 0000</p>
          </div>
        </div>
        <div className="p-4 mx-4 h-48 bg-adminGray rounded-lg flex-grow flex-shrink-0">
          <div className="flex items-center">
            <p className="mb-auto">Ad Traffic</p>
            <img src={mail} alt="UserLogo" className="w-12 h-12 ml-auto" />
          </div>
          <div className="font-bold text-5xl">
            <h1>172</h1>
          </div>
          <div className="text-sm mt-10">
            <p>Current daily average: 0000</p>
          </div>
        </div>
        <div className="p-4 mx-4 h-48 bg-adminGray rounded-lg flex-grow flex-shrink-0">
          <div className="flex items-center">
            <p className="mb-auto">Pending Tickets</p>
            <img src={mail} alt="UserLogo" className="w-12 h-12 ml-auto" />
          </div>
          <div className="font-bold text-5xl">
            <h1>2</h1>
          </div>
          <div className="text-sm mt-10">
            <p>Current daily average: 0000</p>
          </div>
        </div>
        <div className="p-4 mx-4 h-48 bg-adminGray rounded-lg flex-grow flex-shrink-0">
          <div className="flex items-center">
            <p className="mb-auto">Something Else</p>
            <img src={mail} alt="UserLogo" className="w-12 h-12 ml-auto" />
          </div>
          <div className="font-bold text-5xl">
            <h1>0</h1>
          </div>
          <div className="text-sm mt-10">
            <p>Current daily average: 0000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
