const generateDateList = () => {
  const dateList = new Array(31);
  const date = new Date().getDate();
  for (const [idx] of dateList.entries()) {
    dateList[idx] = { id: idx, title: idx + 1, selected: idx + 1 === +date };
  }
  return dateList;
};
export default generateDateList;
