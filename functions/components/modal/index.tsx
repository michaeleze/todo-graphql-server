import ReactModal from 'react-modal';
import React, {useState} from 'react';
import {IModal} from './index.interface';
import './index.css';

const Modal: React.FC<IModal> = (props) => {
  const [value, setValue] = useState<string>();
  const {
    handleCloseModal,
    handleUpdateTask,
    modalItem,
    modal,
  } = props;

  const newTask = {id: modalItem?.id, task: value};

  const Change = (e: any) => {
    setValue(e.target.value);
  };

  const handleOnAfterOpen = () => {
    setValue(modalItem.text);
  };

  return (
    <ReactModal
      ariaHideApp={false}
      contentLabel="Minimal Modal Example"
      isOpen={modal}
      onAfterOpen={handleOnAfterOpen}
    >
      <div className="modal-content">
        <input className="modal-input--field" onChange={Change} value={value}/>
        <span className="modal-text--accept" onClick={() => handleUpdateTask(newTask)}> Accept </span>
        <span className="modal-text--reject" onClick={handleCloseModal}> Cancel </span>
      </div>
    </ReactModal>
  )
}

export default Modal;