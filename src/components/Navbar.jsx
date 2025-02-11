import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <h1>Dojo Blog</h1>
        </Link>
        <div className="sign-up">
          <Link
            to="/signup"
            style={{
              color: "white",
              backgroundColor: "#6458c0",
              borderRadius: "8px",
            }}
          >
            LogIn
          </Link>
        </div>

        <div className="links">
          <Link
            to="/create"
            style={{
              color: "white",
              backgroundColor: "#6458c0",
              borderRadius: "8px",
            }}
          >
            New Blog
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
