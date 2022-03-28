import Task from "../components/Task";
import taskListService from "../services/TaskListService";

const AllTaskListPage = (props) => {
  return (
    <div>
      {taskListService.getAllTaskList().map((task) => {
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

export default AllTaskListPage;
