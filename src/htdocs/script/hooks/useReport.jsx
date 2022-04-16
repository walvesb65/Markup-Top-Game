import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../../provider/context';

export default function useReport() {

  const { filteredData } = useContext(AuthContext)
  const [reportData, setReportData] = useState({
    Ranking: [],
    Sales: {},
    Historic:[]
  });

  const getMostSaledGames = () => {
    return filteredData.sort((a, b) => (
      parseFloat(a.globalSales) > parseFloat(b.globalSales)
    ) ? -1 : 1).slice(0, 10)
  };

  const getValueByYear = () => {
    if (filteredData.length > 0) {
      const response = filteredData.reduce((curr, acc) => {
        curr[acc.year] = curr[acc.year] || [];
        curr[acc.year].push(acc.globalSales);
        return curr;
    }, Object.create(null));
      const getObjKey = Object.entries(response);
      return getObjKey.map((e) => {
        const totalSale = e[1].reduce((curr, acc) => {
          return (parseFloat(curr) + parseFloat(acc)).toFixed(2)
        }, 0)
        return { Year: Number(e[0]), Sales: parseFloat(totalSale)}
      });
    }
    return {}
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
