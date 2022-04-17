import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../provider/context';

export default function useReport() {

  const { filteredData } = useContext(AuthContext)
  const [reportData, setReportData] = useState({
    Ranking: [],
    Sales: {},
    Historic: []
  });

  const getMostSaledGames = () => {
    return filteredData.sort((a, b) => (
      parseFloat(a.globalSales) > parseFloat(b.globalSales)
    ) ? -1 : 1).slice(0, 10)
  };

  const getValueByYear = () => {
    if (filteredData.length > 0) {
      const countGlobalSalesByYear = filteredData
        .reduce((curr, { year, globalSales }) => ({
          ...curr,
          [year]: curr[year] ? curr[year] + parseFloat(globalSales) : parseFloat(globalSales),
        }), {})
      const serialize = Object.entries(countGlobalSalesByYear)
        .map(([Year, Sales]) => ({
          Year,
          Sales: parseFloat(Sales.toFixed(2))
        }))
      return serialize
    }
    return []
  };

  const getValuesSales = () => {
    if (filteredData.length > 0) {
      return filteredData.reduce((Sales, { globalSales, NASales, EUSales, JPSales, otherSales }) => ({
        globalSales: (parseFloat(globalSales) + parseFloat(Sales.globalSales)).toFixed(2),
        NASales: (parseFloat(NASales) + parseFloat(Sales.NASales)).toFixed(2),
        EUSales: (parseFloat(EUSales) + parseFloat(Sales.EUSales)).toFixed(2),
        JPSales: (parseFloat(JPSales) + parseFloat(Sales.JPSales)).toFixed(2),
        otherSales: (parseFloat(otherSales) + parseFloat(Sales.otherSales)).toFixed(2)
      }))
    }
    return {};
  }

  const updateReporteData = () => {
    setReportData({
      Ranking: getMostSaledGames(),
      Sales: getValuesSales(),
      Historic: getValueByYear()
    });
  }

  useEffect(() => {
    updateReporteData();
  }, [filteredData])

  return {
    ...reportData,
  }
}
