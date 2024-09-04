function AdminNavbar() {
  return (
    <nav className="flex justify-between h-20 rounded-xl bg-gradient-primary mx-5 mt-5">
      <img
        className="ml-10 w-64"
        src="../src/assets/icons/Webicon_admin.svg"
        alt=""
      />
      <div className="flex justify-between items-center text-white mr-10">
        <img
          src=""
          alt="profilbild"
        />
        <div>
          <h1>username</h1>
          <span>admin</span>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;
