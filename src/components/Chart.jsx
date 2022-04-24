import React from 'react'
import Spinner from './Spinner'


const Chart = ({details}) => {
  if (!details) return <Spinner />;
  return (
    <div className='chart' >
        <Spinner />
    </div>
  )
}


export default Chart