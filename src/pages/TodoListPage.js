import React, { Suspense } from 'react';
import { Box, Container, Flex, Spinner } from 'theme-ui';
import HeaderContent from '../components/HeaderContent';
import TodoListInfoBar from '../components/TodoListInfoBar';
import TodoCreator from '../components/TodoCreator';
import TodoList from '../components/TodoList';

const TodoListPage = () => {
  return (
    <Container>
      <Box
        p={3}
        bg="muted"
        variant="radii"
        sx={{ mx: [0, 0, 2], mt: [5, 4, 2] }}
      >
        <HeaderContent />
        <TodoCreator />
      </Box>
      <TodoListInfoBar />
      <Suspense
        fallback={
          <Flex sx={{ justifyContent: 'center', mt: 3 }}>
            <Spinner />
          </Flex>
        }
      >
        <TodoList />
      </Suspense>
    </Container>
  );
};

export default TodoListPage;
