import React from "react";
import { Table } from "../../components/atoms/Table/Table";
import { useHome } from "./Home.hook";
import "./Home.css";

const Home = () => {
  // panggil hook useHome()
  const { dataFiltered } = useHome();

  return (
    <div className="content">
      <div>
        <Table data={dataFiltered} />
      </div>
      <div className="text-center">
        <p>Rates are based from 1 USD</p>
        <p>This application uses API from https://currencyfreaks.com</p>
      </div>
    </div>
  );
};

export default Home;
