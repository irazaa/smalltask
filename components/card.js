import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const cardComponent = (props) => {

    console.log(props,"props data");
    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:100, flexDirection:'column'}}>
        <h3 style={{marginLeft:-30}}>
         {props.searchheader}
        </h3>
    
         <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 5, width: '40ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" variant="outlined" />
          
        </Box>
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component={props.cardimage}
            alt={props.alt}
            height="140"
            image={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">More</Button>
          </CardActions>
        </Card>
        </div>
      )
}

export default cardComponent