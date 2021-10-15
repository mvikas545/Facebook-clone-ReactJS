const generateYearList = () => {
  const currYear = new Date().getFullYear();
  const startingYear = 1905;
  const yearList = new Array(currYear - startingYear + 1);
  for (const [idx] of yearList.entries()) {
    yearList[idx] = { id: idx, title: currYear - idx, selected: idx === 0 };
  }

  return yearList;
};
export default generateYearList;
