import { useState } from "react";
import createUser from "../../actions";
import { User, getUsers } from "../../api";

interface UserFormProps {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UserForm: React.FC<UserFormProps> = ({ setUsers }) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number | null>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !email || age === null) {
      setErrors(["All fields are required"]);
      return;
    }
    const formData = new FormData(event.currentTarget);
    await createUser(formData);
    const updatedUsers = await getUsers();
    setUsers(updatedUsers);
    setName("");
    setEmail("");
    setAge(null);
    setErrors([]);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = parseInt(event.target.value);
    if (newAge >= 1 && newAge <= 120) {
      setAge(newAge);
      setErrors([]);
    } else {
      setAge(null);
      setErrors(["Age must be between 1 and 120"]);
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button
        onClick={handleToggleForm}
        className="my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add User
      </button>

      <div className="flex justify-center items-center h-full">
        {showForm && (
          <div className="fixed top-0 left-0 z-20 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <form
              onSubmit={handleSubmit}
              className="w-96 bg-white p-6 rounded-lg shadow-md"
            >
              <button onClick={handleToggleForm}>X</button>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter name
                </label>
                <input
                  type="text"
                  name="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Name"
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter email
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter age
                </label>
                <input
                  type="number"
                  name="age"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={age === null ? "" : age.toString()}
                  onChange={handleAgeChange}
                  placeholder="Age"
                  min={1}
                  max={120}
                />
              </div>

              {errors.map((error, index) => (
                <div key={index} className="text-red-500">
                  {error}
                </div>
              ))}

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create User
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default UserForm;
