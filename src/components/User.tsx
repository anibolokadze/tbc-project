import { useState } from "react";
import Button from "./Button";
import { User } from "../../api";

interface UserItemProps {
  user: User;
  onDelete: () => void;
  onEdit: (id: number, name: string, email: string, age: number) => void;
}

const UserItem: React.FC<UserItemProps> = ({ user, onDelete, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedAge, setEditedAge] = useState(user.age);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [ageError, setAgeError] = useState<string | null>(null);

  const handleEdit = () => {
    setEditing(true);
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateAge = (age: number): boolean => {
    return age >= 1 && age <= 120;
  };

  const handleSave = () => {
    if (!validateEmail(editedEmail)) {
      setEmailError("Invalid email format");
      return;
    }

    if (!validateAge(editedAge)) {
      setAgeError("Age must be between 1 and 120");
      return;
    }

    onEdit(user.id, editedName, editedEmail, editedAge);
    setEditing(false);
    setEmailError(null);
    setAgeError(null);
  };

  const handleToggleForm = () => {
    setEditing(!editing);
    setEmailError(null);
    setAgeError(null);
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {editing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
        ) : (
          user.name
        )}
      </th>
      <td className="px-6 py-4">
        {editing ? (
          <>
            <input
              type="email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
            />
            {emailError && <div className="text-red-500">{emailError}</div>}
          </>
        ) : (
          user.email
        )}
      </td>
      <td className="px-6 py-4">
        {editing ? (
          <>
            <input
              type="number"
              value={editedAge}
              onChange={(e) => setEditedAge(parseInt(e.target.value))}
              min={1}
              max={120}
            />
            {ageError && <div className="text-red-500">{ageError}</div>}
          </>
        ) : (
          user.age
        )}
      </td>
      <td>
        {editing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <Button id={user.id} onDelete={onDelete} />
        )}
      </td>
      <td>
        {editing ? (
          <button onClick={handleToggleForm}>Cancel</button>
        ) : (
          <button
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            onClick={handleEdit}
          >
            Edit
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserItem;
