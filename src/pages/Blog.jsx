import data from "../data";
import { BlogPost } from "../Components";

const Blog = () => {
  return (
    <section>
      {data.footer.blogPosts.map((blog) => (
        <BlogPost
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}
          date={blog.date}
        />
      ))}
    </section>
  );
};

export default Blog;
