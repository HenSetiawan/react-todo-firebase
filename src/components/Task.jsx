import "../css/task.css";
const Task = (props) => {
  const deleteHandler = () => {
    console.log("delete task item");
  };
  return (
    <div>
      <div className="card">
        <h1 className="title">{props.title}</h1>
        <p>{props.description}</p>
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
