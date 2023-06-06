import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
      <div>
        <h1>Todo List</h1>
        <input type="text" value={newTask} onChange={handleInputChange} />
        <button onClick={handleAddTask}>Добавить задачу</button>
        {tasks.length > 0 ? (
            <ul>
              {tasks.map((task, index) => (
                  <li key={index}>{task}</li>
              ))}
            </ul>
        ): (
            <p>Список задач пуст</p>
        )}
      </div>
  );
}

export default TodoList;
