import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const News = ({ news }) => {
  const [expanded, setExpanded] = useState(false);
  if (!news) return 'Loading...';
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

console.log(news)

  return (
    <div className='news' >
      <Grid container justify="center"  marginTop={10}  rowGap={3} columnGap={2}> 
        {news.map((newS ) => (
          <Grid  sx={{mx: 'auto'}} item component={Card} xs={8} md={5} lg={3} key={newS.title}>
            <CardHeader
              title={newS.title}
              subheader={new Date(newS.date).toLocaleDateString(undefined, options) }
              style={{ maxHeight:'200px', height: '200px' }}

            />
            <CardMedia
              image={newS.image}
              alt=''
              component="img"
              style={{ maxHeight:'200px', height: '200px' }}
            />
              <a href={newS.link} target="_blank" rel="noopener noreferrer" >
                Link --&gt; {newS.site}
                </a>
            <CardContent>
              <Typography variant="body2" color="textSecondary">
                {newS.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
                </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                  chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                  salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                  minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                </CardContent>
            </Collapse>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}


export default News

/* title: newS.title,
date: newS.pubDate,
id: newS.news_id,
link: newS.link,
content: newS.content */