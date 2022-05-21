import Task from "../components/Task";
import taskListService from "../services/TaskListService";
const TaskListPage = (props) => {
  return (
    <div>
           {taskListService.getFinishedTask().map((task,index) => {
        return (
          <Task
            title={task.title}
            description={task.description}
            date={task.date}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default TaskListPage;
