import { Box, Button, Flex, Paragraph, Textarea } from '@theme-ui/components';
import React, { Suspense } from 'react';
import {
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { todoCreatorAtom, todoListAtom } from '../atoms';
import { postTodo } from '../services/todos';

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

  const addTodo = async (title) => {
    if (title) {
      try {
        const res = await postTodo(title);
        const { data, code } = await res.json();
        if (code === 201) {
          setTodoList((oldArray) => [...oldArray, data]);
          resetInput();
        }
      } catch {
        //TODO some action here
      }
    } else {
      setNoteContent({ ...noteContent, error: 'This field is required' });
    }
  };

  const handleChange = (e) => {
    setNoteContent({ value: e.target.value });
  };

  return (
    <Box>
      <Paragraph variant="small" sx={{ textAlign: 'right' }}>
        Characters: {characters}
      </Paragraph>
      <Textarea
        rows={2}
        placeholder="Add a note ..."
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
        <Suspense fallback={<div>Loading...</div>}>
          <Button ml={3} onClick={() => addTodo(noteContent.value)}>
            {edit ? 'Edit note' : 'Add note'}
          </Button>
        </Suspense>
      </Flex>
    </Box>
  );
};

export default TodoCreator;
