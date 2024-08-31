"use client";

import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <TodoList />
    </main>
  );
}
