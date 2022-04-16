import React from 'react'
import useReport from '../../../hooks/useReport'

export default function GamesRanking() {

  const { Ranking } = useReport();
  return (
    <div className="container_top_game">
      <h1>Top 10 Games</h1>
      <div className="table">
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Nome</th>
            <th>Plataforma</th>
            <th>Vendas Total</th>
          </tr>
        </thead>
        <tbody>
          {Ranking.length ? Ranking.map((e, index)=> (
          <tr key={e.name + Math.floor(Date.now() * Math.random()).toString(36)}>
            <td>{index + 1}</td>
            <td>{e.name}</td>
            <td>{e.platform}</td>
            <td>{e.globalSales}</td>
          </tr>
          ))
        : null}
        </tbody>
      </table>
      </div>
    </div>
  )
}
