import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import TodoItemPage from './pages/TodoItemPage';
import TodoListPage from './pages/TodoListPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/todo/:id">
          <TodoItemPage />
        </Route>
        <Route exact path="/">
          <TodoListPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
