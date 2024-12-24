import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTask } from "../features/tasksSlice";

const Home = () => {
  const { items } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Task List</h1>
      {items && (
        <ul>
          {items.map((task, index) => (
            <div>
              <li key={index}>{task}</li>
              <button onClick={() => dispatch(deleteTask(index))}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      )}
      <Link to="/add-task">Add Task</Link>
    </div>
  );
};

export default Home;
