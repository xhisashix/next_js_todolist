import { useState } from "react";
import { Todo } from "../types/todo";

interface TodoItemProps {
  todo: Todo;
  onEdit: (id: number, updatedText: string) => void;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onEdit,
  onDelete,
  onToggleComplete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditText(event.target.value);
  };

  const handleSaveClick = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between p-2 border-b border-gray-300">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        className="mr-2"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={handleInputChange}
            className="flex-grow p-1 border border-gray-300 rounded"
          />
          <button
            onClick={handleSaveClick}
            className="ml-2 p-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            保存
          </button>
        </>
      ) : (
        <>
          <span
            className={`flex-grow ${todo.completed ? "line-through" : ""}`}
          >
            {todo.text}
          </span>
          <button
            onClick={handleEditClick}
            className="ml-2 p-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            編集
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="ml-2 p-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            削除
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
