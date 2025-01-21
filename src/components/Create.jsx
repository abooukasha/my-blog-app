import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeStamp = new Date().toISOString();

    const blog = { title, body, author, timeStamp };

    setIsPending("true");

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending("true");
      navigate("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Your Name:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {/* <label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
        </label> */}
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
}

export default Create;
