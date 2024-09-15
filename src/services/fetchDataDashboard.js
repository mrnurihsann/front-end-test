export const fetchData = async () => {
  const response = await fetch(
    "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo"
  );
  const data = await response.json();
  return data["Time Series (Daily)"];
};
