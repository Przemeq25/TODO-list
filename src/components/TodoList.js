import { Box } from '@theme-ui/components';
import React from 'react';
import TodoItem from './TodoItem';

const data = [
  {
    id: 176,
    user_id: 123,
    title: 'Voluptas quidem patria fugiat cupio tergum qui coadunatio solutio.',
    completed: true,
    created_at: '2021-05-13T03:50:05.967+05:30',
    updated_at: '2021-05-13T03:50:05.967+05:30',
  },
  {
    id: 177,
    user_id: 123,
    title: 'Voluptas quidem patria fugiat cupio tergum qui coadunatio solutio.',
    completed: false,
    created_at: '2021-05-13T03:50:05.967+05:30',
    updated_at: '2021-05-13T03:50:05.967+05:30',
  },
];

const TodoList = () => {
  return (
    <Box>
      {data.map((item) => (
        <TodoItem {...item} key={item.id} />
      ))}
    </Box>
  );
};

export default TodoList;
