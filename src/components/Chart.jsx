import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { useParams} from 'react-router-dom'
import { fetchDetails } from '../api/api';


const Chart = () => {
  const [details, setDetails] = useState([]);
  const {country} = useParams()

  console.log(country)
  useEffect(() => {
    const fetchDetailsAPI = async () => {
      const initialDetails = await fetchDetails(country);
      setDetails(initialDetails);
    }
    fetchDetailsAPI();
  }, [country])
  
  console.log(details);

  if (!details) return <Spinner />;

  return (
    <div className='chart' >
        {details.map((country, i) => (
          <div className='chart-item' key={i}>
            <div className='chart-item-name'>{country.name}</div>
            <div className='chart-item-cases'>
              <div className='chart-item-cases-today'>{country.todayCases}</div>
              <div className='chart-item-cases-total'>{country.cases}</div>
              <div className='chart-item-cases-deaths'>{country.deaths}</div>
              <div className='chart-item-cases-recovered'>{country.recovered}</div>
              </div>
              </div>
        ))}
    </div>
  )
}


export default Chart