export const replaceArrayItem = (arr, item) => {
  const newArray = [...arr];
  const index = newArray.findIndex((el) => el.id === item.id);
  newArray.splice(index, 1, item);

  return newArray;
};
