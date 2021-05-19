import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Flex, Paragraph, Textarea } from '@theme-ui/components';
import { useHistory } from 'react-router';
import {
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import {
  alertAtom,
  singleTodoAtom,
  todoCreatorAtom,
  todoListAtom,
} from '../atoms';
import { postTodo, updateTodo } from '../services/todos';
import { replaceArrayItem } from '../utils/replaceArrayItem';

const characterCount = selector({
  key: 'characterCount',
  get: ({ get }) => {
    const { value } = get(todoCreatorAtom);
    return value.length;
  },
});

const TodoCreator = ({ edit }) => {
  const characters = useRecoilValue(characterCount);
  const [noteContent, setNoteContent] = useRecoilState(todoCreatorAtom);
  const resetInput = useResetRecoilState(todoCreatorAtom);
  const setTodoList = useSetRecoilState(todoListAtom);
  const singleTodo = useRecoilValue(singleTodoAtom);
  const setAlert = useSetRecoilState(alertAtom);
  const history = useHistory();

  useEffect(() => {
    return () => {
      resetInput();
    };
  }, [resetInput]);

  const addTodo = async (title) => {
    if (title) {
      try {
        const res = await postTodo(title);
        const { data, code } = await res.json();
        if (code === 201) {
          setTodoList((oldArray) => [...oldArray, data]);
          resetInput();
          setAlert({
            isOpen: true,
            text: 'Todo was successfully added',
            timeout: 3000,
            type: 'success',
          });
        } else if (code === 422) {
          if (data[0].field === 'title') {
            throw new Error('Note is too long (maximum is 200 characters)');
          }
          throw new Error('User dont exists, change id in config.js file');
        } else {
          throw new Error(`Ups... ${data.message}. Try again or refresh page`);
        }
      } catch (e) {
        setAlert({
          isOpen: true,
          text: e.message,
          timeout: 3000,
          type: 'error',
        });
      }
    } else {
      setNoteContent({ ...noteContent, error: 'This field is required' });
    }
  };

  const updateItem = async (id, title, completed) => {
    if (title) {
      try {
        const res = await updateTodo(id, title, completed);
        const { code, data } = await res.json();

        if (code === 200) {
          setTodoList((oldArray) => {
            const newTodoList = replaceArrayItem(oldArray, data);
            return newTodoList;
          });
          setAlert({
            isOpen: true,
            text: 'Todo was successfully updated',
            timeout: 3000,
            type: 'success',
          });
          history.push('/');
        } else {
          throw new Error(data.message);
        }
      } catch (e) {
        setAlert({
          isOpen: true,
          text: `Ups... ${e.message}. Try again`,
          timeout: 3000,
          type: 'error',
        });
      }
    } else {
      setNoteContent({ ...noteContent, error: 'This field is required' });
    }
  };

  const handleChange = (e) => {
    setNoteContent({ value: e.target.value });
  };

  return (
    <Box mt={4}>
      <Paragraph variant="small" sx={{ textAlign: 'right' }}>
        Characters: {characters}
      </Paragraph>
      <Textarea
        rows={2}
        placeholder={edit ? '...' : 'Add a note ...'}
        value={noteContent.value}
        onChange={handleChange}
        sx={{ borderColor: noteContent.error && 'error' }}
      />
      {noteContent.error && (
        <Paragraph variant="small" sx={{ color: 'error' }}>
          {noteContent.error}
        </Paragraph>
      )}
      <Flex sx={{ justifyContent: 'flex-end', alignItems: 'center' }} mt={2}>
        {edit ? (
          <Button
            ml={3}
            variant="secondary"
            onClick={() =>
              updateItem(singleTodo.id, noteContent.value, singleTodo.completed)
            }
          >
            Edit
          </Button>
        ) : (
          <Button ml={3} onClick={() => addTodo(noteContent.value)}>
            Add note
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default TodoCreator;

TodoCreator.propTypes = {
  edit: PropTypes.bool,
};

TodoCreator.defaultProps = {
  edit: false,
};
