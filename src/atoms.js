import { atom } from 'recoil';

export const todoCreatorAtom = atom({
  key: 'todoCreator',
  default: {
    value: '',
    error: '',
  },
});

export const todoListAtom = atom({
  key: 'todoListAtom',
  default: [],
});

export const completedTodoVisibility = atom({
  key: 'completedTodoVisibility',
  default: true,
});

export const singleTodoAtom = atom({
  key: 'singleTodoIdAtom',
  default: {
    id: '',
    title: '',
    completed: false,
    user_id: '',
    created_at: '',
    updated_at: '',
  },
});

export const todoSearchAtom = atom({
  key: 'todoSearchAtom',
  default: '',
});

export const alertAtom = atom({
  key: 'alertAtom',
  default: {
    isOpen: false,
    text: '',
    timeout: 2000,
    type: 'success',
  },
});
