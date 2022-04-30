import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { useParams } from 'react-router-dom'
import { fetchDetails } from '../api/api';
import { Bar, Line} from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Chart = () => {
  const [details, setDetails] = useState([]);
  const { country } = useParams()

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

  const data = {
    labels: details.map(({ name }) => name.toUpperCase()),
    datasets: [
      {
        label: 'Active',
        data: details.map(element => element.active),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        borderRadius: 10,

      },
      {
        label: 'Critical',
        data: details.map(element => element.critical),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 10,
        
      },
      {
        label: 'Deaths',
        data: details.map(element => element.deaths),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        borderRadius: 10,
      },
      {
        label: 'Cases',
        data: details.map(element => element.cases),
        backgroundColor:'rgba(192,192,192,.2)',
        borderColor:'rgba(192,192,192,1)',
        borderWidth: 1,
        borderRadius: 10,
      },
    ]
  };




  return (
    <div className="chart">
      <Bar 
      data={data}  
      redraw={true} 
      />
    </div>
  )
}

export default Chart; 