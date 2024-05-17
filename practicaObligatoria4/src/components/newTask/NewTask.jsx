import { useState } from 'react';
import PropTypes from 'prop-types';


const NewTask = ({ onAddTask }) => {
  const [task, setTask] = useState('');
 

  const changeTaskHandler = (event) => {
    setTask(event.target.value);
  };


  const submitTaskHandler = (event) => {
    event.preventDefault();
    const newTask = {
      id: Math.random(),
      task: task,
      
    };

    setTask('');
    onAddTask(newTask);
  };

  return (
    <form onSubmit={submitTaskHandler}>
      <div className="form-group">
        <label>Tarea</label>
        <input type="text" required placeholder="Ingresar tarea" value={task} onChange={changeTaskHandler} />
      </div>
      
      <button className="button" type="submit">Agregar tarea</button>
    </form>
  );
};

NewTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default NewTask;