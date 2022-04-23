import React from 'react'
import Spinner from './Spinner'
import { Route, useParams } from 'react-router-dom'
import { fetchDetails} from '../api/api'


const Chart = () => {
    const { name } = useParams()
    const result = fetchDetails(name)
    console.log(result,
        'result'
        , name)
  return (
    <div className='chart' >
        <Spinner />
    </div>
  )
}


export default Chart