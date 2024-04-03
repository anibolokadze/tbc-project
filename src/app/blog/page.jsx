import BlogPost from "@/components/BlogPost";
import Layout from "@/components/layout";
import data from "@/data";

const Blog = () => {
  return (
    <Layout header={data.header} footer={data.footer}>
      <section className="flex flex-col max-w-lg mx-auto gap-y-8">
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
    </Layout>
  );
};

export default Blog;
