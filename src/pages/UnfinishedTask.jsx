import Task from '../components/Task';
import { useState, useEffect } from 'react';
import { getUnfinishedTask } from '../services/task-list-firebase';

const TaskListPage = () => {
  const [unfinishedTask, setUnfinishedTask] = useState([]);
  useEffect(() => {
    const getUnfinishedTaskList = async () => {
      const unfinishedTaskData = await getUnfinishedTask();
      setUnfinishedTask(unfinishedTaskData);
    };

    getUnfinishedTaskList();
  }, [unfinishedTask]);

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
