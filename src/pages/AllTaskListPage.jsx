import Task from '../components/Task';
import { useEffect, useState } from 'react';
import { getAllTask } from '../services/task-list-firebase';

const AllTaskListPage = () => {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    const getAllTaskList = async () => {
      const data = await getAllTask();
      setTaskList(data);
    };

    getAllTaskList();
  }, [taskList]);
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
