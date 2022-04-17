import React from 'react';
import DateSection from './deteSection';
import SalePrice from './salesSection';
import GamesRanking from './topGamesSection';
import ChartSales from './historicSection';
import './styles.scss'

export default function Markup() {
  return (
    <div className="container_markup">
      <DateSection />
      <SalePrice />
      <ChartSales />
      <GamesRanking />
    </div>
  )
}
