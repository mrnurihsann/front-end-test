export const groupByMonth = (data) => {
  const groupedData = {};

  Object.keys(data).forEach((date) => {
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    const key = `${year}-${month < 10 ? "0" : ""}${month}`;

    if (!groupedData[key]) {
      groupedData[key] = [];
    }

    groupedData[key].push({
      date,
      ...data[date],
    });
  });

  return groupedData;
};
