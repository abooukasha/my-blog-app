import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", name);
    navigate("/");
  };

  return (
    <div className="create">
      <h2>LogIn in just a sec 👇</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Password:</label>
        <input type="password" required />

        <button type="submit">LogIn</button>
      </form>
    </div>
  );
}

export default SignUp;
