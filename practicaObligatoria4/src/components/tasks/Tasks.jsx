import PropTypes from 'prop-types';
import TaskItem from '../taskItem/TaskItem';


const Tasks = ({ tasks, onDeleteTask }) => {
  const tasksMapped = tasks.map((task) => (
    <TaskItem
      key={task.id}
      id={task.id}
      task={task.task}
      deleteTask={onDeleteTask}
    />
  ));

  return <div>{tasksMapped}</div>;
};

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      task: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Tasks;