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
