import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BlogList({ blogs, title }) {
  //   const blogs = props.blogs;
  //   const title = props.title;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.userId}</p>
            {blogs.length === 0 && <p>No blogs available</p>}
          </Link>
        </div>
      ))}
    </div>
  );
}

BlogList.propTypes = {
  blogs: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default BlogList;
