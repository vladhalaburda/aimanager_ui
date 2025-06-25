import { Link } from "react-router-dom";
import { useLogout } from "@refinedev/core";

const Navbar = () => {
  const { mutate: logout } = useLogout();
  return (
    <nav style={{ padding: "16px", backgroundColor: "#333", color: "white" }}>
      <Link to="/" style={{ marginRight: "16px", color: "white" }}>
        Home
      </Link>
      <Link to="/clients" style={{ color: "white" }}>
        Clients
      </Link>
       <button onClick={() => logout()} style={{ marginLeft: "16px", color: "white", background: "none", border: "1px solid white", cursor: "pointer" }}>
                Logout
            </button>
    </nav>
  );
};

export default Navbar;
