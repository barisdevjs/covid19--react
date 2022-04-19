import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Cards = ({ data }) => {
  if (!data) return 'Loading...';

  console.log(data)

  return (
    <div>
      <Grid container justify="center" margin={10} rowGap={3}  columnGap={2} >
        {data.map((card) => (
          <Grid key={card.name} item component={Card}  xs={3} md={3} lg={2} >
            <CardMedia
              image={card.flag}
              title={card.name}
              height="140"
              component="img"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {card.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.country}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.todayCases}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {card.todayDeaths}
              </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}


export default Cards