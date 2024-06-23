import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { createBlogAction } from "../../../actions";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-[2000] overflow-y-auto bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 dark:text-black">
          {t("add_blog")}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 font-medium dark:text-black"
            >
              {t("blog_title")}
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder={t("blog_title")}
              className="w-full border border-gray-300 rounded-lg p-2 dark:text-black dark:bg-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 font-medium dark:text-black"
            >
              {t("description")}
            </label>
            <textarea
              name="description"
              id="description"
              placeholder={t("description")}
              className="w-full border border-gray-300 rounded-lg p-2 dark:text-black dark:bg-white"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="author_name"
              className="block mb-2 font-medium dark:text-black"
            >
              {t("name")}
            </label>
            <input
              type="text"
              name="author_name"
              id="author_name"
              placeholder={t("name")}
              value={user?.nickname || ""}
              className="w-full border border-gray-300 rounded-lg p-2 dark:text-black dark:bg-white"
            />
          </div>
          <div>
            <label
              htmlFor="author_email"
              className="block mb-2 font-medium dark:text-black"
            >
              {t("email")}
            </label>
            <input
              type="email"
              name="author_email"
              id="author_email"
              placeholder={t("email")}
              value={user?.email || ""}
              className="w-full border border-gray-300 rounded-lg p-2 dark:text-black dark:bg-white"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setOpenModal(false)}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-black"
            >
              {t("cancel")}
            </button>
            <button
              type="submit"
              className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg px-4 py-2"
            >
              {t("save")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogCreateForm;
