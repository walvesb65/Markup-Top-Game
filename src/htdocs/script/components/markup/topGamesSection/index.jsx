import React from 'react'
import useReport from '../../../hooks/useReport'
import './styles.scss'
export default function GamesRanking() {

  const { Ranking } = useReport();
  return (
    <div className="container_top_game top_game">
      <h1>Top 10 Games</h1>
      <div className="table">
      <table>
        <thead>
          <tr>
            <th className='ranking'>Ranking</th>
            <th className='name'>Nome</th>
            <th className='total_sales'>Vendas Total</th>
          </tr>
        </thead>
        <tbody>
          {Ranking.length ? Ranking.map((e, index)=> (
          <tr key={e.name + Math.floor(Date.now() * Math.random()).toString(36)}>
            <td className='ranking'>{index + 1}</td>
            <td className='name'>{e.name}</td>
            <td className='total_sales'>{e.globalSales}</td>
          </tr>
          ))
        : null}
        </tbody>
      </table>
      </div>
    </div>
  )
}
