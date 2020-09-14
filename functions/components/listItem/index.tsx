import React from 'react';
import './index.css';
import Option from "../option";
import {IListItem} from './index.interface';

const ListItem: React.FC<IListItem> = (props) => {
  const {
    options,
    list
  } = props;
  const {text} = list;

  return (
    <div className="list--container">
      <div className="list-item-field">
        <p>{text}</p>
      </div>
      <div className="list-item--edit">
        <Option {...options} />
      </div>
    </div>
  );
};

export default ListItem;