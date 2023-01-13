export const convertStringToArray = (str) => {
  return str.replace(/[\[\]"]+/g, "").split(",");
};