import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { createBlogAction } from "../../../actions";

export const revalidate = 0;
const BlogCreateForm = ({
  setOpenModal,
}: {
  setOpenModal: (openModal: boolean) => void;
}) => {
  const { user } = useUser();
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await createBlogAction(formData);
      setOpenModal(false);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
    router.refresh();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" required />
        <textarea name="description" placeholder="Description" required />
        <input
          type="text"
          name="author_name"
          placeholder="Author Name"
          value={user?.nickname || ""}
        />

        <input
          type="email"
          name="author_email"
          placeholder="Author Email"
          value={user?.email || ""}
        />
        <input
          className="hidden"
          type="text"
          name="time_added"
          value={new Date().toISOString()}
        />
        <div className="w-full flex gap-3">
          <button onClick={() => setOpenModal(false)}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default BlogCreateForm;
