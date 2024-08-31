import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import AddTodoForm from "./AddTodoForm";
import { Todo } from "../types/todo";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id: number, updatedText: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: updatedText } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <ul className="space-y-2">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={editTodo}
            onDelete={deleteTodo}
            onToggleComplete={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
