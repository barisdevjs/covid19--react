import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';


const Cards = ({ data }) => {
  if (!data) return <Spinner />;
  console.log(data) 

  return (
    <div>
      <Grid container justify="center" rowGap={3}  columnGap={2} >
        {data.map((card) => (
          <Grid  sx={{mx: 'auto'}} item component={Card}  key={card.name}  xs={12} md={6} lg={3} >
            <Link to={`/chart/${card.name}`}>
            <CardMedia
              image={card.flag}
              title={card.name}
              height="140"
              component="img"
              style={{boxShadow: '0px 0px 20px #000000'}}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {card.name} 
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
               <i>Today Cases : </i><strong> {card.todayCases}  </strong>
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              <i>Today Deaths : </i> <strong>{card.todayDeaths}</strong> 
              </Typography>
            </CardContent>
          </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}


export default Cards