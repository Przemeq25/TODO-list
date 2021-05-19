import React, { useEffect, useState } from 'react';
import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Label,
  Paragraph,
  Spinner,
} from '@theme-ui/components';
import { useHistory, useParams } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { alertAtom, singleTodoAtom, todoCreatorAtom } from '../atoms';
import { fetchSingleTodo } from '../services/todos';
import { convertDate } from '../utils/dateConverter';

const TodoItemInfoBox = () => {
  const { id } = useParams();
  const [isFetching, setIsFetching] = useState(false);
  const [todo, setTodo] = useRecoilState(singleTodoAtom);
  const setNote = useSetRecoilState(todoCreatorAtom);
  const setAlert = useSetRecoilState(alertAtom);
  const history = useHistory();

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        setIsFetching(true);
        const res = await fetchSingleTodo(id);
        const { code, data } = await res.json();

        if (code === 200) {
          setTodo(data);
          setNote({ value: data?.title, error: '' });
          setIsFetching(false);
        } else {
          throw new Error(data.message);
        }
      } catch (e) {
        setIsFetching(false);
        setAlert({
          isOpen: true,
          text: `Ups... ${e.message}. Try again or refresh page`,
          timeout: 3000,
          type: 'error',
        });
        history.push('/');
      }
    };
    fetchTodo();
  }, [setNote, id, setTodo, setAlert, history]);

  const handleChangeStatus = () => {
    setTodo((prevState) => ({ ...prevState, completed: !prevState.completed }));
  };

  if (isFetching)
    return (
      <Flex sx={{ justifyContent: 'center', mt: 2 }}>
        <Spinner />
      </Flex>
    );

  return (
    <>
      <Box py={3} px={3}>
        <Flex
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: ['row', 'row', 'column'],
          }}
        >
          <Paragraph variant="small" mr={3}>
            Created at: {convertDate(todo?.created_at)}
          </Paragraph>
          <Paragraph variant="small" mr={3}>
            Last update: {convertDate(todo?.updated_at)}
          </Paragraph>
          <Flex
            sx={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: 1,
            }}
          >
            <Paragraph variant="small">Select to complete</Paragraph>
            <Label sx={{ width: 'inherit', ml: 3, mr: 0 }}>
              <Checkbox
                checked={todo?.completed}
                onChange={handleChangeStatus}
              />
            </Label>
          </Flex>
        </Flex>
      </Box>
      <Divider mx={3} mb={3} />
    </>
  );
};

export default TodoItemInfoBox;
