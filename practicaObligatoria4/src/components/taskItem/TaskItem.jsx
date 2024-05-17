import { useState } from 'react';
import PropTypes from 'prop-types';


const TaskItem = ({ id, task, deleteTask }) => {
  const [completed, setCompleted] = useState(false);

  const taskCompleted = () => {
    setCompleted(!completed);
  };

  const eliminateTask = () => {
    const confirmed = window.confirm('¿Desea eliminar la tarea?');
    if (confirmed) {
      deleteTask(id);
    }
  };

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <div>
        {task} 
      </div>
      <div>
        <button onClick={taskCompleted}>
          {completed ? 'No completada' : 'Completada'}
        </button>
        <button className="delete-button" onClick={eliminateTask}>Eliminar</button>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default TaskItem;