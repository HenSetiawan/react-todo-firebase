import "../css/task.css";
const Task = (props) => {
  return (
    <div>
      <div className="card">
        <h1 className="title">{props.title}</h1>
        <p>{props.description}</p>
        <button className="btn">Delete</button>
      </div>
    </div>
  );
};

export default Task;
