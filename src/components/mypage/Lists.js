import React from 'react';
import List from './List';

const Lists = React.memo(({todoData, setTodoData,handleClick}) => {

    return (
        <div>
            {todoData.map(data => (
            <List 
              key={data.id}
              id={data.id}
              title={data.title}
              completed={data.completed}
              todoData={todoData}
              setTodoData={setTodoData}
              handleClick={handleClick}
              />
          ))}
        </div>
    );
});

export default Lists;