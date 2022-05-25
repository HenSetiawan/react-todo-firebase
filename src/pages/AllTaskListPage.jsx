import Task from '../components/Task';
import { useEffect, useState } from 'react';
import { getTasks } from '../services/task-list-firebase';

const AllTaskListPage = () => {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    const getAllTaskList = async () => {
      const data = await getTasks();
      setTaskList(data);
    };

    getAllTaskList();
  }, []);
  return (
    <div>
      {taskList.map((task, index) => {
        return (
          <Task
            title={task.title}
            description={task.description}
            key={index}
            date={task.date}
            id={task.id}
          />
        );
      })}
    </div>
  );
};

export default AllTaskListPage;
