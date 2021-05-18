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
import { useSetRecoilState } from 'recoil';
import { alertAtom, todoListAtom } from '../atoms';
import { deleteTodo, updateTodo } from '../services/todos';
import { useHistory } from 'react-router-dom';
import { replaceArrayItem } from '../utils/replaceArrayItem';

const TodoItem = ({ id, title, completed }) => {
  const setNewTodos = useSetRecoilState(todoListAtom);
  const setAlert = useSetRecoilState(alertAtom);
  const history = useHistory();

  const deleteItem = async (id) => {
    try {
      const res = await deleteTodo(id);
      const { code, data } = await res.json();

      if (code === 204) {
        setNewTodos((oldTodos) => oldTodos.filter((item) => item.id !== id));
        setAlert({
          isOpen: true,
          text: 'Todo was successfully deleted',
          timeout: 2000,
          type: 'success',
        });
      } else {
        throw new Error(data.message);
      }
    } catch (e) {
      setAlert({
        isOpen: true,
        text: `Ups... ${e.message}. Try again or refresh page`,
        timeout: 2000,
        type: 'error',
      });
    }
  };

  const updateStatusItem = async (id, title, completed) => {
    try {
      const res = await updateTodo(id, title, completed);
      const { code, data } = await res.json();

      if (code === 200) {
        setNewTodos((oldTodos) => {
          const newTodoList = replaceArrayItem(oldTodos, data);
          return newTodoList;
        });
        setAlert({
          isOpen: true,
          text: 'Todo was successfully updated',
          timeout: 2000,
          type: 'success',
        });
      } else {
        throw new Error(data.message);
      }
    } catch (e) {
      setAlert({
        isOpen: true,
        text: `Ups... ${e.message}. Try again or refresh page`,
        timeout: 2000,
        type: 'error',
      });
    }
  };

  return (
    <Box mb={2} p={3} bg="muted" variant="radii" as="li">
      <Flex sx={{ alignItems: 'center' }}>
        <Label mr={3} sx={{ width: 'inherit' }}>
          <Checkbox
            checked={completed}
            onChange={() => updateStatusItem(id, title, !completed)}
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
          <IconButton
            onClick={() => {
              history.push(`todo/${id}`);
            }}
          >
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
