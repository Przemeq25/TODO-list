const appUrl = 'https://gorest.co.in/public-api';
const userId = 54;
const bearerToken =
  'eb255bf441c446879bf4112fa69df17e640fc7edd6e12180032d58614faec968';

export const fetchTodos = (query = '') =>
  fetch(`${appUrl}/users/${userId}/todos${query}`);

export const postTodo = (title, completedStatus = false) =>
  fetch(`${appUrl}/users/${userId}/todos`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      completed: completedStatus,
    }),
  });

export const deleteTodo = (id) =>
  fetch(`${appUrl}/todos/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      'Content-type': 'application/json',
    },
  });

export const updateTodo = (id, title, completedStatus) =>
  fetch(`${appUrl}/todos/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      completed: completedStatus,
    }),
  });
