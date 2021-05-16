import {
  Box,
  Checkbox,
  Flex,
  IconButton,
  Label,
  Paragraph,
} from '@theme-ui/components';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';
import { ReactComponent as EditIcon } from '../assets/edit.svg';
import React from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import { todoListAtom } from '../atoms';
import { deleteTodo, updateTodo } from '../services/todos';
import { useHistory } from 'react-router-dom';

const TodoItem = ({ id, title, completed }) => {
  const todoList = useRecoilValue(todoListAtom);

  const history = useHistory();

  const deleteItem = useRecoilCallback(({ set }) => async (id) => {
    try {
      const res = await deleteTodo(id);
      const { code } = await res.json();

      if (code === 204) {
        set(
          todoListAtom,
          todoList.filter((item) => item.id !== id)
        );
      } else {
        throw Error;
      }
    } catch {
      //TODO some action here
    }
  });

  const updateStatusItem = useRecoilCallback(
    ({ set }) =>
      async (id, title, completed) => {
        try {
          const res = await updateTodo(id, title, !completed);
          const { code, data } = await res.json();

          if (code === 200) {
            const index = todoList.findIndex((el) => el.id === data.id);
            const newTodoList = [...todoList];
            newTodoList.splice(index, 1, data);
            set(todoListAtom, newTodoList);
          } else {
            throw Error;
          }
        } catch {
          //TODO some action here
        }
      }
  );

  return (
    <Box mb={2} p={3} bg="muted" variant="radii" as="li">
      <Flex sx={{ alignItems: 'center' }}>
        <Label mr={3} sx={{ width: 'inherit' }}>
          <Checkbox
            checked={completed}
            onChange={() => updateStatusItem(id, title, completed)}
          />
        </Label>
        <Paragraph
          variant="hidden"
          sx={{
            flex: 1,
            pr: 4,
            color: completed && 'gray',
            textDecoration: completed && 'line-through',
          }}
        >
          {title}
        </Paragraph>
        <Box>
          <IconButton onClick={() => history.push(`todo/${id}`)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => deleteItem(id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Flex>
    </Box>
  );
};

export default TodoItem;
