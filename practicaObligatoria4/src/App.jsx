import { useState } from 'react';
import NewTask from './components/newTask/NewTask';
import Tasks from './components/tasks/Tasks';
import './index.css';

const TASKS = [
  {
    id: 1,
    task: 'Hacer la comida',
    
  },
  {
    id: 2,
    task: 'Limpiar la cocina',
    
  },
];

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const addTaskHandler = (newTask) => {
    const taskData = { ...newTask };
    setTasks((prevTasks) => [taskData, ...prevTasks]);
  };

  const deleteTaskHandler = (taskId) => {
    const tasksNonEliminated = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksNonEliminated);
  };

  return (
    <div className="container">
      <NewTask onAddTask={addTaskHandler} />
      <Tasks tasks={tasks} onDeleteTask={deleteTaskHandler} />
    </div>
  );
}

export default App;