
import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'




const NewsDetail = (props) => {
    const router = useRouter();
    const data = router.query;

    console.log("data000", data)

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:100, flexDirection:'column', margin:20}}>
       
  
    <Box
     component="form"
     sx={{
       '& > :not(style)': { m: 5, width: '60ch' },
     }}
     noValidate
     autoComplete="off"
   >
    
     
   </Box>
   <Card sx={{ maxWidth: 700 }}>
     <CardMedia
       component="img"
       alt="green iguana"
       height="240"
       image={data.urlToImage}
     />
     <CardContent>
       <Typography variant="body2" color="text.secondary">
        {data.content}
       </Typography>
     </CardContent>
   </Card>
   </div>
  )
}

export default NewsDetail