import {useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../provider/context';

export default function useReport() {

  const { filteredData } = useContext(AuthContext)
  const [reportData, setReportData] = useState({
    Ranking: [],
  });
  
  const getMostSaledGames = () => {
    return filteredData.sort((a,b) => (
      parseFloat(a.Global_Sales) > parseFloat(b.Global_Sales)
    )? -1 : 1).slice(0,10)
  };

  const updateReporteData = () => {
    setReportData({ Ranking: getMostSaledGames() });
  }
  
  useEffect(() => {
    updateReporteData();
  }, [filteredData])

  return {
    ...reportData,
  }
}
