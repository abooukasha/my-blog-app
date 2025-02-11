import { useParams } from "react-router-dom";
import useFetch from "../UseFetch";
import { useNavigate } from "react-router-dom";
function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <div>
            <p>
              This blog was creatd on{" "}
              {new Date(blog.timeStamp).toLocaleString()}
            </p>
          </div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
