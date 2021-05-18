import React from 'react';
import { Container } from 'theme-ui';
import TodoListInfoBar from '../components/TodoListInfoBar';
import TodoCreator from '../components/TodoCreator';
import TodoList from '../components/TodoList';
import HeaderWrapper from '../components/HeaderWrapper';

const TodoListPage = () => {
  return (
    <Container>
      <HeaderWrapper>
        <TodoCreator />
      </HeaderWrapper>
      <TodoListInfoBar />
      <TodoList />
    </Container>
  );
};

export default TodoListPage;
