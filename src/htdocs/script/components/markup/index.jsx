import React from 'react';
import DateSeciton from './deteSection';
import SalePrice from './salesSection';
import GamesRanking from './topGamesSection';

export default function Markup() {
  return (
    <div className="container_markup">
      <DateSeciton />
      <GamesRanking />
      <SalePrice />
    </div>
  )
}
