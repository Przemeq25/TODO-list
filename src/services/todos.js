import { userId, bearerToken } from '../config';

const appUrl = 'https://gorest.co.in/public-api';

export const fetchTodos = (query = '') =>
  fetch(`${appUrl}/users/${userId}/todos${query}`);

export const fetchSingleTodo = (id) => fetch(`${appUrl}/todos/${id}`);

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
