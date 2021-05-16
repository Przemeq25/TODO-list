import React from 'react';
import { Box, Flex, Input, Paragraph, Switch } from 'theme-ui';
import { selector, useRecoilState, useRecoilValue } from 'recoil';
import { completedTodoVisibility, todoListAtom } from '../atoms';

const todoCompletedCounter = selector({
  key: 'todoCompletedCounter',
  get: ({ get }) => {
    const list = get(todoListAtom);

    const completed = list.reduce(
      (count, todo) => (todo.completed ? count + 1 : count),
      0
    );

    return {
      completed: completed,
      uncompleted: list.length - completed,
    };
  },
});

const TodoListInfoBar = () => {
  const { completed, uncompleted } = useRecoilValue(todoCompletedCounter);
  const [completedVisibility, setCompletedVisibility] = useRecoilState(
    completedTodoVisibility
  );

  const handleToggleCompletedVisibility = () => {
    setCompletedVisibility((prevState) => !prevState);
  };

  return (
    <Box
      py={3}
      sx={{
        px: [3, 2, 2],
      }}
    >
      <Flex sx={{ flexDirection: ['row', 'column'], alignItems: 'center' }}>
        <Flex
          sx={{
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Paragraph variant="small" mr={3}>
            Completed: {completed}
          </Paragraph>
          <Paragraph variant="small">Uncompleted: {uncompleted}</Paragraph>
        </Flex>

        <Flex
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 2,
            mt: [0, 3],
          }}
        >
          <Paragraph htmlFor="hide-completed" variant="small">
            Hide completed
          </Paragraph>
          <Box mx={2}>
            <Switch
              id="hide-completed"
              value={completedVisibility}
              onChange={handleToggleCompletedVisibility}
            />
          </Box>
          <Box>
            <Input placeholder="Search..." />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TodoListInfoBar;
