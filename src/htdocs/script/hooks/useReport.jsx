import {useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../provider/context';

export default function useReport() {

  const { filteredData } = useContext(AuthContext)
  const [reportData, setReportData] = useState({
    Ranking: [],
    Sales: {}
  });
  
  const getMostSaledGames = () => {
    return filteredData.sort((a,b) => (
      parseFloat(a.globalSales) > parseFloat(b.globalSales)
    )? -1 : 1).slice(0,10)
  };

  const getValuesSales = () => {
    if (filteredData.length > 0){
      return filteredData.reduce((Sales, { globalSales, NASales, EUSales, JPSales, otherSales }) => ({
        globalSales: parseFloat(globalSales) + parseFloat(Sales.globalSales),
        NASales: parseFloat(NASales) + parseFloat(Sales.NASales),
        EUSales: parseFloat(EUSales) + parseFloat(Sales.EUSales),
        JPSales: parseFloat(JPSales) + parseFloat(Sales.JPSales),
        otherSales: parseFloat(otherSales) + parseFloat(Sales.otherSales)
      }))
    }
    return {};
  }

  const updateReporteData = () => {
    setReportData({
      Ranking: getMostSaledGames(),
      Sales: getValuesSales()
    });
  }
  
  useEffect(() => {
    updateReporteData();
  }, [filteredData])


  return {
    ...reportData,
  }
}
