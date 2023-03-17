import { useState, useEffect } from "react";
import axios from "axios";

export const useHome = () => {
  // penampung data dari API
  const [data, setData] = useState([]);

  // ambil data dari API
  const getData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}`
    );
    setData(response.data.rates);
  };

  // filter data yang diinginkan
  const listFilter = ["CAD", "EUR", "IDR", "JPY", "CHF", "GBP"];

  // filter data
  const dataFiltered = Object.keys(data)
    .filter((key) => listFilter.includes(key))
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});

  // panggil fungsi getData() ketika pertama kali di render
  useEffect(() => {
    getData();
  }, []);

  // kirim data yang sudah difilter
  return {
    dataFiltered,
  };
};
