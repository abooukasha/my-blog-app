// import { useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "../UseFetch";
function Home() {
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs!" />}
      {data && data.length === 0 && <div>No blogs available.</div>}
      {error && <div>{error}</div>}
    </div>
  );
}

export default Home;
