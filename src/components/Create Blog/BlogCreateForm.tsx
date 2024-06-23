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
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text" name="title" placeholder="Title" required />
    //     <textarea name="description" placeholder="Description" required />
    //     <input
    //       type="text"
    //       name="author_name"
    //       placeholder="Author Name"
    //       value={user?.nickname || ""}
    //     />

    //     <input
    //       type="email"
    //       name="author_email"
    //       placeholder="Author Email"
    //       value={user?.email || ""}
    //     />
    //     <input
    //       className="hidden"
    //       type="text"
    //       name="time_added"
    //       value={new Date().toISOString()}
    //     />
    //     <div className="w-full flex gap-3">
    //       <button onClick={() => setOpenModal(false)}>Cancel</button>
    //       <button type="submit">Save</button>
    //     </div>
    //   </form>
    // </div>

    <div className="fixed inset-0 z-[2000] overflow-y-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Create Blog Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block mb-2 font-medium">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2 font-medium">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Description"
              className="w-full border border-gray-300 rounded-lg p-2"
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="author_name" className="block mb-2 font-medium">
              Author Name
            </label>
            <input
              type="text"
              name="author_name"
              id="author_name"
              placeholder="Author Name"
              value={user?.nickname || ""}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label htmlFor="author_email" className="block mb-2 font-medium">
              Author Email
            </label>
            <input
              type="email"
              name="author_email"
              id="author_email"
              placeholder="Author Email"
              value={user?.email || ""}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogCreateForm;
