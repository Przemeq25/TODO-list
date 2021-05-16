import { Box, Heading } from '@theme-ui/components';
import React, { useEffect } from 'react';
import { selector, useRecoilState, useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import { completedTodoVisibility, todoListAtom } from '../atoms';
import { fetchTodos } from '../services/todos';

const fetchTodosSelector = selector({
  key: 'fetchTodosSelector',
  get: async () => {
    try {
      const res = await fetchTodos();
      const { data } = await res.json();
      return data;
    } catch (error) {
      return [];
    }
  },
});

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const fetchTodo = useRecoilValue(fetchTodosSelector);
  const showCompleted = useRecoilValue(completedTodoVisibility);

  useEffect(() => {
    setTodoList(fetchTodo);
  }, [fetchTodo, setTodoList]);

  return (
    <>
      {!todoList.length ? (
        <Heading
          sx={{ color: 'gray', fontSize: 4, textAlign: 'center', mt: 4 }}
        >
          No data to display
        </Heading>
      ) : (
        <Box as="ul" sx={{ listStyle: 'none', pl: 0 }}>
          {todoList.map((item) =>
            showCompleted || !item.completed ? (
              <TodoItem {...item} key={item.id} />
            ) : null
          )}
        </Box>
      )}
    </>
  );
};

export default TodoList;
