import React from "react";
import ListItem from '../listItem';
import {IList} from './index.interface';

const List: React.FC<IList> = (props) => {
  const {
    handleDeleteTask,
    handleOpenModal,
    list
  } = props;

  return (
    <>
      {
        list?.map((item: any) => {
          const list = {...item}
          const options = {
            handleDeleteTask,
            handleOpenModal: handleOpenModal,
            id: item.id,
            text: item.text,
          };
          const listProps = {list, options};

          return (
            <div key={item.id}>
              <ListItem {...listProps}/>
            </div>
          )
        })
      }
    </>
  )
};

export default List;