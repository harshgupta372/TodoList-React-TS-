import React from 'react';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg transition-all duration-300 hover:shadow-md">
      <div className="flex items-center space-x-3">
        <button
          onClick={() => toggleTodo(todo.id)}
          className="text-gray-500 hover:text-green-500 transition-colors duration-200"
        >
          {todo.completed ? (
            <CheckCircle className="w-6 h-6" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>
        <span
          className={`text-lg ${
            todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-gray-400 hover:text-red-500 transition-colors duration-200"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TodoItem;