import React from 'react';
import DateSeciton from './deteSection';
import SalePrice from './salesSection';
import GamesRanking from './topGamesSection';
import ChartSales from './historicSection';

export default function Markup() {
  return (
    <div className="container_markup">
      <DateSeciton />
      <GamesRanking />
      <SalePrice />
      <ChartSales />
    </div>
  )
}
