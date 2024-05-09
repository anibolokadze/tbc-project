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

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(user.id, editedName, editedEmail, editedAge);
    setEditing(false);
  };

  const handleToggleForm = () => {
    setEditing(!editing);
  };

  return (
    <div>
      {editing && <button onClick={handleToggleForm}>x</button>}
      {editing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <input
            type="text"
            value={editedEmail}
            onChange={(e) => setEditedEmail(e.target.value)}
          />
          <input
            type="number"
            value={editedAge}
            onChange={(e) => setEditedAge(parseInt(e.target.value))}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <Button id={user.id} onDelete={onDelete} />
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserItem;
