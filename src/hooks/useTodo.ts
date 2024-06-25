import React, { useState } from "react";

interface Todo {
  todo: string;
  isDone: boolean;
}

interface UseTodo {
  todos: Todo[];
  text: string;
  handleTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnAddClick: () => void;
  handleCheckTodo: (index: number) => void;
  handleDeleteClick: (index: number) => void;
}

export function useTodo(): UseTodo {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnAddClick = () => {
    if (!text) return;
    setTodos([...todos, { todo: text, isDone: false }]);
    setText("");
  };

  const handleCheckTodo = (index: number) => {
    const allTodos = [...todos];
    allTodos[index].isDone = !allTodos[index].isDone;
    setTodos(allTodos);
  };

  const handleDeleteClick = (index: number) => {
    const allTodos = [...todos];
    allTodos.splice(index, 1);
    setTodos(allTodos);
  };

  return {
    todos,
    text,
    handleTextChange,
    handleOnAddClick,
    handleCheckTodo,
    handleDeleteClick,
  };
}
