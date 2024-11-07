import * as React from "react";
import axios from "axios";

const fakeData = [
  {
    symbol: "BTC",
    price: 100000,
  },
  {
    symbol: "BTC",
    price: 100000,
  },
  {
    symbol: "BTC",
    price: 100000,
  },
  {
    symbol: "BTC",
    price: 100000,
  },
  {
    symbol: "BTC",
    price: 100000,
  },
  {
    symbol: "BTC",
    price: 100000,
  },
];

const useFeed = () => {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    // logic goes here.
    setLoading(true);
    axios
      .get("https://api.binance.com/api/v3/ticker/price")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  return { data: fakeData, loading, error };
};

export default useFeed;
