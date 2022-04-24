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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Spinner from './Spinner';



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
  const [select, setSelected] = useState([])

  const handleSelect = (index) => {
    if (select.includes(index)) {
      setSelected(select.filter(item => item !== index))
    }
    else {
      setSelected([...select, index])
    }
  }

  if (!news) return <Spinner />;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


  return (
    <div className='news' >
      <Grid container justify="center" marginTop={10} rowGap={3} columnGap={2}>
        {news.map((newS, idx) => (
          <Grid sx={{ mx: 'auto' }} item component={Card} xs={8} md={5} lg={3} key={newS.id}>
            <CardHeader
              title={newS.title}
              subheader={new Date(newS.date).toLocaleDateString(undefined, options)}
              style={{ maxHeight: '200px', height: '200px' }}

            />
            <CardMedia
              image={newS.image}
              alt=''
              component="img"
              style={{ maxHeight: '200px', height: '200px' }}
            />
            <CardContent>
              <IconButton aria-label="Link To Site" size='small' sx={{ mx: 'auto', my: 'auto' }}>

                <FontAwesomeIcon icon={faUpRightFromSquare} size='sm' color='blue' />
                &nbsp;&nbsp;&nbsp;
                <a href={newS.link} target="_blank" rel="noopener noreferrer" >
                  {newS.site}
                </a>
              </IconButton>
              <Typography variant="body2" color="textSecondary">
                {newS.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"
                onClick={() => handleSelect(idx)}
                style={{ color: select.includes(idx) ? 'red' : 'gray' }}
              >
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
                <Typography paragraph >
                  {newS.content.length > 150 ?
                    newS.content.substring(0, 150) + '...' :
                    newS.content}
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
