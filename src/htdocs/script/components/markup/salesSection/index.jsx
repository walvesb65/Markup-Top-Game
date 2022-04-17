import React from 'react';
import useReport from '../../../hooks/useReport';
import './styles.scss'

export default function SalePrice() {

  const { Sales } = useReport()

  return (
    <div className="container_sales sales_price">
      <div className="sales_total">
        <h1>Vendas Total</h1>
        <p>(Em U$ MM)</p>
        <p className='value'>{Sales.globalSales}</p>
      </div>
      <div className="sales_by_continent">
        <h1>Vendas por Continente</h1>
        <p>(Em U$ MM)</p>
        <div className="values_sales">
          <span>
            <p className='value'>{Sales.NASales}</p>
            America do Norte
          </span>
          <span>
            <p className='value'>{Sales.EUSales} </p>
            Europa
          </span>
          <span>
            <p className='value'>{Sales.JPSales}</p>
            Japão
          </span>
          <span>
            <p className='value'>{Sales.otherSales}</p>
            Resto do mundo
          </span>
        </div>
      </div>
    </div>
  )
}
