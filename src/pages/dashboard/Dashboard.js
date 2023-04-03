import React from "react";
import ProductsTable from "../../components/table/ProductsTable";
import './dashboard.css'

function Dashboard() {
  return (
    <div>
      <h3 className="title">Products</h3>
      <ProductsTable />
    </div>
  );
}

export default Dashboard;
