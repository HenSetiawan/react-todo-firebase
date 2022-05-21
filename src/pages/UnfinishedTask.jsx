import Task from "../components/Task";
import taskListService from "../services/TaskListService";

const TaskListPage = (props) => {
  return (
    <div>
      {taskListService.getUnfinishedTask().map((task,index) => {
        return (
          <Task
            title={task.title}
            description={task.description}
            key={index}
            date={task.date}
          />
        );
      })}
    </div>
  );
};

export default TaskListPage;
