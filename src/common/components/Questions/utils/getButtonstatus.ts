export const getButtonStatus = (buttonId, correctAnswersIds) => {
  if (buttonId === correctAnswersIds) {
    return "green";
  }
  return "red";
};
