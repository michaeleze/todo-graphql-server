import React from 'react';
import './index.css';
import { IOption } from './index.interface';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Option: React.FC<IOption> = (props) => {
    const {
        handleDeleteTask,
        handleOpenModal,
        id,
        text,
    } = props;

    return (
        <>
            <button className="option--edit" onClick={() => handleOpenModal(id)}>
                <FaEdit />
            </button>
            <button className="option--delete" onClick={() => handleDeleteTask(id, text)}>
                <MdDelete />
            </button>
        </>
    );
}

export default Option;