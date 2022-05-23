import Task from '../components/Task';
import { useEffect, useState } from 'react';
import taskListService from '../services/TaskListService';
import { getAllTask } from '../services/task-list-firebase';

const AllTaskListPage = (props) => {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    const getAllTaskList = async () => {
      const data = await getAllTask();
      setTaskList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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
          />
        );
      })}
    </div>
  );
};

export default AllTaskListPage;
