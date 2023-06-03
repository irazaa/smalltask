import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

const CategoriesPage = () => {
  const [newsData, setNewsData] = useState([])
 
  useEffect(() => {
    // Fetch news articles from the API
    const fetchNews = async () => {
      try {
        const response = await axios.get( "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cf152ba8fc0149c496c80ca5a85a54f6");
        setNewsData(response?.data?.articles);
      } catch (error) {
        console.error('Error fetching news articles:', error);
      }
    };
  
    fetchNews();
  }, []);

  return(
    newsData.map((data) => { 
      // const author = data.author
      return(
        <div style={{display:'inline-block', alignItems:'center', justifyContent:'center', marginTop:100, flexDirection:'column', margin:20}}>
         <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 5, width: '40ch' },
          }}
          noValidate
          autoComplete="off"
        >
        </Box>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={data.urlToImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {data.description}
            </Typography>
          </CardContent>
          <CardActions>
          <Link  href={{pathname: '/newsDetail',query: data }}>More</Link>
          </CardActions>
        </Card>
        </div>
        )
    })
  )
}

export default CategoriesPage