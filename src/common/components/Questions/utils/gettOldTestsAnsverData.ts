export const getOldTestsAnsverData = () => {
  const oldTestsFinishData = [];
  for (let i = 1; i <= localStorage.length; i++) {
    oldTestsFinishData.push(JSON.parse(localStorage.getItem(i)));
  }
  return oldTestsFinishData;
};
