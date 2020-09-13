import React from 'react';
import './index.css';
import {IAddTask} from './index.interface';
import {FaPlus} from "react-icons/fa";

const AddTask: React.FC<IAddTask> = (props) => {
  const {
    handleChange,
    handleCreateNewTask,
  } = props;

  return (
    <div className="add-container">
      <div className="add-input">
        <input className="add--input--field" onChange={handleChange} placeholder='Add new task'/>
      </div>
      <div className="add-edit">
        <button className="add-edit--button" onClick={handleCreateNewTask}>
          <FaPlus/>
        </button>
      </div>
    </div>
  );
};

export default AddTask;