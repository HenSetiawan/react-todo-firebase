import Task from "../components/Task";
import taskListService from "../services/TaskListService";
const TaskListPage = (props) => {
  return (
    <div>
           {taskListService.getFinishedTask().map((task) => {
        return (
          <Task
            title={task.title}
            description={task.description}
            key={task.id}
          />
        );
      })}
    </div>
  );
};

export default TaskListPage;
