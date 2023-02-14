import React from "react";
import Table from "../componets/Table";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 4 },
    { name: "Grapes", color: "bg-yellow-500", score: 2 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Lime", color: "bg-green-500", score: 5 },
  ];
  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    { label: "Color", render: (fruit) => fruit.color },
    { label: "Score", render: (fruit) => fruit.score },
  ];
  const keyFn=(fruit)=>{
    return fruit.name
  }
  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
