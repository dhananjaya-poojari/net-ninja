import BlogList from "./BlogList";
import usefetch from "./usefetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = usefetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;
