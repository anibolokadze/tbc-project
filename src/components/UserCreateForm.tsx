import { useRouter } from "next/navigation";
import { createUserAction } from "../../actions";

const UserCreateForm = ({
  setOpenModal,
}: {
  setOpenModal: (openModal: boolean) => void;
}) => {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await createUserAction(formData);
      setOpenModal(false);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
    router.refresh();
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-secondary/80 z-[999]">
      <form
        onSubmit={handleSubmit}
        className="w-1/5 border-2 border-blue-600 bg-[#ffffff] dark:bg-secondary dark:border-light_blue shadow-xl shadow-blue-300 dark:shadow-light_blue p-8 rounded-xl flex flex-col gap-5 justify-center items-center "
      >
        <input
          className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-blue-300 focus:outline-blue-300"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-blue-300 focus:outline-blue-300"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="w-full h-full border-2 border-light_blue py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px] focus:border-blue-300 focus:outline-blue-300"
          type="text"
          name="age"
          placeholder="Age"
          required
        />
        <div className="w-full flex gap-3">
          <button
            onClick={() => setOpenModal(false)}
            className="w-full h-full border-0 bg-red-800 py-3 mx-auto text-white lg:text-[20px] rounded-[5px] hover:bg-blue-300 transition-all transform duration-300 ease-linear"
          >
            Cancel
          </button>
          <button
            className="w-full h-full border-0 bg-blue-600 dark:bg-blue-500 hover:bg-blue-300 rounded-[5px] py-3 lg:py-auto px-7 font-small lg:text-[20px] lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserCreateForm;