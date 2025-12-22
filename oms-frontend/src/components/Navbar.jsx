import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 20px",
        background: "#1976d2",
        color: "white",
      }}
    >
      <div>
        <Link style={{ color: "white", marginRight: "15px" }} to="/dashboard">
          Dashboard
        </Link>
        <Link style={{ color: "white", marginRight: "15px" }} to="/orders">
          Orders
        </Link>
        <Link style={{ color: "white" }} to="/orders/create">
          Create Order
        </Link>
      </div>
      <button
        style={{ background: "#d32f2f" }}
        onClick={logout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
