import './to-do-list.css';

function ToDOList({ lstToDo }) {
  return (
    <div className="div-table">
      <div className="div-table-row header">
        <div className="div-table-cell">ID</div>
        <div className="div-table-cell">Title</div>
        <div className="div-table-cell">Status</div>
      </div>
      {lstToDo.map((todo) => (
        <div className={`div-table-row ${todo.completed ? 'comp': undefined}`}>
          <div className="div-table-cell">{todo.id}</div>
          <div className="div-table-cell">{todo.title}</div>
          <div className="div-table-cell">{todo.completed ? "done" : "not done"}</div>
        </div>
      ))};
    </div>
  )
}

export default ToDOList;