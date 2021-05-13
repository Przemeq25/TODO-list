import { Box, Container } from 'theme-ui';
import HeaderContent from './components/HeaderContent';
import TodoListInfoBar from './components/TodoListInfoBar';
import TodoCreator from './components/TodoCreator';

function App() {
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
    </Container>
  );
}

export default App;
