import { Box, Input } from '@theme-ui/components';
import React from 'react';
import { useRecoilState } from 'recoil';
import { todoSearchAtom } from '../atoms';

const TodoSearch = () => {
  const [phrase, setPhrase] = useRecoilState(todoSearchAtom);

  const handleSearchTodo = (e) => {
    setPhrase(e.target.value);
  };
  return (
    <Box sx={{ ml: 3 }}>
      <Input
        placeholder="Search..."
        value={phrase}
        onChange={handleSearchTodo}
      />
    </Box>
  );
};

export default TodoSearch;
