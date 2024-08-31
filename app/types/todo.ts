// types/todo.ts

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: Date; // 期限 (オプション)
  priority?: "low" | "medium" | "high"; // 優先度 (オプション)
  category?: string; // カテゴリー (オプション)
}
