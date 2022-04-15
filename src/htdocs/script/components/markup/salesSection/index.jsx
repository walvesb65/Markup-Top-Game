import React from 'react';
import useReport from '../../../hooks/useReport';

export default function SalePrice() {
  
  const { Sales } = useReport()

  return (
    <div className="container_sales">
      <div className="sales_total">
        <h1>Vendas Total</h1>
        <h3>(Em U$ MM)</h3>
        <p>{Sales.globalSales}</p>
      </div>
      <div className="sales_by_continent">
        <h1>Vendas por Continente</h1>
        <h3>(Em U$ MM)</h3>
        <div className="values_sales">
          <p>{Sales.NASales}</p>
          <p>{Sales.EUSales}</p>
          <p>{Sales.JPSales}</p>
          <p>{Sales.otherSales}</p>
        </div>
      </div>
    </div>
  )
}
