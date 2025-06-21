"use client";

import axios from "axios";
import React, { useState } from "react";

interface Todos {
    completed: boolean
    id: number
    title: string
    userId: number
}


export default function Http() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState<Todos[]>([])
  const payload = {
    id: 1,
    name: "Tor",
  };

  const handleGet = async () => {
   const response = await axios.get(url);
   if (response.status === 200) {
        setTodos(response.data);
   }
  };

  const handlePost = async () => {
    await axios.post(url, payload);
  };

  return (
    <div>
      <button className="btn" onClick={handleGet}>
        GET
      </button>
      <button className="btn" onClick={handlePost}>
        POST
      </button>

        {todos.map((todo)=> (
            <div key= {todo.id}>
                id= {todo.id},
                title={todo.title},
                completed={todo.completed},
                userId={todo.userId}
            </div>
        ))}

    </div>
  );
}