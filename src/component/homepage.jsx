import React from 'react';
import {Grid, Paper, Typography} from "@mui/material";

import Img1 from '../Assets/img1.webp';
import Img2 from '../Assets/img2.webp';
import Img3 from '../Assets/img3.webp';
import Img4 from '../Assets/img4.webp';
import Img5 from '../Assets/img5.webp';
import Img6 from '../Assets/img6.webp';
import Img7 from '../Assets/img7.webp';
import Img8 from '../Assets/img8.webp';
import Img9 from '../Assets/img9.webp';
import Img10 from '../Assets/img10.webp';


const Homepage = () => {
  // Define an array of image objects with URLs and descriptions
  const images = [
    { url: Img1, location:'Pune', description: 'Lake View', price:'4400 per night' },
    { url: Img2, location:'Munnar', description: 'Hill View', price:'4500 per night' },
    { url: Img3, location:'Ooty', description: 'Lake View', price:'14000 per night' },
    { url: Img4, location:'Masoori',description: 'Pool View', price:'32000 per night' },
    { url: Img5, location:'Coorg',description: 'DBeach View', price:'45800 per night' },
    { url: Img6, location:'Laddakh',description: 'Mountain ', price:'9000 per night' },
    { url: Img7, location:'Bangalore',description: 'Beath taking view', price:'14500 per night' },
    { url: Img8, location:'Raipur',description: 'Good Views', price:'12000 per night'},
    { url: Img9, location:'Durg',description: 'Beautiful Lake View', price:'41500 per night' },
    { url: Img10,location:'Bhilai', description: 'Temple View', price:'45000 per night' }
  ];


  return (
    <>
    <Paper elevation={4} sx={{ mr: '4', marginBottom: '20px', padding: '20px' }}>
      <Typography variant='h5'>hello</Typography>
      <Typography variant='h5'>Search</Typography>
      <Typography variant='h5'>New</Typography>
    </Paper>
    
    <Grid container spacing={4}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <img src={image.url} alt={`Img ${index + 1}`} style={{ width: '100%',height:"300px", borderRadius: '10px'  }} />
          <Typography variant='h6' sx={{ marginBottom: '2px', marginLeft:"4px", textAlign: 'left' }}>{image.location}</Typography>
          <Typography variant='body1' sx={{ marginBottom: '2px', textAlign: 'left' }}>{image.description}</Typography>
          <Typography variant='body1' sx={{ marginBottom: '2px', textAlign: 'left' }}>{image.price}</Typography>
        </Grid>
      ))}
    </Grid>
   
    </>
  );
};

export default Homepage;
