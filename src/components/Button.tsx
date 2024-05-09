import { deleteUserAction } from "../../actions";

interface ButtonProps {
  id: number;
  onDelete: () => void;
}

export default function Button({ id, onDelete }: ButtonProps) {
  const handleDelete = async () => {
    await deleteUserAction(id);
    onDelete();
  };

  return <button onClick={handleDelete}>Delete</button>;
}
