import React from 'react';
import { Box, Container } from 'theme-ui';
import HeaderContent from '../components/HeaderContent';
import TodoItemInfoBar from '../components/TodoItemInfoBar';
import TodoCreator from '../components/TodoCreator';

const TodoItemPage = () => {
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
      <TodoItemInfoBar />
    </Container>
  );
};

export default TodoItemPage;
