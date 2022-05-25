import Task from '../components/Task';
import { useState, useEffect } from 'react';
import { getTasks } from '../services/task-list-firebase';

const TaskListPage = () => {
  const [unfinishedTask, setUnfinishedTask] = useState([]);
  useEffect(() => {
    const getUnfinishedTaskList = async () => {
      const unfinishedTaskData = await getTasks('unfinished');
      setUnfinishedTask(unfinishedTaskData);
    };

    getUnfinishedTaskList();
  }, []);

  return (
    <div>
      {unfinishedTask.map((task, index) => {
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
