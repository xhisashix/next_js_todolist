import { useState } from "react";
import { Todo } from "../types/todo";

interface AddTodoFormProps {
  onAddTodo: (newTodo: Todo) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTodoText.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(), // 簡単なID生成方法として現在時刻を使用
        text: newTodoText,
        completed: false,
      };
      onAddTodo(newTodo);
      setNewTodoText(""); // 入力欄をクリア
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="新しいTodoを入力"
        value={newTodoText}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        追加
      </button>
    </form>
  );
};

export default AddTodoForm;
