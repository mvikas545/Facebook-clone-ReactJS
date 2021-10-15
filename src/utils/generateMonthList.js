const generateMonthList = () => {
  const monthArr = [
    { id: 0, title: "Jan", selected: false },
    { id: 1, title: "Feb", selected: false },
    { id: 2, title: "Mar", selected: false },
    { id: 3, title: "Apr", selected: false },
    { id: 4, title: "May", selected: false },
    { id: 5, title: "Jun", selected: false },
    { id: 6, title: "Jul", selected: false },
    { id: 7, title: "Aug", selected: false },
    { id: 8, title: "Sep", selected: false },
    { id: 9, title: "Oct", selected: false },
    { id: 10, title: "Nov", selected: false },
    { id: 11, title: "Dec", selected: false },
  ];
  const month = new Date().getMonth();

  return monthArr.map((item) => ({ ...item, selected: item.id === month }));
};
export default generateMonthList;
