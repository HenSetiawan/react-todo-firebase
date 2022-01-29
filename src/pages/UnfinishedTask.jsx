import Task from '../components/Task';
const TaskListPage = (props) => {
  return (
    <div>
      <Task title="Belajar Next" description="Belajar Next dari youtube" />
      <Task title="Belajar Remix" description="Belajar Remix dari youtube" />
    </div>
  );
};

export default TaskListPage;
