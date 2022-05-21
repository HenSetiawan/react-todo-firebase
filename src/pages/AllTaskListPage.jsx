import Task from "../components/Task";
import taskListService from "../services/TaskListService";

const AllTaskListPage = (props) => {
  return (
    <div>
      {taskListService.getAllTaskList().map((task, index) => {
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

export default AllTaskListPage;
