import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import { useParams } from 'react-router-dom'
import { fetchDetails } from '../api/api';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';


const Chart = () => {
  const [details, setDetails] = useState([]);
  const { country } = useParams()

  useEffect(() => {
    const fetchDetailsAPI = async () => {
      const initialDetails = await fetchDetails(country);
      setDetails(initialDetails);
    }
    fetchDetailsAPI();
  }, [country])

  if (!details) return <Spinner />;

  const data = {
    labels: details.map(({ name }) => name),
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
        hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
      },
      {
        label: 'Cases',
        data: details.map(element => element.cases),
        backgroundColor: 'rgba(192,192,192,.2)',
        borderColor: 'rgba(192,192,192,1)',
        borderWidth: 1,
        borderRadius: 10,
      },
    ]
  };

  const options = {
    layout: {
      padding: {
        left: 250,
        right: 50,
        top: 30,
        bottom: 50
      }
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: true,
      windowPadding: 10
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          boxWidth: 60,
          boxHeight: 20,
          color: 'black',
          pointStyle: 'square',
          padding: 20,
          font: {
            size: 20,
          }
        }
      },
      title: {
        display: true,
        text: 'COVID-19 ==>   ' + country.toUpperCase(),
        position: 'bottom',
        align: 'center',
        font: {
          size: 30
        },
        color: 'red'
      }
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="chart"
      style={{
        backgroundImage: `url(${details[0]?.flag})`,
        backgroundSize: '200px',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '20px',
        backgroundPositionY: 'center',
      }}>

      <Bar
        data={data}
        redraw={true}
        options={options}
      />
    </div>
  )
}

export default Chart; 
