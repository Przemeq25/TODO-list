import React, { useEffect, useState } from 'react';
import { Box, Flex, Heading, Spinner } from '@theme-ui/components';
import { useRecoilState, useRecoilValue } from 'recoil';
import TodoItem from './TodoItem';
import {
  completedTodoVisibility,
  todoListAtom,
  todoSearchAtom,
} from '../atoms';
import { fetchTodos } from '../services/todos';

const TodoList = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const showCompleted = useRecoilValue(completedTodoVisibility);
  const phrase = useRecoilValue(todoSearchAtom);

  useEffect(() => {
    const delay = !phrase.length ? 0 : 700;

    const fetchData = setTimeout(async () => {
      try {
        setIsFetching(true);
        const query = phrase.length ? `?title=${phrase}` : '';
        const res = await fetchTodos(query);
        const { data } = await res.json();
        setTodoList(data);
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        return [];
      }
    }, delay);
    return () => clearTimeout(fetchData);
  }, [setTodoList, phrase]);

  if (isFetching)
    return (
      <Flex sx={{ justifyContent: 'center', mt: 3 }}>
        <Spinner />
      </Flex>
    );
  if (!todoList.length)
    return (
      <Heading sx={{ textAlign: 'center', mt: 3, color: 'gray', fontSize: 4 }}>
        No data to display
      </Heading>
    );

  return (
    <Box as="ul" sx={{ listStyle: 'none', pl: 0 }}>
      {todoList.map((item) =>
        !item.completed || showCompleted ? (
          <TodoItem {...item} key={item.id} />
        ) : null
      )}
    </Box>
  );
};

export default TodoList;
