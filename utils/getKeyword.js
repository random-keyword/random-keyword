export const getKeyword = (array) => {
  const keyword = array;
  const number = Math.ceil(Math.random() * keyword.length - 1);

  return keyword[number];
};