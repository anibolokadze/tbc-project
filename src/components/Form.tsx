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
    setAge(1);
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
    if (newAge >= 0 && newAge <= 120) {
      setAge(newAge);
      setErrors([]);
    } else {
      setAge(null);
      setErrors(["Age must be between 0 and 120"]);
    }
  };

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      {showForm ? (
        <button onClick={handleToggleForm}>-</button>
      ) : (
        <button onClick={handleToggleForm}>+</button>
      )}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-[300px] text-black"
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
          />
          <input
            type="number"
            name="age"
            value={age === null ? "" : age.toString()}
            onChange={handleAgeChange}
            placeholder="Age"
            min={0}
            max={120}
          />
          {errors.map((error, index) => (
            <div key={index} className="text-red-500">
              {error}
            </div>
          ))}
          <button type="submit" className="bg-red-300 text-white">
            Create User
          </button>
        </form>
      )}
    </div>
  );
};

export default UserForm;
