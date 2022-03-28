import Task from "../components/Task";
import taskListService from "../services/TaskListService";

const TaskListPage = (props) => {
  return (
    <div>
      {taskListService.getUnfinishedTask().map((task) => {
        return (
          <Task
            title={task.title}
            description={task.description}
            key={task.id}
            date={task.date}
          />
        );
      })}
    </div>
  );
};

export default TaskListPage;
